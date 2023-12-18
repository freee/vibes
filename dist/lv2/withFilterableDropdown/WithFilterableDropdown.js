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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import * as React from 'react';
import { pickCommonProps } from '../../utilities/commonProps';
import SearchField from '../../lv1/forms/SearchField';
import WithPopup from '../withPopup/WithPopup';
import PopupBase from '../../lv1/bases/PopupBase';
import DropdownMenuContent from '../dropdown/DropdownMenuContent';
import Note from '../../lv1/typography/Note';
import { Keys } from '../../utilities/keyboard';
import Loading from '../../lv1/Loading';
import MarginBase from '../../lv1/bases/MarginBase';
var WithFilterableDropdownContent = function (props) {
    var _a;
    var controlRef = props.controlRef, dropdownContents = props.dropdownContents, filterValue = props.filterValue, firstSelectableItemRef = props.firstSelectableItemRef, handleFilterChange = props.handleFilterChange, isLoading = props.isLoading, menuContentRef = props.menuContentRef, noDataMessage = props.noDataMessage, noResultsMessage = props.noResultsMessage, renderDropdownBottomContent = props.renderDropdownBottomContent, requestClose = props.requestClose, visibleContents = props.visibleContents;
    var _b = React.useState(), menuMaxHeightOffset = _b[0], setMenuMaxHeightOffset = _b[1];
    var bottomContentRef = React.useRef(null);
    React.useEffect(function () {
        var _a;
        if (bottomContentRef === null || bottomContentRef === void 0 ? void 0 : bottomContentRef.current) {
            setMenuMaxHeightOffset((_a = bottomContentRef === null || bottomContentRef === void 0 ? void 0 : bottomContentRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().height);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [(_a = bottomContentRef === null || bottomContentRef === void 0 ? void 0 : bottomContentRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().height]);
    return (React.createElement("div", { className: "vb-withFilterableDropdown__popup" },
        React.createElement(SearchField, { mb: 1, label: "\u691C\u7D22", width: "full", value: filterValue, onKeyDown: function (e) {
                var _a, _b;
                if (
                // 変換中のイベントを無視する。isComposingがないブラウザでは（IEのこと）、全て無視する
                !('isComposing' in e.nativeEvent) ||
                    e.nativeEvent.isComposing) {
                    return;
                }
                if (e.key === Keys.DOWN) {
                    //下キーならメニューにフォーカス（すると1個めの項目にフォーカスする）
                    (_a = menuContentRef.current) === null || _a === void 0 ? void 0 : _a.focus();
                    e.preventDefault();
                }
                else if (e.key === Keys.UP) {
                    //上キーなら開閉ボタンにフォーカス
                    (_b = controlRef.current) === null || _b === void 0 ? void 0 : _b.focus();
                    e.preventDefault();
                }
            }, onChange: handleFilterChange, ref: firstSelectableItemRef }),
        visibleContents.length > 0 ? (React.createElement(MarginBase, { mr: -1, ml: -1 },
            React.createElement(Loading, { isLoading: !!isLoading },
                React.createElement(DropdownMenuContent, { contents: visibleContents, menuMaxHeightOffset: renderDropdownBottomContent ? menuMaxHeightOffset : 0, onRequestClose: requestClose, onFocusOut: function (direction) {
                        var _a, _b, _c;
                        if (direction === 'upward') {
                            (_a = firstSelectableItemRef.current) === null || _a === void 0 ? void 0 : _a.focus();
                        }
                        else {
                            if (renderDropdownBottomContent) {
                                // bottomContentRef.current?.focus();
                                (_b = controlRef.current) === null || _b === void 0 ? void 0 : _b.focus();
                            }
                            else {
                                (_c = controlRef.current) === null || _c === void 0 ? void 0 : _c.focus();
                            }
                        }
                    }, ref: menuContentRef })))) : !isLoading &&
            filterValue.length > 0 &&
            dropdownContents.length > 0 ? (React.createElement("div", { className: "vb-withFilterableDropdown__note" },
            React.createElement(Note, { textAlign: "center" }, noResultsMessage !== null && noResultsMessage !== void 0 ? noResultsMessage : '該当する候補がありません'))) : (React.createElement("div", { className: "vb-withFilterableDropdown__note" },
            React.createElement(Note, { textAlign: "center" }, noDataMessage !== null && noDataMessage !== void 0 ? noDataMessage : 'データが登録されていません'))),
        renderDropdownBottomContent && (React.createElement("div", { className: "vb-withFilterableDropdown__footer", 
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            tabIndex: 0, ref: bottomContentRef }, renderDropdownBottomContent(requestClose)))));
};
/**
 * ボタン部分のカスタマイズがどうしても必要な場合を除いて `FilterableDropdownButton` を使用してください。
 */
var WithFilterableDropdown = function (props) {
    var disabled = props.disabled, dropdownContents = props.dropdownContents, _a = props.fixedItems, fixedItems = _a === void 0 ? [] : _a, isLoading = props.isLoading, onFilterChange = props.onFilterChange, onOpen = props.onOpen, render = props.render, noResultsMessage = props.noResultsMessage, noDataMessage = props.noDataMessage, renderDropdownBottomContent = props.renderDropdownBottomContent;
    var _b = React.useState(''), filterValue = _b[0], setFilterValue = _b[1];
    var menuContentRef = React.useRef(null);
    var handleFilterChange = function (e) {
        setFilterValue(e.target.value);
        onFilterChange && onFilterChange(e);
    };
    var filteredContents = filterValue.length > 0
        ? dropdownContents.filter(function (c) {
            return (c.type === 'checkbox' && c.checked) ||
                (typeof c.text === 'string' && c.text.indexOf(filterValue) >= 0) ||
                (c.keywords &&
                    c.keywords.some(function (k) {
                        return filterValue
                            .toLowerCase()
                            .split(/\s+/)
                            .every(function (word) { return k.toLowerCase().indexOf(word) >= 0; });
                    }));
        })
        : dropdownContents;
    var visibleContents = __spreadArray(__spreadArray([], filteredContents, true), fixedItems
        .filter(function (fixedItem) { return fixedItem.isVisible(filterValue); })
        .map(function (_a) {
        var label = _a.label, onSelect = _a.onSelect, disableOnRequestClose = _a.disableOnRequestClose;
        return ({
            type: 'selectable',
            text: typeof label === 'function' ? label(filterValue) : label,
            onClick: function () { return onSelect(filterValue); },
            disableOnRequestClose: disableOnRequestClose,
        });
    }), true);
    var memorizedOnClose = React.useCallback(function () { return setFilterValue(''); }, [setFilterValue]);
    return (React.createElement(WithPopup, __assign({ onClose: memorizedOnClose, render: render, disabled: disabled, onOpen: onOpen, renderPopup: function (requestClose, firstSelectableItemRef, controlRef) { return (React.createElement(PopupBase, { paddingSize: "zero" },
            React.createElement(WithFilterableDropdownContent, { handleFilterChange: handleFilterChange, visibleContents: visibleContents, isLoading: !!isLoading, firstSelectableItemRef: firstSelectableItemRef, menuContentRef: menuContentRef, controlRef: controlRef, filterValue: filterValue, dropdownContents: dropdownContents, noResultsMessage: noResultsMessage, noDataMessage: noDataMessage, requestClose: requestClose, renderDropdownBottomContent: renderDropdownBottomContent }))); } }, pickCommonProps(props))));
};
export default WithFilterableDropdown;
//# sourceMappingURL=WithFilterableDropdown.js.map