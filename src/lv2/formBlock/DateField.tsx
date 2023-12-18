import * as React from 'react';
import {
  format,
  getYear,
  getMonth,
  getDate,
  getDaysInMonth,
  isAfter,
  endOfMonth,
  parse,
} from 'date-fns';
import warekiFormat from 'wareki';
import vbClassNames from '../../utilities/vbClassNames';
import { MarginClassProps } from '../../utilities/marginClasses';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import SelectBox from '../../lv1/forms/SelectBox';
import useUniqueId from '../../hooks/useUniqueId';

type DateType = 'year' | 'month' | 'day';
type Props = {
  /**
   * 選択中の日付を指定します。 `YYYY-MM-DD` 形式の日付を渡してください。
   */
  selectedDate: string | null;
  /**
   * 選択できる日付の範囲の開始地点を指定します。`YYYY-MM-DD` 形式の日付を渡してください。
   */
  startDate: string;
  /**
   * 選択できる日付の範囲の終了地点を指定します。 `YYYY-MM-DD` 形式の日付を渡してください。
   */
  endDate: string;
  /**
   * 表示サイズを小さくします
   */
  small?: boolean;
  disabled?: boolean;
  error?: boolean;
  required?: boolean;
  /**
   * `autoComplete` 属性の値を指定します。生年月日フィールドの場合は `bday` を指定してください。
   */
  autoComplete?: 'off' | 'bday';
  /**
   * `true` にすると、日付を未選択状態にできるようになります
   */
  nullable?: boolean;
  /**
   * `true` にすると、「年」のセレクトボックスが和暦併記になります
   */
  wareki?: boolean;
  onChange?: (date: string | null) => void;
  onInput?: (date: string | null) => void;
  onFocus?: (date: string | null) => void;
  onBlur?: (date: string | null) => void;
  onKeyDown?: (date: string | null) => void;
} & MarginClassProps &
  CommonProps;

// year, month, dayいずれかを更新した新しい日付を year, month, day で返す
const adjustDateParams = (
  type: DateType,
  value: number | null,
  current: { [dateType in DateType]: number | null },
  startDate: string,
  endDate: string
): { year: number | null; month: number | null; day: number | null } => {
  let { year, month, day } = current;
  switch (type) {
    case 'year':
      year = value;
      break;
    case 'month':
      month = value;
      break;
    case 'day':
      day = value;
      break;
  }

  // いずれかが設定されていない場合は日付の調整を行わずそのまま返却する
  if (year === null || month === null || day === null) {
    return { year, month, day };
  }

  let date = new Date(year, month, day);
  // 月の日数が変わる時、範囲外ならその月の末日にする
  // ex: 2019-03-31 -> 2月に変更 -> 2019-02-28
  const monthEndDate = endOfMonth(format(new Date(year, month), 'YYYY-MM'));
  if (isAfter(date, monthEndDate)) {
    date = new Date(year, month, getDate(monthEndDate));
  }
  // range を超えた場合は超えないように収める
  const minDate = parse(startDate);
  if (date < minDate) {
    date = minDate;
  }
  const maxDate = parse(endDate);
  if (date > maxDate) {
    date = maxDate;
  }
  return { year: getYear(date), month: getMonth(date), day: getDate(date) };
};

const createOptions = (
  type: DateType,
  values: Array<number>,
  nullable?: boolean,
  wareki?: boolean
): Array<{ name: string; value: string }> => {
  const getYearName = (year: number) => {
    if (!wareki) {
      return `${year}`;
    }

    const warekiOnStart = warekiFormat(new Date(year, 0, 1).getTime());
    const warekiOnEnd = warekiFormat(new Date(year, 11, 31).getTime());

    // 明治以前の場合、年号を表示しない
    if (Number(warekiOnEnd) === year) {
      return `${year}`;
    }

    // 明治元年の場合
    if (Number(warekiOnStart) === year) {
      return `${year} (${warekiOnEnd})`;
    }

    // 1989年(昭和64・平成元)のような重なる和暦年の場合、両方とも表示
    const warekiYear =
      warekiOnStart === warekiOnEnd
        ? warekiOnStart
        : `${warekiOnStart} / ${warekiOnEnd}`;

    return `${year} (${warekiYear})`;
  };
  const getName = (value: number) => {
    switch (type) {
      case 'year':
        return getYearName(value);
      case 'month':
        return `${value + 1}`;
      case 'day':
        return `${value}`;
    }
  };
  const options = values.map((value) => {
    return {
      name: getName(value),
      value: `${value}`,
    };
  });
  const emptyOptions = nullable ? [{ name: '', value: '' }] : [];
  return [...emptyOptions, ...options];
};

const getYears = (startDate: string, endDate: string) => {
  const startYear = getYear(startDate);
  const endYear = getYear(endDate);
  const size = endYear - startYear + 1;
  return [...Array(size)].map((_, i) => startYear + i);
};

const getMonths = (
  startDate: string,
  endDate: string,
  { year }: { [dateType in DateType]: number | null }
) => {
  if (year === null) {
    return [];
  }
  const startMonth = year === getYear(startDate) ? getMonth(startDate) : 0;
  const endMonth = year === getYear(endDate) ? getMonth(endDate) : 11;
  const size = endMonth - startMonth + 1;
  return [...Array(size)].map((_, i) => startMonth + i);
};

const getDays = (
  startDate: string,
  endDate: string,
  { year, month }: { [dateType in DateType]: number | null }
) => {
  if (year === null || month === null) {
    return [];
  }
  const startDay =
    year === getYear(startDate) && month === getMonth(startDate)
      ? getDate(startDate)
      : 1;
  const endDay =
    year === getYear(endDate) && month === getMonth(endDate)
      ? getDate(endDate)
      : getDaysInMonth(new Date(year, month));
  const size = endDay - startDay + 1;
  return [...Array(size)].map((_, i) => startDay + i);
};

/**
 *
 * セレクトボックスで年月日を選択するフォーム用のフィールドです。
 *
 * - `DateField` は生年月日など、年単位で離れた日付を入力する場合に使用してください
 *   - 近い日付を入力することが多い場合には `DateInput` を使用してください。
 *     `DateInput` はカレンダーを見ながら入力でき、曜日をヒントにすることができる一方、月単位でカレンダーを移動するため年単位で離れた日付の入力には向きません。
 * - `wareki` オプションを使用すると、「年」のセレクトボックスで和暦を併記することができます
 *   - 和暦で認識しているユーザーが多いと思われる、生年月日のフィールド等にはこちらを使用してください
 *
 */
const DateField: React.FC<Props> = (props: Props) => {
  const {
    selectedDate,
    startDate,
    endDate,
    small,
    disabled,
    error,
    required,
    autoComplete,
    nullable,
    wareki,
    onChange,
    onInput,
    onFocus,
    onBlur,
    onKeyDown,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    marginSize,
  } = props;

  const [selectedYear, setSelectedYear] = React.useState(
    selectedDate ? getYear(selectedDate) : null
  );
  const [selectedMonth, setSelectedMonth] = React.useState(
    selectedDate ? getMonth(selectedDate) : null
  );
  const [selectedDay, setSelectedDay] = React.useState(
    selectedDate ? getDate(selectedDate) : null
  );

  React.useEffect(() => {
    setSelectedYear(selectedDate ? getYear(selectedDate) : null);
    setSelectedMonth(selectedDate ? getMonth(selectedDate) : null);
    setSelectedDay(selectedDate ? getDate(selectedDate) : null);
  }, [selectedDate]);

  const selected = {
    year: selectedYear,
    month: selectedMonth,
    day: selectedDay,
  };

  const years = getYears(startDate, endDate);
  const months = getMonths(startDate, endDate, selected);
  const days = getDays(startDate, endDate, selected);

  const unitClassName = vbClassNames('vb-dateField__unit', {
    modifier: { small },
  });
  const id = useUniqueId('vb-dateField');
  const yearId = `${id}__year`;
  const monthId = `${id}__month`;
  const dayId = `${id}__day`;

  const yearWidth = wareki ? 'medium' : 'small';

  const createHandler =
    (
      handler: ((date: string | null) => void) | null | undefined,
      type: DateType,
      selected: { [dateType in DateType]: number | null }
    ) =>
    ({ target }: React.FormEvent | React.KeyboardEvent): void => {
      if (target instanceof HTMLSelectElement) {
        const { value } = target;
        const { year, month, day } = adjustDateParams(
          type,
          value ? parseInt(value) : null,
          selected,
          startDate,
          endDate
        );
        setSelectedYear(year);
        setSelectedMonth(month);
        setSelectedDay(day);
        // 全て選択されている場合は日付を、未選択がある場合は null を返却
        const date =
          year === null || month === null || day === null
            ? null
            : format(new Date(year, month, day), 'YYYY-MM-DD');
        handler && handler(date);
      }
    };

  return (
    <div
      {...commonProps(
        props,
        'vb-dateField',
        {},
        {
          marginBottom,
          marginLeft,
          marginRight,
          marginTop,
          marginSize,
        }
      )}
    >
      <label htmlFor={yearId}>
        <SelectBox
          id={yearId}
          options={createOptions('year', years, nullable, wareki)}
          small={small}
          disabled={disabled}
          error={error}
          required={required}
          value={String(selectedYear)}
          width={yearWidth}
          autoComplete={autoComplete === 'bday' ? 'bday-year' : autoComplete}
          onChange={createHandler(onChange, 'year', selected)}
          onInput={createHandler(onInput, 'year', selected)}
          onFocus={createHandler(onFocus, 'year', selected)}
          onBlur={createHandler(onBlur, 'year', selected)}
          onKeyDown={createHandler(onKeyDown, 'year', selected)}
        />
        <span className={unitClassName}>年</span>
      </label>
      <label htmlFor={monthId}>
        <SelectBox
          id={monthId}
          options={createOptions('month', months, nullable, wareki)}
          small={small}
          disabled={disabled}
          error={error}
          required={required}
          value={String(selectedMonth)}
          width="xSmall"
          autoComplete={autoComplete === 'bday' ? 'bday-month' : autoComplete}
          onChange={createHandler(onChange, 'month', selected)}
          onInput={createHandler(onInput, 'month', selected)}
          onFocus={createHandler(onFocus, 'month', selected)}
          onBlur={createHandler(onBlur, 'month', selected)}
          onKeyDown={createHandler(onKeyDown, 'month', selected)}
        />
        <span className={unitClassName}>月</span>
      </label>
      <label htmlFor={dayId}>
        <SelectBox
          id={dayId}
          options={createOptions('day', days, nullable, wareki)}
          small={small}
          disabled={disabled}
          error={error}
          required={required}
          value={String(selectedDay)}
          width="xSmall"
          autoComplete={autoComplete === 'bday' ? 'bday-day' : autoComplete}
          onChange={createHandler(onChange, 'day', selected)}
          onInput={createHandler(onInput, 'day', selected)}
          onFocus={createHandler(onFocus, 'day', selected)}
          onBlur={createHandler(onBlur, 'day', selected)}
          onKeyDown={createHandler(onKeyDown, 'day', selected)}
        />
        <span className={unitClassName}>日</span>
      </label>
    </div>
  );
};
export default DateField;
