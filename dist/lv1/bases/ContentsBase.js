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
import { useResponsive } from '../../utilities/VibesProvider';
var ContentsBase = function (props) {
    var children = props.children, marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize, paddingSize = props.paddingSize;
    var baseClass = 'vb-contentsBase';
    var classModifiers = {
        responsive: useResponsive(),
        'padding-small': paddingSize === 'small',
        'padding-large': paddingSize === 'large',
    };
    return (React.createElement("section", __assign({}, commonProps(props, baseClass, classModifiers, {
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginSize: marginSize,
        marginTop: marginTop,
    })), children));
};
export default ContentsBase;
//# sourceMappingURL=ContentsBase.js.map