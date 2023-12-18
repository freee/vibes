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
/**
 * タブひとつひとつを表現するコンポーネントです。単体で使用せず、`lv2/TabBar` を使用してください
 */
var Tab = function (props) {
    var children = props.children, current = props.current, small = props.small, selected = props.selected, marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize, onClick = props.onClick, onBlur = props.onBlur, notification = props.notification;
    var buttonBaseClass = 'vb-tab';
    var classModifier = {
        current: current,
        small: small,
        selected: selected,
    };
    return (React.createElement("div", { className: "vb-tab__block" },
        React.createElement("button", __assign({ role: "tab", tabIndex: current ? undefined : -1, "aria-selected": !!current, onClick: onClick, onBlur: onBlur, type: "button" }, commonProps(props, buttonBaseClass, classModifier, {
            marginBottom: marginBottom,
            marginLeft: marginLeft,
            marginRight: marginRight,
            marginSize: marginSize,
            marginTop: marginTop,
        })), children),
        notification && (React.createElement("span", { className: 'vb-tab__notificationDot', "aria-label": notification, role: "img" }))));
};
export default Tab;
//# sourceMappingURL=Tab.js.map