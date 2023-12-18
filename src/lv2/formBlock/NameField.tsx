import * as React from 'react';

import TextField from '../../lv1/forms/TextField';
import { MarginClassProps } from '../../utilities/marginClasses';
import commonProps, { CommonProps } from '../../utilities/commonProps';

type NameKey = 'lastName' | 'firstName';
type Props = {
  lastName?: string;
  firstName?: string;
  lastNamePlaceholder?: string;
  firstNamePlaceholder?: string;
  label?: string;
  /**
   * There are no way to use labelledby.
   * aria-label and aria-labelledby cannot use at the same time,
   *  we cannot resolve the problem in a similar way as aria-label
   * @deprecated
   */
  labelledby?: string;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  small?: boolean;
  autoComplete?: 'off' | 'name';
  onChange?: (key: NameKey, e: React.ChangeEvent<HTMLInputElement>) => void;
  onInput?: (key: NameKey, e: React.FormEvent<HTMLInputElement>) => void;
  onFocus?: (key: NameKey, e: React.FormEvent<HTMLInputElement>) => void;
  onBlur?: (key: NameKey, e: React.FormEvent<HTMLInputElement>) => void;
  onKeyDown?: (key: NameKey, e: React.KeyboardEvent<HTMLInputElement>) => void;
} & MarginClassProps &
  CommonProps;

const NameField: React.FC<Props> = (props: Props) => {
  const {
    lastName,
    firstName,
    lastNamePlaceholder,
    firstNamePlaceholder,
    label,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    labelledby,
    disabled,
    required,
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
  return (
    <div
      {...commonProps(
        props,
        'vb-nameField',
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
        name="lastNameField"
        value={lastName}
        label={`姓${label ? `（${label}）` : ''}`}
        placeholder={
          lastNamePlaceholder === undefined ? '姓' : lastNamePlaceholder
        }
        disabled={disabled}
        required={required}
        error={error}
        small={small}
        autoComplete={autoComplete === 'name' ? 'family-name' : autoComplete}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          onChange && onChange('lastName', e);
        }}
        onInput={(e: React.FormEvent<HTMLInputElement>): void => {
          onInput && onInput('lastName', e);
        }}
        onFocus={(e: React.FormEvent<HTMLInputElement>): void => {
          onFocus && onFocus('lastName', e);
        }}
        onBlur={(e: React.FormEvent<HTMLInputElement>): void => {
          onBlur && onBlur('lastName', e);
        }}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>): void => {
          onKeyDown && onKeyDown('lastName', e);
        }}
        marginRight
      />
      <TextField
        name="firstNameField"
        value={firstName}
        label={`名${label ? `（${label}）` : ''}`}
        placeholder={
          firstNamePlaceholder === undefined ? '名' : firstNamePlaceholder
        }
        disabled={disabled}
        required={required}
        small={small}
        error={error}
        autoComplete={autoComplete === 'name' ? 'given-name' : autoComplete}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          onChange && onChange('firstName', e);
        }}
        onInput={(e: React.FormEvent<HTMLInputElement>): void => {
          onInput && onInput('firstName', e);
        }}
        onFocus={(e: React.FormEvent<HTMLInputElement>): void => {
          onFocus && onFocus('firstName', e);
        }}
        onBlur={(e: React.FormEvent<HTMLInputElement>): void => {
          onBlur && onBlur('firstName', e);
        }}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>): void => {
          onKeyDown && onKeyDown('firstName', e);
        }}
      />
    </div>
  );
};
export default NameField;
