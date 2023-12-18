import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { FormHandlers } from '../../lv1/forms/types';
declare const IndexSearchField: React.ForwardRefExoticComponent<{
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
     * 幅を指定します
     */
    width?: "small" | "medium" | "large" | "xSmall" | "full" | undefined;
    /**
     * input maxlength を指定します
     */
    maxLength?: number | undefined;
    /**
     * 検索文字列を更新し、確定したときに発火します
     * 検索文字列の確定は、入力欄のフォーカスを外したときと、入力中にEnterキーを押下したとき、対象表示ポップアップを選択したときです
     */
    onUpdate?: ((searchWord?: string | undefined) => void) | undefined;
    /**
     * 検索対象の項目名一覧を文字列配列で渡す
     * 例: ['取引先名', '備考', 'email', '従業員名']
     */
    searchTarget?: string[] | undefined;
    /**
     * 入力欄を常に開いた状態にします
     * モバイルサイズなど限定的な状況で常に開きたい場合に使用してください
     */
    forceOpen?: boolean | undefined;
} & FormHandlers<HTMLInputElement> & MarginClassProps & import("../../utilities/commonProps").CommonDataProps & import("../../utilities/functionalMarginClasses").FunctionalMarginProps & React.RefAttributes<HTMLInputElement>>;
export default IndexSearchField;
