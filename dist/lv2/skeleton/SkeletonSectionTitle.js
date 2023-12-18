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
/**
 * SectionTitle用のスケルトンイメージのコンポーネントです。
 * This component provides a skeleton image of SectionTitle component.
 */
export var SkeletonSectionTitle = function (props) { return (React.createElement("div", __assign({}, commonProps(props, 'vb-skeltonSectionTitle')),
    React.createElement(SkeletonBase, { width: 9, height: 1 }))); };
/**
 * @deprecated SkeletonSectionTitle を使ってください。 Use SkeletonSectionTitle instead.
 */
export var SkeltonSectionTitle = SkeletonSectionTitle;
//# sourceMappingURL=SkeletonSectionTitle.js.map