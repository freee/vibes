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
var CloudUploadIllust = function (props) {
    var marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize;
    var illustBaseClass = 'vb-illust';
    return (React.createElement("figure", __assign({}, commonProps(props, illustBaseClass, { cloudUpload: true }, {
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginTop: marginTop,
        marginSize: marginSize,
    })),
        React.createElement("svg", { className: illustBaseClass + '__svg', viewBox: "0 0 128 128", role: "presentation", "aria-hidden": "true" },
            React.createElement("title", null, "\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9"),
            React.createElement("g", null,
                React.createElement("path", { className: illustBaseClass + '__frame', d: "M74.67,65.7V87.2H53.33V65.7h-16L64,38.83,90.67,65.7ZM103.2,49.79A39.87,39.87,0,0,0,28.53,39,32.25,32.25,0,0,0,32,103.33h69.33a26.81,26.81,0,0,0,1.87-53.54Z" })))));
};
export default CloudUploadIllust;
//# sourceMappingURL=CloudUploadIllust.js.map