import * as React from 'react';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import { MarginClassProps } from '../../utilities/marginClasses';
import { FormHandlers, AutocompleteAttribute } from './types';
import { useResponsive } from '../../utilities/VibesProvider';

type Props = {
  /**
   * textarea id を指定します
   */
  id?: string;
  /**
   * textarea要素のaria-label を指定します。 `<label>` 要素 (`FormControlLabel` コンポーネントなど)が使用できない場合にのみ使用してください。
   */
  label?: string;
  /**
   * textarea要素のaria-labelledby を指定します。 `<label>` 要素 (`FormControlLabel` コンポーネントなど)が使用できない場合にのみ使用してください。
   */
  labelledby?: string;
  /**
   * textarea 要素の placeholder を指定します。
   * 廃止予定はありませんが、ユーザビリティ・アクセシビリティ上の問題があるため、原則として使用しないでください。
   *
   * - placeholder のテキストの色はアクセシビリティー・ガイドラインのコントラスト比の要件を満たしていません
   * - 「何のフィールドであるか（ラベル）」は入力中に確認できる場所にテキストで記載し、`<label>` 要素を使用して紐付けてください
   * - 入力規則や記入例などの注釈は placeholder ではない場所に記載してください
   *
   * @deprecated
   */
  placeholder?: string;
  /**
   * textarea name を指定します
   */
  name?: string;
  /**
   * textarea value を指定します
   */
  value?: string;
  /**
   * 非制御の場合の初期値を指定します
   */
  defaultValue?: string;
  /**
   * textarea required を指定します
   */
  required?: boolean;
  /**
   * textarea autofocus を指定します
   */
  autofocus?: boolean;
  /**
   * 高さの自動リサイズを有効にします。入力される行数に応じて自動で大きくなっていきます（自動で小さくはなりません）。
   */
  autoResize?: boolean;
  /**
   * disabled 状態にします
   */
  disabled?: boolean;
  /**
   * エラー状態にします
   */
  error?: boolean;
  /**
   * サイズを小さくします
   */
  small?: boolean;
  /**
   * サイズを大きくします
   */
  large?: boolean;
  /**
   * textarea autocomplete を指定します
   */
  autoComplete?: AutocompleteAttribute;
  /**
   * textarea maxlength を指定します
   */
  maxLength?: number;
  /**
   * 設定した方向のリサイズを有効にします。デフォルトは 'both' です。
   * ユーザーの利便性を優先するため、なるべくリサイズ可能な選択肢を取ってください。レイアウトの仕様上制限が必要な場合は horizontal や vertical を使用し、none の使用は避けてください
   */
  resize?: 'none' | 'horizontal' | 'vertical' | 'both';
  /**
   * 幅を指定します。デフォルトは 'medium' です。
   *
   * - small: 24rem(384px)
   * - medium: 55rem(880px)
   * - large: 67rem(1072px)
   * - full: 親要素に対して100%
   */
  width?: 'small' | 'medium' | 'large' | 'full';
  /**
   * 高さを指定します(rem)
   */
  height?: number;
} & FormHandlers<HTMLTextAreaElement> &
  MarginClassProps &
  CommonProps;

const useAutoResize = (
  {
    autoResize,
    resize,
    onInput,
    height,
  }: Pick<Props, 'autoResize' | 'resize' | 'onInput' | 'height'>,
  ref?:
    | React.Ref<HTMLTextAreaElement>
    | React.MutableRefObject<HTMLTextAreaElement>
) => {
  const autoResizable =
    autoResize && (!resize || ['vertical', 'both'].includes(resize));
  const tmpTextAreaRef = React.useRef<HTMLTextAreaElement>(null);
  const textAreaRef = (ref ||
    tmpTextAreaRef) as React.MutableRefObject<HTMLTextAreaElement>;
  const [autoResizeHeight, setAutoResizeHeight] = React.useState<number>(
    height || 0
  );
  const baseFontSize = React.useMemo(
    () =>
      parseInt(
        getComputedStyle(document.documentElement).fontSize.split('px')[0]
      ) || 16,
    []
  );

  const onInputWithResize = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onInput && onInput(e);
    if (
      autoResizable &&
      textAreaRef.current &&
      textAreaRef.current.scrollHeight > textAreaRef.current.offsetHeight
    ) {
      setAutoResizeHeight(
        Math.ceil(textAreaRef.current.scrollHeight / baseFontSize)
      );
    }
  };

  return { textAreaRef, autoResizeHeight, onInputWithResize };
};

/**
 * 複数行の入力欄 コンポーネントです。`<textarea>`要素を返します。
 * コメント欄など、ユーザーが長い文章を入力することなどが想定される場所で使用することを想定しています。
 *
 * - 必ず `<label>` 要素によるラベル付けを行ってください
 *   - `FormControl` を使用する場合は、`SelectBox` に `id` を指定し、同じ文字列を `FormControl` の `fieldId` に指定してください
 *   - どうしても `<label>` 要素が使用できない場合に限り、 `label` または `labelledby` を使ってラベル付けをしてください
 * - resize オプションを指定すると、右下をドラッグして領域を広げるやつの方向固定などができます（デフォルトは垂直・水平方向どちらもリサイズできます）。
 * - autoResize オプションを指定すると、入力される行数に応じて自動で大きくなっていきます（自動で小さくはなりません）。
 */
const TextAreaInner: React.ForwardRefRenderFunction<
  HTMLTextAreaElement,
  Props
> = (props, ref) => {
  const {
    id,
    label,
    labelledby,
    placeholder,
    name,
    value,
    defaultValue,
    required,
    autofocus,
    disabled,
    error,
    small,
    large,
    autoComplete,
    autoResize,
    maxLength,
    resize,
    width,
    height,
    onChange,
    onInput,
    onFocus,
    onBlur,
    onKeyDown,
    onKeyUp,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    marginSize,
  } = props;

  const { autoResizeHeight, onInputWithResize, textAreaRef } = useAutoResize(
    {
      autoResize,
      resize,
      onInput,
      height,
    },
    ref
  );

  const classModifier = {
    error,
    small,
    large,
    responsive: useResponsive(),
    [`resize${(resize || 'both')
      .split('')
      .map((char, i) => (i === 0 ? char.toUpperCase() : char))
      .join('')}`]: true,
    [`width${(width || 'medium')
      .split('')
      .map((char, i) => (i === 0 ? char.toUpperCase() : char))
      .join('')}`]: true,
    [`height${autoResizeHeight || height || ''}`]: true,
  };

  return (
    <textarea
      ref={textAreaRef}
      id={id}
      name={name && name}
      placeholder={placeholder && placeholder}
      disabled={disabled && true}
      required={required && true}
      autoFocus={autofocus && true}
      onChange={onChange}
      onInput={onInputWithResize}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      aria-label={label}
      aria-labelledby={labelledby}
      aria-required={required && true}
      value={value}
      autoComplete={autoComplete}
      maxLength={maxLength}
      {...commonProps(props, 'vb-textarea', classModifier, {
        marginBottom,
        marginLeft,
        marginRight,
        marginTop,
        marginSize,
      })}
    >
      {defaultValue}
    </textarea>
  );
};

const TextArea = React.forwardRef(TextAreaInner);
export default TextArea;
