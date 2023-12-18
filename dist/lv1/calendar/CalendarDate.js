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
import { getDate } from 'date-fns';
import { MdError, MdWarning, MdCheckCircle } from 'react-icons/md';
import commonProps from '../../utilities/commonProps';
import vbClassNames from '../../utilities/vbClassNames';
export default function CalendarDate(props) {
    var date = props.date, dateLabel = props.dateLabel, today = props.today, disabled = props.disabled, secondaryHoliday = props.secondaryHoliday, primaryHoliday = props.primaryHoliday, nationalHoliday = props.nationalHoliday, content = props.content, onClickDate = props.onClickDate, selectableDateRef = props.selectableDateRef, onKeyDown = props.onKeyDown;
    var dateNumber = getDate(new Date(date));
    var dateBaseClass = 'vb-calendarDate';
    var statusBaseClass = dateBaseClass + '__status';
    var dateNumberBaseClass = dateBaseClass + '__number';
    var dateClassModifier = {
        input: !!content,
        disabled: !!disabled,
        'primary-holiday': !content && !!primaryHoliday,
        'secondary-holiday': (!content && secondaryHoliday) || nationalHoliday,
    };
    var statusName = content && content.status ? content.status : '';
    var statusClass = vbClassNames(statusBaseClass, {
        modifier: {
            alert: statusName === 'alert',
            notice: statusName === 'notice',
            success: statusName === 'success',
        },
    });
    var numberClassName = vbClassNames(dateNumberBaseClass, {
        modifier: {
            today: today,
            'today--input': today && !!content,
        },
    });
    var tabIndex = !disabled ? 0 : -1;
    return (React.createElement("td", __assign({}, commonProps(props, dateBaseClass, dateClassModifier)),
        React.createElement("div", { className: "".concat(dateBaseClass, "__inner"), role: "button", ref: disabled
                ? undefined
                : selectableDateRef
                    ? selectableDateRef
                    : undefined, onClick: function () {
                return !disabled && onClickDate && onClickDate(date);
            }, "aria-disabled": disabled && true, onKeyDown: function (e) {
                return !disabled &&
                    onKeyDown &&
                    onKeyDown(e, date, onClickDate && onClickDate);
            }, tabIndex: tabIndex },
            dateNumber && React.createElement("span", { className: numberClassName }, dateNumber),
            dateLabel && (React.createElement("span", { className: "".concat(dateBaseClass, "__type") }, dateLabel)),
            content && content.type === 'TimeRecord' && (React.createElement("span", { className: "".concat(dateBaseClass, "__time") },
                content.openingTime,
                "-",
                content.endingTime)),
            React.createElement("div", { className: statusClass }, statusName === 'alert' ? (React.createElement(MdError, { className: "".concat(dateBaseClass, "__icon") })) : statusName === 'notice' ? (React.createElement(MdWarning, { className: "".concat(dateBaseClass, "__icon") })) : statusName === 'success' ? (React.createElement(MdCheckCircle, { className: "".concat(dateBaseClass, "__icon") })) : null))));
}
//# sourceMappingURL=CalendarDate.js.map