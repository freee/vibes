import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    /**
     * 現在何ページ目にいるか
     */
    currentPage: number;
    /**
     * 全部で何ページあるか
     */
    pageCount: number;
    /**
     * 現在のページを含め、何ページ分のボタンを表示するか（デフォルトは5）
     */
    pageRange?: number;
    /**
     * 最初と最後のページを何ページ分表示するか（デフォルトは1）
     */
    sidePageRange?: number;
    /**
     * Deactivates the page buttons / ページ遷移ボタンを無効化します
     */
    disabled?: boolean;
    onPageChange: (page: number) => void;
    small?: boolean;
} & CommonProps;
/**
 * ページャー
 */
declare const Pager: React.FC<Props>;
export default Pager;
