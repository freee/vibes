import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { FormHandlers } from './types';
declare const SearchField: React.ForwardRefExoticComponent<{
    /**
     * label id を指定します
     */
    id?: string | undefined;
    /**
     * input aria-label を指定します
     */
    label?: string | undefined;
    /**
     * input aria-labelledby を指定します
     */
    labelledby?: string | undefined;
    /**
     * input placeholder を指定します
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
     * 幅を指定します
     */
    width?: "small" | "medium" | "large" | "xSmall" | "full" | undefined;
    /**
     * input maxlength を指定します
     */
    maxLength?: number | undefined;
    /**
     * ボーダーやフォーカスインジケーターを非表示にします。
     *
     * - 必ず、FocusHighlightコンポーネント等で、フォーカスインジケーターを用意してください
     * - 編集に使用しない場合（閲覧専用モード等）には、disabledを使用してください
     */
    borderless?: boolean | undefined;
} & FormHandlers<HTMLInputElement> & MarginClassProps & import("../../utilities/commonProps").CommonDataProps & import("../../utilities/functionalMarginClasses").FunctionalMarginProps & React.RefAttributes<HTMLInputElement>>;
export default SearchField;
