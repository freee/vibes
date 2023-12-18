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
var ScrimBase = function (props) {
    var children = props.children, small = props.small, marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize;
    var baseClass = 'vb-scrimBase';
    var classModifiers = { small: small };
    return (React.createElement("div", __assign({}, commonProps(props, baseClass, classModifiers, {
        marginTop: marginTop,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginBottom: marginBottom,
        marginSize: marginSize,
    })), children));
};
export default ScrimBase;
//# sourceMappingURL=ScrimBase.js.map