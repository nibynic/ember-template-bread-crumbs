import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';
import { A } from '@ember/array';
import { run } from '@ember/runloop';

module('Integration | Component | bread-crumbs', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders with a default HTML syntax', async function (assert) {
    let items = A();
    this.owner.register('service:bread-crumbs', EmberObject.extend({ items }));

    await render(hbs`<BreadCrumbs />`);

    assert.dom(this.element).hasText('');

    run(() => {
      items.addObject({
        text: 'Sample link',
        route: 'foo.bar',
      });
      items.addObject({
        text: 'Sample text',
      });
    });
    await settled();

    assert.dom('a').hasText('Sample link');
    assert.dom('span').hasText('Sample text');
  });

  test('it renders with a custom HTML syntax', async function (assert) {
    let items = A([
      { text: 'Sample link', route: 'foo.bar' },
      { text: 'Sample text' },
    ]);
    this.owner.register('service:bread-crumbs', EmberObject.extend({ items }));

    await render(hbs`
      <ul>
        <BreadCrumbs as |item|>
          <li>
            <item.component />
          </li>
        </BreadCrumbs>
      </ul>
    `);

    assert.dom('ul>li').exists({ count: 2 });

    await render(hbs`
      <BreadCrumbs as |item|>
        model: {{item.model.text}}
      </BreadCrumbs>
    `);

    assert.dom(this.element).includesText('model: Sample link');
    assert.dom(this.element).includesText('model: Sample text');
  });
});
