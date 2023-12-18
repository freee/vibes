import * as React from 'react';
import { parse, isValid, isBefore, isAfter } from 'date-fns';
import { formatDate } from '../../utilities/date';
import DateInput from '../formFields/DateInput';
import styled from 'styled-components';
import { CommonStyle } from '../../internal/CommonStyle';
var ComponentStyle = styled(CommonStyle)({
    alignItems: 'center',
    display: 'inline-flex',
});
var DateDurationField = function (_a) {
    var required = _a.required, disabled = _a.disabled, error = _a.error, originalStartDate = _a.startDate, startDateId = _a.startDateId, startDateName = _a.startDateName, startDateLabel = _a.startDateLabel, startDateLabelledby = _a.startDateLabelledby, startDatePlaceholder = _a.startDatePlaceholder, originalEndDate = _a.endDate, endDateId = _a.endDateId, endDateName = _a.endDateName, endDateLabel = _a.endDateLabel, endDateLabelledby = _a.endDateLabelledby, endDatePlaceholder = _a.endDatePlaceholder, small = _a.small, minDate = _a.minDate, maxDate = _a.maxDate, _b = _a.width, width = _b === void 0 ? 'small' : _b, // 後方互換のために default を small にしています。
    onChange = _a.onChange, onFocus = _a.onFocus, onBlur = _a.onBlur, onInput = _a.onInput, onKeyDown = _a.onKeyDown;
    var _c = React.useState(originalStartDate), startDate = _c[0], setStartDate = _c[1];
    var _d = React.useState(originalEndDate), endDate = _d[0], setEndDate = _d[1];
    React.useEffect(function () { return setStartDate(originalStartDate); }, [originalStartDate]);
    React.useEffect(function () { return setEndDate(originalEndDate); }, [originalEndDate]);
    var handleChangeStartDate = React.useCallback(function (date) { return setStartDate(date); }, []);
    var handleChangeEndDate = React.useCallback(function (date) { return setEndDate(date); }, []);
    var handleBlurStartDate = React.useCallback(function (e) {
        if (onChange) {
            var parsedStartDate = parse(startDate !== null && startDate !== void 0 ? startDate : '');
            var parsedEndDate = parse(endDate !== null && endDate !== void 0 ? endDate : '');
            if (isValid(parsedStartDate) &&
                isValid(parsedEndDate) &&
                isAfter(parsedStartDate, parsedEndDate)) {
                // 開始日と終了日が逆行する場合は変更した側ではない側のフィールドを空欄にする
                onChange([formatDate(parsedStartDate), '']);
            }
            else {
                onChange([formatDate(parsedStartDate), formatDate(parsedEndDate)]);
            }
        }
        onBlur && onBlur(e);
    }, [endDate, onBlur, onChange, startDate]);
    var handleBlurEndDate = React.useCallback(function (e) {
        if (onChange) {
            var parsedStartDate = parse(startDate !== null && startDate !== void 0 ? startDate : '');
            var parsedEndDate = parse(endDate !== null && endDate !== void 0 ? endDate : '');
            if (isValid(parsedStartDate) &&
                isValid(parsedEndDate) &&
                isBefore(parsedEndDate, parsedStartDate)) {
                // 開始日と終了日が逆行する場合は変更した側ではない側のフィールドを空欄にする
                onChange(['', formatDate(parsedEndDate)]);
            }
            else {
                onChange([formatDate(parsedStartDate), formatDate(parsedEndDate)]);
            }
        }
        onBlur && onBlur(e);
    }, [endDate, onBlur, onChange, startDate]);
    return (React.createElement(ComponentStyle, null,
        React.createElement(DateInput, { id: startDateId, label: startDateLabel !== null && startDateLabel !== void 0 ? startDateLabel : '開始日', labelledby: startDateLabelledby, name: startDateName, value: startDate, required: required, disabled: disabled, error: error, placeholder: startDatePlaceholder, minDate: minDate, maxDate: maxDate, onChange: handleChangeStartDate, onFocus: onFocus, onBlur: handleBlurStartDate, onInput: onInput, onKeyDown: onKeyDown, small: small, width: width }),
        React.createElement("span", null, "\u00A0\uFF5E\u00A0"),
        React.createElement(DateInput, { id: endDateId, label: endDateLabel !== null && endDateLabel !== void 0 ? endDateLabel : '終了日', labelledby: endDateLabelledby, name: endDateName, value: endDate, required: required, disabled: disabled, error: error, placeholder: endDatePlaceholder, minDate: minDate, maxDate: maxDate, onChange: handleChangeEndDate, onFocus: onFocus, onBlur: handleBlurEndDate, onInput: onInput, onKeyDown: onKeyDown, small: small, width: width })));
};
export default DateDurationField;
//# sourceMappingURL=DateDurationField.js.map