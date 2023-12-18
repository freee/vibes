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
import { Stack, StepNumber, Text } from '../../lv1';
import commonProps from '../../utilities/commonProps';
var Stepper = function (props) {
    var steps = props.steps, currentStepIndex = props.currentStepIndex, disabledStepIndex = props.disabledStepIndex, small = props.small;
    var stepperBaseClass = 'vb-stepper';
    return (React.createElement("ul", __assign({}, commonProps(props, stepperBaseClass, { small: small })), steps.map(function (name, i) { return (React.createElement("li", { key: i, className: "".concat(stepperBaseClass, "__listItem") },
        React.createElement("div", { className: "".concat(stepperBaseClass, "__listContent") },
            React.createElement(Stack, { direction: "vertical", gap: small ? 0.25 : 0.5, alignItems: "center" },
                React.createElement(StepNumber, { number: (i + 1).toString(), current: currentStepIndex === i, done: currentStepIndex > i, small: small, disabled: disabledStepIndex.includes(i) }),
                React.createElement(Text, { color: currentStepIndex === i ? 'P5' : 'S9', size: 0.75 }, name))))); })));
};
export default Stepper;
//# sourceMappingURL=Stepper.js.map