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
var CloudSkeletonIllust = function (props) {
    var marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize;
    var illustBaseClass = 'vb-illust';
    return (React.createElement("figure", __assign({}, commonProps(props, illustBaseClass, { cloudSkeleton: true }, {
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginTop: marginTop,
        marginSize: marginSize,
    })),
        React.createElement("svg", { className: illustBaseClass + '__svg', viewBox: "0 0 128 128", role: "presentation", "aria-hidden": "true" },
            React.createElement("title", null, "\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u4E2D"),
            React.createElement("g", null,
                React.createElement("path", { className: illustBaseClass + '__frame', d: "M103.2,53.47A26.8,26.8,0,0,1,101.33,107H32a32.25,32.25,0,0,1-3.47-64.29A39.87,39.87,0,0,1,103.2,53.47Zm-2.94.57A36.87,36.87,0,0,0,31.2,44.09l-.74,1.44-1.61.17A29.25,29.25,0,0,0,32,104h69.33A23.8,23.8,0,0,0,103,56.46l-2.29-.16Z" })))));
};
export default CloudSkeletonIllust;
//# sourceMappingURL=CloudSkeletonIllust.js.map