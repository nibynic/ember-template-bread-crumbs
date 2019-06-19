import Component from '@ember/component';
import layout from './template';
import { inject as service } from '@ember/service';
import { assign } from '@ember/polyfills';
import { defineProperty } from '@ember/object';
import { alias } from '@ember/object/computed';

export default Component.extend({
  layout,

  breadCrumbs: service(),

  didInsertElement() {
    this._super(...arguments);
    let params = this.get('attrs.positionalParams');
    let hash = assign({}, this.get('attrs'));
    delete hash.positionalParams;
    this.set('item', this.get('breadCrumbs').register(params, hash));

    defineProperty(this, 'positionalParams', alias('params'));
  },

  willDestroyElement() {
    this._super(...arguments);
    this.get('breadCrumbs').deregister(this.get('item'));
  },

  hash: alias('item.hash'),
  params: alias('item.params')
}).reopenClass({
  positionalParams: 'positionalParams'
});
