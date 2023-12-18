import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    children?: React.ReactNode;
    /**
     * label id を指定します
     */
    id?: string;
    /**
     * label htmlfor を指定します
     */
    htmlFor?: string;
    /**
     * 必須ラベルを表示します
     */
    required?: boolean;
} & MarginClassProps & CommonProps;
declare const FormControlLabel: React.FC<Props>;
export default FormControlLabel;
