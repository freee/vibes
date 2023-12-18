import * as React from 'react';
import TextField from '../../lv1/forms/TextField';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = Pick<React.ComponentProps<typeof TextField>, 'id' | 'label' | 'labelledby' | 'placeholder' | 'name' | 'required' | 'autofocus' | 'disabled' | 'error' | 'small' | 'large' | 'alignCenter' | 'alignRight' | 'width' | 'onInput' | 'onFocus' | 'onBlur' | 'onKeyDown' | 'onKeyUp' | keyof CommonProps> & {
    /**
     * 最小値を指定します
     */
    minTime?: string;
    /**
     * 最大値を指定します
     */
    maxTime?: string;
    /**
     * 空値の入力を許可します
     */
    nullable?: boolean;
    onChange?: (value: string | null) => void;
    value?: string | null;
};
declare const TimeInput: React.FC<Props>;
export default TimeInput;
