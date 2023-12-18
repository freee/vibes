import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import commonProps, {
  CommonProps,
  pickCommonDataProps,
} from '../../utilities/commonProps';
import vbClassNames from '../../utilities/vbClassNames';
import functionalMarginClasses from '../../utilities/functionalMarginClasses';
import { FormHandlers, AutocompleteAttribute } from './types';
import {
  filterTextBoxAriaProps,
  TextBoxAriaProps,
  filterNumberInputAriaProps,
  NumberInputAriaProps,
  ButtonAriaProps,
} from '../../utilities/AriaProps';
import InlineSpinner from '../InlineSpinner';
import { useResponsive } from '../../utilities/VibesProvider';

export type TextFieldType = 'text' | 'email' | 'password' | 'number' | 'tel';
export type TextFieldWidth = 'xSmall' | 'small' | 'medium' | 'large' | 'full';

type NumberInputProps = {
  min?: number;
  max?: number;
  step?: number;
  /**
   * type="number" 時に右側に表示される spinner を非表示にします
   * @default false
   */
  hideSpinner?: boolean;
};

type Props = {
  /**
   * input id を指定します
   */
  id?: string;
  /**
   * input type を指定します。
   *
   * `tel` は電話番号の入力欄以外に使用しないでください（IMEをオフにするために使用しないでください）
   */
  type?: TextFieldType;
  /**
   * input要素のaria-label を指定します。 `<label>` 要素 (`FormControlLabel` コンポーネントなど)が使用できない場合にのみ使用してください。
   */
  label?: string;
  /**
   * input要素のaria-labelledby を指定します。 `<label>` 要素 (`FormControlLabel` コンポーネントなど)が使用できない場合にのみ使用してください。
   */
  labelledby?: string;
  /**
   * input 要素の placeholder を指定します。
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
   * input name を指定します
   */
  name?: string;
  /**
   * input value を指定します
   */
  value?: string;
  /**
   * input required を指定します
   */
  required?: boolean;
  /**
   * input autofocus を指定します
   */
  autofocus?: boolean;
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
   * 中央寄せにします
   */
  alignCenter?: boolean;
  /**
   * 右寄せにします
   */
  alignRight?: boolean;
  /**
   * input maxlength を指定します。郵便番号やクレジットカード番号など、ユーザーにとって桁数制限が明確かつ、現在何文字入力しているのか認識できる程度の桁数の場合にのみ使用してください。
   */
  maxLength?: number;
  /**
   * 幅を指定します。
   *
   * - xSmall: 4rem(64px)
   *   - 2文字程度しか入らないことがわかっている入力欄に使います
   * - small: 7rem(112px)
   *   - 都道府県や郵便番号など、数文字しか入らないことがわかっている入力欄に使います
   * - medium(default): 11rem(176px)
   *   - 10文字程度であることがわかっている入力欄に使います
   *   - たとえば会計帳簿の金額入力欄は12,3桁が前提になっているので medium が使われます
   * - large: 24rem(384px)
   *   - 入力量がユーザー次第の場合に使います
   *   - 住所や備考など
   * - full: 親要素に対して100%
   *   - table 要素の中に配置するなど、柔軟に幅を変えたい場合に使います
   */
  width?: TextFieldWidth;
  /**
   * input role を指定します
   */
  role?: 'textbox' | 'combobox';
  /**
   * input autocomplete を指定します
   */
  autoComplete?: AutocompleteAttribute;
  /**
   * 入力欄の右側に文字列を表示します
   */
  suffix?: string;

  /**
   * ボーダーやフォーカスインジケーターを非表示にします。
   * スプレッドシートや、複雑なコンボボックスの実装に使用する想定の実装です。
   *
   * - 必ず、FocusHighlightコンポーネント等で、フォーカスインジケーターを用意してください
   * - 編集に使用しない場合（閲覧専用モード等）には、ReadOnlyFieldを使用してください
   */
  borderless?: boolean;

  /**
   * Shows a loading spinner instead of the icon component /
   * IconComponent のかわりに読込中を示すスピナーを表示します
   */
  loading?: boolean;

  /**
   * Provide a react-icon component to show over the input field /
   * アイコンとして表示するコンポーネントを渡します。react-iconsのコンポーネントが想定されています。
   */
  IconComponent?: React.ElementType;

  /**
   * Alternative Text for IconComponent
   *
   * アイコンの代替テキストを指定します
   */
  iconLabel?: string;

  /**
   * Callback for onClick of the icon. If provided, the icon will be rendered as a button.
   *
   * アイコンをクリックしたときの処理を渡します。渡された場合、アイコンはボタンとして配置されます。
   */
  onIconClick?: React.MouseEventHandler;

  /**
   * Callback function for onFocus of the icon.
   *
   * アイコンにfocusしたときの処理
   */
  onIconFocus?: React.FocusEventHandler;
  /**
   * Callback function for onBlur of the icon.
   *
   * アイコンからblurしたときの処理
   */
  onIconBlur?: React.FocusEventHandler;
  /**
   * WAI-ARIA Attributes for the icon as a button
   *
   * アイコンのボタンがもつWAI-ARIA属性を指定できます
   */
  iconAriaProps?: ButtonAriaProps;
} & FormHandlers<HTMLInputElement> &
  NumberInputProps &
  NumberInputAriaProps &
  TextBoxAriaProps &
  MarginClassProps &
  CommonProps;

function filterNumberInputProps(props: Props): NumberInputProps {
  if (props.type != 'number') {
    return {};
  }

  return {
    min: props['min'],
    max: props['max'],
    step: props['step'],
  };
}

function TextFieldInner(
  props: Props,
  ref?: React.Ref<HTMLInputElement> | React.MutableRefObject<HTMLInputElement>
): React.ReactElement {
  const {
    type,
    label,
    id,
    labelledby,
    placeholder,
    name,
    value,
    required,
    autofocus,
    disabled,
    error,
    small,
    large,
    role,
    alignCenter,
    alignRight,
    maxLength,
    width,
    autoComplete,
    suffix,
    hideSpinner,
    borderless,
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
    loading,
    IconComponent,
    onIconClick,
    onIconBlur,
    onIconFocus,
    iconLabel,
    iconAriaProps,
    ma,
    mt,
    mb,
    mr,
    ml,
  } = props;

  const inputBaseClass = 'vb-textField';

  const wrapperBaseClass = `${inputBaseClass}__wrapper`;

  // 水平方向のマージンはwrapperに対してつける
  const wrapperClassBase = vbClassNames(wrapperBaseClass, {
    modifier: {
      widthFull: width === 'full',
    },
    margin: {
      marginLeft,
      marginRight,
      marginSize,
      marginTop,
      marginBottom,
    },
  });
  const functionalMarginClass = functionalMarginClasses({
    ma,
    mr,
    ml,
    mt,
    mb,
  });
  const wrapperClass = `${wrapperClassBase} ${functionalMarginClass}`.trim();

  const suffixBaseClass = `${inputBaseClass}__suffix`;
  const suffixClass = vbClassNames(suffixBaseClass, {
    modifier: {
      small,
      large,
    },
  });
  const iconClass = `${inputBaseClass}__${
    !loading && onIconClick ? 'iconButton' : 'icon'
  }`;

  return (
    <span className={wrapperClass}>
      <input
        id={id}
        type={type || 'text'}
        name={name && name}
        value={value && value}
        placeholder={placeholder && placeholder}
        disabled={disabled && true}
        required={required && true}
        autoFocus={autofocus && true}
        maxLength={maxLength}
        onChange={onChange}
        onInput={onInput}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        role={role}
        aria-label={label}
        aria-labelledby={labelledby}
        aria-required={required && true}
        autoComplete={autoComplete}
        ref={ref}
        {...commonProps(
          pickCommonDataProps(props),
          inputBaseClass,
          {
            error,
            small,
            large,
            alignCenter,
            alignRight,
            hideSpinner,
            borderless,
            widthXSmall: width === 'xSmall',
            widthSmall: width === 'small',
            widthMedium: width === 'medium' || !width,
            widthLarge: width === 'large',
            widthFull: width === 'full',
            withIcon: !!IconComponent || loading,
            responsive: useResponsive(),
          },
          { marginTop, marginBottom, marginSize }
        )}
        {...filterNumberInputProps(props)}
        {...filterNumberInputAriaProps(props)}
        {...filterTextBoxAriaProps(props)}
      />

      {(IconComponent || loading) &&
        (loading ? (
          <span className={iconClass} aria-hidden="true">
            <InlineSpinner isLoading />
          </span>
        ) : (
          IconComponent &&
          (onIconClick ? (
            <button
              type="button"
              disabled={disabled}
              className={iconClass}
              onClick={onIconClick}
              onBlur={onIconBlur}
              onFocus={onIconFocus}
              aria-label={iconLabel}
              {...iconAriaProps}
            >
              <IconComponent focusable={false} />
            </button>
          ) : (
            <span
              className={iconClass}
              role={iconLabel ? 'img' : 'presentation'}
              aria-label={iconLabel}
              aria-hidden={!iconLabel}
            >
              <IconComponent focusable={false} />
            </span>
          ))
        ))}

      {!!suffix && <span className={suffixClass}>{suffix}</span>}
    </span>
  );
}

/**
 * 汎用のinputコンポーネントです。
 *
 * - typeオプションでnumber, text, email, tel, passwordを切り替えられます（デザイナーはどのtypeを使うのか必要に応じて指定してください）。
 * - 幅を変えたいときは width オプションを変更します。特に柔軟に選択したい場合は、widthオプションを full にすることで親要素に対して100%にすることができます。
 * - 必ず `<label>` 要素によるラベル付けを行ってください
 *   - `FormControl` を使用する場合は、`SelectBox` に `id` を指定し、同じ文字列を `FormControl` の `fieldId` に指定してください
 *   - どうしても `<label>` 要素が使用できない場合に限り、 `label` または `labelledby` を使ってラベル付けをしてください
 * - 特定の用途に応じたコンポーネントが別途用意されている場合があります。適したコンポーネントを検討してください。
 *   - 日付の場合は `DateInput`, `DateField`
 *   - 数字の場合は `DigitsInput`, `DecimalInput`, `NumeralCodeInput`
 *     - 数値入力を `TextField` で行う場合は `alignRight` を指定してください。
 *   - 時間、時刻の場合は `TimeInput`, `TimeLengthInput`
 *   - 名前の場合は `NameField`
 *   - 電話番号の場合は `PhoneNumberField`
 *   - 検索欄の場合は `SearchField`
 *   - セレクトボックスの場合は `SelectBox`
 *   - 複数行の場合は `TextArea`
 *   - readonly の場合は `ReadOnlyField`
 * - 入力欄の右や下に入力規則などの補足を追記したい場合、それらの補足が先に読み上げられる必要があります。
 *   - `WithDescriptionContent` などを使用してレイアウト調整を行ってください。
 */
const TextField = React.forwardRef<HTMLInputElement, Props>(TextFieldInner);
export default TextField;
