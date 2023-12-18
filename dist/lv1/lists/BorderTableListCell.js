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
import commonProps from '../../utilities/commonProps';
import { Keys } from '../../utilities/keyboard';
import vbClassNames from '../../utilities/vbClassNames';
var BorderTableListCell = function (props) {
    var children = props.children, small = props.small, alignCenter = props.alignCenter, alignRight = props.alignRight, breakWord = props.breakWord, noWrap = props.noWrap, rowSpan = props.rowSpan, onClick = props.onClick, status = props.status, rowHeader = props.rowHeader, fixedRowHeader = props.fixedRowHeader, fixedRowHeaderLeft = props.fixedRowHeaderLeft;
    var baseClass = 'vb-BorderTableListCell';
    var statusBaseClass = "".concat(baseClass, "__status");
    var classModifier = {
        small: small,
        alignCenter: alignCenter,
        alignRight: alignRight,
        clickable: !!onClick,
        breakWord: breakWord,
        noWrap: noWrap,
    };
    var statusClass = vbClassNames(statusBaseClass, {
        modifier: {
            alert: status === 'alert',
            notice: status === 'notice',
            success: status === 'success',
        },
    });
    var content = (React.createElement(React.Fragment, null,
        onClick ? (React.createElement("span", { className: "".concat(baseClass, "__clickElement"), role: "button", onClick: function () { return onClick(); }, onKeyDown: function (e) {
                if (e.key === Keys.SPACE || e.key === Keys.ENTER) {
                    e.preventDefault();
                    onClick();
                }
            }, tabIndex: 0 }, children)) : (children),
        status && React.createElement("div", { className: statusClass })));
    if (rowHeader) {
        var cp = __assign({}, commonProps(props, baseClass, __assign(__assign({}, classModifier), { rowHeader: rowHeader, fixedRowHeader: fixedRowHeader })));
        return (React.createElement("th", __assign({ scope: "row", rowSpan: rowSpan }, __assign(__assign({}, cp), { className: "".concat(cp.className).concat(rowHeader && fixedRowHeader && fixedRowHeaderLeft
                ? " ".concat(baseClass, "--fixedRowHeaderLeft").concat(fixedRowHeaderLeft)
                : '') })), content));
    }
    return (React.createElement("td", __assign({ rowSpan: rowSpan }, commonProps(props, baseClass, classModifier)), content));
};
export default BorderTableListCell;
//# sourceMappingURL=BorderTableListCell.js.map