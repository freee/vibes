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
import { format, isSameDay, addDays, startOfMonth, addMonths, differenceInDays, isBefore, isAfter, } from 'date-fns';
import Button from '../../lv1/buttons/Button';
import { formatDate, getValidDateNearestTarget, isValidDateInRange, parseDate, } from '../../utilities/date';
import useUniqueId from '../../hooks/useUniqueId';
import { Keys } from '../../utilities/keyboard';
import { pickCommonProps } from '../../utilities/commonProps';
function DatePicker(props, ref) {
    var date = props.date, onDateClick = props.onDateClick, minDate = props.minDate, maxDate = props.maxDate;
    var now = new Date();
    var targetDate = parseDate(date) || getValidDateNearestTarget(now, minDate, maxDate) || now;
    var _a = React.useState(targetDate), showingMonth = _a[0], setShowingMonth = _a[1];
    var beginningOfMonth = startOfMonth(showingMonth);
    var beginningOfCalendar = addDays(beginningOfMonth, beginningOfMonth.getDay() * -1);
    var endOfMonth = addDays(addMonths(beginningOfMonth, 1), -1);
    var endOfCalendar = addDays(endOfMonth, 6 - endOfMonth.getDay());
    var countOfWeeks = Math.ceil(differenceInDays(endOfCalendar, beginningOfCalendar) / 7);
    var weeks = __spreadArray([], Array(countOfWeeks), true).map(function (_, week) {
        return __spreadArray([], Array(7), true).map(function (_, day) { return addDays(beginningOfCalendar, week * 7 + day); });
    });
    var tableRef = React.useRef(null);
    var uniqueId = useUniqueId('vb-datePicker');
    React.useEffect(function () {
        var parsedDate = parseDate(date);
        if (parsedDate) {
            setShowingMonth(parsedDate);
        }
    }, [date]);
    React.useEffect(function () {
        var parsedDate = parseDate(date);
        if (parsedDate) {
            var focused = document.activeElement;
            // テーブル内にフォーカスがあるとき、dateやshowingMonthが変化したらそこにフォーカスも移動させる
            // テーブルの外（前/次の月ボタンなど）にフォーカスがあるときは何もしない
            if (focused && tableRef.current && tableRef.current.contains(focused)) {
                var elm = tableRef.current.querySelector("#".concat(uniqueId, "__").concat(formatDate(parsedDate)));
                elm && elm.focus();
            }
        }
    }, [date, showingMonth, uniqueId]);
    return (React.createElement("div", __assign({ className: "vb-datePicker", id: uniqueId, ref: ref }, pickCommonProps(props)),
        React.createElement("div", { className: "vb-datePicker__header" },
            React.createElement(Button, { appearance: "tertiary", small: true, onClick: function () { return setShowingMonth(addMonths(showingMonth, -1)); } }, "\u524D\u306E\u6708"),
            React.createElement("div", { className: "vb-datePicker__month", "aria-live": "polite", "aria-atomic": "true" }, format(showingMonth, 'YYYY年M月')),
            React.createElement(Button, { appearance: "tertiary", small: true, onClick: function () { return setShowingMonth(addMonths(showingMonth, 1)); } }, "\u6B21\u306E\u6708")),
        React.createElement("table", { className: "vb-datePicker__calendar", ref: tableRef },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", { className: "vb-datePicker__calendarHead", "aria-label": "\u65E5\u66DC\u65E5" }, "\u65E5"),
                    React.createElement("th", { className: "vb-datePicker__calendarHead", "aria-label": "\u6708\u66DC\u65E5" }, "\u6708"),
                    React.createElement("th", { className: "vb-datePicker__calendarHead", "aria-label": "\u706B\u66DC\u65E5" }, "\u706B"),
                    React.createElement("th", { className: "vb-datePicker__calendarHead", "aria-label": "\u6C34\u66DC\u65E5" }, "\u6C34"),
                    React.createElement("th", { className: "vb-datePicker__calendarHead", "aria-label": "\u6728\u66DC\u65E5" }, "\u6728"),
                    React.createElement("th", { className: "vb-datePicker__calendarHead", "aria-label": "\u91D1\u66DC\u65E5" }, "\u91D1"),
                    React.createElement("th", { className: "vb-datePicker__calendarHead", "aria-label": "\u571F\u66DC\u65E5" }, "\u571F"))),
            React.createElement("tbody", null, weeks.map(function (week, i) { return (React.createElement("tr", { key: i }, week.map(function (day, j) {
                var isSelectedDay = date && isSameDay(day, date);
                var isToday = isSameDay(day, now);
                var isDisabledDay = !isValidDateInRange(day, minDate, maxDate);
                var isOtherMonth = isBefore(day, beginningOfMonth) || isAfter(day, endOfMonth);
                return (React.createElement("td", { key: j, className: "vb-datePicker__calendarCell".concat(isDisabledDay
                        ? ' vb-datePicker__calendarCell--disabled'
                        : '').concat(isSelectedDay
                        ? ' vb-datePicker__calendarCell--selected'
                        : '').concat(isOtherMonth
                        ? ' vb-datePicker__calendarCell--otherMonth'
                        : '') },
                    React.createElement("span", { className: "vb-datePicker__dateButton", tabIndex: isDisabledDay || isOtherMonth ? -1 : 0, onClick: function () {
                            !isDisabledDay && onDateClick(formatDate(day));
                        }, onKeyDown: function (e) {
                            if (!isDisabledDay &&
                                (e.key === Keys.ENTER || e.key === Keys.SPACE)) {
                                e.preventDefault();
                                onDateClick(formatDate(day));
                            }
                        }, id: "".concat(uniqueId, "__").concat(formatDate(day)), "aria-label": "".concat(format(day, 'YYYY年M月D日')), "aria-current": isToday ? 'date' : undefined, "aria-pressed": !!isSelectedDay, role: "button", "aria-disabled": isDisabledDay },
                        React.createElement("span", { className: "vb-datePicker__dateNumber".concat(isToday ? ' vb-datePicker__dateNumber--today' : '') }, format(day, 'D')))));
            }))); })))));
}
export default React.forwardRef(DatePicker);
//# sourceMappingURL=DatePicker.js.map