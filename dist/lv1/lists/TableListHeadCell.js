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
import * as React from 'react';
import { MdArrowUpward, MdArrowDownward, MdSwapVert } from 'react-icons/md';
import { Keys } from '../../utilities/keyboard';
import commonProps from '../../utilities/commonProps';
var TableListHeadCell = function (props) {
    var children = props.children, alignCenter = props.alignCenter, alignRight = props.alignRight, ordering = props.ordering, onClick = props.onClick, width = props.width, minWidth = props.minWidth, maxWidth = props.maxWidth, noWrap = props.noWrap, rowHeader = props.rowHeader, fixedRowHeader = props.fixedRowHeader, fixedRowHeaderLeft = props.fixedRowHeaderLeft;
    var orderInit = ordering === 'init';
    var orderAscending = ordering === 'asc';
    var orderDescending = ordering === 'desc';
    var listBaseClass = 'vb-tableListHeadCell';
    var content = (React.createElement(React.Fragment, null,
        children,
        orderAscending ? (React.createElement("span", { className: "".concat(listBaseClass, "__iconWrapper"), role: "img", "aria-label": "\u6607\u9806\u306B\u4E26\u3093\u3067\u3044\u307E\u3059" },
            React.createElement(MdArrowUpward, { className: "".concat(listBaseClass, "__headerArrowUp") }))) : orderDescending ? (React.createElement("span", { className: "".concat(listBaseClass, "__iconWrapper"), role: "img", "aria-label": "\u964D\u9806\u306B\u4E26\u3093\u3067\u3044\u307E\u3059" },
            React.createElement(MdArrowDownward, { className: "".concat(listBaseClass, "__headerArrowDown") }))) : orderInit ? (React.createElement("span", { className: "".concat(listBaseClass, "__iconWrapper"), role: "img", "aria-label": "\u4E26\u3073\u66FF\u3048\u53EF\u80FD\u3067\u3059" },
            React.createElement(MdSwapVert, { className: "".concat(listBaseClass, "__headerSwapVert") }))) : ('')));
    var cp = commonProps(props, listBaseClass, {
        alignCenter: alignCenter,
        alignRight: alignRight,
        orderAscending: orderAscending,
        orderDescending: orderDescending,
        clickable: !!onClick,
        noWrap: noWrap,
        rowHeader: rowHeader,
        fixedRowHeader: rowHeader && fixedRowHeader, // rowHeader が true の時のみ有効化する
    });
    return (React.createElement("th", __assign({}, __assign(__assign({}, cp), { className: "".concat(cp.className).concat(width ? " ".concat(listBaseClass, "--width").concat(width) : '').concat(minWidth ? " ".concat(listBaseClass, "--minWidth").concat(minWidth) : '').concat(maxWidth ? " ".concat(listBaseClass, "--maxWidth").concat(maxWidth) : '').concat(rowHeader && fixedRowHeader && fixedRowHeaderLeft
            ? " ".concat(listBaseClass, "--fixedRowHeaderLeft").concat(fixedRowHeaderLeft)
            : '') })), onClick ? (React.createElement("span", { className: "".concat(listBaseClass, "__clickElement"), role: "button", onClick: function () { return onClick(); }, onKeyDown: function (e) {
            if (e.key === Keys.SPACE || e.key === Keys.ENTER) {
                e.preventDefault();
                onClick();
            }
        }, tabIndex: 0 }, content)) : (content)));
};
export default TableListHeadCell;
//# sourceMappingURL=TableListHeadCell.js.map