import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | bread-crumbs', function (hooks) {
  setupTest(hooks);

  test('it registers and deregisters bread crumbs', function (assert) {
    let service = this.owner.lookup('service:bread-crumbs');

    let item1 = service.register(['Sample text', 'route.name']);

    assert.deepEqual(service.get('items'), [item1]);

    let item2 = service.register(['Another text']);

    assert.deepEqual(service.get('items'), [item1, item2]);

    service.deregister(item2);

    assert.deepEqual(service.get('items'), [item1]);
  });
});