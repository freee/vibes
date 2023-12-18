import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    children: React.ReactNode;
    paddingSize?: 'small' | 'large';
} & MarginClassProps & CommonProps;
declare const ContentsBase: React.FC<Props>;
export default ContentsBase;
