import * as React from 'react';
import { CommonProps } from '../../../utilities/commonProps';
declare type Props = {
    /**
     * 左寄せに置かれます。
     */
    children: React.ReactNodeArray | React.ReactNode;
    /**
     * 右寄せにボタン等を任意で置けます。
     */
    sideContent?: React.ReactNodeArray | React.ReactNode;
    responsive?: boolean;
    /**
     * 上位2ボタンのレスポンシブ時の並び方を指定できます。
     */
    mobileButtonLayout?: 'row' | 'column';
} & CommonProps;
/**
 * Dialogのfooterに「任意のコンポーネントを置く & レスポンシブ対応する」ためのパーツです。
 *
 * 「左寄せでボタン等を並べられる」かつ「任意で右寄せに何か置ける」を想定しています。
 *
 *  レスポンシブ時は、全てのパーツが中央寄せで、縦済みになります。
 */
declare const DialogFooter: React.FC<Props>;
export default DialogFooter;
