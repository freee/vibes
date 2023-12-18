import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    title: React.ReactNode;
    children?: React.ReactNode;
    open?: boolean;
    /**
     * border を表示するか
     */
    border?: 'both' | 'bottom' | 'top';
    small?: boolean;
    onClick: () => any;
} & MarginClassProps & CommonProps;
declare const AccordionPanel: React.FC<Props>;
export default AccordionPanel;
