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
import { format, getYear, getMonth, getDate, getDaysInMonth, isAfter, endOfMonth, parse, } from 'date-fns';
import warekiFormat from 'wareki';
import vbClassNames from '../../utilities/vbClassNames';
import commonProps from '../../utilities/commonProps';
import SelectBox from '../../lv1/forms/SelectBox';
import useUniqueId from '../../hooks/useUniqueId';
// year, month, dayいずれかを更新した新しい日付を year, month, day で返す
var adjustDateParams = function (type, value, current, startDate, endDate) {
    var year = current.year, month = current.month, day = current.day;
    switch (type) {
        case 'year':
            year = value;
            break;
        case 'month':
            month = value;
            break;
        case 'day':
            day = value;
            break;
    }
    // いずれかが設定されていない場合は日付の調整を行わずそのまま返却する
    if (year === null || month === null || day === null) {
        return { year: year, month: month, day: day };
    }
    var date = new Date(year, month, day);
    // 月の日数が変わる時、範囲外ならその月の末日にする
    // ex: 2019-03-31 -> 2月に変更 -> 2019-02-28
    var monthEndDate = endOfMonth(format(new Date(year, month), 'YYYY-MM'));
    if (isAfter(date, monthEndDate)) {
        date = new Date(year, month, getDate(monthEndDate));
    }
    // range を超えた場合は超えないように収める
    var minDate = parse(startDate);
    if (date < minDate) {
        date = minDate;
    }
    var maxDate = parse(endDate);
    if (date > maxDate) {
        date = maxDate;
    }
    return { year: getYear(date), month: getMonth(date), day: getDate(date) };
};
var createOptions = function (type, values, nullable, wareki) {
    var getYearName = function (year) {
        if (!wareki) {
            return "".concat(year);
        }
        var warekiOnStart = warekiFormat(new Date(year, 0, 1).getTime());
        var warekiOnEnd = warekiFormat(new Date(year, 11, 31).getTime());
        // 明治以前の場合、年号を表示しない
        if (Number(warekiOnEnd) === year) {
            return "".concat(year);
        }
        // 明治元年の場合
        if (Number(warekiOnStart) === year) {
            return "".concat(year, " (").concat(warekiOnEnd, ")");
        }
        // 1989年(昭和64・平成元)のような重なる和暦年の場合、両方とも表示
        var warekiYear = warekiOnStart === warekiOnEnd
            ? warekiOnStart
            : "".concat(warekiOnStart, " / ").concat(warekiOnEnd);
        return "".concat(year, " (").concat(warekiYear, ")");
    };
    var getName = function (value) {
        switch (type) {
            case 'year':
                return getYearName(value);
            case 'month':
                return "".concat(value + 1);
            case 'day':
                return "".concat(value);
        }
    };
    var options = values.map(function (value) {
        return {
            name: getName(value),
            value: "".concat(value),
        };
    });
    var emptyOptions = nullable ? [{ name: '', value: '' }] : [];
    return __spreadArray(__spreadArray([], emptyOptions, true), options, true);
};
var getYears = function (startDate, endDate) {
    var startYear = getYear(startDate);
    var endYear = getYear(endDate);
    var size = endYear - startYear + 1;
    return __spreadArray([], Array(size), true).map(function (_, i) { return startYear + i; });
};
var getMonths = function (startDate, endDate, _a) {
    var year = _a.year;
    if (year === null) {
        return [];
    }
    var startMonth = year === getYear(startDate) ? getMonth(startDate) : 0;
    var endMonth = year === getYear(endDate) ? getMonth(endDate) : 11;
    var size = endMonth - startMonth + 1;
    return __spreadArray([], Array(size), true).map(function (_, i) { return startMonth + i; });
};
var getDays = function (startDate, endDate, _a) {
    var year = _a.year, month = _a.month;
    if (year === null || month === null) {
        return [];
    }
    var startDay = year === getYear(startDate) && month === getMonth(startDate)
        ? getDate(startDate)
        : 1;
    var endDay = year === getYear(endDate) && month === getMonth(endDate)
        ? getDate(endDate)
        : getDaysInMonth(new Date(year, month));
    var size = endDay - startDay + 1;
    return __spreadArray([], Array(size), true).map(function (_, i) { return startDay + i; });
};
/**
 *
 * セレクトボックスで年月日を選択するフォーム用のフィールドです。
 *
 * - `DateField` は生年月日など、年単位で離れた日付を入力する場合に使用してください
 *   - 近い日付を入力することが多い場合には `DateInput` を使用してください。
 *     `DateInput` はカレンダーを見ながら入力でき、曜日をヒントにすることができる一方、月単位でカレンダーを移動するため年単位で離れた日付の入力には向きません。
 * - `wareki` オプションを使用すると、「年」のセレクトボックスで和暦を併記することができます
 *   - 和暦で認識しているユーザーが多いと思われる、生年月日のフィールド等にはこちらを使用してください
 *
 */
var DateField = function (props) {
    var selectedDate = props.selectedDate, startDate = props.startDate, endDate = props.endDate, small = props.small, disabled = props.disabled, error = props.error, required = props.required, autoComplete = props.autoComplete, nullable = props.nullable, wareki = props.wareki, onChange = props.onChange, onInput = props.onInput, onFocus = props.onFocus, onBlur = props.onBlur, onKeyDown = props.onKeyDown, marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize;
    var _a = React.useState(selectedDate ? getYear(selectedDate) : null), selectedYear = _a[0], setSelectedYear = _a[1];
    var _b = React.useState(selectedDate ? getMonth(selectedDate) : null), selectedMonth = _b[0], setSelectedMonth = _b[1];
    var _c = React.useState(selectedDate ? getDate(selectedDate) : null), selectedDay = _c[0], setSelectedDay = _c[1];
    React.useEffect(function () {
        setSelectedYear(selectedDate ? getYear(selectedDate) : null);
        setSelectedMonth(selectedDate ? getMonth(selectedDate) : null);
        setSelectedDay(selectedDate ? getDate(selectedDate) : null);
    }, [selectedDate]);
    var selected = {
        year: selectedYear,
        month: selectedMonth,
        day: selectedDay,
    };
    var years = getYears(startDate, endDate);
    var months = getMonths(startDate, endDate, selected);
    var days = getDays(startDate, endDate, selected);
    var unitClassName = vbClassNames('vb-dateField__unit', {
        modifier: { small: small },
    });
    var id = useUniqueId('vb-dateField');
    var yearId = "".concat(id, "__year");
    var monthId = "".concat(id, "__month");
    var dayId = "".concat(id, "__day");
    var yearWidth = wareki ? 'medium' : 'small';
    var createHandler = function (handler, type, selected) {
        return function (_a) {
            var target = _a.target;
            if (target instanceof HTMLSelectElement) {
                var value = target.value;
                var _b = adjustDateParams(type, value ? parseInt(value) : null, selected, startDate, endDate), year = _b.year, month = _b.month, day = _b.day;
                setSelectedYear(year);
                setSelectedMonth(month);
                setSelectedDay(day);
                // 全て選択されている場合は日付を、未選択がある場合は null を返却
                var date = year === null || month === null || day === null
                    ? null
                    : format(new Date(year, month, day), 'YYYY-MM-DD');
                handler && handler(date);
            }
        };
    };
    return (React.createElement("div", __assign({}, commonProps(props, 'vb-dateField', {}, {
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginTop: marginTop,
        marginSize: marginSize,
    })),
        React.createElement("label", { htmlFor: yearId },
            React.createElement(SelectBox, { id: yearId, options: createOptions('year', years, nullable, wareki), small: small, disabled: disabled, error: error, required: required, value: String(selectedYear), width: yearWidth, autoComplete: autoComplete === 'bday' ? 'bday-year' : autoComplete, onChange: createHandler(onChange, 'year', selected), onInput: createHandler(onInput, 'year', selected), onFocus: createHandler(onFocus, 'year', selected), onBlur: createHandler(onBlur, 'year', selected), onKeyDown: createHandler(onKeyDown, 'year', selected) }),
            React.createElement("span", { className: unitClassName }, "\u5E74")),
        React.createElement("label", { htmlFor: monthId },
            React.createElement(SelectBox, { id: monthId, options: createOptions('month', months, nullable, wareki), small: small, disabled: disabled, error: error, required: required, value: String(selectedMonth), width: "xSmall", autoComplete: autoComplete === 'bday' ? 'bday-month' : autoComplete, onChange: createHandler(onChange, 'month', selected), onInput: createHandler(onInput, 'month', selected), onFocus: createHandler(onFocus, 'month', selected), onBlur: createHandler(onBlur, 'month', selected), onKeyDown: createHandler(onKeyDown, 'month', selected) }),
            React.createElement("span", { className: unitClassName }, "\u6708")),
        React.createElement("label", { htmlFor: dayId },
            React.createElement(SelectBox, { id: dayId, options: createOptions('day', days, nullable, wareki), small: small, disabled: disabled, error: error, required: required, value: String(selectedDay), width: "xSmall", autoComplete: autoComplete === 'bday' ? 'bday-day' : autoComplete, onChange: createHandler(onChange, 'day', selected), onInput: createHandler(onInput, 'day', selected), onFocus: createHandler(onFocus, 'day', selected), onBlur: createHandler(onBlur, 'day', selected), onKeyDown: createHandler(onKeyDown, 'day', selected) }),
            React.createElement("span", { className: unitClassName }, "\u65E5"))));
};
export default DateField;
//# sourceMappingURL=DateField.js.map