import * as React from 'react';
import { CommonProps } from '../utilities/commonProps';
declare type Props = {
    /**
     * 表示/非表示を切り替えます
     */
    isLoading: boolean;
    /**
     * 大きさを切り替えます
     */
    large?: boolean;
} & CommonProps;
declare const InlineSpinner: React.FC<Props>;
export default InlineSpinner;
