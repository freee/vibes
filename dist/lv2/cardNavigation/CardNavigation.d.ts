import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    navigationContents: Array<{
        title: React.ReactNode;
        text?: React.ReactNode;
        url?: string;
        IconComponent?: React.ElementType;
    }>;
} & CommonProps;
declare const CardNavigation: React.FC<Props>;
export default CardNavigation;
