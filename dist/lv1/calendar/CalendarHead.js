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
import commonProps from '../../utilities/commonProps';
export default function CalendarHead(props) {
    var weekStartsOn = props.weekStartsOn;
    var headBaseClass = 'vb-calendarHead';
    var cellBaseClass = 'vb-calendarHead__cell';
    if (weekStartsOn === 1) {
        return (React.createElement("tr", __assign({}, commonProps(props, headBaseClass)),
            React.createElement("th", { className: cellBaseClass }, "\u6708"),
            React.createElement("th", { className: cellBaseClass }, "\u706B"),
            React.createElement("th", { className: cellBaseClass }, "\u6C34"),
            React.createElement("th", { className: cellBaseClass }, "\u6728"),
            React.createElement("th", { className: cellBaseClass }, "\u91D1"),
            React.createElement("th", { className: "".concat(cellBaseClass, " ").concat(cellBaseClass, "--secondary-holiday") }, "\u571F"),
            React.createElement("th", { className: "".concat(cellBaseClass, " ").concat(cellBaseClass, "--primary-holiday") }, "\u65E5")));
    }
    else {
        return (React.createElement("tr", __assign({}, commonProps(props, headBaseClass)),
            React.createElement("th", { className: "".concat(cellBaseClass, " ").concat(cellBaseClass, "--primary-holiday") }, "\u65E5"),
            React.createElement("th", { className: cellBaseClass }, "\u6708"),
            React.createElement("th", { className: cellBaseClass }, "\u706B"),
            React.createElement("th", { className: cellBaseClass }, "\u6C34"),
            React.createElement("th", { className: cellBaseClass }, "\u6728"),
            React.createElement("th", { className: cellBaseClass }, "\u91D1"),
            React.createElement("th", { className: "".concat(cellBaseClass, " ").concat(cellBaseClass, "--secondary-holiday") }, "\u571F")));
    }
}
//# sourceMappingURL=CalendarHead.js.map