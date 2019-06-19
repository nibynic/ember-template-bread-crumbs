import Service from '@ember/service';
import EmberObject, { computed } from '@ember/object';
import { A } from '@ember/array';

export default Service.extend({
  items: computed(function() {
    return A();
  }),

  register(params = [], hash = {}) {
    let item = Item.create({ params, hash });
    this.get('items').addObject(item);
    return item;
  },

  deregister(item) {
    this.get('items').removeObject(item);
  }
});

export const Item = EmberObject.extend({
  hash: computed({
    get() { return this._hash || {}; },
    set(k, v) { return this._hash = v; }
  }),

  isLink: computed('params.length', function() {
    return this.get('params.length') > 1;
  })
});
