import { _ as _applyDecoratedDescriptor, a as _initializerDefineProperty } from '../_rollupPluginBabelHelpers-e795903d.js';
import Component from '@glimmer/component';
import { inject } from '@ember/service';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{#each this.breadCrumbs.items as |item|}}\n  {{#if (has-block)}}\n\n    {{yield (hash\n      component=(if item.route\n        (component \"bread-crumbs/link\" item=item)\n        (component \"bread-crumbs/text\" item=item)\n      )\n      model=item\n    )}}\n\n  {{else}}\n\n    {{#if item.route}}\n      <BreadCrumbs::Link @item={{item}} />\n    {{else}}\n      <BreadCrumbs::Text @item={{item}} />\n    {{/if}}\n\n  {{/if}}\n\n{{/each}}");

var _class, _descriptor;
let BreacCrumbsComponent = (_class = class BreacCrumbsComponent extends Component {
  constructor(...args) {
    super(...args);
    _initializerDefineProperty(this, "breadCrumbs", _descriptor, this);
  }
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "breadCrumbs", [inject], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class);
setComponentTemplate(TEMPLATE, BreacCrumbsComponent);

export { BreacCrumbsComponent as default };
//# sourceMappingURL=bread-crumbs.js.map
