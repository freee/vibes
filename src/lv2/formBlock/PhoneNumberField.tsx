import * as React from 'react';
import TextField from '../../lv1/forms/TextField';
import vbClassNames from '../../utilities/vbClassNames';
import { MarginClassProps } from '../../utilities/marginClasses';
import commonProps, { CommonProps } from '../../utilities/commonProps';

export type PhoneNumberKey = 'a' | 'b' | 'c';
type Props = {
  phoneNumberA?: string;
  phoneNumberB?: string;
  phoneNumberC?: string;
  placeholderA?: string;
  placeholderB?: string;
  placeholderC?: string;
  disabled?: boolean;
  error?: boolean;
  small?: boolean;
  autoComplete?: 'off' | 'tel';
  onChange?: (
    key: PhoneNumberKey,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onInput?: (key: PhoneNumberKey, e: React.FormEvent<HTMLInputElement>) => void;
  onFocus?: (key: PhoneNumberKey, e: React.FormEvent<HTMLInputElement>) => void;
  onBlur?: (key: PhoneNumberKey, e: React.FormEvent<HTMLInputElement>) => void;
  onKeyDown?: (
    key: PhoneNumberKey,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => void;
} & MarginClassProps &
  CommonProps;

const MAX_LENGTH_A = 5;
const MAX_LENGTH_B = 4;
const MAX_LENGTH_C = 4;

const PhoneNumberField: React.FC<Props> = (props: Props) => {
  const {
    phoneNumberA,
    phoneNumberB,
    phoneNumberC,
    placeholderA,
    placeholderB,
    placeholderC,
    disabled,
    error,
    small,
    autoComplete,
    onChange,
    onInput,
    onFocus,
    onBlur,
    onKeyDown,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    marginSize,
  } = props;

  const hyphenClassName = vbClassNames('vb-phoneNumberField__hyphen', {
    modifier: { disabled, error, small },
  });

  return (
    <div
      {...commonProps(
        props,
        'vb-phoneNumberField',
        {},
        {
          marginBottom,
          marginLeft,
          marginRight,
          marginTop,
          marginSize,
        }
      )}
    >
      <TextField
        type="tel"
        name="areaCode"
        label="電話番号の市外局番"
        value={phoneNumberA}
        placeholder={placeholderA}
        maxLength={MAX_LENGTH_A}
        width="xSmall"
        alignCenter
        disabled={disabled}
        error={error}
        small={small}
        autoComplete={autoComplete === 'tel' ? 'tel-area-code' : autoComplete}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          onChange && onChange('a', e);
        }}
        onInput={(e: React.FormEvent<HTMLInputElement>): void => {
          onInput && onInput('a', e);
        }}
        onFocus={(e: React.FormEvent<HTMLInputElement>): void => {
          onFocus && onFocus('a', e);
        }}
        onBlur={(e: React.FormEvent<HTMLInputElement>): void => {
          onBlur && onBlur('a', e);
        }}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>): void => {
          onKeyDown && onKeyDown('a', e);
        }}
      />
      <span className={hyphenClassName}>-</span>
      <TextField
        type="tel"
        name="prefix"
        label="電話番号の市内局番"
        value={phoneNumberB}
        placeholder={placeholderB}
        maxLength={MAX_LENGTH_B}
        width="xSmall"
        alignCenter
        disabled={disabled}
        error={error}
        small={small}
        autoComplete={
          autoComplete === 'tel' ? 'tel-local-prefix' : autoComplete
        }
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          onChange && onChange('b', e);
        }}
        onInput={(e: React.FormEvent<HTMLInputElement>): void => {
          onInput && onInput('b', e);
        }}
        onFocus={(e: React.FormEvent<HTMLInputElement>): void => {
          onFocus && onFocus('b', e);
        }}
        onBlur={(e: React.FormEvent<HTMLInputElement>): void => {
          onBlur && onBlur('b', e);
        }}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>): void => {
          onKeyDown && onKeyDown('b', e);
        }}
      />
      <span className={hyphenClassName}>-</span>
      <TextField
        type="tel"
        name="lineNumber"
        label="電話番号の加入者番号"
        value={phoneNumberC}
        placeholder={placeholderC}
        maxLength={MAX_LENGTH_C}
        width="xSmall"
        alignCenter
        disabled={disabled}
        error={error}
        small={small}
        autoComplete={
          autoComplete === 'tel' ? 'tel-local-suffix' : autoComplete
        }
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          onChange && onChange('c', e);
        }}
        onInput={(e: React.FormEvent<HTMLInputElement>): void => {
          onInput && onInput('c', e);
        }}
        onFocus={(e: React.FormEvent<HTMLInputElement>): void => {
          onFocus && onFocus('c', e);
        }}
        onBlur={(e: React.FormEvent<HTMLInputElement>): void => {
          onBlur && onBlur('c', e);
        }}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>): void => {
          onKeyDown && onKeyDown('c', e);
        }}
      />
    </div>
  );
};
export default PhoneNumberField;
