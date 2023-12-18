import { TimeString } from './TimeString';
var strToMin = function (str) {
    var min = TimeString.getMin(str);
    var hour = TimeString.getHour(str);
    return hour * 60 + min;
};
var minToStr = function (min) {
    return TimeString.createTimeString(0, min);
};
export var Mins = {
    strToMin: strToMin,
    minToStr: minToStr,
};
//# sourceMappingURL=Mins.js.map