import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { A } from '@ember/array';
import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

module('Integration | Component | bread-crumbs', function (hooks) {
  setupRenderingTest(hooks);

  class BreadCrumbsStub extends Service {
    @tracked items = A();
  }

  hooks.beforeEach(async function () {
    this.owner.register('service:bread-crumbs', BreadCrumbsStub);
    this.items = this.owner.lookup('service:bread-crumbs').items;
  });

  test('it renders with a default HTML syntax', async function (assert) {
    await render(hbs`<BreadCrumbs />`);

    assert.dom(this.element).hasText('');

    this.items.addObject({
      text: 'Sample link',
      route: 'foo.bar',
    });
    this.items.addObject({
      text: 'Sample text',
    });
    await settled();

    assert.dom('a').hasText('Sample link');
    assert.dom('span').hasText('Sample text');
  });

  test('it renders with a custom HTML syntax', async function (assert) {
    this.items.addObjects([
      { text: 'Sample link', route: 'foo.bar' },
      { text: 'Sample text' },
    ]);

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