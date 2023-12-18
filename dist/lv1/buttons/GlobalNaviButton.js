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
import selfWindowNavigator from '../../utilities/selfWindowNavigator';
/**
 * グローバルナビ専用のボタンです。直接使用せず、 `lv2/GlobalNavi` を使用してください。
 */
var GlobalNaviButton = function (props) {
    var children = props.children, IconComponent = props.IconComponent, href = props.href, current = props.current, onSelfWindowNavigation = props.onSelfWindowNavigation;
    var buttonClass = 'vb-globalNaviButton';
    var classModifier = { current: current };
    return !href ? (React.createElement("span", __assign({ "aria-current": current }, commonProps(props, buttonClass, classModifier)),
        !!IconComponent && (React.createElement(IconComponent, { className: buttonClass + '__icon', focusable: false })),
        React.createElement("span", { className: buttonClass + '__text' }, children))) : (React.createElement("a", __assign({ href: href, "aria-current": current, onClick: function (e) {
            var navigator = selfWindowNavigator(onSelfWindowNavigation);
            navigator && navigator(e, href);
        } }, commonProps(props, buttonClass, classModifier)),
        !!IconComponent && (React.createElement(IconComponent, { className: buttonClass + '__icon', focusable: false })),
        React.createElement("span", { className: buttonClass + '__text' }, children)));
};
export default GlobalNaviButton;
//# sourceMappingURL=GlobalNaviButton.js.map