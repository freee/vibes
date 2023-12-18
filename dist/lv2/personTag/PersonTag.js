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
import { MdCancel } from 'react-icons/md';
import { Keys } from '../../utilities/keyboard';
import commonProps from '../../utilities/commonProps';
import { Avatar } from '../../lv1';
var PersonTag = function (props) {
    var type = props.type, children = props.children, removable = props.removable, onRemove = props.onRemove, disabledRemoveButton = props.disabledRemoveButton, color = props.color, imageUrl = props.imageUrl, marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize;
    var baseClass = 'vb-personTag';
    var classModifier = {
        removable: removable,
        success: color === 'success',
        error: color === 'error',
    };
    var bodyClassName = color
        ? "".concat(baseClass, "__body ").concat(baseClass, "__body--").concat(color)
        : "".concat(baseClass, "__body");
    return (React.createElement("span", __assign({}, commonProps(props, baseClass, classModifier, {
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginTop: marginTop,
        marginSize: marginSize,
    })),
        React.createElement("span", { className: "".concat(baseClass, "__inner") },
            React.createElement(Avatar, { imageUrl: imageUrl, size: "small", mr: 0.25 }),
            type && React.createElement("span", { className: "".concat(baseClass, "__type") }, type),
            React.createElement("span", { className: bodyClassName, title: children }, children),
            removable && (React.createElement("span", { className: "".concat(baseClass, "__removeButton").concat(disabledRemoveButton
                    ? " ".concat(baseClass, "__removeButton--disabled")
                    : ''), "aria-label": "".concat(children || 'この人', "\u3092\u524A\u9664"), tabIndex: disabledRemoveButton ? -1 : 0, role: "button", onClick: function () { return onRemove && onRemove(); }, onKeyDown: function (e) {
                    if (onRemove && (e.key === Keys.ENTER || e.key === Keys.SPACE)) {
                        e.preventDefault();
                        onRemove();
                    }
                } },
                React.createElement(MdCancel, { className: "".concat(baseClass, "__removeIcon") }))))));
};
export default PersonTag;
//# sourceMappingURL=PersonTag.js.map