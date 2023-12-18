import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { CommonProps } from '../../utilities/commonProps';
declare type NameKey = 'lastName' | 'firstName';
declare type Props = {
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
} & MarginClassProps & CommonProps;
declare const NameField: React.FC<Props>;
export default NameField;
