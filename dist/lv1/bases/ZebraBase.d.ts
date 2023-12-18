import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { CommonProps } from '../../utilities/commonProps';
import { BaseComponentPaddingProps } from './types';
declare type Props = {
    children?: React.ReactNode;
} & BaseComponentPaddingProps & MarginClassProps & CommonProps;
declare const ZebraBase: React.FC<Props>;
export default ZebraBase;
