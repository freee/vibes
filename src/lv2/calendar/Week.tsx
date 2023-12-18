import * as React from 'react';
import CalendarDate, { TimeRecord } from '../../lv1/calendar/CalendarDate';

import {
  startOfWeek,
  addDays,
  isToday,
  isSunday,
  isSaturday,
  isSameMonth,
  format,
} from 'date-fns';

type Props = {
  weekStartsOn: number;
  starDateOfMonth: Date;
  baseDateOfWeek: Date;
  contents?: Array<TimeRecord>;
  nationalHolidays?: string[];
  onClickDate?: (date: string) => void;
  selectableDateRefs: HTMLDivElement[];
  handleKeyDownSelectedDate: (
    e: React.KeyboardEvent<HTMLDivElement>,
    date: string,
    onClickDate?: (date: string) => void
  ) => void;
};

function selectDateLabel(
  sameMonth: boolean,
  isPrimaryHoliday: boolean,
  isSecondaryHoliday: boolean,
  isNationalHoliday: boolean,
  content?: TimeRecord
): string {
  if (!sameMonth) {
    return '入力不可';
  } else if (content && content.dateLabel) {
    return content.dateLabel;
  } else if (isPrimaryHoliday || isSecondaryHoliday || isNationalHoliday) {
    return '休み';
  } else {
    return '未入力';
  }
}

export default function Week({
  weekStartsOn,
  starDateOfMonth,
  baseDateOfWeek,
  contents,
  nationalHolidays,
  onClickDate,
  selectableDateRefs,
  handleKeyDownSelectedDate,
}: Props): React.ReactElement {
  const startDateOfWeek = startOfWeek(baseDateOfWeek, {
    weekStartsOn: weekStartsOn,
  });

  return (
    <React.Fragment>
      {[...Array(7)].map((unused, i) => {
        const certainDate = addDays(startDateOfWeek, i);
        const formattedDate = format(certainDate, 'YYYY-MM-DD');
        const content: TimeRecord | undefined = contents
          ? contents.filter((content) => content.date === formattedDate)[0]
          : undefined;
        const today = isToday(certainDate);
        const isPrimaryHoliday = isSunday(certainDate);
        const isSecondaryHoliday = isSaturday(certainDate);
        const isNationalHoliday = !!(
          nationalHolidays &&
          nationalHolidays.filter(
            (nationalHoliday) => nationalHoliday === formattedDate
          )[0]
        );
        const sameMonth = isSameMonth(starDateOfMonth, certainDate);
        const dateLabel = selectDateLabel(
          sameMonth,
          isPrimaryHoliday,
          isSecondaryHoliday,
          isNationalHoliday,
          content
        );

        return (
          <CalendarDate
            key={i}
            date={formattedDate}
            dateLabel={dateLabel}
            today={today}
            primaryHoliday={isPrimaryHoliday}
            secondaryHoliday={isSecondaryHoliday}
            nationalHoliday={isNationalHoliday}
            disabled={!sameMonth}
            content={content}
            onClickDate={onClickDate}
            selectableDateRef={(el: HTMLDivElement | null): void => {
              el && selectableDateRefs.push(el);
            }}
            onKeyDown={handleKeyDownSelectedDate}
          />
        );
      })}
    </React.Fragment>
  );
}
