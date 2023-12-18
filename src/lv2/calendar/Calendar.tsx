import * as React from 'react';
import CalendarHead from '../../lv1/calendar/CalendarHead';
import Weeks from './Weeks';
import { TimeRecord } from '../../lv1/calendar/CalendarDate';
import { KeyCodes } from '../../utilities/keyboard';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import { startOfMonth, getDate } from 'date-fns';

type Props = {
  year: string;
  month: string;
  contents?: TimeRecord[]; // unionで足していく
  startFromMonday?: boolean;
  nationalHolidays?: string[];
  onClickDate?: (date: string) => void;
} & CommonProps;

export default class Calendar extends React.Component<Props> {
  selectableDateRefs: HTMLDivElement[] = [];
  render(): React.ReactElement {
    this.selectableDateRefs = [];

    const {
      year,
      month,
      startFromMonday,
      contents,
      nationalHolidays,
      onClickDate,
    } = this.props;
    const starDateOfMonth = startOfMonth(new Date(`${year}/${month}/1`));
    const weekStartsOn = startFromMonday ? 1 : 0;
    return (
      <table {...commonProps(this.props, 'vb-calendar')}>
        <thead>
          <CalendarHead weekStartsOn={weekStartsOn} />
        </thead>
        <tbody>
          <Weeks
            weekStartsOn={weekStartsOn}
            starDateOfMonth={starDateOfMonth}
            contents={contents}
            nationalHolidays={nationalHolidays}
            onClickDate={onClickDate}
            selectableDateRefs={this.selectableDateRefs}
            handleKeyDownSelectedDate={this.handleKeyDownSelectedDate.bind(
              this
            )}
          />
        </tbody>
      </table>
    );
  }

  handleKeyDownSelectedDate = (
    e: React.KeyboardEvent<HTMLDivElement>,
    date: string,
    onClickDate?: (date: string) => void
  ): void => {
    const dateNum = getDate(new Date(date));
    switch (e.keyCode) {
      case KeyCodes.ESC:
        e.preventDefault();
        this.selectableDateRefs[dateNum - 1] &&
          this.selectableDateRefs[dateNum - 1].blur();
        break;
      case KeyCodes.UP:
        e.preventDefault();
        this.selectableDateRefs[dateNum - 8] &&
          this.selectableDateRefs[dateNum - 8].focus();
        break;
      case KeyCodes.DOWN:
        e.preventDefault();
        this.selectableDateRefs[dateNum + 6] &&
          this.selectableDateRefs[dateNum + 6].focus();
        break;
      case KeyCodes.LEFT:
        e.preventDefault();
        this.selectableDateRefs[dateNum - 2] &&
          this.selectableDateRefs[dateNum - 2].focus();
        break;
      case KeyCodes.RIGHT:
        e.preventDefault();
        this.selectableDateRefs[dateNum] &&
          this.selectableDateRefs[dateNum].focus();
        break;
      case KeyCodes.ENTER:
        e.preventDefault();
        onClickDate && onClickDate(date);
        break;
    }
  };
}
