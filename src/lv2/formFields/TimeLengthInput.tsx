import * as React from 'react';
import TimeInput from './TimeInput';
import { Mins } from '../../utilities';
import { CommonProps } from '../../utilities/commonProps';

type Props = Pick<
  React.ComponentProps<typeof TimeInput>,
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
  | 'nullable'
  | keyof CommonProps
> & {
  onChange?: (value: number | null) => void;
  value?: number | null;
};

const useHandleValue = ({
  nullable,
  onBlur,
  onChange,
  onFocus,
  value,
}: Pick<Props, 'nullable' | 'onBlur' | 'onChange' | 'onFocus' | 'value'>) => {
  // mins を hh:mm に変換する
  const numberToString = React.useCallback(
    (value?: number | null) => {
      return value === null && nullable ? null : Mins.minToStr(value ?? 0);
    },
    [nullable]
  );
  // hh:mm を mins に変換する
  const stringToNumber = React.useCallback(
    (value?: string | null) => {
      return value === null && nullable ? null : Mins.strToMin(value ?? '');
    },
    [nullable]
  );
  const [isFocused, setFocused] = React.useState(false);
  const [showingValue, setShowingValue] = React.useState(numberToString(value));
  React.useEffect(() => {
    // 非フォーカス時のみ value の値が変わった場合に表示値を更新する
    !isFocused && setShowingValue(numberToString(value));
  }, [isFocused, numberToString, setShowingValue, value]);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    onBlur && onBlur(e);
  };
  const handleChange = (value: string | null) => {
    setShowingValue(value);
    onChange && onChange(stringToNumber(value));
  };
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    onFocus && onFocus(e);
  };

  return {
    handleBlur,
    handleChange,
    handleFocus,
    showingValue,
  };
};

const TimeLengthInput: React.FC<Props> = (props: Props) => {
  const { nullable, onBlur, onChange, onFocus, value, ...others } = props;

  const { handleBlur, handleChange, handleFocus, showingValue } =
    useHandleValue({
      nullable,
      onBlur,
      onChange,
      onFocus,
      value,
    });

  return (
    <TimeInput
      {...others}
      nullable={nullable}
      onBlur={handleBlur}
      onChange={handleChange}
      onFocus={handleFocus}
      value={showingValue}
    />
  );
};

export default TimeLengthInput;
