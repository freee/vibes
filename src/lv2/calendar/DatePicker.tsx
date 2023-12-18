import * as React from 'react';
import {
  format,
  isSameDay,
  addDays,
  startOfMonth,
  addMonths,
  differenceInDays,
  isBefore,
  isAfter,
} from 'date-fns';
import Button from '../../lv1/buttons/Button';
import {
  formatDate,
  getValidDateNearestTarget,
  isValidDateInRange,
  parseDate,
} from '../../utilities/date';
import useUniqueId from '../../hooks/useUniqueId';
import { Keys } from '../../utilities/keyboard';
import { pickCommonProps, CommonProps } from '../../utilities/commonProps';

type Props = {
  date?: string | Date;
  onDateClick: (date: string) => void;
  minDate?: string | Date;
  maxDate?: string | Date;
} & CommonProps;

function DatePicker(
  props: Props,
  ref: React.Ref<HTMLDivElement>
): React.ReactElement {
  const { date, onDateClick, minDate, maxDate } = props;
  const now = new Date();
  const targetDate =
    parseDate(date) || getValidDateNearestTarget(now, minDate, maxDate) || now;
  const [showingMonth, setShowingMonth] = React.useState(targetDate);
  const beginningOfMonth = startOfMonth(showingMonth);
  const beginningOfCalendar = addDays(
    beginningOfMonth,
    beginningOfMonth.getDay() * -1
  );
  const endOfMonth = addDays(addMonths(beginningOfMonth, 1), -1);
  const endOfCalendar = addDays(endOfMonth, 6 - endOfMonth.getDay());
  const countOfWeeks = Math.ceil(
    differenceInDays(endOfCalendar, beginningOfCalendar) / 7
  );
  const weeks = [...Array(countOfWeeks)].map((_, week) =>
    [...Array(7)].map((_, day) => addDays(beginningOfCalendar, week * 7 + day))
  );
  const tableRef = React.useRef<HTMLTableElement>(null);
  const uniqueId = useUniqueId('vb-datePicker');

  React.useEffect(() => {
    const parsedDate = parseDate(date);
    if (parsedDate) {
      setShowingMonth(parsedDate);
    }
  }, [date]);
  React.useEffect(() => {
    const parsedDate = parseDate(date);
    if (parsedDate) {
      const focused = document.activeElement;
      // テーブル内にフォーカスがあるとき、dateやshowingMonthが変化したらそこにフォーカスも移動させる
      // テーブルの外（前/次の月ボタンなど）にフォーカスがあるときは何もしない
      if (focused && tableRef.current && tableRef.current.contains(focused)) {
        const elm = tableRef.current.querySelector(
          `#${uniqueId}__${formatDate(parsedDate)}`
        );
        elm && (elm as HTMLElement).focus();
      }
    }
  }, [date, showingMonth, uniqueId]);

  return (
    <div
      className="vb-datePicker"
      id={uniqueId}
      ref={ref}
      {...pickCommonProps(props)}
    >
      <div className="vb-datePicker__header">
        <Button
          appearance="tertiary"
          small
          onClick={(): void => setShowingMonth(addMonths(showingMonth, -1))}
        >
          前の月
        </Button>
        <div
          className="vb-datePicker__month"
          aria-live="polite"
          aria-atomic="true"
        >
          {format(showingMonth, 'YYYY年M月')}
        </div>
        <Button
          appearance="tertiary"
          small
          onClick={(): void => setShowingMonth(addMonths(showingMonth, 1))}
        >
          次の月
        </Button>
      </div>

      <table className="vb-datePicker__calendar" ref={tableRef}>
        <thead>
          <tr>
            <th className="vb-datePicker__calendarHead" aria-label="日曜日">
              日
            </th>
            <th className="vb-datePicker__calendarHead" aria-label="月曜日">
              月
            </th>
            <th className="vb-datePicker__calendarHead" aria-label="火曜日">
              火
            </th>
            <th className="vb-datePicker__calendarHead" aria-label="水曜日">
              水
            </th>
            <th className="vb-datePicker__calendarHead" aria-label="木曜日">
              木
            </th>
            <th className="vb-datePicker__calendarHead" aria-label="金曜日">
              金
            </th>
            <th className="vb-datePicker__calendarHead" aria-label="土曜日">
              土
            </th>
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, i) => (
            <tr key={i}>
              {week.map((day, j) => {
                const isSelectedDay = date && isSameDay(day, date);
                const isToday = isSameDay(day, now);
                const isDisabledDay = !isValidDateInRange(
                  day,
                  minDate,
                  maxDate
                );
                const isOtherMonth =
                  isBefore(day, beginningOfMonth) || isAfter(day, endOfMonth);

                return (
                  <td
                    key={j}
                    className={`vb-datePicker__calendarCell${
                      isDisabledDay
                        ? ' vb-datePicker__calendarCell--disabled'
                        : ''
                    }${
                      isSelectedDay
                        ? ' vb-datePicker__calendarCell--selected'
                        : ''
                    }${
                      isOtherMonth
                        ? ' vb-datePicker__calendarCell--otherMonth'
                        : ''
                    }`}
                  >
                    <span
                      className="vb-datePicker__dateButton"
                      tabIndex={isDisabledDay || isOtherMonth ? -1 : 0}
                      onClick={(): void => {
                        !isDisabledDay && onDateClick(formatDate(day));
                      }}
                      onKeyDown={(e): void => {
                        if (
                          !isDisabledDay &&
                          (e.key === Keys.ENTER || e.key === Keys.SPACE)
                        ) {
                          e.preventDefault();
                          onDateClick(formatDate(day));
                        }
                      }}
                      id={`${uniqueId}__${formatDate(day)}`}
                      aria-label={`${format(day, 'YYYY年M月D日')}`}
                      aria-current={isToday ? 'date' : undefined}
                      aria-pressed={!!isSelectedDay}
                      role="button"
                      aria-disabled={isDisabledDay}
                    >
                      <span
                        className={`vb-datePicker__dateNumber${
                          isToday ? ' vb-datePicker__dateNumber--today' : ''
                        }`}
                      >
                        {format(day, 'D')}
                      </span>
                    </span>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default React.forwardRef(DatePicker);
