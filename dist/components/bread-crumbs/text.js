import templateOnly from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<span ...attributes>\n  {{@item.text}}\n</span>");

var text = setComponentTemplate(TEMPLATE, templateOnly());

export { text as default };
//# sourceMappingURL=text.js.map
