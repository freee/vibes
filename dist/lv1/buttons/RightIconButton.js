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
 * 「別ウインドウで開く」「ポップアップ表示」などボタン押下時の挙動を示す必要がある際に使用してください
 */
export default function RightIconButton(props) {
    return React.createElement(Button, __assign({}, props, { iconPosition: "right" }));
}
//# sourceMappingURL=RightIconButton.js.map