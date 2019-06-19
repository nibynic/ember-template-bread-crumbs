import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';
import sinon from 'sinon';

module('Integration | Component | bread-crumb', function(hooks) {
  setupRenderingTest(hooks);

  test('it registers and deregisters in bread-crumbs service', async function(assert) {
    let item = {};
    let register = sinon.stub().returns(item);
    let deregister = sinon.stub();

    this.owner.register('service:bread-crumbs', EmberObject.extend({
      register, deregister
    }));

    this.set('isActive', true);
    this.set('text', 'My text')

    await render(hbs`
      {{#if isActive}}
        {{bread-crumb text "foo.bar" customProperty="value"}}
      {{/if}}
    `);

    assert.deepEqual(register.getCall(0).args, [['My text', 'foo.bar'], { customProperty: 'value' }]);

    this.set('text', 'Another text');

    assert.deepEqual(item.params, ['Another text', 'foo.bar']);

    this.set('isActive', false);

    assert.ok(deregister.calledOnceWith(item));
  });
});
