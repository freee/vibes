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
            return 4;
        case 'medium':
            return 7.5;
        case 'large':
            return 11;
    }
};
var getHeight = function (size) {
    if (size === void 0) { size = 'medium'; }
    switch (size) {
        case 'small':
            return 1.5;
        case 'medium':
            return 2.25;
        case 'large':
            return 3;
    }
};
/**
 * ボタンやフォームのフィールドなど用のスケルトンイメージのコンポーネントです
 * This component provides skeleton images for buttons, form fields, and so on.
 */
export var SkeletonBlock = function (props) { return (React.createElement("div", __assign({}, commonProps(props, 'vb-skeltonBlock', {
    small: props.size === 'small',
    large: props.size === 'large',
})),
    React.createElement(SkeletonBase, { width: getWidth(props.size), height: getHeight(props.size) }))); };
/**
 * @deprecated SkeletonBlock を使ってください。 Use SkeletonBlock instead.
 */
export var SkeltonBlock = SkeletonBlock;
//# sourceMappingURL=SkeletonBlock.js.map