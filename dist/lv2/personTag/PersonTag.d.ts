import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { CommonProps } from '../../utilities/commonProps';
declare type PersonTagColor = 'success' | 'error';
declare type Props = {
    children?: string;
    onRemove?: () => any;
    disabledRemoveButton?: boolean;
    removable?: boolean;
    type?: string;
    color?: PersonTagColor;
    imageUrl: string;
} & MarginClassProps & CommonProps;
declare const PersonTag: React.FC<Props>;
export default PersonTag;
