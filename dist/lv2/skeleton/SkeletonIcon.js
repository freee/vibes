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
var getLength = function (size) {
    if (size === void 0) { size = 'medium'; }
    switch (size) {
        case 'small':
            return 1.5;
        case 'medium':
            return 2;
        case 'large':
            return 3;
    }
};
/**
 * アイコン用のスケルトンイメージのコンポーネントです。
 * This component provides a skeleton image of icons.
 */
export var SkeletonIcon = function (props) { return (React.createElement("div", __assign({}, commonProps(props, 'vb-skeltonIcon', {
    small: props.size === 'small',
    large: props.size === 'large',
})),
    React.createElement(SkeletonBase, { width: getLength(props.size), height: getLength(props.size) }))); };
/**
 * @deprecated SkeletonIcon を使ってください。 Use SkeletonIcon instead.
 */
export var SkeltonIcon = SkeletonIcon;
//# sourceMappingURL=SkeletonIcon.js.map