import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    children?: React.ReactNode;
    /**
     * 最小の幅を設定します
     */
    minWidth?: number;
    /**
     * リストの高さを設定します
     */
    spacing?: 'normal' | 'compact';
} & CommonProps;
declare const DescriptionListHeadCell: React.FC<Props>;
export default DescriptionListHeadCell;
