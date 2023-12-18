var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import BorderTableListCell from '../../lv1/lists/BorderTableListCell';
import { MdChevronRight, MdExpandMore } from 'react-icons/md';
var HierarchicalTableRowHeaderCell = function (_a) {
    var onToggleFolded = _a.onToggleFolded, level = _a.level, foldable = _a.foldable, folded = _a.folded, children = _a.children, rest = __rest(_a, ["onToggleFolded", "level", "foldable", "folded", "children"]);
    var baseClassName = 'vb-hierarchicalTableRowHeaderCell';
    var className = [
        baseClassName,
        "".concat(baseClassName, "--level").concat(level),
        foldable ? '' : "".concat(baseClassName, "--foldable--level").concat(level),
    ].join(' ');
    return (React.createElement(BorderTableListCell, __assign({}, rest),
        React.createElement("span", { className: className },
            foldable && (React.createElement("button", { className: "".concat(baseClassName, "__button"), "aria-label": folded ? '展開する' : '折り畳む', "aria-expanded": !folded, onClick: function (e) {
                    onToggleFolded();
                    e.stopPropagation();
                } }, folded ? (React.createElement(MdChevronRight, { className: "".concat(baseClassName, "__icon") })) : (React.createElement(MdExpandMore, { className: "".concat(baseClassName, "__icon") })))),
            children)));
};
export default HierarchicalTableRowHeaderCell;
//# sourceMappingURL=HierarchicalTableRowHeaderCell.js.map