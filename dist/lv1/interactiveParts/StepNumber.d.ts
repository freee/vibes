import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    /**
     * 数字を指定します
     */
    number: number | string;
    /**
     * 見た目を current にします
     */
    current?: boolean;
    /**
     * 見た目を done にします
     */
    done?: boolean;
    /**
     * 見た目を disabled にします
     */
    disabled?: boolean;
    /**
     * サイズを小さくします
     */
    small?: boolean;
} & CommonProps;
export declare const StepNumber: React.FC<Props>;
export {};
