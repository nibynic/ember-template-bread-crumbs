import { _ as _applyDecoratedDescriptor, a as _initializerDefineProperty } from '../_rollupPluginBabelHelpers-e795903d.js';
import Helper from '@ember/component/helper';
import { inject } from '@ember/service';
import { setProperties } from '@ember/object';

var _dec, _class, _descriptor;
let BreadCrumbHelper = (_dec = inject('bread-crumbs'), (_class = class BreadCrumbHelper extends Helper {
  constructor(...args) {
    super(...args);
    _initializerDefineProperty(this, "breadCrumbs", _descriptor, this);
  }
  compute([text], hash) {
    let data = Object.assign({
      text
    }, hash);
    if (this.registration) {
      setProperties(this.registration, data);
    } else {
      this.registration = this.breadCrumbs.register(data);
    }
  }
  willDestroy() {
    this.breadCrumbs.deregister(this.registration);
  }
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "breadCrumbs", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class));

export { BreadCrumbHelper as default };
//# sourceMappingURL=bread-crumb.js.map
