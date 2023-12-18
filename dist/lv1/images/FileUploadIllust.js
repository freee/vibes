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
var FileUploadIllust = function (props) {
    var marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize;
    var illustBaseClass = 'vb-illust';
    return (React.createElement("figure", __assign({}, commonProps(props, illustBaseClass, { fileUpload: true }, {
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginTop: marginTop,
        marginSize: marginSize,
    })),
        React.createElement("svg", { className: illustBaseClass + '__svg', viewBox: "0 0 128 128", role: "presentation", "aria-hidden": "true" },
            React.createElement("title", null, "\u30D5\u30A1\u30A4\u30EB\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9"),
            React.createElement("g", null,
                React.createElement("path", { className: illustBaseClass + '__background', d: "M9.5,0h79l14,13.93,16,16V128H9.5Z" }),
                React.createElement("path", { className: illustBaseClass + '__frame', d: "M43.5,83.12h41V89h-41Zm11.71-5.88H72.79V59.59H84.5L64,39,43.5,59.59H55.21ZM9.5,0h79l14,13.93,16,16V128H9.5Zm3,3V125h103V31.16H87.23V3Z" })))));
};
export default FileUploadIllust;
//# sourceMappingURL=FileUploadIllust.js.map