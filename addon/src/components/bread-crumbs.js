import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class BreacCrumbsComponent extends Component {
  @service breadCrumbs;
}
