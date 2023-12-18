import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { FormHandlers, AutocompleteAttribute } from './types';
export declare type SelectBoxOption = {
    name: string;
    value?: string;
    /**
     * disabled 状態にします
     */
    disabled?: boolean;
};
export declare type SelectBoxOptionGroup = {
    name: string;
    options: SelectBoxOption[];
    /**
     * disabled 状態にします
     */
    disabled?: boolean;
};
/**
 * 汎用のselectコンポーネントです。
 * 「複数のうちからひとつを選ぶ」入力欄の場合に使用してください。
 *
 * - 必ず `<label>` 要素によるラベル付けを行ってください
 *   - `FormControl` を使用する場合は、`SelectBox` に `id` を指定し、同じ文字列を `FormControl` の `fieldId` に指定してください
 *   - どうしても `<label>` 要素が使用できない場合に限り、 `label` または `labelledby` を使ってラベル付けをしてください
 * - 大量に選択肢がある場合は `SingleComboBox` の仕様を検討してください。テキストを入力することで選択肢を絞り込むことができます。
 * - 幅を変えたいときは width オプションを変更します。特に柔軟に選択したい場合は、widthオプションを full にすることで親要素に対して100%にすることができます。
 *
 * 似ているコンポーネントに `DropdownButton` が存在します。
 * `DropdownButton` は「押下するとドロップダウンメニューを開く **ボタン**」で、`SelectBox` は「選択肢のなかから一つを選ぶ **フォームの部品** 」です。
 * 両者の違いについては、 `DropdownButton` のドキュメントを参照してください。
 */
declare const SelectBox: React.ForwardRefExoticComponent<{
    /**
     * select要素のaria-label を指定します。 `<label>` 要素 (`FormControlLabel` コンポーネントなど)が使用できない場合にのみ使用してください。
     */
    label?: string | undefined;
    /**
     * select要素のaria-labelledby を指定します。 `<label>` 要素 (`FormControlLabel` コンポーネントなど)が使用できない場合にのみ使用してください。
     */
    labelledby?: string | undefined;
    /**
     * select id を指定します
     */
    id?: string | undefined;
    /**
     * 選択要素を指定します。optgroup を使用したい場合は SelectBoxOptionGroup を渡してください。
     *
     * `SelectBoxOption = { name: string; value?: string; disabled?: boolean;}`
     *
     * `SelectBoxOptionGroup = {name: string; options: SelectBoxOption[]; disabled?: boolean;}`
     */
    options?: (SelectBoxOption | SelectBoxOptionGroup)[] | undefined;
    /**
     * select value を指定します
     */
    value?: string | undefined;
    /**
     * 非制御の場合の初期値を指定します
     */
    defaultValue?: string | undefined;
    /**
     * select name を指定します
     */
    name?: string | undefined;
    /**
     * select required を指定します
     */
    required?: boolean | undefined;
    /**
     * select autofocus を指定します
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
     * select autocomplete を指定します
     */
    autoComplete?: AutocompleteAttribute | undefined;
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
    width?: "small" | "medium" | "large" | "xSmall" | "full" | undefined;
} & FormHandlers<HTMLSelectElement> & MarginClassProps & import("../../utilities/commonProps").CommonDataProps & import("../../utilities/functionalMarginClasses").FunctionalMarginProps & React.RefAttributes<HTMLSelectElement>>;
export default SelectBox;
