import * as React from 'react';
import TextField from '../../lv1/forms/TextField';
import { Ascii, Digits } from '../../utilities';
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
  | 'suffix'
  | 'onInput'
  | 'onFocus'
  | 'onBlur'
  | 'onKeyDown'
  | 'onKeyUp'
  | 'min'
  | 'max'
  | 'hideSpinner'
  | keyof CommonProps
> & {
  /**
   * 空値の入力を許可します
   * @default false
   */
  nullable?: boolean;
  onChange?: (value: number | null) => void;
  /**
   * spinnerの増減値
   * @default 1 / Math.pow(10, places)
   */
  step?: number;
  /**
   * 小数点以下の表示桁数を指定します
   * @default 2
   */
  places?: number;
  value?: number | null;
};

const useHandleValue = ({
  nullable,
  onBlur,
  onChange,
  onFocus,
  places,
  value,
}: Pick<
  Props,
  'nullable' | 'onBlur' | 'onChange' | 'onFocus' | 'places' | 'value'
>) => {
  // 数値から小数点を含めた文字列に変換する、その際小数点以下の桁数を指定された桁数で丸める
  const numberToString = React.useCallback(
    (value?: number | null) => {
      return nullable && value == null ? '' : (value ?? 0).toFixed(places);
    },
    [nullable, places]
  );
  // 小数点が含まれた文字列を数値に変換する、その際小数点以下の桁数を指定された桁数で丸める
  const stringToNumber = (value: string) => {
    return nullable && !value
      ? null
      : Number(Digits.numberize(Ascii.zenkakuToHankaku(value)).toFixed(places));
  };

  const [isFocused, setFocused] = React.useState(false);
  const [showingValue, setShowingValue] = React.useState(numberToString(value));

  React.useEffect(() => {
    // 非フォーカス時のみ value の値が変わった場合に表示値を更新する
    !isFocused && setShowingValue(numberToString(value));
  }, [isFocused, numberToString, setShowingValue, value]);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    const value = e.target.value;
    setShowingValue(String(stringToNumber(value) ?? ''));
    onBlur && onBlur(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
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

/**
 * 入力値が1〜2桁のことが大半の場合や、小数点を含む可能性が高い数値入力用のコンポーネントです。
 *
 * - 仕様の多くは `TextField` と共通しています。
 * - `<input type="number">` としてレンダリングされ、 `max` `min` `step` が使用できます。
 *   - ブラウザによってスピナーが表示され、`step` で指定した数値を加算・減産できるようになります。
 * - 金額や、小数点以下の無い大きな数値を扱う場合は DigitsInput を使用してください。
 *   - どちらを使うかは、「整数部分の桁数が3〜4桁以上になる頻度」「`step` 単位で加算・除算して調整する頻度」「小数点が含まれる頻度」などから判断してください
 * - places オプションで小数点以下の表示桁数を指定します。それ以上の精度の小数点以下の数値はフォーカスが離れたときに指定の精度まで `toFixed()` で丸められます。
 */
const DecimalInput: React.FC<Props> = (props: Props) => {
  const {
    nullable,
    onBlur,
    onChange,
    onFocus,
    places = 2,
    step = 1 / Math.pow(10, places),
    value,
    ...others
  } = props;

  const { handleBlur, handleChange, handleFocus, showingValue } =
    useHandleValue({
      nullable,
      onBlur,
      onChange,
      onFocus,
      places,
      value,
    });

  return (
    <TextField
      {...others}
      autoComplete="off"
      onBlur={handleBlur}
      onChange={handleChange}
      onFocus={handleFocus}
      step={step}
      type="number"
      value={showingValue}
    />
  );
};

export default DecimalInput;
