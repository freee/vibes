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
import { MdSearch } from 'react-icons/md';
import vbClassNames from '../../utilities/vbClassNames';
import commonProps from '../../utilities/commonProps';
import PopupBase from '../../lv1/bases/PopupBase';
import { Text } from '../../lv1/typography/Text';
var IndexSearchFieldInner = function (props, ref) {
    var id = props.id, label = props.label, labelledby = props.labelledby, placeholder = props.placeholder, name = props.name, value = props.value, required = props.required, autofocus = props.autofocus, disabled = props.disabled, width = props.width, maxLength = props.maxLength, onUpdate = props.onUpdate, searchTarget = props.searchTarget, forceOpen = props.forceOpen, onChange = props.onChange, onInput = props.onInput, onFocus = props.onFocus, onBlur = props.onBlur, onKeyDown = props.onKeyDown, onKeyUp = props.onKeyUp, marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize;
    var _a = React.useState(value || ''), searchWord = _a[0], setSearchWord = _a[1];
    // 検索入力欄が開いている（縮小表示されずに文字入力できる）
    var _b = React.useState(searchWord !== ''), isSearchAreaOpen = _b[0], setIsSearchAreaOpen = _b[1];
    // SearchField か ポップアップにフォーカスが当たっている
    var _c = React.useState(false), isSearchAreaFocused = _c[0], setIsSearchAreaFocused = _c[1];
    // 日本語入力中かどうか
    var _d = React.useState(false), isComposing = _d[0], setIsComposing = _d[1];
    var popupRef = React.useRef(null);
    // valueの変更をstateに反映
    // 検索文字がある場合に入力欄を開く（フォーカスは当てない）
    React.useEffect(function () {
        setSearchWord(value || '');
        setIsSearchAreaOpen((value || '') !== '');
    }, [value]);
    // 検索文字列が空の状態で検索フィールド外にフォーカスを移動した場合、検索を終了し閉じる
    var cancelSearch = React.useCallback(function () {
        setSearchWord('');
        onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(undefined);
        setIsSearchAreaOpen(false);
        setIsSearchAreaFocused(false);
    }, [onUpdate, setSearchWord]);
    // 検索文字列を更新する
    var updateSearchWord = React.useCallback(function () {
        // 日本語入力中はスルー
        if (isComposing)
            return;
        // 文字列に変化がない場合は検索しない
        if (searchWord === value)
            return;
        onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(searchWord);
    }, [searchWord, isComposing, onUpdate, value]);
    var fieldClass = 'vb-indexSearchField';
    var inputClass = fieldClass + '__input';
    var iconClass = fieldClass + '__icon';
    var dropdownClass = fieldClass + '__dropdown';
    var dropdownItemClass = fieldClass + '__dropdownItem';
    var inputClassName = vbClassNames(inputClass, {
        modifier: {
            widthXSmall: width === 'xSmall',
            widthSmall: width === 'small',
            widthMedium: width === 'medium' || !width,
            widthLarge: width === 'large',
            widthFull: width === 'full',
            disabled: disabled,
            searchAreaClosed: !isSearchAreaOpen && !forceOpen,
        },
    });
    var iconClassName = vbClassNames(iconClass, {
        modifier: {
            searchAreaClosed: !isSearchAreaOpen && !forceOpen,
        },
    });
    var dropdownClaassName = vbClassNames(dropdownClass, {
        modifier: {
            searchAreaOpen: (isSearchAreaOpen || forceOpen) && isSearchAreaFocused,
        },
    });
    return (React.createElement("div", __assign({}, commonProps(props, fieldClass, { widthFull: width === 'full' }, { marginBottom: marginBottom, marginLeft: marginLeft, marginRight: marginRight, marginSize: marginSize, marginTop: marginTop })),
        React.createElement("input", { id: id, type: "search", name: name && name, value: value && value, className: inputClassName, placeholder: placeholder && placeholder, disabled: disabled && true, required: required && true, autoFocus: autofocus && true, maxLength: maxLength, onChange: function (e) {
                setSearchWord(e.target.value);
                onChange === null || onChange === void 0 ? void 0 : onChange(e);
            }, onInput: onInput, onFocus: function (e) {
                setIsSearchAreaFocused(true);
                onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
            }, onBlur: function (e) {
                if (e.relatedTarget === popupRef.current)
                    return;
                if (searchWord === '') {
                    cancelSearch();
                    return;
                }
                updateSearchWord();
                setIsSearchAreaFocused(false);
                onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
            }, onKeyDown: function (e) {
                if (e.key === 'Enter') {
                    if (!isSearchAreaOpen && !forceOpen) {
                        setIsSearchAreaOpen(true);
                    }
                    updateSearchWord();
                }
                if (e.key === ' ') {
                    if (!isSearchAreaOpen && !forceOpen) {
                        setIsSearchAreaOpen(true);
                        e.preventDefault();
                    }
                }
                onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
            }, onKeyUp: onKeyUp, "aria-label": label ? label : "".concat((searchTarget === null || searchTarget === void 0 ? void 0 : searchTarget.join('、')) || '対象', "\u306E\u6587\u5B57\u691C\u7D22"), "aria-labelledby": labelledby, "aria-required": required && true, ref: ref, onClick: function () {
                if (!isSearchAreaOpen && !forceOpen) {
                    setIsSearchAreaOpen(true);
                    setIsSearchAreaFocused(true);
                }
            }, 
            // 日本語入力中にEnterキーを押下したときに、入力確定(検索開始)をしないようにする
            onCompositionStart: function () { return setIsComposing(true); }, onCompositionEnd: function () { return setIsComposing(false); } }),
        React.createElement(MdSearch, { className: iconClassName }),
        React.createElement("div", { className: dropdownClaassName },
            React.createElement(PopupBase, { paddingSize: "zero" },
                React.createElement("div", { role: "button", className: dropdownItemClass, ref: popupRef, onClick: function () {
                        updateSearchWord();
                        setIsSearchAreaFocused(false);
                    }, tabIndex: (isSearchAreaOpen || forceOpen) && isSearchAreaFocused ? 0 : -1, onKeyDown: function (e) {
                        if (e.code === 'Enter') {
                            updateSearchWord();
                            setIsSearchAreaFocused(false);
                        }
                    }, onBlur: function (e) {
                        if (e.relatedTarget === ref)
                            return;
                        if (searchWord === '') {
                            cancelSearch();
                            return;
                        }
                        updateSearchWord();
                        setIsSearchAreaFocused(false);
                    } },
                    React.createElement(Text, { size: 0.875 },
                        searchWord === '' ? '' : "\u300C".concat(searchWord, "\u300D\u3092\u542B\u3080"),
                        (searchTarget === null || searchTarget === void 0 ? void 0 : searchTarget.join('、')) || '対象',
                        "\u3092\u691C\u7D22"))))));
};
var IndexSearchField = React.forwardRef(IndexSearchFieldInner);
export default IndexSearchField;
//# sourceMappingURL=IndexSearchField.js.map