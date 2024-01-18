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
import PopupBase from '../../lv1/bases/PopupBase';
import { pickCommonProps } from '../../utilities/commonProps';
import DropdownMenuContent from '../dropdown/DropdownMenuContent';
import WithPopup from '../withPopup/WithPopup';
/**
 * ドロップダウンメニューを実装するためのコンポーネントです。
 *
 * - ボタンからドロップダウンメニューを表示したい場合は、 `DropdownButton` コンポーネントを使用してください
 * - どうしてもという場合でなければ `DropdownButton` コンポーネントを使用してください。このコンポーネントは扱いが面倒です。
 * - 開閉ボタンを `Button` `IconOnlyButton` 以外にしたい場合のみ、こちらのコンポーネントを使用してください
 * - `renderButton` の引数は以下のように使用してください
 *   - `dropdownId` を開閉ボタンの `aria-controls` に渡してください
 *   - `isOpen` を開閉ボタンの `aria-expanded` に渡してください
 *   - `buttonRef` を開閉ボタンの `ref` に渡してください
 */
var WithDropdown = function (props) {
    var renderButton = props.renderButton, disabled = props.disabled, dropdownContents = props.dropdownContents, onOpen = props.onOpen, onClose = props.onClose;
    return (React.createElement(WithPopup, __assign({ disabled: disabled, render: renderButton, renderPopup: function (requestClose, firstSelectableRef, controlRef) { return (React.createElement(PopupBase, { paddingSize: "zero" },
            React.createElement(DropdownMenuContent, { contents: dropdownContents, onRequestClose: requestClose, onFocusOut: function () { var _a; return (_a = controlRef.current) === null || _a === void 0 ? void 0 : _a.focus(); }, ref: firstSelectableRef }))); }, onOpen: onOpen, onClose: onClose }, pickCommonProps(props))));
};
export default WithDropdown;
//# sourceMappingURL=WithDropdown.js.map