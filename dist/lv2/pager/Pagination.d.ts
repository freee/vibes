import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    /**
     * 1ページあたりの表示件数の選択肢。nameの指定がなければ「value件」にする
     */
    rowsPerPageOptions: {
        value: string;
        name?: string;
    }[];
    /**
     * 「1ページあたりの表示件数」 select 要素の value。rowsPerPageValueかdefaultRowsPerPageValueのどちらかを必ず指定してください。（ページ表示の計算のため）
     */
    rowsPerPageValue?: number;
    /**
     * 「1ページあたりの表示件数」 select 要素が非制御の場合の初期値。rowsPerPageValueかdefaultRowsPerPageValueのどちらかを必ず指定してください。（ページ表示の計算のため）
     */
    defaultRowsPerPageValue?: number;
    /**
     * 現在何ページ目にいるか（Pagerと併用するならそれの currentPage と合わせる）
     */
    currentPage: number;
    /**
     * 全部で何レコードあるか
     * rowCountもdisplayRowCountも未指定の場合、レコード総数は表示されません
     */
    rowCount?: number;
    /**
     * 「全部で何レコードあるか」の表示（「XX件以上」といった表示をするときにstringで指定します。指定がなければrowCountの値が表示されます）
     */
    displayRowCount?: string;
    /**
     * 現在のページに何レコードあるか
     * 全件数を持たないなどの理由でrowCountを指定しない場合に渡します
     * 未指定の場合はrowsPerPageValueが参照されます
     * 例） rowsPerPageValueが20、currentPageが3、currentPageRowCountが15の場合、「41 - 55」と表示
     */
    currentPageRowCount?: number;
    /**
     * 表示件数 select 要素の幅です。デフォルトはsmall
     */
    selectBoxWidth?: 'xSmall' | 'small' | 'medium' | 'large';
    /**
     * trueにすると表示件数 select 要素がdisabledになります
     */
    disabled?: boolean;
    /**
     * 表示件数の値が変わったときに発火します。e.target.value で表示件数を取得できます。
     */
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    /**
     * 表示件数のinputにフォーカスが当たったときに発火します。e.target.value で表示件数を取得できます。
     */
    onFocus?: (e: React.FocusEvent<HTMLSelectElement>) => void;
    /**
     * 表示件数のinputからフォーカスがはずれたときに発火します。e.target.value で表示件数を取得できます。
     */
    onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
} & CommonProps;
/**
 * ページネーションがあるコレクション画面で、「1ページの表示件数」と「いま表示されているページ（何件目から何件目が表示されてるのか）」を表示するコンポーネント
 *
 * - 使用例は Examples の Collection を参照してください
 *   - ListTable等の右上に配置することを想定しています
 * - 表示件数の選択肢、表示件数の初期値、いま何ページ目なのか、レコード総数表示は外からpropsで渡します
 *   - Pager コンポーネントと併用する場合、currentPage は Pager と同じ値を渡してください
 *   - レコード総数は実際のレコード数をわたすだけでなく、「1000件以上」といった文字列で渡すことも可能です
 */
declare const Pagination: React.FC<Props>;
export default Pagination;
