import React from 'react';
import TextField from './TextField';
declare type Props = Omit<React.ComponentProps<typeof TextField>, 'alignCenter' | 'alignRight' | 'onChange' | 'value'> & {
    onChange?: (value: number | null) => void;
    value?: number | null;
};
/**
 * (Deprecated) NumeralCodeInput, DigitsInputまたはTextFieldを使用してください
 */
declare const NumeralField: React.FC<Props>;
export default NumeralField;
