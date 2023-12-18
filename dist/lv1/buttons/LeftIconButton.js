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
import Button from './Button';
/**
 * (廃止予定) Buttonコンポーネントを使用してください
 *
 * 編集・削除・新規作成など、ボタン押下によりもたらされれる動作のメタファーやアイキャッチが必要な際に使用してください
 */
export default function LeftIconButton(props) {
    return React.createElement(Button, __assign({}, props, { iconPosition: "left" }));
}
//# sourceMappingURL=LeftIconButton.js.map