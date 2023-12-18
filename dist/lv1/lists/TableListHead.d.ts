import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    children?: React.ReactNode;
    /**
     * ページ上部または、 `overflow: auto` な領域内にある場合にはその領域上部に貼り付く形でヘッダーを表示します
     */
    fixedHeader?: boolean;
    /**
     * `fixedHeader` 使用時にその上下方向の位置を調整します
     * numberで指定するとpx単位、stringで指定するとCSSの値を指定できます
     */
    fixedHeaderOffset?: number | string;
} & CommonProps;
declare const TableListHead: React.FC<Props>;
export default TableListHead;
