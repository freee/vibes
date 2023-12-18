import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    scrollableX?: boolean;
    scrollableY?: boolean;
    children?: React.ReactNode;
} & CommonProps;
declare const ScrollableBase: React.FC<Props>;
export default ScrollableBase;
