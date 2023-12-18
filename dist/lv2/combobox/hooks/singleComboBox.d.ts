/// <reference types="react" />
import { SingleComboBoxOption, InternalComboBoxOption, FixedItems } from './';
export declare type TrailingItem = {
    onSelect: (fieldValue: string) => any;
    render: (fieldValue: string) => React.ReactNode;
    isVisible?: (fieldValue: string, filteredOptions: SingleComboBoxOption[]) => boolean;
    selectIfOnly?: boolean;
    isMoreOption?: boolean;
};
export declare const useSingleComboBox: ({ fixedItems, onBlur, onChange, onFocus, onKeyDown, options, trailingItem, value, }: {
    fixedItems?: FixedItems | undefined;
    onBlur?: import("react").FormEventHandler<Element> | undefined;
    onChange?: ((option?: SingleComboBoxOption<never> | undefined) => void) | undefined;
    onFocus?: import("react").FormEventHandler<Element> | undefined;
    onKeyDown?: import("react").KeyboardEventHandler<Element> | undefined;
    options: SingleComboBoxOption[];
    trailingItem?: TrailingItem | undefined;
    value?: SingleComboBoxOption<never> | undefined;
}) => {
    filteredOptions: InternalComboBoxOption[];
    isOpen: boolean;
    fieldValue: string;
    onFieldBlur: (e: React.FormEvent<HTMLInputElement>) => void;
    onFieldFocus: (e: React.FormEvent<HTMLInputElement>) => void;
    onFieldChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFieldKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    selectedIndex: number;
    listOptionsRef: import("react").RefObject<HTMLDivElement>;
    onSelectOption: (option: InternalComboBoxOption) => void;
    selectedOptionRef: import("react").RefObject<HTMLDivElement>;
};
