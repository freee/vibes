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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import commonProps from '../../utilities/commonProps';
/**
 * インポートや外部サービス連携など、時間のかかる処理の進捗表示に使用するプログレスバーです。
 *
 * - 進捗を数値化できる場合は `value` `maxValue` を使用し、ユーザーがあとどれくらい待てば良いのか予測できるようにしてください
 * - 進捗を数値化できない場合は `indeterminate` を使用してください。こちらの使用は可能なかぎり避け、なるべく数値化できるようにしてください
 * - OSのアクセシビリティ設定等で「視差効果を減らす」「動きを減らす」設定を有効化している場合、 `indeterminate` 時にはアニメーションしません
 *
 */
export var ProgressBar = function (_a) {
    var value = _a.value, _b = _a.maxValue, maxValue = _b === void 0 ? 100 : _b, _c = _a.indeterminate, indeterminate = _c === void 0 ? false : _c, _d = _a.width, width = _d === void 0 ? 'default' : _d, ariaLabel = _a.ariaLabel, ariaLabelledby = _a.ariaLabelledby, props = __rest(_a, ["value", "maxValue", "indeterminate", "width", "ariaLabel", "ariaLabelledby"]);
    var className = 'vb-progressBar';
    var status = function () {
        if (value === 0 || value === undefined) {
            return 'initial';
        }
        else if (value === maxValue) {
            return 'complete';
        }
        else {
            return 'progressing';
        }
    };
    return (React.createElement("span", __assign({}, commonProps(props, className, {
        widthFull: width === 'full',
        widthLarge: width === 'large',
        widthSmall: width === 'small',
        widthXSmall: width === 'xSmall',
        progressing: status() === 'progressing',
    }), { role: "progressbar", "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, "aria-valuemax": indeterminate ? undefined : maxValue, "aria-valuenow": indeterminate ? undefined : value }), indeterminate ? (React.createElement("span", { className: "".concat(className, "__indeterminateBar") })) : (React.createElement("span", { className: "".concat(className, "__valueBar ").concat(className, "__valueBar--").concat(status()), style: {
            transform: "translate(".concat((value ? (100 * value) / maxValue : 0) - 100, "%, 0)"),
        } }))));
};
//# sourceMappingURL=ProgressBar.js.map