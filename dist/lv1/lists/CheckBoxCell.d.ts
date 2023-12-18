import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    header: boolean;
    name?: string;
    value?: string;
    checked?: boolean;
    'aria-label'?: string;
    disabled?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
} & CommonProps;
declare const CheckBoxCell: React.FC<Props>;
export default CheckBoxCell;
