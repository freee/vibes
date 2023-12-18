import * as React from 'react';
import TextField from '../../lv1/forms/TextField';
import { Ascii, TimeString } from '../../utilities';
import { CommonProps } from '../../utilities/commonProps';

type Props = Pick<
  React.ComponentProps<typeof TextField>,
  | 'id'
  | 'label'
  | 'labelledby'
  | 'placeholder'
  | 'name'
  | 'required'
  | 'autofocus'
  | 'disabled'
  | 'error'
  | 'small'
  | 'large'
  | 'alignCenter'
  | 'alignRight'
  | 'width'
  | 'onInput'
  | 'onFocus'
  | 'onBlur'
  | 'onKeyDown'
  | 'onKeyUp'
  | keyof CommonProps
> & {
  /**
   * 最小値を指定します
   */
  minTime?: string;
  /**
   * 最大値を指定します
   */
  maxTime?: string;
  /**
   * 空値の入力を許可します
   */
  nullable?: boolean;
  onChange?: (value: string | null) => void;
  value?: string | null;
};

const useHandleValue = ({
  minTime,
  maxTime,
  nullable,
  onBlur,
  onChange,
  onFocus,
  onKeyDown,
  value,
}: Pick<
  Props,
  | 'minTime'
  | 'maxTime'
  | 'nullable'
  | 'onBlur'
  | 'onChange'
  | 'onFocus'
  | 'onKeyDown'
  | 'value'
>) => {
  // hh:mm に変換する
  const convert = React.useCallback(
    (value?: string | null) => {
      return !value && nullable
        ? null
        : TimeString.convert(
            Ascii.zenkakuToHankaku(value ?? ''),
            minTime,
            maxTime
          );
    },
    [nullable, minTime, maxTime]
  );
  const [isFocused, setFocused] = React.useState(false);
  const [showingValue, setShowingValue] = React.useState(convert(value) ?? '');
  const [selectionRange, setSelectionRange] = React.useState<number[] | null>(
    null
  );
  const ref = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    // 非フォーカス時のみ value の値が変わった場合に表示値を更新する
    !isFocused && setShowingValue(convert(value) ?? '');
  }, [convert, isFocused, setShowingValue, value]);
  React.useEffect(() => {
    // 値が変わった場合に選択範囲を再設定する
    if (selectionRange) {
      const [start, end] = selectionRange;
      ref.current?.setSelectionRange(start, end);
    }
  }, [showingValue, selectionRange]);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    const value = e.target.value;
    setShowingValue(convert(value) ?? '');
    setSelectionRange(null);
    onBlur && onBlur(e);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setShowingValue(value);
    onChange && onChange(convert(value));
  };
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    onFocus && onFocus(e);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // 上下矢印キー押下時に時間を増減する
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault();
      // キャレット位置を取得して、:より前なら時間、後なら分を対象にする
      const position = e.currentTarget.selectionEnd ?? 0;
      const regexp = /[:：]/g;
      const forward =
        regexp.test(e.currentTarget.value) && regexp.lastIndex > position;
      const offset = e.key === 'ArrowUp' ? 1 : -1;

      // 時間 or 分を増減
      let hours = TimeString.getHour(showingValue);
      let minutes = TimeString.getMin(showingValue);
      if (forward) {
        hours += offset;
      } else {
        minutes += offset * 10;
      }
      // 操作の結果 0min 以下だった場合は 00:00 に修正する
      if (hours * 60 + minutes < 0) {
        hours = 0;
        minutes = 0;
      }

      const timeString = TimeString.createTimeString(hours, minutes);
      const newValue = TimeString.convert(timeString, minTime, maxTime);

      // caret の選択範囲を操作中の項目に設定するために range を計算する
      let range: number[];
      if (forward) {
        range = [0, newValue.indexOf(':')];
      } else {
        range = [newValue.indexOf(':') + 1, newValue.length];
      }

      setShowingValue(newValue);
      setSelectionRange(range);

      onChange && onChange(newValue);
    } else {
      setSelectionRange(null);
    }
    onKeyDown && onKeyDown(e);
  };

  return {
    handleBlur,
    handleChange,
    handleFocus,
    handleKeyDown,
    ref,
    showingValue,
  };
};

const TimeInput: React.FC<Props> = (props: Props) => {
  const {
    large,
    minTime,
    maxTime,
    nullable,
    onBlur,
    onChange,
    onFocus,
    onKeyDown,
    value,
    // large の場合は幅が収まらないので一回り大きくする
    width = large ? 'small' : 'xSmall',
    ...others
  } = props;

  const {
    handleBlur,
    handleChange,
    handleFocus,
    handleKeyDown,
    ref,
    showingValue,
  } = useHandleValue({
    minTime,
    maxTime,
    nullable,
    onBlur,
    onChange,
    onFocus,
    onKeyDown,
    value,
  });

  return (
    <TextField
      {...others}
      autoComplete="off"
      large={large}
      onBlur={handleBlur}
      onChange={handleChange}
      onFocus={handleFocus}
      onKeyDown={handleKeyDown}
      ref={ref}
      value={showingValue}
      width={width}
    />
  );
};

export default TimeInput;
