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
    if (size === void 0) { size = 'default'; }
    switch (size) {
        case 'default':
            return 5;
        case 'large':
            return 18;
    }
};
/**
 * 画像サムネイルなど、大きめの正方形・長方形用のスケルトンイメージのコンポーネントです。
 * This component provides a skeleton images for larger squares or rectangles, such as image thumbnails.
 */
export var SkeletonRectangle = function (props) { return (React.createElement("div", __assign({}, commonProps(props, 'vb-skeltonRectangle')),
    React.createElement(SkeletonBase, { width: getWidth(props.size), height: 5 }))); };
/**
 * @deprecated SkeletonRectangle を使ってください。 Use SkeletonRectangle instead.
 */
export var SkeltonRectangle = SkeletonRectangle;
//# sourceMappingURL=SkeletonRectangle.js.map