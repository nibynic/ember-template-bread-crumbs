import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';
import { assign } from '@ember/polyfills';
import { setProperties } from '@ember/object';

export default class BreadCrumbHelper extends Helper {
  @service('bread-crumbs') breadCrumbs;

  compute([text], hash) {
    let data = assign({ text }, hash);
    if (this.registration) {
      setProperties(this.registration, data);
    } else {
      this.registration = this.breadCrumbs.register(data);
    }
  }

  willDestroy() {
    this.breadCrumbs.deregister(this.registration);
  }
}
