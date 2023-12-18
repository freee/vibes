import * as React from 'react';
import TimeInput from './TimeInput';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = Pick<React.ComponentProps<typeof TimeInput>, 'id' | 'label' | 'labelledby' | 'placeholder' | 'name' | 'required' | 'autofocus' | 'disabled' | 'error' | 'small' | 'large' | 'alignCenter' | 'alignRight' | 'width' | 'onInput' | 'onFocus' | 'onBlur' | 'onKeyDown' | 'onKeyUp' | 'nullable' | keyof CommonProps> & {
    onChange?: (value: number | null) => void;
    value?: number | null;
};
declare const TimeLengthInput: React.FC<Props>;
export default TimeLengthInput;
