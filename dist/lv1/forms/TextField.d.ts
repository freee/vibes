import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { FormHandlers, AutocompleteAttribute } from './types';
import { TextBoxAriaProps, NumberInputAriaProps, ButtonAriaProps } from '../../utilities/AriaProps';
export declare type TextFieldType = 'text' | 'email' | 'password' | 'number' | 'tel';
export declare type TextFieldWidth = 'xSmall' | 'small' | 'medium' | 'large' | 'full';
declare type NumberInputProps = {
    min?: number;
    max?: number;
    step?: number;
    /**
     * type="number" 時に右側に表示される spinner を非表示にします
     * @default false
     */
    hideSpinner?: boolean;
};
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
declare const TextField: React.ForwardRefExoticComponent<{
    /**
     * input id を指定します
     */
    id?: string | undefined;
    /**
     * input type を指定します。
     *
     * `tel` は電話番号の入力欄以外に使用しないでください（IMEをオフにするために使用しないでください）
     */
    type?: TextFieldType | undefined;
    /**
     * input要素のaria-label を指定します。 `<label>` 要素 (`FormControlLabel` コンポーネントなど)が使用できない場合にのみ使用してください。
     */
    label?: string | undefined;
    /**
     * input要素のaria-labelledby を指定します。 `<label>` 要素 (`FormControlLabel` コンポーネントなど)が使用できない場合にのみ使用してください。
     */
    labelledby?: string | undefined;
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
    placeholder?: string | undefined;
    /**
     * input name を指定します
     */
    name?: string | undefined;
    /**
     * input value を指定します
     */
    value?: string | undefined;
    /**
     * input required を指定します
     */
    required?: boolean | undefined;
    /**
     * input autofocus を指定します
     */
    autofocus?: boolean | undefined;
    /**
     * disabled 状態にします
     */
    disabled?: boolean | undefined;
    /**
     * エラー状態にします
     */
    error?: boolean | undefined;
    /**
     * サイズを小さくします
     */
    small?: boolean | undefined;
    /**
     * サイズを大きくします
     */
    large?: boolean | undefined;
    /**
     * 中央寄せにします
     */
    alignCenter?: boolean | undefined;
    /**
     * 右寄せにします
     */
    alignRight?: boolean | undefined;
    /**
     * input maxlength を指定します。郵便番号やクレジットカード番号など、ユーザーにとって桁数制限が明確かつ、現在何文字入力しているのか認識できる程度の桁数の場合にのみ使用してください。
     */
    maxLength?: number | undefined;
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
    width?: TextFieldWidth | undefined;
    /**
     * input role を指定します
     */
    role?: "combobox" | "textbox" | undefined;
    /**
     * input autocomplete を指定します
     */
    autoComplete?: AutocompleteAttribute | undefined;
    /**
     * 入力欄の右側に文字列を表示します
     */
    suffix?: string | undefined;
    /**
     * ボーダーやフォーカスインジケーターを非表示にします。
     * スプレッドシートや、複雑なコンボボックスの実装に使用する想定の実装です。
     *
     * - 必ず、FocusHighlightコンポーネント等で、フォーカスインジケーターを用意してください
     * - 編集に使用しない場合（閲覧専用モード等）には、ReadOnlyFieldを使用してください
     */
    borderless?: boolean | undefined;
    /**
     * Shows a loading spinner instead of the icon component /
     * IconComponent のかわりに読込中を示すスピナーを表示します
     */
    loading?: boolean | undefined;
    /**
     * Provide a react-icon component to show over the input field /
     * アイコンとして表示するコンポーネントを渡します。react-iconsのコンポーネントが想定されています。
     */
    IconComponent?: React.ElementType<any> | undefined;
    /**
     * Alternative Text for IconComponent
     *
     * アイコンの代替テキストを指定します
     */
    iconLabel?: string | undefined;
    /**
     * Callback for onClick of the icon. If provided, the icon will be rendered as a button.
     *
     * アイコンをクリックしたときの処理を渡します。渡された場合、アイコンはボタンとして配置されます。
     */
    onIconClick?: React.MouseEventHandler<Element> | undefined;
    /**
     * Callback function for onFocus of the icon.
     *
     * アイコンにfocusしたときの処理
     */
    onIconFocus?: React.FocusEventHandler<Element> | undefined;
    /**
     * Callback function for onBlur of the icon.
     *
     * アイコンからblurしたときの処理
     */
    onIconBlur?: React.FocusEventHandler<Element> | undefined;
    /**
     * WAI-ARIA Attributes for the icon as a button
     *
     * アイコンのボタンがもつWAI-ARIA属性を指定できます
     */
    iconAriaProps?: ButtonAriaProps | undefined;
} & FormHandlers<HTMLInputElement> & NumberInputProps & NumberInputAriaProps & TextBoxAriaProps & MarginClassProps & import("../../utilities/commonProps").CommonDataProps & import("../../utilities/functionalMarginClasses").FunctionalMarginProps & React.RefAttributes<HTMLInputElement>>;
export default TextField;
