import Component from '@ember/component';
import layout from './template';
import { computed } from '@ember/object';

export default Component.extend({
  layout,

  tagName: 'span',

  text: computed('item.params.[]', function() {
    return (this.get('item.params') || [])[0];
  })
});
