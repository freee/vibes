import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { FormHandlers, AutocompleteAttribute } from './types';
declare const TextArea: React.ForwardRefExoticComponent<{
    /**
     * textarea id を指定します
     */
    id?: string | undefined;
    /**
     * textarea要素のaria-label を指定します。 `<label>` 要素 (`FormControlLabel` コンポーネントなど)が使用できない場合にのみ使用してください。
     */
    label?: string | undefined;
    /**
     * textarea要素のaria-labelledby を指定します。 `<label>` 要素 (`FormControlLabel` コンポーネントなど)が使用できない場合にのみ使用してください。
     */
    labelledby?: string | undefined;
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
    placeholder?: string | undefined;
    /**
     * textarea name を指定します
     */
    name?: string | undefined;
    /**
     * textarea value を指定します
     */
    value?: string | undefined;
    /**
     * 非制御の場合の初期値を指定します
     */
    defaultValue?: string | undefined;
    /**
     * textarea required を指定します
     */
    required?: boolean | undefined;
    /**
     * textarea autofocus を指定します
     */
    autofocus?: boolean | undefined;
    /**
     * 高さの自動リサイズを有効にします。入力される行数に応じて自動で大きくなっていきます（自動で小さくはなりません）。
     */
    autoResize?: boolean | undefined;
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
     * textarea autocomplete を指定します
     */
    autoComplete?: AutocompleteAttribute | undefined;
    /**
     * textarea maxlength を指定します
     */
    maxLength?: number | undefined;
    /**
     * 設定した方向のリサイズを有効にします。デフォルトは 'both' です。
     * ユーザーの利便性を優先するため、なるべくリサイズ可能な選択肢を取ってください。レイアウトの仕様上制限が必要な場合は horizontal や vertical を使用し、none の使用は避けてください
     */
    resize?: "both" | "none" | "horizontal" | "vertical" | undefined;
    /**
     * 幅を指定します。デフォルトは 'medium' です。
     *
     * - small: 24rem(384px)
     * - medium: 55rem(880px)
     * - large: 67rem(1072px)
     * - full: 親要素に対して100%
     */
    width?: "small" | "medium" | "large" | "full" | undefined;
    /**
     * 高さを指定します(rem)
     */
    height?: number | undefined;
} & FormHandlers<HTMLTextAreaElement> & MarginClassProps & import("../../utilities/commonProps").CommonDataProps & import("../../utilities/functionalMarginClasses").FunctionalMarginProps & React.RefAttributes<HTMLTextAreaElement>>;
export default TextArea;
