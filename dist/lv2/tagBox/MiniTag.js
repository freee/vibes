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
import { MdClear } from 'react-icons/md';
import commonProps from '../../utilities/commonProps';
import { VisuallyHidden } from '../../lv1';
/**
 * TagBoxよりも小さいサイズの、タグ表示用コンポーネントです。コンボボックスの内部などで使う想定です。
 *
 * コンボボックスの内部以外では、**TagBoxを使用することを強く推奨します**。
 * どうしてもこのコンポーネントである必要がある場合のみ、アクセシビリティに細心の注意を払ったうえで使ってください。
 *
 * - サイズを小さくするため、タグの種別が非表示になっています
 *   - 可能な限り、色と種別の対応をユーザーが理解できるようにしてください
 * - 色と種別の対応は、Vibes内では定義していません。プロダクト内では一貫したものを使用してください
 * - 種別 (`type`) はoptionalにしていますが、複数の種別を並べて表示する場合には必ず指定してください
 *   - VisuallyHiddenにて、スクリーンリーダーからは読み取れるようにしてあります
 */
export var MiniTag = function (_a) {
    var type = _a.type, children = _a.children, disabledRemoveButton = _a.disabledRemoveButton, removable = _a.removable, onRemove = _a.onRemove, _b = _a.color, color = _b === void 0 ? 'YE' : _b, removeButtonTabIndex = _a.removeButtonTabIndex, props = __rest(_a, ["type", "children", "disabledRemoveButton", "removable", "onRemove", "color", "removeButtonTabIndex"]);
    var baseClass = 'vb-miniTag';
    var classModifier = {
        removable: removable,
        RE: color === 'RE',
        OR: color === 'OR',
        YE: color === 'YE',
        YG: color === 'YG',
        GR: color === 'GR',
        BG: color === 'BG',
        PU: color === 'PU',
        GY: color === 'GY',
    };
    var bodyClassName = "".concat(baseClass, "__body");
    var removeButtonColorClassName = " ".concat(baseClass, "__removeButton--").concat(color);
    return (React.createElement("span", __assign({}, commonProps(props, baseClass, classModifier)),
        React.createElement("span", { className: "".concat(baseClass, "__inner") },
            React.createElement("span", { className: bodyClassName, title: children }, children),
            type && React.createElement(VisuallyHidden, null,
                "(",
                type,
                ")"),
            removable && (React.createElement("button", { className: "".concat(baseClass, "__removeButton").concat(disabledRemoveButton
                    ? " ".concat(baseClass, "__removeButton--disabled")
                    : '').concat(removeButtonColorClassName), "aria-label": "".concat(children).concat(type ? "(".concat(type, ")") : '', "\u3092\u524A\u9664"), tabIndex: removeButtonTabIndex, onClick: function () { return onRemove && onRemove(); } },
                React.createElement(MdClear, { className: "".concat(baseClass, "__removeIcon") }))))));
};
//# sourceMappingURL=MiniTag.js.map