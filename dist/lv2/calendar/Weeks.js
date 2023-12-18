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
import Week from './Week';
import { differenceInCalendarWeeks, endOfMonth, addWeeks } from 'date-fns';
export default function Weeks(_a) {
    var weekStartsOn = _a.weekStartsOn, starDateOfMonth = _a.starDateOfMonth, contents = _a.contents, nationalHolidays = _a.nationalHolidays, onClickDate = _a.onClickDate, selectableDateRefs = _a.selectableDateRefs, handleKeyDownSelectedDate = _a.handleKeyDownSelectedDate;
    // date-fns v2系から使える https://date-fns.org/v2.0.0/docs/getWeeksInMonth の実装と揃える
    // [FYI] https://github.com/date-fns/date-fns/blob/v2.0.0/src/getWeeksInMonth/index.js#L44
    var totalWeek = differenceInCalendarWeeks(endOfMonth(starDateOfMonth), starDateOfMonth, {
        weekStartsOn: weekStartsOn,
    }) + 1;
    return (React.createElement(React.Fragment, null, __spreadArray([], Array(totalWeek), true).map(function (unused, i) { return (React.createElement("tr", { key: i },
        React.createElement(Week, { weekStartsOn: weekStartsOn, starDateOfMonth: starDateOfMonth, baseDateOfWeek: addWeeks(starDateOfMonth, i), contents: contents, nationalHolidays: nationalHolidays, onClickDate: onClickDate, selectableDateRefs: selectableDateRefs, handleKeyDownSelectedDate: handleKeyDownSelectedDate }))); })));
}
//# sourceMappingURL=Weeks.js.map