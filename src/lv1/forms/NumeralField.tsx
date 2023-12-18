import React from 'react';
import TextField from './TextField';
import { Ascii, Digits } from '../../utilities';

type Props = Omit<
  React.ComponentProps<typeof TextField>,
  'alignCenter' | 'alignRight' | 'onChange' | 'value'
> & {
  onChange?: (value: number | null) => void;
  value?: number | null;
};

/**
 * (Deprecated) NumeralCodeInput, DigitsInputまたはTextFieldを使用してください
 */
const NumeralField: React.FC<Props> = ({
  onChange,
  value,
  ...props
}: Props) => {
  const onFieldChange = React.useCallback(
    (e) => {
      if (!onChange) {
        return;
      }
      const numValue = Number(
        Digits.numberize(Ascii.zenkakuToHankaku(e.target.value))
      );

      onChange(
        (e.target.value !== 0 && numValue === 0) || isNaN(numValue)
          ? null
          : numValue
      );
    },
    [onChange]
  );

  return (
    <TextField
      {...props}
      alignRight
      onChange={onFieldChange}
      value={`${value ?? ''}`}
    />
  );
};
export default NumeralField;
