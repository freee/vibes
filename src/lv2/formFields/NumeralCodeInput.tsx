import * as React from 'react';
import TextField from '../../lv1/forms/TextField';
import { Ascii } from '../../utilities';

type Props = Omit<
  React.ComponentProps<typeof TextField>,
  'onChange' | 'type' | 'min' | 'max' | 'step'
> & {
  /**
   * `input` 要素の `type` 属性に使用します。
   *
   * 電話番号の入力に使用する場合のみ、`tel` を使用してください（IMEをオフにするために `tel` を使用しないでください）
   */
  type?: 'text' | 'tel';
  onChange?: (value: string) => void;
  acceptSymbols?: string[];
};

const NumeralCodeInputInternal: React.ForwardRefRenderFunction<
  HTMLInputElement,
  Props
> = (props: Props, ref?: React.Ref<HTMLInputElement>) => {
  const { acceptSymbols, value } = props;
  const [showingValue, setShowingValue] = React.useState(value || '');
  const [isFocused, setFocused] = React.useState(false);

  React.useEffect(() => {
    if (!isFocused) {
      setShowingValue(value || '');
    }
  }, [isFocused, value]);

  const pattern = new RegExp(
    `[^0-9${acceptSymbols ? acceptSymbols.join('').replace('-', '\\-') : ''}]`,
    'g'
  );

  return (
    <TextField
      {...props}
      value={showingValue}
      onChange={(e) => {
        const currentValue = e.target.value;
        const formatedValue = Ascii.zenkakuToHankaku(currentValue).replace(
          pattern,
          ''
        );
        setShowingValue(currentValue);
        props.onChange && props.onChange(formatedValue);
      }}
      onBlur={(e) => {
        setFocused(false);
        setShowingValue(props.value || '');
        props.onBlur && props.onBlur(e);
      }}
      onFocus={(e) => {
        setFocused(true);
        props.onFocus && props.onFocus(e);
      }}
      ref={ref}
    />
  );
};

/**
 * 電話番号・郵便番号・口座番号のように、数値ではないが数字によって入力する項目に使用できるテキストフィールドです。
 *
 * - 仕様の多くは `TextField` と共通しています
 * - ユーザーの入力値は、表示上はフィールドからフォーカスを外した時点で数字以外の文字は除去されます
 *   - ユーザーの入力を妨げないよう、入力中（フォーカス中）は表示される値を変化させないようになっています
 *   - `onChange` の発火は、ユーザーのキー入力ごとに行われます
 * - 全角文字は半角文字に自動で変換されます
 * - 数字ではなく、数値を扱う場合には `DigitsInput` や `type="number"` にした `TextField` を使用してください
 *   - 入力値として 0 で始まる文字列を期待する場合にはこのコンポーネントを使用してください
 * - `acceptSymbols` に文字の配列を渡すことで、数字以外の文字を許容することができます
 *   -  たとえば `acceptSymbols={['-']}` とすることで、ハイフンの入力を許容することができます
 */
const NumeralCodeInput = React.forwardRef<HTMLInputElement, Props>(
  NumeralCodeInputInternal
);
export default NumeralCodeInput;
