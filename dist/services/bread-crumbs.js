import { b as _defineProperty } from '../_rollupPluginBabelHelpers-e795903d.js';
import Service from '@ember/service';
import { A } from '@ember/array';

class BreadCrumbsService extends Service {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "items", A());
  }
  register(item) {
    this.items.addObject(item);
    return item;
  }
  deregister(item) {
    this.items.removeObject(item);
  }
}

export { BreadCrumbsService as default };
//# sourceMappingURL=bread-crumbs.js.map
