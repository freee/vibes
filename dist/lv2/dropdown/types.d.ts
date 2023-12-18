import * as React from 'react';
import { SelfWindowNavigationProp } from '../../utilities/selfWindowNavigator';
import { CommonDataProps } from '../../utilities/commonProps';
export declare type DropdownContentSelectable = {
    type: 'selectable';
    text: React.ReactNode;
    ariaLabel?: string;
    onClick?: React.MouseEventHandler;
    unread?: boolean;
    disabled?: boolean;
    danger?: boolean;
    url?: string;
    target?: string;
    rel?: string;
    disableOnRequestClose?: boolean;
} & SelfWindowNavigationProp & CommonDataProps;
export declare type DropdownContentCheckbox = {
    type: 'checkbox';
    text: React.ReactNode;
    value?: string;
    name?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    checked?: boolean;
    disabled?: boolean;
} & CommonDataProps;
export declare type DropdownContentTextOnly = {
    type: 'textOnly';
    text: string | React.ReactNode;
    unread?: boolean;
} & CommonDataProps;
export declare type DropdownContent = {
    type: 'rule';
} | DropdownContentTextOnly | DropdownContentCheckbox | DropdownContentSelectable;
