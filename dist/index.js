'use strict';

var t = require('react');

function _interopDefault(e) {
  return e && e.__esModule ? e : { default: e };
}

var t__default = /*#__PURE__*/ _interopDefault(t);

function n(e) {
  return t__default.default.createElement('h1', null, e.children);
}
function l(e) {
  return t__default.default.createElement(
    'button',
    {
      onClick: e.clickHandler,
      type: e.type,
      className:
        'text-md box-shadow w-full rounded-md border-2 border-slate-12 bg-slate-1 px-6 py-2 font-semibold text-slate-12 drop-shadow-md hover:drop-shadow-lg'
    },
    e.children
  );
}

exports.PrimaryButton = l;
exports.Title = n;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map
