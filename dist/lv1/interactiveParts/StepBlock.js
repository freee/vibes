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
import { StepNumber } from './StepNumber';
/**
 * 古いコンポーネントなので使わないでください。丸囲み数字が必要な場合はStepNumberを、リストにしたい場合はStepperを使用してください
 *
 * @deprecated
 */
var StepBlock = function (props) {
    var number = props.number, children = props.children, current = props.current, done = props.done, disabled = props.disabled, small = props.small, marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize;
    var stepperBaseClass = 'vb-stepBlock';
    return (React.createElement("li", __assign({}, commonProps(props, stepperBaseClass, {
        current: current,
        done: !current && done,
        disabled: !current && !done && disabled,
        small: small,
    }, { marginTop: marginTop, marginLeft: marginLeft, marginRight: marginRight, marginBottom: marginBottom, marginSize: marginSize }), { "aria-current": current ? 'step' : 'false' }),
        React.createElement(StepNumber, { number: number || 1, current: current, done: done, disabled: disabled, small: small }),
        children && (React.createElement("span", { className: stepperBaseClass + '__title' }, children))));
};
export default StepBlock;
//# sourceMappingURL=StepBlock.js.map