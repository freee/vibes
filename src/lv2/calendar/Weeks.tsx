import * as React from 'react';
import Week from './Week';
import { TimeRecord } from '../../lv1/calendar/CalendarDate';
import { differenceInCalendarWeeks, endOfMonth, addWeeks } from 'date-fns';

type Props = {
  weekStartsOn: number;
  starDateOfMonth: Date;
  contents?: TimeRecord[];
  nationalHolidays?: string[];
  onClickDate?: (date: string) => void;
  selectableDateRefs: HTMLDivElement[];
  handleKeyDownSelectedDate: (
    e: React.KeyboardEvent<HTMLDivElement>,
    date: string,
    onClickDate?: (date: string) => void
  ) => void;
};

export default function Weeks({
  weekStartsOn,
  starDateOfMonth,
  contents,
  nationalHolidays,
  onClickDate,
  selectableDateRefs,
  handleKeyDownSelectedDate,
}: Props): React.ReactElement {
  // date-fns v2系から使える https://date-fns.org/v2.0.0/docs/getWeeksInMonth の実装と揃える
  // [FYI] https://github.com/date-fns/date-fns/blob/v2.0.0/src/getWeeksInMonth/index.js#L44
  const totalWeek =
    differenceInCalendarWeeks(endOfMonth(starDateOfMonth), starDateOfMonth, {
      weekStartsOn: weekStartsOn,
    }) + 1;

  return (
    <React.Fragment>
      {[...Array(totalWeek)].map((unused, i) => (
        <tr key={i}>
          <Week
            weekStartsOn={weekStartsOn}
            starDateOfMonth={starDateOfMonth}
            baseDateOfWeek={addWeeks(starDateOfMonth, i)}
            contents={contents}
            nationalHolidays={nationalHolidays}
            onClickDate={onClickDate}
            selectableDateRefs={selectableDateRefs}
            handleKeyDownSelectedDate={handleKeyDownSelectedDate}
          />
        </tr>
      ))}
    </React.Fragment>
  );
}
