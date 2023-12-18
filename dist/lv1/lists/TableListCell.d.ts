import * as React from 'react';
import { SelfWindowNavigationProp } from '../../utilities/selfWindowNavigator';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    children?: React.ReactNode;
    /**
     * hrefを設定します
     */
    url?: string;
    /**
     * セルを小さくします
     */
    small?: boolean;
    /**
     * 下寄せにします
     */
    alignBottom?: boolean;
    /**
     * 中央寄せにします
     */
    alignCenter?: boolean;
    /**
     * 右寄せにします
     */
    alignRight?: boolean;
    /**
     * 上寄せにします
     */
    alignTop?: boolean;
    /**
     * なるべく単語の切れ目で改行するようにします(`word-break: break-word`)。メールアドレスや金額のカラムで指定してください。
     */
    breakWord?: boolean;
    /**
     * colSpanを設定します
     */
    colSpan?: number;
    /**
     * ツリー状の表現のためのインデントレベルです。左端のカラムにのみ使われる想定です
     */
    indentLevel?: number;
} & SelfWindowNavigationProp & CommonProps;
declare const TableListCell: React.FC<Props>;
export default TableListCell;
