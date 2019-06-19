import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | bread-crumbs/text', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('item', {
      params: ['My text']
    });

    await render(hbs`{{bread-crumbs/text item=item}}`);

    assert.dom('span').hasText('My text');
  });
});
