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
var widthMap = { xSmall: 2, small: 4, medium: 7, large: 16, full: 12 };
/**
 * TextField 等のスケルトンイメージのコンポーネントです。
 * Skeleton image component for TextField related components.
 */
export var SkeletonInput = function (props) {
    var small = props.small, large = props.large, width = props.width;
    return (React.createElement("span", __assign({}, commonProps(props, 'vb-skeletonInput', {
        small: small,
        large: large,
        widthXSmall: width === 'xSmall',
        widthSmall: width === 'small',
        widthMedium: width === 'medium' || !width,
        widthLarge: width === 'large',
        widthFull: width === 'full',
    })),
        React.createElement(SkeletonBase, { width: widthMap[width || 'medium'], height: small ? 0.75 : large ? 1.5 : 1 })));
};
//# sourceMappingURL=SkeletonInput.js.map