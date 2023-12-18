import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
import { WithPopup } from '..';
declare type RenderPopupT = Parameters<typeof WithPopup>[0]['renderPopup'];
declare type Props = {
    /**
     * ポップアップを描画するrender functionです。詳細は `WithPopup` の `renderPopup` propを参照してください。
     * Render function for popup. See `renderPopup` prop of `WithPopup for details.
     */
    renderPopup: RenderPopupT;
    /**
     * ボタン内に表示するラベルを指定します。
     * The label of the button.
     */
    label: string;
    /**
     * ボタン内に表示する値を指定します。
     * 値を指定している場合はボタンがアクティブになり、値の前に「：」が表示されます。
     * The value of the button.
     * If the value is specified, the button will be active and a colon will be displayed before the value.
     */
    value?: string;
} & CommonProps;
/**
 * フィルタなどの絞り込み処理において、下記を満たす表示となります
 * - 項目毎に存在
 * - 適用中、適用なしの状態を持つ
 * - クリック可能で、その項目の変更を行う導線を表示できる
 *
 * ボタンをクリックすることで、項目に合わせたポップアップを表示します。
 * ポップアップの中身は `renderPopup` prop を用いて指定します。
 */
declare const FilterTag: React.FC<Props>;
export default FilterTag;
