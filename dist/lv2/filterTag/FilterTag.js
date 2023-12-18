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
import { MdArrowDropDown } from 'react-icons/md';
import commonProps from '../../utilities/commonProps';
import { WithPopup } from '..';
/**
 * フィルタなどの絞り込み処理において、下記を満たす表示となります
 * - 項目毎に存在
 * - 適用中、適用なしの状態を持つ
 * - クリック可能で、その項目の変更を行う導線を表示できる
 *
 * ボタンをクリックすることで、項目に合わせたポップアップを表示します。
 * ポップアップの中身は `renderPopup` prop を用いて指定します。
 */
var FilterTag = function (_a) {
    var renderPopup = _a.renderPopup, label = _a.label, value = _a.value, props = __rest(_a, ["renderPopup", "label", "value"]);
    var baseClass = 'vb-filterTag';
    return (React.createElement("span", __assign({}, commonProps(props, baseClass)),
        React.createElement(WithPopup, { render: function (popupId, isOpen, controlRef) { return (React.createElement("button", { ref: controlRef, className: "".concat(baseClass, "__block ").concat(value != null && value !== '' ? 'active' : ''), "aria-controls": popupId, "aria-expanded": isOpen },
                React.createElement("span", { className: "".concat(baseClass, "__body") },
                    label,
                    value != null && value !== '' ? '：' : '',
                    value),
                React.createElement(MdArrowDropDown, { className: "".concat(baseClass, "__icon") }))); }, renderPopup: renderPopup })));
};
export default FilterTag;
//# sourceMappingURL=FilterTag.js.map