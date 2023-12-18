import { differenceInMinutes } from 'date-fns';
import { Ascii } from './Ascii';
var createTimeString = function (hour, min) {
    // 分が60以上だったら時間を加算する
    // ex) 01:70→ 02:10
    if (min >= 60) {
        hour = hour + Math.floor(min / 60);
        min = min % 60;
    }
    else if (min < 0) {
        hour = hour + Math.floor(min / 60);
        min = 60 + (min % 60);
    }
    // 10未満の時は2桁になるようにゼロ埋めして 12:34 形式に
    return "".concat(hour < 10 ? ('0' + hour).slice(-2) : hour, ":").concat(('0' + min).slice(-2));
};
var getHour = function (timeStr) {
    if (timeStr) {
        var matched = timeStr.match(/^(\d+):/) ||
            timeStr.match(/(\d+)\d{2}$/) ||
            timeStr.match(/^(\d+)$/);
        if (matched) {
            return Number(matched[1]);
        }
    }
    return 0;
};
var getMin = function (timeStr) {
    if (timeStr) {
        var matched = timeStr.match(/:(\d+)$/) || timeStr.match(/^\d+(\d{2})$/);
        if (matched) {
            return Number(matched[1]);
        }
    }
    return 0;
};
var convert = function (str, minTime, maxTime) {
    var replaced = Ascii.zenkakuToHankaku(str.replace(/[^:0-9]/g, ''));
    var hour = getHour(replaced);
    var min = getMin(replaced);
    var timeString = createTimeString(hour, min);
    var timeByDate = new Date(2000, 0, 1, hour, min);
    var minTimeByDate = minTime
        ? new Date(2000, 0, 1, getHour(minTime), getMin(minTime))
        : undefined;
    var maxTimeByDate = maxTime
        ? new Date(2000, 0, 1, getHour(maxTime), getMin(maxTime))
        : undefined;
    var isSameOrAfterThanMinTime = minTimeByDate
        ? differenceInMinutes(timeByDate, minTimeByDate) >= 0
        : true;
    if (minTime && !isSameOrAfterThanMinTime) {
        return minTime;
    }
    var isSameOrBeforeThanMaxTime = maxTimeByDate
        ? differenceInMinutes(maxTimeByDate, timeByDate) >= 0
        : true;
    if (maxTime && !isSameOrBeforeThanMaxTime) {
        return maxTime;
    }
    return timeString;
};
export var TimeString = {
    createTimeString: createTimeString,
    getHour: getHour,
    getMin: getMin,
    convert: convert,
};
//# sourceMappingURL=TimeString.js.map