import Component from '@ember/component';
import { layout, tagName } from '@ember-decorators/component';
import template from './template';
import { inject as service } from '@ember/service';

@layout(template)
@tagName('')
export default class BreacCrumbsComponent extends Component {
  @service breadCrumbs;
}
