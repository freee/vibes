var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import CalendarHead from '../../lv1/calendar/CalendarHead';
import Weeks from './Weeks';
import { KeyCodes } from '../../utilities/keyboard';
import commonProps from '../../utilities/commonProps';
import { startOfMonth, getDate } from 'date-fns';
var Calendar = /** @class */ (function (_super) {
    __extends(Calendar, _super);
    function Calendar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selectableDateRefs = [];
        _this.handleKeyDownSelectedDate = function (e, date, onClickDate) {
            var dateNum = getDate(new Date(date));
            switch (e.keyCode) {
                case KeyCodes.ESC:
                    e.preventDefault();
                    _this.selectableDateRefs[dateNum - 1] &&
                        _this.selectableDateRefs[dateNum - 1].blur();
                    break;
                case KeyCodes.UP:
                    e.preventDefault();
                    _this.selectableDateRefs[dateNum - 8] &&
                        _this.selectableDateRefs[dateNum - 8].focus();
                    break;
                case KeyCodes.DOWN:
                    e.preventDefault();
                    _this.selectableDateRefs[dateNum + 6] &&
                        _this.selectableDateRefs[dateNum + 6].focus();
                    break;
                case KeyCodes.LEFT:
                    e.preventDefault();
                    _this.selectableDateRefs[dateNum - 2] &&
                        _this.selectableDateRefs[dateNum - 2].focus();
                    break;
                case KeyCodes.RIGHT:
                    e.preventDefault();
                    _this.selectableDateRefs[dateNum] &&
                        _this.selectableDateRefs[dateNum].focus();
                    break;
                case KeyCodes.ENTER:
                    e.preventDefault();
                    onClickDate && onClickDate(date);
                    break;
            }
        };
        return _this;
    }
    Calendar.prototype.render = function () {
        this.selectableDateRefs = [];
        var _a = this.props, year = _a.year, month = _a.month, startFromMonday = _a.startFromMonday, contents = _a.contents, nationalHolidays = _a.nationalHolidays, onClickDate = _a.onClickDate;
        var starDateOfMonth = startOfMonth(new Date("".concat(year, "/").concat(month, "/1")));
        var weekStartsOn = startFromMonday ? 1 : 0;
        return (React.createElement("table", __assign({}, commonProps(this.props, 'vb-calendar')),
            React.createElement("thead", null,
                React.createElement(CalendarHead, { weekStartsOn: weekStartsOn })),
            React.createElement("tbody", null,
                React.createElement(Weeks, { weekStartsOn: weekStartsOn, starDateOfMonth: starDateOfMonth, contents: contents, nationalHolidays: nationalHolidays, onClickDate: onClickDate, selectableDateRefs: this.selectableDateRefs, handleKeyDownSelectedDate: this.handleKeyDownSelectedDate.bind(this) }))));
    };
    return Calendar;
}(React.Component));
export default Calendar;
//# sourceMappingURL=Calendar.js.map