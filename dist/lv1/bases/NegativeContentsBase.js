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
import { useResponsive } from '../../utilities/VibesProvider';
/**
 * `ContentsBase` のpaddingを打ち消すための専用コンポーネントです。 `ContentsBase` の左右のpaddingを打ち消します。末尾に置いた場合（ `:last-child` となる場合）には下方向のmarginを打ち消します。
 *
 * * 必ず `ContentsBase` の直下に配置してください（下側のマージンの打ち消しのため）
 * * `ContentsBase` に `paddingSize` を指定している場合は、`contentsBasePaddingSize` にそれと同じ値をセットしてください
 */
export var NegativeContentsBase = function (props) {
    var children = props.children, contentsBasePaddingSize = props.contentsBasePaddingSize;
    var baseClass = 'vb-negativeContentsBase';
    var classModifiers = {
        responsive: useResponsive(),
        negativeMarginSmall: contentsBasePaddingSize === 'small',
        negativeMarginLarge: contentsBasePaddingSize === 'large',
    };
    return (React.createElement("div", __assign({}, commonProps(props, baseClass, classModifiers)), children));
};
//# sourceMappingURL=NegativeContentsBase.js.map