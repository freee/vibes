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
export default function GridWrapper(props) {
    var marginTop = props.marginTop, marginBottom = props.marginBottom, marginLeft = props.marginLeft, marginRight = props.marginRight, marginSize = props.marginSize, children = props.children;
    return (React.createElement("div", __assign({}, commonProps(props, 'vb-gridWrapper', {}, {
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginTop: marginTop,
        marginSize: marginSize,
    })), children));
}
//# sourceMappingURL=GridWrapper.js.map