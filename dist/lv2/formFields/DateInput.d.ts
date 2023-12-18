import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
/** @deprecated
 `xSmall` と `small` を使うと日付が隠れてしまうので原則使わないでください
*/
declare type DeprecatedWidth = 'xSmall' | 'small';
declare type FieldWidth = 'medium' | 'large' | 'full' | DeprecatedWidth;
/**
 * テキストフィールドになっている日付入力フィールドです。フォーカスまたはアイコンのクリックによりカレンダーを表示し、ユーザーはカレンダーから日付を選んだり、テキストとして編集したりすることができます。
 *
 * - `DateInput`は「現在の日付から前後1年以内」などの近い日付を入力することが多い場合に使用してください
 *   - 生年月日など、年単位で離れた日付を入力する場合には、`DateField` を使用してください。
 *     `DateField` はセレクトボックスで年を選べるため、年単位で離れた年月日を入力するのに最適です。
 */
declare const DateInput: React.ForwardRefExoticComponent<{
    value?: string | Date | undefined;
    id?: string | undefined;
    label?: string | undefined;
    labelledby?: string | undefined;
    placeholder?: string | undefined;
    name?: string | undefined;
    required?: boolean | undefined;
    autofocus?: boolean | undefined;
    disabled?: boolean | undefined;
    error?: boolean | undefined;
    small?: boolean | undefined;
    minDate?: string | undefined;
    maxDate?: string | undefined;
    /**
     * `medium` `large` `full` を使用してください。
     * `xSmall` `small` は日付が隠れてしまうため、使用しないでください
     */
    width?: FieldWidth | undefined;
    onChange?: ((date: string) => void) | undefined;
    onFocus?: React.FormEventHandler<Element> | undefined;
    onBlur?: React.FormEventHandler<Element> | undefined;
    onInput?: React.FormEventHandler<Element> | undefined;
    onKeyDown?: React.KeyboardEventHandler<Element> | undefined;
} & MarginClassProps & import("../../utilities/commonProps").CommonDataProps & import("../../utilities/functionalMarginClasses").FunctionalMarginProps & React.RefAttributes<HTMLInputElement>>;
export default DateInput;
