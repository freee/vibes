import {
  parse,
  isValid,
  isSameDay,
  isAfter,
  isBefore,
  format,
  getDay,
} from 'date-fns';

// パースに成功し妥当な値のとき Date を
// そうでなければ null を返却する
export function parseDate(date: Date | string | null | undefined): Date | null {
  if (!date) {
    return null;
  }

  const parsedDate = parse(date);
  if (!isValid(parsedDate)) {
    return null;
  }

  return parsedDate;
}

export function isValidDateInRange(
  date: string | Date,
  minDate?: string | Date,
  maxDate?: string | Date
): boolean {
  if (!date) {
    return false;
  }
  const parsedDate = parse(date);
  const parsedMinDate = minDate && parse(minDate);
  const parsedMaxDate = maxDate && parse(maxDate);
  return (
    isValid(parsedDate) &&
    (parsedMinDate && isValid(parsedMinDate)
      ? isSameDay(parsedDate, parsedMinDate) ||
        isAfter(parsedDate, parsedMinDate)
      : true) &&
    (parsedMaxDate && isValid(parsedMaxDate)
      ? isSameDay(parsedDate, parsedMaxDate) ||
        isBefore(parsedDate, parsedMaxDate)
      : true)
  );
}

export function getValidDateNearestTarget(
  target: Date | string,
  minDate?: Date | string,
  maxDate?: Date | string
): Date | null {
  const parsedTarget = parseDate(target);
  const parsedMinDate = parseDate(minDate);
  const parsedMaxDate = parseDate(maxDate);

  if (
    !parsedTarget ||
    (parsedMinDate && parsedMaxDate && isAfter(parsedMinDate, parsedMaxDate))
  ) {
    return null;
  }

  if (isValidDateInRange(target, minDate, maxDate)) {
    return parsedTarget;
  }

  const diffByMin = parsedMinDate
    ? Math.abs(parsedMinDate.getTime() - parsedTarget.getTime())
    : Number.MAX_VALUE;
  const diffByMax = parsedMaxDate
    ? Math.abs(parsedMaxDate.getTime() - parsedTarget.getTime())
    : Number.MAX_VALUE;

  if (diffByMin <= diffByMax) {
    return parsedMinDate;
  } else {
    return parsedMaxDate;
  }
}

export function formatDate(date: string | Date): string {
  const parsedDate = parse(date);
  return isValid(parsedDate) ? format(parsedDate, 'YYYY-MM-DD') : '';
}

export function formatDayOfWeek(date: string | Date): string {
  const parsedDate = parse(date);
  if (isValid(parsedDate)) {
    switch (getDay(parsedDate)) {
      case 0:
        return '日曜日';
      case 1:
        return '月曜日';
      case 2:
        return '火曜日';
      case 3:
        return '水曜日';
      case 4:
        return '木曜日';
      case 5:
        return '金曜日';
      case 6:
        return '土曜日';
    }
  }
  return '';
}
