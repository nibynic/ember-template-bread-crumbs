import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | bread-crumbs/text', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.item = {
      text: 'My text'
    }

    await render(hbs`<BreadCrumbs::Text @item={{this.item}} class="my-text" />`);

    assert.dom('span').hasText('My text');
    assert.dom('span').hasClass('my-text');
  });
});
