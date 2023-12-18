import * as React from 'react';
import { FormHandlers } from '../../lv1/forms/types';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    children?: React.ReactChild;
    /**
     * input type を指定します
     */
    type: 'checkbox' | 'radio';
    /**
     * input name を指定します
     */
    name?: string;
    /**
     * input value を指定します
     */
    value?: string;
    /**
     * 選択状態にします
     */
    toggled?: boolean;
    /**
     * サイズを小さくします
     */
    small?: boolean;
    /**
     * disabled 状態にします
     */
    disabled?: boolean;
} & FormHandlers<HTMLInputElement> & CommonProps;
/**
 * **ラジオボタンやチェックボックスの代替** として、オンオフを制御するボタンとして使用します。
 * 複数のオンオフ制御をグループ化して、くっつけて表示できます。
 *
 * - `last-child` `first-child` のスタイル指定があるので、グループごとに同一の親要素をもつようにしてください
 * - グループ内で複数選択可能な場合は `type="checkbox"` ひとつしか選択できない場合は `type="radio"` で使用し、同一グループ内で違うtypeが混在しないようにしてください。
 * - ラジオボタンやチェックボックスの代替なので、アクションボタンとしては使用しないでください
 */
declare const ToggleButton: React.FC<Props>;
export default ToggleButton;
