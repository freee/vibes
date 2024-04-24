import * as React from 'react';
import TextField from '../../lv1/forms/TextField';
import { MarginClassProps } from '../../utilities/marginClasses';
import { CommonProps, pickCommonProps } from '../../utilities/commonProps';

import { Ascii, Digits } from '../../utilities';
import {
  TextBoxAriaProps,
  filterTextBoxAriaProps,
} from '../../utilities/AriaProps';

type PropsFromTextField = Pick<
  Parameters<typeof TextField>[0],
  | 'id'
  | 'label'
  | 'labelledby'
  | 'placeholder'
  | 'name'
  | 'required'
  | 'disabled'
  | 'error'
  | 'small'
  | 'width'
  | 'suffix'
  | 'onFocus'
  | 'onBlur'
  | 'onInput'
  | 'onKeyDown'
  | 'borderless'
>;

type Props = {
  value?: number | null;
  nullable?: boolean;
  onChange?: (value: number | null) => void;
  /**
   * 小数点の桁数上限
   */
  decimalLimit?: number;
} & PropsFromTextField &
  TextBoxAriaProps &
  MarginClassProps &
  CommonProps;

const useHandlers = ({
  value,
  setShowingValue,
  onFocus,
  onBlur,
  onChange,
  nullable,
  decimalLimit,
}: {
  value: number | null | undefined;
  setShowingValue: React.Dispatch<React.SetStateAction<string>>;
  onFocus: React.FormEventHandler | undefined;
  onBlur?: React.FormEventHandler | undefined;
  onChange: ((value: number | null) => void) | undefined;
  nullable: boolean | undefined;
} & Pick<Props, 'decimalLimit'>): {
  onFieldFocus: React.FormEventHandler;
  onFieldBlur: React.FormEventHandler;
  onFieldChange: React.FormEventHandler;
} => {
  const [isFocused, setFocused] = React.useState(false);

  const onFieldFocus = React.useCallback(
    (e) => {
      setFocused(true);

      // フォーカス時、valueがnullまたはnullableではない状態で0なら空欄化
      if (!value && (!nullable || value !== 0)) {
        setShowingValue('');
      }
      if (onFocus) {
        onFocus(e);
      }
    },
    [value, setShowingValue, setFocused, nullable, onFocus]
  );

  const onFieldBlur = React.useCallback(
    (e) => {
      setFocused(false);
      if (value) {
        setShowingValue(Digits.formalize(value));
      } else if (nullable && value !== 0) {
        setShowingValue('');
      } else {
        setShowingValue('0');
      }
      if (onBlur) {
        onBlur(e);
      }
    },
    [value, nullable, onBlur, setShowingValue]
  );

  // decimalLimit が指定されていた場合その桁数以上の小数点を削除する
  const sliceDecimal = React.useCallback(
    (numValue: number) => {
      if (numValue == null || decimalLimit == null) {
        return numValue;
      }

      const [int, decimal] = `${numValue}`.split('.');

      return Number(
        [int, (decimal || '').slice(0, Math.max(decimalLimit, 0)) || undefined]
          .filter((v) => v != null)
          .join('.')
      );
    },
    [decimalLimit]
  );

  const onFieldChange = React.useCallback(
    (e) => {
      const origValue = e.target.value
        .replace('/', '000')
        .replace(/,,$/, ',000');
      setShowingValue(origValue);

      if (onChange) {
        const numValue = Digits.numberize(Ascii.zenkakuToHankaku(origValue));

        // Invokes `onChange()` handler with `null` or `0` if the parsed input value is not a finite number.
        if (!Number.isFinite(numValue)) {
          return onChange(nullable ? null : 0);
        }

        onChange(nullable && !origValue ? null : sliceDecimal(numValue));
      }
    },
    [nullable, onChange, setShowingValue, sliceDecimal]
  );
  React.useEffect(() => {
    // 非Focus時のみ値の更新をする
    if (!isFocused) {
      if (value) {
        setShowingValue(Digits.formalize(value));
      } else if (nullable && value !== 0) {
        setShowingValue('');
      } else {
        setShowingValue('0');
      }
    }
  }, [value, nullable, setShowingValue, isFocused]);
  return { onFieldFocus, onFieldBlur, onFieldChange };
};

const DigitsInputInner = function (
  props: Props,
  ref?: React.Ref<HTMLInputElement> | React.MutableRefObject<HTMLInputElement>
) {
  const {
    id,
    label,
    labelledby,
    placeholder,
    name,
    required,
    disabled,
    error,
    small,
    width,
    suffix,
    onChange,
    onFocus,
    onBlur,
    onInput,
    onKeyDown,
    value,
    nullable,
    borderless,
    decimalLimit,
  } = props;
  const { marginTop, marginBottom, marginLeft, marginRight, marginSize } =
    props;
  const [showingValue, setShowingValue] = React.useState(
    value || nullable ? '' : '0'
  );

  const { onFieldFocus, onFieldBlur, onFieldChange } = useHandlers({
    value,
    setShowingValue,
    onFocus,
    onBlur,
    onChange,
    nullable,
    decimalLimit,
  });

  return (
    <TextField
      ref={ref}
      alignRight
      id={id}
      label={label}
      labelledby={labelledby}
      placeholder={placeholder}
      name={name}
      required={required}
      disabled={disabled}
      error={error}
      small={small}
      width={width}
      autoComplete="off"
      suffix={suffix}
      value={showingValue}
      borderless={borderless}
      onChange={onFieldChange}
      onFocus={onFieldFocus}
      onBlur={onFieldBlur}
      onInput={onInput}
      onKeyDown={onKeyDown}
      {...{ marginTop, marginBottom, marginLeft, marginRight, marginSize }}
      {...pickCommonProps(props)}
      {...filterTextBoxAriaProps(props)}
    />
  );
};

/**
 * 入力された数値を3桁ごとに区切って表示する機能をもつテキストフィールドです。
 * 金額や、大きな数値を扱う場合（目安としては 1,000 以上になるのが通常の場合）に使用してください。
 *
 * - 仕様の多くは `TextField` と共通しています
 * - ユーザーの入力値は、表示上はフィールドからフォーカスを外した時点で数値以外の文字は除去され3桁ごとにカンマが挿入されます
 *   - ユーザーの入力を妨げないよう、入力中（フォーカス中）は表示される値を変化させないようになっています
 *   - `onChange` の発火は、ユーザーのキー入力ごとに行われます
 * - 入力値が1〜2桁のことが大半の場合や、小数点を含む可能性が高い場合には、このコンポーネントではなく、 `DecimalInput` を使用することも検討してください
 *   - `DecimalInput` は、 `<input type="number">` としてレンダリングされ、 `max` `min` `step` が使用できるようになります
 *     （`DigitsInput` はカンマを挿入する関係で  `<input type="text">` としています）
 *     - このとき、ブラウザによってスピナーが表示され、`step` で指定した数値を加算・除算できるようになります
 *   - どちらを使うかは、「整数部分の桁数が3〜4桁以上になる頻度」「`step` 単位で加算・除算して調整する頻度」「小数点が含まれる頻度」などから判断してください
 * - デフォルトの挙動では、空欄にしてフォーカスを外すと入力値は `0` となります。 `nullable={true}` にすることで、空欄にすることができるようになります
 * - ユーザーの入力値は `number | null` として `onChange` で取得できます
 *   - 全角文字を半角文字に変換し、不要な文字を消した上で数値として評価します
 *   - 正の数や整数に限定したり、最大・最小値を指定するような処理はDigitsInputでは行っていません。入力値をそれらに限定したい場合は、使用する側でエラーメッセージを出すなどのハンドリングをしてください
 * - `,`を連続で入力するか`/`を入力すると、`000` が挿入されます
 */
const DigitsInput = React.forwardRef(DigitsInputInner);
export default DigitsInput;
