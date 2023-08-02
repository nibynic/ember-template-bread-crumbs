import templateOnly from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{#if (or @item.models @item.model)}}\n  <LinkTo\n    @route={{@item.route}}\n    @models={{or @item.models (array @item.model)}}\n    @query={{if @item.query @item.query (hash)}}\n    ...attributes\n  >\n    {{@item.text}}\n  </LinkTo>\n{{else}}\n  <LinkTo\n    @route={{@item.route}}\n    @query={{if @item.query @item.query (hash)}}\n    ...attributes\n  >\n    {{@item.text}}\n  </LinkTo>\n{{/if}}");

var link = setComponentTemplate(TEMPLATE, templateOnly());

export { link as default };
//# sourceMappingURL=link.js.map
