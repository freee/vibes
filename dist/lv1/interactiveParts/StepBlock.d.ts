import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    /**
     * 内部の文字列を指定します
     */
    number?: string;
    children?: React.ReactNode;
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
} & MarginClassProps & CommonProps;
/**
 * 古いコンポーネントなので使わないでください。丸囲み数字が必要な場合はStepNumberを、リストにしたい場合はStepperを使用してください
 *
 * @deprecated
 */
declare const StepBlock: React.FC<Props>;
export default StepBlock;
