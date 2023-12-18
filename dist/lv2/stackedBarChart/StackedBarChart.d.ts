import * as React from 'react';
import { CommonProps } from '../../utilities';
export declare type StackedBarChartItem = {
    color: 'RE' | 'OR' | 'YE' | 'YG' | 'GR' | 'BG' | 'PU' | 'GY';
    /**
     * 項目名
     */
    label: string;
    /**
     * 項目の値。各項目の値の比率に基づいて項目の幅を決定します
     */
    value: number;
    /**
     * 実際に表示される項目の値のラベル。例えば「100名」など
     */
    valueLabel: string;
};
declare type Props = {
    items: Array<StackedBarChartItem>;
    /**
     * 項目のクリック時に呼び出されるコールバック
     * @param index クリックされた item の index
     */
    onClickItem: (index: number) => void;
} & CommonProps;
/**
 * 与えられた各項目の構成比を、項目の幅によって視覚的に示す帯グラフ。
 * - コンポーネントの振る舞い
 *   - 割合が 0 の項目は表示されません。
 *   - 表示されている項目はクリッカブルで、クリックすることができます。
 *   - 親要素の幅に対して項目の数が多すぎる場合、項目が溢れることがあります。そのため、最小幅の 3.375rem × 項目数が親要素の幅よりも小さくなることを保証する必要があります。
 * - コンポーネントの使用方針
 *   - 全体量に対する割合がある項目を視覚化、フィルターとして利用したい時に使用してください。
 *   - このコンポーネントを使用する場合は、このコンポーネント以外にすべての項目を網羅して表示させることのできるフィルターを同画面内に配置してください。
 *     - Tab や SelectBox など、表示されるものを切り替えられるもの
 *     - 割合が 0 の場合などに、このコンポーネントのみだとありうる項目を網羅して表示させることができないため
 *   - 項目がクリックされフィルタリングされる際は、項目の詳細コンテンツを表示してください。
 *     - 割合が少ない場合、StackedBarChart 内では項目表記が省略されるので視認性観点でも代わりに説明できる手段を残してください。
 *   - 最終的に StackedBarChart を使用するにあたって同画面内に必要なパーツ
 *     - ありうる項目を網羅するフィルターUI（Tab や SelectBox）
 *     - フィルターUIや StackedBarChart の項目をクリックすることで表示される詳細コンテンツ
 */
export declare const StackedBarChart: React.FC<Props>;
export {};
