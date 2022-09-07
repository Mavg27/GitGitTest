import { parseFragment, registerTemplate } from "lwc";
const $fragment1 = parseFragment`<h1${3}>Visible Header</h1>`;
const $fragment2 = parseFragment`<h1${3}>First Alternative Header</h1>`;
const $fragment3 = parseFragment`<h1${3}>Alternative Header</h1>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const { st: api_static_fragment } = $api;
  return $cmp.visible
    ? [api_static_fragment($fragment1(), 1)]
    : $cmp.elseifCondition
    ? [api_static_fragment($fragment2(), 3)]
    : [api_static_fragment($fragment3(), 5)];
  /*LWC compiler vX.X.X*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];