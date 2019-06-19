import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';
import { A } from '@ember/array';

module('Integration | Component | bread-crumbs', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders with a default HTML syntax', async function(assert) {
    let items = A();
    this.owner.register('service:bread-crumbs', EmberObject.extend({ items }));

    await render(hbs`{{bread-crumbs}}`);

    assert.dom(this.element).hasText('');

    items.addObject({
      params: ['Sample link', 'foo.bar'],
      isLink: true
    });
    items.addObject({
      params: ['Sample text']
    });
    await settled();

    assert.dom('a').hasText('Sample link');
    assert.dom('span').hasText('Sample text');
  });

  test('it renders with a custom HTML syntax', async function(assert) {
    let items = A([
      { params: ['Sample link', 'foo.bar'], isLink: true },
      { params: ['Sample text'] }
    ]);
    this.owner.register('service:bread-crumbs', EmberObject.extend({ items }));

    await render(hbs`
      <ul>
        {{#bread-crumbs as |item|}}
          <li>
            {{item.component class="my-item"}}
          </li>
        {{/bread-crumbs}}
      </ul>
    `);

    assert.dom('ul>li').exists({ count: 2 });
    assert.dom('a').hasClass('my-item');
    assert.dom('span').hasClass('my-item');

    await render(hbs`
      {{#bread-crumbs as |item|}}
        model: {{item.model.params}}
      {{/bread-crumbs}}
    `);

    assert.dom(this.element).includesText('model: Sample link,foo.bar');
    assert.dom(this.element).includesText('model: Sample text');
  });
});
