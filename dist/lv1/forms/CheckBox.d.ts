import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { FormHandlers } from './types';
/**
 * 複数の選択肢から個数に制限なく選択させるときに使用するコンポーネントです。
 *
 * - 「いくつかの選択肢の中からひとつだけを選ぶ」用途には `RadioButton` を使用してください。
 *   - 例外として、ある状態に対して boolean 値のどちらかを選ぶ際に `CheckBox` をひとつだけ置いて選ばせるのはOKです。
 *     - その際には「選択/選択解除したときに何が起こるのか」が明確になるラベルを配置してください
 *     - ON/OFF のふたつの `RadioButton` を置くのもOKです。どちらを使うべきかはスペースの都合や「デフォルト値を設定するべきか」などを考慮して決定してください。
 * - 基本的に、チェックボックスのラベルには句読点は使わないようにしてください。
 *
 * ## accessibility
 * VibesのCheckBoxコンポーネントはブラウザのデフォルト表示の見た目から変更していません。
 * a11yチェックにある「クリックやタッチに反応するサイズが、充分な大きさになっているか」の項目OKにして問題ありません。
 *
 */
declare const CheckBox: React.ForwardRefExoticComponent<{
    children?: React.ReactNode;
    /**
     * input name を指定します
     */
    name?: string | undefined;
    /**
     * input value を指定します
     */
    value?: string | undefined;
    /**
     * input checked を指定します
     */
    checked?: boolean | undefined;
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
} & FormHandlers<HTMLInputElement> & MarginClassProps & import("../../utilities/commonProps").CommonDataProps & import("../../utilities/functionalMarginClasses").FunctionalMarginProps & React.RefAttributes<HTMLInputElement>>;
export default CheckBox;
