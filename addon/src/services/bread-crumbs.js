import Service from '@ember/service';
import { A } from '@ember/array';

export default class BreadCrumbsService extends Service {
  items = A();

  register(item) {
    this.items.addObject(item);
    return item;
  }

  deregister(item) {
    this.items.removeObject(item);
  }
}
