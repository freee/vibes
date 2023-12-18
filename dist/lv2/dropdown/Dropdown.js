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
import commonProps from '../../utilities/commonProps';
import DropdownMenuContent from './DropdownMenuContent';
import { Keys } from '../../utilities/keyboard';
/**
 * ドロップダウンメニューのコンポーネントです。
 *
 * 「ボタンを押したらメニューが表示される」UIであれば、DropdownButtonコンポーネントを使用してください。
 */
var Dropdown = function (props) {
    var firstSelectableItemRef = props.firstSelectableItemRef, onRequestClose = props.onRequestClose, contents = props.contents, align = props.align, positionRelative = props.positionRelative;
    return (React.createElement("div", __assign({}, commonProps(props, 'vb-dropdown', {
        alignRight: align === 'right',
        positionRelative: positionRelative,
    })),
        React.createElement("div", { className: "vb-dropdown__body", onKeyDown: function (e) {
                return e.key === Keys.ESC && onRequestClose && onRequestClose();
            } },
            React.createElement(PopupBase, { paddingSize: "zero" },
                React.createElement(DropdownMenuContent, { contents: contents, onRequestClose: onRequestClose, onFocusOut: onRequestClose, firstSelectableItemRef: firstSelectableItemRef })))));
};
export default Dropdown;
//# sourceMappingURL=Dropdown.js.map