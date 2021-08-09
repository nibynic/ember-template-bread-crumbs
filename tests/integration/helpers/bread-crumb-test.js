import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Service from '@ember/service';
import sinon from 'sinon';

module('Integration | Helper | bread-crumb', function (hooks) {
  setupRenderingTest(hooks);

  test('it registers and deregisters in bread-crumbs service', async function (assert) {
    let item = {};
    let register = sinon.stub().returns(item);
    let deregister = sinon.stub();

    class BreadCrumbsStub extends Service {
      register = register;
      deregister = deregister;
    }
    this.owner.register('service:bread-crumbs', BreadCrumbsStub);

    this.set('isActive', true);
    this.set('text', 'My text');

    await render(hbs`
      {{#if isActive}}
        {{bread-crumb text route="foo.bar" query=(hash customProperty="value")}}
      {{/if}}
    `);

    assert.deepEqual(register.getCall(0).args, [
      {
        text: 'My text',
        route: 'foo.bar',
        query: {
          customProperty: 'value',
        },
      },
    ]);

    this.set('text', 'Another text');

    assert.equal(item.text, 'Another text');
    assert.equal(item.route, 'foo.bar');

    this.set('isActive', false);

    assert.ok(deregister.calledOnceWith(item));
  });
});
