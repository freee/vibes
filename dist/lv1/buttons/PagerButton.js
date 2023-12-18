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
export default function PagerButton(props) {
    var children = props.children, current = props.current, disabled = props.disabled, marginBottom = props.marginBottom, marginLeft = props.marginLeft, marginRight = props.marginRight, marginTop = props.marginTop, marginSize = props.marginSize, onClick = props.onClick, small = props.small, label = props.label;
    var buttonBaseClass = 'vb-pagerButton';
    var classModifier = {
        current: current,
        small: small,
        disabled: disabled,
    };
    return (React.createElement("button", __assign({ disabled: disabled, onClick: onClick, tabIndex: current || disabled ? -1 : undefined, "aria-current": current ? 'true' : 'false', "aria-label": label, type: "button" }, commonProps(props, buttonBaseClass, classModifier, {
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginSize: marginSize,
        marginTop: marginTop,
    })), children));
}
//# sourceMappingURL=PagerButton.js.map