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
import commonProps from '../../utilities/commonProps';
import Item from './Item';
import { Keys } from '../../utilities/keyboard';
var getFocusableItemsOfList = function (listEl) {
    return listEl.querySelectorAll('.vb-dropdownItem--selectable:not(.vb-dropdownItem--disabled) button, .vb-dropdownItem--selectable:not(.vb-dropdownItem--disabled) a, .vb-dropdownItem--checkbox input:not([disabled])');
};
var getIndexOfTargetElement = function (targetEl, items) { return Array.prototype.indexOf.call(items, targetEl); };
var handleKeyDownSelectableItem = function (e, selfRef, onFocusOut) {
    var current = selfRef instanceof HTMLUListElement
        ? selfRef
        : typeof selfRef === 'object'
            ? selfRef === null || selfRef === void 0 ? void 0 : selfRef.current
            : null;
    switch (e.key) {
        case Keys.UP:
            e.preventDefault();
            if (current) {
                var items = getFocusableItemsOfList(current);
                var currentIndex = getIndexOfTargetElement(e.target, items);
                if (currentIndex > 0) {
                    var prev = items[currentIndex - 1];
                    if (prev instanceof HTMLButtonElement ||
                        prev instanceof HTMLAnchorElement ||
                        prev instanceof HTMLInputElement) {
                        prev.focus();
                    }
                }
                else if (currentIndex === 0) {
                    onFocusOut && onFocusOut('upward');
                }
            }
            break;
        case Keys.DOWN:
            e.preventDefault();
            if (current) {
                var items = getFocusableItemsOfList(current);
                var currentIndex = getIndexOfTargetElement(e.target, items);
                if (currentIndex >= 0 && currentIndex < items.length - 1) {
                    var next = items[currentIndex + 1];
                    if (next instanceof HTMLButtonElement ||
                        next instanceof HTMLAnchorElement ||
                        next instanceof HTMLInputElement) {
                        next.focus();
                    }
                }
                else if (currentIndex === items.length - 1) {
                    onFocusOut && onFocusOut('downward');
                }
            }
            break;
    }
};
/**
 * ドロップダウンメニューの内部コンポーネントです。
 *
 * - 単体で使用される想定のないコンポーネントです。PopupBaseに包んで使用してください。
 * - ボタンをクリックした際に表示されるような場合はDropdownButton、そのボタン部分をカスタマイズしたい場合はWithDropdownを使用してください。
 */
var DropdownMenuContentInternal = function (props, ref) {
    var _a;
    var selfRef = React.useRef(null);
    var firstSelectableItemRef = props.firstSelectableItemRef, _b = props.menuMaxHeightOffset, menuMaxHeightOffset = _b === void 0 ? 0 : _b, onRequestClose = props.onRequestClose, onFocusOut = props.onFocusOut, contents = props.contents;
    var forwardFocus = function (e) {
        if (e.target !== e.currentTarget) {
            return;
        }
        var firstElm = getFocusableItemsOfList(e.currentTarget)[0];
        if (firstElm instanceof HTMLAnchorElement ||
            firstElm instanceof HTMLButtonElement ||
            firstElm instanceof HTMLInputElement) {
            firstElm.focus();
        }
    };
    var _c = React.useState(), menuMaxHeight = _c[0], setMenuMaxHeight = _c[1];
    React.useEffect(function () {
        if (selfRef === null || selfRef === void 0 ? void 0 : selfRef.current) {
            var rect = selfRef.current.getBoundingClientRect();
            var windowHeight = window.innerHeight;
            setMenuMaxHeight(windowHeight - rect.top - menuMaxHeightOffset);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [(_a = selfRef === null || selfRef === void 0 ? void 0 : selfRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().top]);
    var selectableItemIdxCounter = 0;
    return (React.createElement("div", __assign({}, commonProps(props, 'vb-dropdownMenuContent'), { 
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex: -1, 
        // ここにフォーカスが来たら最初の選択可能アイテムにフォーカスを移動する
        onFocus: forwardFocus, ref: ref }),
        React.createElement("ul", { className: "vb-dropdownMenuContent__list", role: "menu", ref: selfRef, style: __assign(__assign({}, (menuMaxHeight
                ? { maxHeight: "min(60vh, calc(".concat(menuMaxHeight, "px - 1rem)) ") }
                : {})), { minHeight: '2.5rem' }), 
            // ここにtabIndexをつけているのは、親要素のtabIndex=-1へのフォーカス移動を阻止するため
            tabIndex: -1 }, contents.map(function (content, i) {
            var isAvailable = (content.type === 'selectable' || content.type === 'checkbox') &&
                !content.disabled;
            // selectableなcontentの中で何番目か
            var selectableItemIdx = isAvailable
                ? selectableItemIdxCounter++
                : 0;
            var itemRef = isAvailable && selectableItemIdx === 0
                ? firstSelectableItemRef
                : undefined;
            return (React.createElement(Item, { key: i, content: content, onKeyDown: function (e) {
                    return handleKeyDownSelectableItem(e, selfRef, onFocusOut);
                }, selectableItemRef: itemRef, onRequestClose: onRequestClose }));
        }))));
};
var DropdownMenuContent = React.forwardRef(DropdownMenuContentInternal);
export default DropdownMenuContent;
//# sourceMappingURL=DropdownMenuContent.js.map