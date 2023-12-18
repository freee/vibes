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
 * マイナスのマージンを持つ領域です。このコンポーネントは将来的に廃止する可能性があります。かわりに
 * マージンをつけたいコンポーネントや `MarginBase` コンポーネントの `ma`, `mb`, `ml`, `mr`, `mt` 属性にマイナス値を渡してください。
 */
var NegativeMarginBase = function (props) {
    var children = props.children, _a = props.marginSize, marginSize = _a === void 0 ? 'large' : _a, top = props.top, left = props.left, right = props.right, bottom = props.bottom;
    return (React.createElement("div", __assign({}, commonProps(props, "vb-negativeMargin--".concat(marginSize), {
        top: top,
        left: left,
        right: right,
        bottom: bottom,
    })), children));
};
export default NegativeMarginBase;
//# sourceMappingURL=NegativeMarginBase.js.map