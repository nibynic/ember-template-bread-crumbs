import LinkComponent from '@ember/routing/link-component';
import { reads } from '@ember/object/computed';

export default LinkComponent.extend({
  params: reads('item.params')
}).reopenClass({
  positionalParams: []
});
