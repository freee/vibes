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
import commonProps from '../../../utilities/commonProps';
var GuideStepCount = function (props) {
    var stepCount = props.stepCount, totalStepCount = props.totalStepCount;
    return (React.createElement("div", __assign({}, commonProps(props, 'vb-guideStepCount')),
        React.createElement("span", { className: "vb-guideStepCount__currentStep" }, stepCount),
        React.createElement("span", null, " / "),
        React.createElement("span", null, totalStepCount)));
};
export default GuideStepCount;
//# sourceMappingURL=GuideStepCount.js.map