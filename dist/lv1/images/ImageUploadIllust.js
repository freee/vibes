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
var ImageUploadIllust = function (props) {
    var marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize;
    var illustBaseClass = 'vb-illust';
    return (React.createElement("figure", __assign({}, commonProps(props, illustBaseClass, { imageUpload: true }, {
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginTop: marginTop,
        marginSize: marginSize,
    })),
        React.createElement("svg", { className: illustBaseClass + '__svg', viewBox: "0 0 128 128", role: "presentation", "aria-hidden": "true" },
            React.createElement("title", null, "\u753B\u50CF\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9"),
            React.createElement("g", null,
                React.createElement("path", { className: illustBaseClass + '__background', d: "M0,16v96H128V16Z" }),
                React.createElement("path", { className: illustBaseClass + '__frame', d: "M0,16v96H128V16Zm125,93H3V19H125ZM33,51a7,7,0,1,1,7,7A7,7,0,0,1,33,51ZM53,82H33L55,57l8.17,9.28L75,48,97,82H53Z" })))));
};
export default ImageUploadIllust;
//# sourceMappingURL=ImageUploadIllust.js.map