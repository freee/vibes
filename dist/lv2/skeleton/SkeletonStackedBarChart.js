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
import ContentLoader from 'react-content-loader';
import commonProps from '../../utilities/commonProps';
export var SkeletonStackedBarChart = function (props) {
    var width = '100%';
    var height = '0.875rem';
    return (React.createElement("div", __assign({}, commonProps(props, 'vb-skeletonStackedBarChart')),
        React.createElement(ContentLoader, { speed: 1, width: width, height: height, viewBox: "0 0 ".concat(width, " ").concat(height), backgroundColor: "rgba(212,212,212,0.3)" // #FFFFFF 上で #F2F2F2
            , foregroundColor: "rgba(188,188,188,0.3)" // #FFFFFF 上で #ebebeb
         },
            React.createElement("rect", { x: "0", y: "0", rx: "4", ry: "4", width: width, height: height }))));
};
//# sourceMappingURL=SkeletonStackedBarChart.js.map