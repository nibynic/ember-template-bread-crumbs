import Service from '@ember/service';
import EmberObject, { computed } from '@ember/object';
import { A } from '@ember/array';

export default Service.extend({
  items: computed(function() {
    return A();
  }),

  register(item) {
    this.get('items').addObject(item);
    return item;
  },

  deregister(item) {
    this.get('items').removeObject(item);
  }
});
