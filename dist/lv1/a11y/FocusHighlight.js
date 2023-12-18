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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import commonProps from '../../utilities/commonProps';
/**
 * フォーカスインジケーターを非表示にしている要素を `children` に入れ、フォーカスインジケーターを表示させるためのコンポーネントです。
 *
 * ほとんどのVibesのコンポーネントは、フォーカスインジケーターの指定をしていないため、ブラウザが提供するものが使用されます。
 * そのため、ほとんどの場所ではこのコンポンーネントを使用する必要はありません。
 * ブラウザが提供するフォーカスインジケーターの表示では視認性が低いなどの問題がある場合にのみ、使用してください。
 */
export var FocusHighlight = function (_a) {
    var children = _a.children, inline = _a.inline, highlightStyle = _a.highlightStyle, cornerStyle = _a.cornerStyle, _b = _a.width, width = _b === void 0 ? 'fit-content' : _b, props = __rest(_a, ["children", "inline", "highlightStyle", "cornerStyle", "width"]);
    return (React.createElement("span", __assign({}, commonProps(props, 'vb-focusHighlight', {
        inline: inline,
        inset: highlightStyle === 'inset',
        round: cornerStyle === 'round',
        full: width === 'full',
    })), children));
};
//# sourceMappingURL=FocusHighlight.js.map