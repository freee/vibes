import { TimeString } from './TimeString';

const strToMin = (str: string): number => {
  const min = TimeString.getMin(str);
  const hour = TimeString.getHour(str);
  return hour * 60 + min;
};

const minToStr = (min: number): string => {
  return TimeString.createTimeString(0, min);
};

export const Mins = {
  strToMin,
  minToStr,
};
