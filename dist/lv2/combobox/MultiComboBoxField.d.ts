import * as React from 'react';
import { TextField } from '../../lv1';
import { MultiComboBoxOption } from './hooks';
export declare type PropsFromTextField = Pick<Parameters<typeof TextField>[0], 'id' | 'label' | 'labelledby' | 'placeholder' | 'name' | 'required' | 'disabled' | 'error' | 'width' | 'onFocus' | 'onBlur' | 'onInput' | 'onKeyDown' | 'borderless'>;
declare type Props = {
    baseClassName: string;
    originalId?: string;
    uniqueId: string;
    withBorder: boolean;
    borderRef: React.RefObject<HTMLSpanElement>;
    textFieldRef: React.MutableRefObject<HTMLInputElement>;
    isOpen: boolean;
    values?: MultiComboBoxOption[];
    textFieldValue: string;
    selectedIndex: number;
    maxSelectionCount?: number;
    onBlur: React.FocusEventHandler<HTMLInputElement>;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    onFocus: React.FocusEventHandler<HTMLInputElement>;
    onKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
    onRemoveOption: (option: MultiComboBoxOption) => void;
} & Pick<PropsFromTextField, 'name' | 'width' | 'disabled' | 'error' | 'required' | 'onInput' | 'label' | 'labelledby'>;
/**
 * MultiComboBoxで使う、TextFieldと選択内容（MiniTag）コンポーネント
 */
export declare const MultiComboBoxField: ({ baseClassName, originalId, uniqueId, withBorder, borderRef, textFieldRef, isOpen, values, textFieldValue, selectedIndex, onBlur, onChange, onFocus, onKeyDown, onRemoveOption, name, width, disabled, error, required, onInput, label, labelledby, maxSelectionCount, }: Props) => JSX.Element;
export {};
