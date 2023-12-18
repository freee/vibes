import * as React from 'react';
import TextField from '../../lv1/forms/TextField';
declare type Props = Omit<React.ComponentProps<typeof TextField>, 'onChange' | 'type' | 'min' | 'max' | 'step'> & {
    /**
     * `input` 要素の `type` 属性に使用します。
     *
     * 電話番号の入力に使用する場合のみ、`tel` を使用してください（IMEをオフにするために `tel` を使用しないでください）
     */
    type?: 'text' | 'tel';
    onChange?: (value: string) => void;
    acceptSymbols?: string[];
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
declare const NumeralCodeInput: React.ForwardRefExoticComponent<Pick<Props, "small" | "required" | "type" | "error" | "key" | "id" | "width" | "name" | "value" | "loading" | "label" | "autofocus" | "disabled" | "large" | "autoComplete" | "maxLength" | "placeholder" | "role" | "onFocus" | "onBlur" | "onChange" | "onInput" | "onKeyDown" | "onKeyUp" | keyof import("../../utilities/functionalMarginClasses").FunctionalMarginProps | keyof import("../../utilities/marginClasses").MarginClassProps | keyof import("../../utilities/commonProps").CommonDataProps | "IconComponent" | "labelledby" | "alignCenter" | "alignRight" | "suffix" | "hideSpinner" | "borderless" | "onIconClick" | "onIconBlur" | "onIconFocus" | "iconLabel" | "iconAriaProps" | keyof import("../../utilities/AriaProps").NumberInputAriaProps | keyof import("../../utilities/AriaProps").TextBoxAriaProps | "acceptSymbols"> & React.RefAttributes<HTMLInputElement>>;
export default NumeralCodeInput;
