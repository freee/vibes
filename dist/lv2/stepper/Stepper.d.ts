import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    currentStepIndex: number;
    disabledStepIndex: Array<number>;
    small?: boolean;
    steps: Array<React.ReactNode>;
} & CommonProps;
declare const Stepper: React.FC<Props>;
export default Stepper;
