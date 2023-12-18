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
import { MdDateRange } from 'react-icons/md';
import TextField from '../../lv1/forms/TextField';
import { pickMarginClassProps, } from '../../utilities/marginClasses';
import commonProps, { pickCommonDataProps, } from '../../utilities/commonProps';
import Datepicker from '../../lv2/calendar/DatePicker';
import { parse, addDays, isValid, format } from 'date-fns';
import { Keys } from '../../utilities/keyboard';
import { isValidDateInRange, formatDate, getValidDateNearestTarget, formatDayOfWeek, } from '../../utilities/date';
import PopupBase from '../../lv1/bases/PopupBase';
import useUniqueId from '../../hooks/useUniqueId';
import VisuallyHidden from '../../lv1/a11y/VisuallyHidden';
import ScrollPortal from '../../utilities/ScrollPortal';
import { FocusTrap } from '../../lv1';
import { pickFunctionalMarginProps } from '../../utilities/functionalMarginClasses';
var DATE_FORMAT = /^\d{4}[-/\s]?\d{2}[-/\s]?\d{2}$/;
var DateInputInner = function (props, ref) {
    var value = props.value, minDate = props.minDate, maxDate = props.maxDate, id = props.id, label = props.label, labelledby = props.labelledby, placeholder = props.placeholder, name = props.name, required = props.required, autofocus = props.autofocus, disabled = props.disabled, error = props.error, small = props.small, width = props.width, onChange = props.onChange, onFocus = props.onFocus, onBlur = props.onBlur, onInput = props.onInput, onKeyDown = props.onKeyDown;
    var _a = React.useState(value && isValidDateInRange(value, minDate, maxDate)
        ? formatDate(value)
        : ''), showingValue = _a[0], setShowingValue = _a[1];
    var _b = React.useState(false), showPicker = _b[0], setShowPicker = _b[1];
    var _c = React.useState('left'), horizontalPosition = _c[0], setHorizontalPosition = _c[1];
    var wrapperRef = React.useRef(null);
    var datePickerRef = React.useRef(null);
    React.useEffect(function () {
        if (!showPicker) {
            return;
        }
        var handleClickOutside = function (e) {
            // Shadow DOM 内部で発火した場合、e.target は ShadowRoot になるので、composedPath() で最初の要素を取得する
            var target = !!window.ShadowRoot &&
                e.target instanceof Element &&
                e.target.shadowRoot instanceof ShadowRoot
                ? e.composedPath()[0]
                : e.target;
            // 外側を押した時、DatePicker を閉じる
            if (wrapperRef.current &&
                !wrapperRef.current.contains(target) &&
                datePickerRef.current &&
                !datePickerRef.current.contains(target)) {
                setShowPicker(false);
            }
        };
        window.addEventListener('mousedown', handleClickOutside);
        return function () {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showPicker]);
    var onFieldFocus = function (e) {
        setShowPicker(true);
        onFocus && onFocus(e);
    };
    var onDateChange = function (date) {
        setShowingValue(formatDate(date));
        if (onChange) {
            if (isValidDateInRange(date, minDate, maxDate)) {
                onChange(formatDate(date));
            }
            else {
                onChange('');
            }
        }
    };
    var onFieldChange = function (e) {
        setShowingValue(e.target.value);
        if (e.target.value.length === 0) {
            onDateChange('');
        }
        else if (e.target.value.match(DATE_FORMAT)) {
            onDateChange(e.target.value);
        }
    };
    var onFieldBlur = function (e) {
        if (value && isValidDateInRange(value)) {
            setShowingValue(formatDate(value));
        }
        else {
            setShowingValue('');
        }
        setShowPicker(false);
        onBlur && onBlur(e);
    };
    var moveDays = function (days) {
        // ユーザーの現在の入力値または現在日付
        var parsedDate = showingValue ? parse(showingValue) : new Date();
        // parsedDateにdaysを足して、rangeの範囲内であればそこに移動する
        if (isValidDateInRange(addDays(parsedDate, days), minDate, maxDate)) {
            onDateChange(formatDate(addDays(parsedDate, days)));
        }
        else {
            // 範囲の外になりそうな場合は、範囲内の最も現在日付に近い日付に移動する
            var tempDate = getValidDateNearestTarget(parsedDate, minDate, maxDate);
            tempDate && onDateChange(tempDate);
        }
    };
    var onFieldKeyDown = function (e) {
        setShowPicker(true);
        switch (e.key) {
            case Keys.UP:
            case 'h':
                moveDays(-1);
                e.preventDefault();
                break;
            case Keys.DOWN:
            case 'l':
                moveDays(1);
                e.preventDefault();
                break;
            case 'k':
                moveDays(-7);
                e.preventDefault();
                break;
            case 'j':
                moveDays(7);
                e.preventDefault();
                break;
        }
        onKeyDown && onKeyDown(e);
    };
    var fieldRef = React.useRef();
    var createFieldRef = React.useCallback(function (node) {
        fieldRef.current = node;
        if (typeof ref === 'function') {
            ref(node);
        }
        else if (ref) {
            ref.current = node;
        }
    }, [ref]);
    var popupRef = React.useRef(null);
    var adjustPosition = function () {
        if (!(fieldRef.current && popupRef.current)) {
            return;
        }
        var fieldRect = fieldRef.current.getBoundingClientRect();
        var popupRect = popupRef.current.getBoundingClientRect();
        setHorizontalPosition(fieldRect.left + popupRect.width > window.innerWidth ? 'right' : 'left');
    };
    React.useLayoutEffect(function () {
        adjustPosition();
    }, [showPicker]);
    React.useEffect(function () {
        // 非Focus時のみ値の更新をする
        if (!showPicker) {
            if (value && isValidDateInRange(value)) {
                setShowingValue(formatDate(value));
            }
            else {
                setShowingValue('');
            }
        }
    }, [value, showPicker]);
    var uniqueId = useUniqueId('vb-dateInput');
    var parsedShowingValue = showingValue && showingValue.match(DATE_FORMAT) && parse(showingValue);
    return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    React.createElement("div", __assign({ id: uniqueId, ref: wrapperRef }, commonProps(pickCommonDataProps(props), 'vb-dateInput'), { onClick: function (e) {
            !disabled && setShowPicker(true); // テキストフィールドがクリックされたっぽい時に、DatePickerを再度表示する
            e.stopPropagation();
        } }),
        React.createElement(TextField, __assign({ id: id, label: label, labelledby: labelledby, placeholder: placeholder, name: name, required: required, autofocus: autofocus, disabled: disabled, error: error, small: small, width: width, value: showingValue, onChange: onFieldChange, onFocus: onFieldFocus, onBlur: onFieldBlur, onInput: onInput, onKeyDown: onFieldKeyDown, role: "combobox", "aria-expanded": showPicker, "aria-autocomplete": "list", "aria-controls": "".concat(uniqueId, "__listbox"), "aria-haspopup": "listbox", "aria-describedby": "".concat(uniqueId, "__description"), "aria-atomic": true, ref: createFieldRef, autoComplete: "off", IconComponent: MdDateRange, iconLabel: showPicker ? 'カレンダーを非表示' : 'カレンダーを表示', onIconClick: function (e) {
                e.stopPropagation();
                if (showPicker) {
                    setShowPicker(false);
                }
                else {
                    setShowPicker(true);
                    setTimeout(function () { var _a; return (_a = popupRef.current) === null || _a === void 0 ? void 0 : _a.focus(); });
                }
            }, iconAriaProps: {
                'aria-haspopup': true,
                'aria-expanded': showPicker,
                'aria-controls': "".concat(uniqueId, "__listbox"),
            } }, pickFunctionalMarginProps(props), pickMarginClassProps(props))),
        React.createElement(VisuallyHidden, null,
            React.createElement("span", { id: "".concat(uniqueId, "__description") }, "\u4E0A\u4E0B\u30AD\u30FC\u3067\u524D\u306E\u65E5\u3001\u5F8C\u306E\u65E5\u3092\u9078\u629E\u3067\u304D\u307E\u3059")),
        React.createElement(ScrollPortal, { positionalBaseElement: fieldRef.current || undefined, isActive: showPicker, onOverflow: function () {
                var _a;
                setShowPicker(false);
                (_a = fieldRef.current) === null || _a === void 0 ? void 0 : _a.blur();
            }, horizontalPosition: horizontalPosition, "data-masking": props['data-masking'] },
            React.createElement(FocusTrap, { onFocusOutsideTop: function () { return true; }, onFocusOutsideBottom: function () { return true; }, onFocusInsideBottom: function () {
                    var _a;
                    showPicker && ((_a = fieldRef.current) === null || _a === void 0 ? void 0 : _a.focus());
                    return true;
                }, onFocusInsideTop: function () {
                    var _a;
                    showPicker && ((_a = fieldRef.current) === null || _a === void 0 ? void 0 : _a.focus());
                    return true;
                } },
                React.createElement("div", { 
                    // blur抑止のため、やむをえずonMouseDownを書いてる
                    className: "vb-dateInput__listbox".concat(horizontalPosition === 'right'
                        ? ' vb-dateInput__listbox--rightAligned'
                        : ''), onMouseDown: function (e) { return e.preventDefault(); }, onClick: function (e) { return e.stopPropagation(); }, tabIndex: -1, "aria-hidden": !showPicker, id: "".concat(uniqueId, "__listbox"), role: "region", "aria-label": "\u30AB\u30EC\u30F3\u30C0\u30FC\u3067\u65E5\u4ED8\u3092\u9078\u629E", "aria-describedby": "".concat(uniqueId, "__popupDescription"), ref: popupRef, onKeyDown: function (e) {
                        var _a;
                        switch (e.key) {
                            case Keys.ESC:
                            case Keys.ENTER:
                                (_a = fieldRef.current) === null || _a === void 0 ? void 0 : _a.focus();
                                setTimeout(function () {
                                    setShowPicker(false);
                                });
                                break;
                            case Keys.DOWN:
                            case 'j':
                                moveDays(7);
                                e.preventDefault();
                                break;
                            case Keys.UP:
                            case 'k':
                                moveDays(-7);
                                e.preventDefault();
                                break;
                            case Keys.RIGHT:
                            case 'l':
                                moveDays(1);
                                e.preventDefault();
                                break;
                            case Keys.LEFT:
                            case 'h':
                                moveDays(-1);
                                e.preventDefault();
                                break;
                        }
                    } }, showPicker && (React.createElement(PopupBase, { paddingSize: "zero" },
                    React.createElement(VisuallyHidden, { id: "".concat(uniqueId, "__popupDescription") }, "\u4E0A\u4E0B\u5DE6\u53F3\u30AD\u30FC\u3067\u30AB\u30EC\u30F3\u30C0\u30FC\u5185\u306E\u65E5\u4ED8\u3092\u9078\u629E\u3067\u304D\u307E\u3059\u3002\u5DE6\u53F3\u30AD\u30FC\u30671\u65E5\u5358\u4F4D\u3067\u79FB\u52D5\u3001\u4E0A\u4E0B\u30AD\u30FC\u30677\u65E5\u5358\u4F4D\u3067\u79FB\u52D5\u3057\u307E\u3059\u3002"),
                    React.createElement(VisuallyHidden, { autoRead: true }, parsedShowingValue
                        ? isValid(parsedShowingValue)
                            ? "".concat(format(parsedShowingValue, 'YYYY年M月D日'), " ").concat(formatDayOfWeek(parsedShowingValue), " \u304C\u5165\u529B\u3055\u308C\u3066\u3044\u307E\u3059")
                            : ''
                        : '日付が選択されていません'),
                    React.createElement("div", { onKeyDown: function (e) {
                            // 前の月/次の月ボタンの押下時にポップアップが閉じないよう、ここでガードする
                            if (e.key === Keys.ENTER) {
                                e.stopPropagation();
                            }
                        } },
                        React.createElement(Datepicker, { date: value, minDate: minDate, maxDate: maxDate, ref: datePickerRef, onDateClick: function (d) {
                                var _a;
                                (_a = fieldRef.current) === null || _a === void 0 ? void 0 : _a.focus();
                                onDateChange(d);
                                setTimeout(function () {
                                    setShowPicker(false);
                                });
                            } })))))))));
};
/**
 * テキストフィールドになっている日付入力フィールドです。フォーカスまたはアイコンのクリックによりカレンダーを表示し、ユーザーはカレンダーから日付を選んだり、テキストとして編集したりすることができます。
 *
 * - `DateInput`は「現在の日付から前後1年以内」などの近い日付を入力することが多い場合に使用してください
 *   - 生年月日など、年単位で離れた日付を入力する場合には、`DateField` を使用してください。
 *     `DateField` はセレクトボックスで年を選べるため、年単位で離れた年月日を入力するのに最適です。
 */
var DateInput = React.forwardRef(DateInputInner);
export default DateInput;
//# sourceMappingURL=DateInput.js.map