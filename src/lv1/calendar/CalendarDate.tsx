import * as React from 'react';
import { getDate } from 'date-fns';
import { MdError, MdWarning, MdCheckCircle } from 'react-icons/md';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import vbClassNames from '../../utilities/vbClassNames';

export type TimeRecord = {
  type: 'TimeRecord';
  date: string;
  status?: 'alert' | 'notice' | 'success';
  dateLabel?: string;
  openingTime: string;
  endingTime: string;
};

type Props = {
  /**
   * 日付を設定します
   */
  date: string;
  /**
   * ラベルを設定します
   */
  dateLabel?: string;
  /**
   * 現在日に設定します
   */
  today?: boolean;
  /**
   * disabled に設定します
   */
  disabled?: boolean;
  /**
   * 休日に設定します
   */
  secondaryHoliday?: boolean;
  /**
   * 休日に設定します
   */
  primaryHoliday?: boolean;
  /**
   * 祝日に設定します
   */
  nationalHoliday?: boolean;
  /**
   * 勤務情報を設定します
   */
  content?: TimeRecord; // 用途に合わせてunionで足していく
  /**
   * click ハンドラを設定します
   */
  onClickDate?: (date: string) => void;
  /**
   * ref を設定します
   */
  selectableDateRef?: (el: HTMLDivElement) => void;
  /**
   * keydown ハンドラを設定します
   */
  onKeyDown?: (
    e: React.KeyboardEvent<HTMLDivElement>,
    date: string,
    onClickDate?: (date: string) => void
  ) => void;
} & CommonProps;

export default function CalendarDate(props: Props): React.ReactElement {
  const {
    date,
    dateLabel,
    today,
    disabled,
    secondaryHoliday,
    primaryHoliday,
    nationalHoliday,
    content,
    onClickDate,
    selectableDateRef,
    onKeyDown,
  } = props;

  const dateNumber = getDate(new Date(date));
  const dateBaseClass = 'vb-calendarDate';
  const statusBaseClass = dateBaseClass + '__status';
  const dateNumberBaseClass = dateBaseClass + '__number';

  const dateClassModifier = {
    input: !!content,
    disabled: !!disabled,
    'primary-holiday': !content && !!primaryHoliday,
    'secondary-holiday': (!content && secondaryHoliday) || nationalHoliday,
  };

  const statusName = content && content.status ? content.status : '';
  const statusClass = vbClassNames(statusBaseClass, {
    modifier: {
      alert: statusName === 'alert',
      notice: statusName === 'notice',
      success: statusName === 'success',
    },
  });

  const numberClassName = vbClassNames(dateNumberBaseClass, {
    modifier: {
      today,
      'today--input': today && !!content,
    },
  });

  const tabIndex = !disabled ? 0 : -1;
  return (
    <td {...commonProps(props, dateBaseClass, dateClassModifier)}>
      <div
        className={`${dateBaseClass}__inner`}
        role="button"
        ref={
          disabled
            ? undefined
            : selectableDateRef
            ? selectableDateRef
            : undefined
        }
        onClick={(): false | void | undefined =>
          !disabled && onClickDate && onClickDate(date)
        }
        aria-disabled={disabled && true}
        onKeyDown={(
          e: React.KeyboardEvent<HTMLDivElement>
        ): false | void | undefined =>
          !disabled &&
          onKeyDown &&
          onKeyDown(e, date, onClickDate && onClickDate)
        }
        tabIndex={tabIndex}
      >
        {dateNumber && <span className={numberClassName}>{dateNumber}</span>}
        {dateLabel && (
          <span className={`${dateBaseClass}__type`}>{dateLabel}</span>
        )}

        {content && content.type === 'TimeRecord' && (
          <span className={`${dateBaseClass}__time`}>
            {content.openingTime}-{content.endingTime}
          </span>
        )}
        <div className={statusClass}>
          {statusName === 'alert' ? (
            <MdError className={`${dateBaseClass}__icon`} />
          ) : statusName === 'notice' ? (
            <MdWarning className={`${dateBaseClass}__icon`} />
          ) : statusName === 'success' ? (
            <MdCheckCircle className={`${dateBaseClass}__icon`} />
          ) : null}
        </div>
      </div>
    </td>
  );
}
