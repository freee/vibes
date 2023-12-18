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
 * PageTitle用のスケルトンイメージのコンポーネントです。
 * This component provides a skeleton image of PageTitle component.
 */
export var SkeletonPageTitle = function (props) { return (React.createElement("div", __assign({}, commonProps(props, 'vb-skeltonPageTitle')),
    React.createElement(SkeletonBase, { width: 12, height: 1.5 }))); };
/**
 * @deprecated SkeletonPageTitle を使ってください。 Use SkeletonPageTitle instead.
 */
export var SkeltonPageTitle = SkeletonPageTitle;
//# sourceMappingURL=SkeletonPageTitle.js.map