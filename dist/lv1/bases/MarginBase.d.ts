import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { CommonProps } from '../../utilities/commonProps';
import { FitContentProps } from './types';
declare type Props = {
    children?: React.ReactNode;
} & FitContentProps & MarginClassProps & CommonProps;
declare const MarginBase: React.FC<Props>;
export default MarginBase;
