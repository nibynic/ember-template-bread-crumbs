import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | bread-crumbs/link', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('item', {
      params: ['My link', 'foo.bar']
    });

    await render(hbs`{{bread-crumbs/link item=item}}`);

    assert.dom('a').hasText('My link');
  });
});
