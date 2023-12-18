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
import CalendarDate from '../../lv1/calendar/CalendarDate';
import { startOfWeek, addDays, isToday, isSunday, isSaturday, isSameMonth, format, } from 'date-fns';
function selectDateLabel(sameMonth, isPrimaryHoliday, isSecondaryHoliday, isNationalHoliday, content) {
    if (!sameMonth) {
        return '入力不可';
    }
    else if (content && content.dateLabel) {
        return content.dateLabel;
    }
    else if (isPrimaryHoliday || isSecondaryHoliday || isNationalHoliday) {
        return '休み';
    }
    else {
        return '未入力';
    }
}
export default function Week(_a) {
    var weekStartsOn = _a.weekStartsOn, starDateOfMonth = _a.starDateOfMonth, baseDateOfWeek = _a.baseDateOfWeek, contents = _a.contents, nationalHolidays = _a.nationalHolidays, onClickDate = _a.onClickDate, selectableDateRefs = _a.selectableDateRefs, handleKeyDownSelectedDate = _a.handleKeyDownSelectedDate;
    var startDateOfWeek = startOfWeek(baseDateOfWeek, {
        weekStartsOn: weekStartsOn,
    });
    return (React.createElement(React.Fragment, null, __spreadArray([], Array(7), true).map(function (unused, i) {
        var certainDate = addDays(startDateOfWeek, i);
        var formattedDate = format(certainDate, 'YYYY-MM-DD');
        var content = contents
            ? contents.filter(function (content) { return content.date === formattedDate; })[0]
            : undefined;
        var today = isToday(certainDate);
        var isPrimaryHoliday = isSunday(certainDate);
        var isSecondaryHoliday = isSaturday(certainDate);
        var isNationalHoliday = !!(nationalHolidays &&
            nationalHolidays.filter(function (nationalHoliday) { return nationalHoliday === formattedDate; })[0]);
        var sameMonth = isSameMonth(starDateOfMonth, certainDate);
        var dateLabel = selectDateLabel(sameMonth, isPrimaryHoliday, isSecondaryHoliday, isNationalHoliday, content);
        return (React.createElement(CalendarDate, { key: i, date: formattedDate, dateLabel: dateLabel, today: today, primaryHoliday: isPrimaryHoliday, secondaryHoliday: isSecondaryHoliday, nationalHoliday: isNationalHoliday, disabled: !sameMonth, content: content, onClickDate: onClickDate, selectableDateRef: function (el) {
                el && selectableDateRefs.push(el);
            }, onKeyDown: handleKeyDownSelectedDate }));
    })));
}
//# sourceMappingURL=Week.js.map