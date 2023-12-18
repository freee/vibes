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
import { Stack } from './Stack';
/**
 * 横方向（水平方向）に等間隔でコンポーネントを並べます。
 *
 * - `direction` が固定である以外は `Stack` と同一です
 * - 縦方向（垂直方向）に等間隔でコンポーネントを並べるには、 `VStack` を使用してください
 */
export var HStack = function (props) { return (React.createElement(Stack, __assign({ direction: "horizontal" }, props))); };
//# sourceMappingURL=HStack.js.map