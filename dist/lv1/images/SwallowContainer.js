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
export var SwallowContainer = function (props) {
    var size = props.size, mediumHeightRem = props.mediumHeightRem, renderSVG = props.renderSVG, marginTop = props.marginTop, marginRight = props.marginRight, marginLeft = props.marginLeft, marginBottom = props.marginBottom, marginSize = props.marginSize;
    var className = 'vb-swallow';
    var width = size === 'fit-width' ? '100%' : 'auto';
    var height = size === 'fit-height'
        ? '100%'
        : size === 'fit-width'
            ? 'auto'
            : "".concat(mediumHeightRem, "rem");
    var styles = {
        width: size === 'fit-width' ? '100%' : 'auto',
        height: size === 'fit-width' ? 'auto' : '100%',
    };
    return (React.createElement("div", __assign({}, commonProps(props, className, {}, { marginTop: marginTop, marginRight: marginRight, marginLeft: marginLeft, marginBottom: marginBottom, marginSize: marginSize }), { style: {
            width: width,
            height: height,
        } }), renderSVG({ className: "".concat(className, "__svg"), styles: styles })));
};
//# sourceMappingURL=SwallowContainer.js.map