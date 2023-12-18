import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    /**
     * 見た目を done にします
     */
    done?: boolean;
    /**
     * StepBlock の separator として使用します
     */
    separator?: boolean;
} & CommonProps;
/**
 * 古いコンポーネントなので使わないでください
 *
 * @deprecated
 */
declare const StepBorder: React.FC<Props>;
export default StepBorder;
