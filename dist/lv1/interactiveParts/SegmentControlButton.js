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
var SegmentControlButton = function (props) {
    var children = props.children, current = props.current, small = props.small, large = props.large, href = props.href, target = props.target, rel = props.rel, onClick = props.onClick, IconComponent = props.IconComponent;
    var buttonBaseClass = 'vb-segmentControlButton';
    var classModifier = {
        current: current,
        small: small,
        large: large,
        icon: !!IconComponent,
    };
    var content = (React.createElement(React.Fragment, null,
        IconComponent && (React.createElement(IconComponent, { className: "".concat(buttonBaseClass, "__icon"), focusable: false })),
        children));
    if (href) {
        return (React.createElement("a", __assign({ href: href, target: target, rel: rel || rel === ''
                ? rel
                : target === '_blank'
                    ? 'noopener noreferrer'
                    : undefined, onClick: onClick }, commonProps(props, buttonBaseClass, classModifier)), content));
    }
    return (React.createElement("button", __assign({ type: "button", onClick: onClick, "aria-pressed": current }, commonProps(props, buttonBaseClass, classModifier)), content));
};
export default SegmentControlButton;
//# sourceMappingURL=SegmentControlButton.js.map