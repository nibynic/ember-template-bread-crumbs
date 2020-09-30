import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | bread-crumbs/link', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.item = {
      text: 'My link',
      route: 'foo.bar'
    };

    await render(hbs`<BreadCrumbs::Link @item={{this.item}} class="my-link" />`);

    assert.dom('a').hasText('My link');
    assert.dom('a').hasClass('my-link');
  });
});
