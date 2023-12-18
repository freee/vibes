import * as React from 'react';
import { parse, isValid, isBefore, isAfter } from 'date-fns';

import { formatDate } from '../../utilities/date';
import DateInput from '../formFields/DateInput';
import styled from 'styled-components';
import { CommonStyle } from '../../internal/CommonStyle';

type Props = {
  /**
   * input required を指定します
   */
  required?: boolean;
  /**
   * disabled 状態にします
   */
  disabled?: boolean;
  /**
   * エラー状態にします
   */
  error?: boolean;
  /**
   * 開始日を指定します
   */
  startDate?: Date | string;
  /**
   * 開始日の id を指定します
   */
  startDateId?: string;
  /**
   * 開始日の name を指定します
   */
  startDateName?: string;
  /**
   * 開始日の input aria-label を指定します
   */
  startDateLabel?: string;
  /**
   * 開始日の input aria-labelledby を指定します
   */
  startDateLabelledby?: string;
  /**
   * 開始日の input placeholder を指定します
   */
  startDatePlaceholder?: string;
  /**
   * 終了日を指定します
   */
  endDate?: Date | string;
  /**
   * 終了日の id を指定します
   */
  endDateId?: string;
  /**
   * 終了日の name を指定します
   */
  endDateName?: string;
  /**
   * 終了日の input aria-label を指定します
   */
  endDateLabel?: string;
  /**
   * 終了日の input aria-labelledby を指定します
   */
  endDateLabelledby?: string;
  /**
   * 終了日の input placeholder を指定します
   */
  endDatePlaceholder?: string;
  /**
   * サイズを小さくします
   */
  small?: boolean;
  /**
   * DateInput の幅を指定します（default: `small`）
   * 後方互換のために default を `small` にしていますが、日付が隠れてしまうため、`medium` 以上を指定するようにしてください。
   */
  width?: React.ComponentProps<typeof DateInput>['width'];
  /**
   * 入力できる最小値を指定します
   */
  minDate?: string;
  /**
   * 入力できる最大値を指定します
   */
  maxDate?: string;
  onChange?: (duration: [string, string]) => void;
  onFocus?: React.FormEventHandler;
  onBlur?: React.FormEventHandler;
  onInput?: React.FormEventHandler;
  onKeyDown?: React.KeyboardEventHandler;
};

const ComponentStyle = styled(CommonStyle)({
  alignItems: 'center',
  display: 'inline-flex',
});

const DateDurationField: React.FC<Props> = ({
  required,
  disabled,
  error,
  startDate: originalStartDate,
  startDateId,
  startDateName,
  startDateLabel,
  startDateLabelledby,
  startDatePlaceholder,
  endDate: originalEndDate,
  endDateId,
  endDateName,
  endDateLabel,
  endDateLabelledby,
  endDatePlaceholder,
  small,
  minDate,
  maxDate,
  width = 'small', // 後方互換のために default を small にしています。
  onChange,
  onFocus,
  onBlur,
  onInput,
  onKeyDown,
}: Props) => {
  const [startDate, setStartDate] = React.useState(originalStartDate);
  const [endDate, setEndDate] = React.useState(originalEndDate);

  React.useEffect(() => setStartDate(originalStartDate), [originalStartDate]);
  React.useEffect(() => setEndDate(originalEndDate), [originalEndDate]);

  const handleChangeStartDate = React.useCallback(
    (date: string) => setStartDate(date),
    []
  );

  const handleChangeEndDate = React.useCallback(
    (date: string) => setEndDate(date),
    []
  );

  const handleBlurStartDate = React.useCallback(
    (e) => {
      if (onChange) {
        const parsedStartDate = parse(startDate ?? '');
        const parsedEndDate = parse(endDate ?? '');
        if (
          isValid(parsedStartDate) &&
          isValid(parsedEndDate) &&
          isAfter(parsedStartDate, parsedEndDate)
        ) {
          // 開始日と終了日が逆行する場合は変更した側ではない側のフィールドを空欄にする
          onChange([formatDate(parsedStartDate), '']);
        } else {
          onChange([formatDate(parsedStartDate), formatDate(parsedEndDate)]);
        }
      }

      onBlur && onBlur(e);
    },
    [endDate, onBlur, onChange, startDate]
  );

  const handleBlurEndDate = React.useCallback(
    (e) => {
      if (onChange) {
        const parsedStartDate = parse(startDate ?? '');
        const parsedEndDate = parse(endDate ?? '');
        if (
          isValid(parsedStartDate) &&
          isValid(parsedEndDate) &&
          isBefore(parsedEndDate, parsedStartDate)
        ) {
          // 開始日と終了日が逆行する場合は変更した側ではない側のフィールドを空欄にする
          onChange(['', formatDate(parsedEndDate)]);
        } else {
          onChange([formatDate(parsedStartDate), formatDate(parsedEndDate)]);
        }
      }

      onBlur && onBlur(e);
    },
    [endDate, onBlur, onChange, startDate]
  );

  return (
    <ComponentStyle>
      <DateInput
        id={startDateId}
        label={startDateLabel ?? '開始日'}
        labelledby={startDateLabelledby}
        name={startDateName}
        value={startDate}
        required={required}
        disabled={disabled}
        error={error}
        placeholder={startDatePlaceholder}
        minDate={minDate}
        maxDate={maxDate}
        onChange={handleChangeStartDate}
        onFocus={onFocus}
        onBlur={handleBlurStartDate}
        onInput={onInput}
        onKeyDown={onKeyDown}
        small={small}
        width={width}
      />
      <span>&nbsp;～&nbsp;</span>
      <DateInput
        id={endDateId}
        label={endDateLabel ?? '終了日'}
        labelledby={endDateLabelledby}
        name={endDateName}
        value={endDate}
        required={required}
        disabled={disabled}
        error={error}
        placeholder={endDatePlaceholder}
        minDate={minDate}
        maxDate={maxDate}
        onChange={handleChangeEndDate}
        onFocus={onFocus}
        onBlur={handleBlurEndDate}
        onInput={onInput}
        onKeyDown={onKeyDown}
        small={small}
        width={width}
      />
    </ComponentStyle>
  );
};

export default DateDurationField;
