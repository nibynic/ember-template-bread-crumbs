import Service from '@ember/service';
import EmberObject, { computed } from '@ember/object';
import { A } from '@ember/array';
import { assign } from '@ember/polyfills';

export default Service.extend({
  items: computed(function() {
    return A();
  }),

  register(params = [], hash = {}) {
    let item = Item.create(assign({ params }, hash));
    this.get('items').addObject(item);
    return item;
  },

  deregister(item) {
    this.get('items').removeObject(item);
  }
});

export const Item = EmberObject.extend({
  routeName: computed('params.[]', function() {
    return this.get('params')[1];
  }),

  text: computed('params.[]', function () {
    return this.get('params')[0];
  })
});
