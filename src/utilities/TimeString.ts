import { differenceInMinutes } from 'date-fns';
import { Ascii } from './Ascii';

const createTimeString = (hour: number, min: number): string => {
  // 分が60以上だったら時間を加算する
  // ex) 01:70→ 02:10
  if (min >= 60) {
    hour = hour + Math.floor(min / 60);
    min = min % 60;
  } else if (min < 0) {
    hour = hour + Math.floor(min / 60);
    min = 60 + (min % 60);
  }
  // 10未満の時は2桁になるようにゼロ埋めして 12:34 形式に
  return `${hour < 10 ? ('0' + hour).slice(-2) : hour}:${('0' + min).slice(
    -2
  )}`;
};

const getHour = (timeStr: string): number => {
  if (timeStr) {
    const matched =
      timeStr.match(/^(\d+):/) ||
      timeStr.match(/(\d+)\d{2}$/) ||
      timeStr.match(/^(\d+)$/);
    if (matched) {
      return Number(matched[1]);
    }
  }
  return 0;
};

const getMin = (timeStr: string): number => {
  if (timeStr) {
    const matched = timeStr.match(/:(\d+)$/) || timeStr.match(/^\d+(\d{2})$/);
    if (matched) {
      return Number(matched[1]);
    }
  }
  return 0;
};

const convert = (str: string, minTime?: string, maxTime?: string): string => {
  const replaced = Ascii.zenkakuToHankaku(str.replace(/[^:0-9]/g, ''));
  const hour = getHour(replaced);
  const min = getMin(replaced);

  const timeString = createTimeString(hour, min);
  const timeByDate = new Date(2000, 0, 1, hour, min);
  const minTimeByDate = minTime
    ? new Date(2000, 0, 1, getHour(minTime), getMin(minTime))
    : undefined;
  const maxTimeByDate = maxTime
    ? new Date(2000, 0, 1, getHour(maxTime), getMin(maxTime))
    : undefined;

  const isSameOrAfterThanMinTime = minTimeByDate
    ? differenceInMinutes(timeByDate, minTimeByDate) >= 0
    : true;

  if (minTime && !isSameOrAfterThanMinTime) {
    return minTime;
  }

  const isSameOrBeforeThanMaxTime = maxTimeByDate
    ? differenceInMinutes(maxTimeByDate, timeByDate) >= 0
    : true;

  if (maxTime && !isSameOrBeforeThanMaxTime) {
    return maxTime;
  }

  return timeString;
};

export const TimeString = {
  createTimeString,
  getHour,
  getMin,
  convert,
};
