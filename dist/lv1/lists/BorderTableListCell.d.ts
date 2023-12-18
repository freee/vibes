import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    children?: React.ReactNode;
    /**
     * セルを小さくします
     */
    small?: boolean;
    /**
     * 中央寄せにします
     */
    alignCenter?: boolean;
    /**
     * 右寄せにします
     */
    alignRight?: boolean;
    /**
     * なるべく単語の切れ目で改行するようにします(`word-break: break-word`)。メールアドレスや金額のカラムで指定してください。
     */
    breakWord?: boolean;
    /**
     * 折り返さない(`white-space: nowrap`)
     */
    noWrap?: boolean;
    /**
     * クリックハンドラを設定します
     */
    onClick?: () => any;
    /**
     * ステータスを設定します
     */
    status?: 'alert' | 'notice' | 'success';
    /**
     * 行の見出しかどうかを設定します
     */
    rowHeader?: boolean;
    /**
     * 横スクロール時に行の見出しとして固定表示するどうかを設定します
     */
    fixedRowHeader?: boolean;
    /**
     * 固定表示する行の見出しが複数になる場合の left の値を設定します
     */
    fixedRowHeaderLeft?: number;
    /**
     * rowSpanを設定します
     */
    rowSpan?: number;
} & CommonProps;
declare const BorderTableListCell: React.FC<Props>;
export default BorderTableListCell;
