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
/**
 * 古いコンポーネントなので使わないでください
 *
 * @deprecated
 */
var StepBorder = function (props) {
    var done = props.done, separator = props.separator;
    var stepperBaseClass = 'vb-stepBorder';
    return (React.createElement("li", __assign({}, commonProps(props, stepperBaseClass, { done: done, separator: separator }), { "aria-hidden": "true" })));
};
export default StepBorder;
//# sourceMappingURL=StepBorder.js.map