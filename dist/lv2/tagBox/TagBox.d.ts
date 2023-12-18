import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { CommonProps } from '../../utilities/commonProps';
declare type TagBoxMaxWidth = 'small' | 'medium' | 'large';
declare type TagBoxColor = 'success' | 'error' | AccentColor;
declare type AccentColor = 'RE' | 'OR' | 'YE' | 'YG' | 'GR' | 'BG' | 'PU' | 'GY';
declare type Props = {
    children?: string;
    onRemove?: () => any;
    disabledRemoveButton?: boolean;
    removable?: boolean;
    type?: string;
    maxWidth?: TagBoxMaxWidth;
    color?: TagBoxColor;
} & MarginClassProps & CommonProps;
declare const TagBox: React.FC<Props>;
export default TagBox;
