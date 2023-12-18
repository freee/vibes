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
import { SkeletonBase } from '../../lv1/skeleton/SkeletonBase';
import commonProps from '../../utilities/commonProps';
var getWidth = function (size) {
    if (size === void 0) { size = 'medium'; }
    switch (size) {
        case 'small':
            return 6;
        case 'medium':
            return 11;
        case 'large':
            return 24;
    }
};
/**
 * Paragraph用のスケルトンイメージのコンポーネントです。
 * This component provides a skeleton image of Paragraph component.
 */
export var SkeletonParagraph = function (props) { return (React.createElement("div", __assign({}, commonProps(props, 'vb-skeltonParagraph')),
    React.createElement(SkeletonBase, { width: getWidth(props.size), height: 0.875 }))); };
/**
 * @deprecated SkeletonParagraph を使ってください。 Use SkeletonParagraph instead.
 */
export var SkeltonParagraph = SkeletonParagraph;
//# sourceMappingURL=SkeletonParagraph.js.map