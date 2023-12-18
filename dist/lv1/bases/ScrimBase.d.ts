import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    children?: React.ReactNode;
    small?: boolean;
} & MarginClassProps & CommonProps;
declare const ScrimBase: React.FC<Props>;
export default ScrimBase;
