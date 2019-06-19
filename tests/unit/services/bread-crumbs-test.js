import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | bread-crumbs', function(hooks) {
  setupTest(hooks);

  test('it registers and deregisters bread crumbs', function(assert) {
    let service = this.owner.lookup('service:bread-crumbs');

    let item1 = service.register(['Sample text', 'route.name']);

    assert.deepEqual(service.get('items'), [item1]);

    let item2 = service.register(['Another text']);

    assert.deepEqual(service.get('items'), [item1, item2]);

    service.deregister(item2);

    assert.deepEqual(service.get('items'), [item1]);
  });

  test('it normalizes bread crumb params', function(assert) {
    let service = this.owner.lookup('service:bread-crumbs');

    let item = service.register(['Bare text']);

    assert.deepEqual(item.getProperties('params', 'isLink', 'hash'), {
      params: ['Bare text'],
      isLink: false,
      hash:   {}
    });

    item = service.register(['Linked text', 'route.name']);

    assert.deepEqual(item.getProperties('params', 'isLink', 'hash'), {
      params: ['Linked text', 'route.name'],
      isLink: true,
      hash:   {}
    });

    item = service.register(['Linked text', 'route.name'], { additionalParam: 'value' });

    assert.deepEqual(item.getProperties('params', 'isLink', 'hash'), {
      params: ['Linked text', 'route.name'],
      isLink: true,
      hash:   { additionalParam: 'value' }
    });
  });

  test('item params can be updated at any time', function(assert) {
    let service = this.owner.lookup('service:bread-crumbs');

    let item = service.register(['Bare text']);

    item.set('params', ['Linked text', 'route.name']);

    assert.ok(item.get('isLink'));
  });
});
