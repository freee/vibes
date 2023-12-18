/// <reference types="react" />
import type { TextFieldWidth } from '../../../lv1/forms/TextField';
import { MiniTag } from '../../tagBox/MiniTag';
import { debounce } from 'throttle-debounce';
export declare type ComboBoxOption = {
    label: string;
    id: string | number;
    keywords?: string[];
    disabled?: boolean;
};
export declare type MultiComboBoxOption<E = never> = ComboBoxOption & {
    type?: string;
    extras?: E;
} & Pick<Parameters<typeof MiniTag>[0], 'color'>;
export declare type SingleComboBoxOption<E = never> = ComboBoxOption & {
    subLabel?: string;
    extras?: E;
};
export declare type InternalComboBoxOption = ComboBoxOption & {
    isTrailingItem?: boolean;
    fixedItemType?: 'more' | 'add';
} & Pick<SingleComboBoxOption, 'subLabel'>;
export declare type FixedItem = {
    onSelect: (fieldValue: string) => any;
    isVisible?: (fieldValue: string, filteredOptions: ComboBoxOption[]) => boolean;
    label?: (fieldValue: string) => string;
};
export declare type FixedItems = [FixedItem] | [FixedItem, FixedItem];
export declare type FetchParams = {
    name: string;
    page: number;
};
export declare type ApiMetaData = {
    limit: number;
    currentPage: number;
    totalPages: number;
    totalCount: number;
};
export declare const initialFetchParams: {
    name: string;
    page: number;
};
export declare const useComboBox: ({ value }: {
    value?: ComboBoxOption | undefined;
}) => {
    fieldValue: string;
    isOpen: boolean;
    isFieldChanged: boolean;
    listOptionsRef: import("react").RefObject<HTMLDivElement>;
    selectedIndex: number;
    selectedOptionRef: import("react").RefObject<HTMLDivElement>;
    setFieldValue: import("react").Dispatch<import("react").SetStateAction<string>>;
    setOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    setIsFieldChanged: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    setSelectedIndex: import("react").Dispatch<import("react").SetStateAction<number>>;
};
export declare const useMultiComboBox: ({ values, options, onChange, onKeyDown, maxSelectionCount, alreadyFilteredByFieldValue, }: {
    values: MultiComboBoxOption[];
    options: MultiComboBoxOption[];
    onChange?: ((values: MultiComboBoxOption[]) => void) | undefined;
    onKeyDown?: ((event: React.KeyboardEvent<HTMLInputElement>) => void) | undefined;
    maxSelectionCount?: number | undefined;
    alreadyFilteredByFieldValue?: boolean | undefined;
}) => {
    fieldValue: string;
    setFieldValue: import("react").Dispatch<import("react").SetStateAction<string>>;
    isOpen: boolean;
    setOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    selectedIndex: number;
    setSelectedIndex: import("react").Dispatch<import("react").SetStateAction<number>>;
    borderRef: import("react").RefObject<HTMLSpanElement>;
    selectedOptionRef: import("react").RefObject<HTMLDivElement>;
    listOptionsRef: import("react").RefObject<HTMLDivElement>;
    filteredOptions: MultiComboBoxOption<never>[];
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>, loadMore?: (() => void) | undefined, onClickNewItem?: ((fieldValue: string) => void) | undefined) => void;
    onSelectOption: (option: MultiComboBoxOption) => void;
    onRemoveOption: (option: MultiComboBoxOption) => void;
};
export declare const useAdjustListPosition: (isOpen: boolean, ref?: import("react").Ref<HTMLInputElement> | import("react").MutableRefObject<HTMLInputElement> | undefined) => {
    textFieldRef: import("react").MutableRefObject<HTMLInputElement>;
    listOptionsMaxHeight: string;
};
export declare const createListBoxClassName: ({ isOpen, width, listWidth, }: {
    isOpen: boolean;
    listWidth?: "small" | "medium" | "large" | "xSmall" | undefined;
    width?: TextFieldWidth | undefined;
}) => string;
export declare const useFetchItems: ({ fieldValue, currentPage, fetchItems, totalPages, isFieldChanged, }: {
    fieldValue: string;
    currentPage: number;
    fetchItems: (params: FetchParams) => Promise<any>;
    totalPages: number;
    isFieldChanged?: boolean | undefined;
}) => {
    isLoadingMore: boolean;
    fetchParams: FetchParams;
    debouncedFetchItems: debounce<(params: FetchParams) => Promise<void>>;
    loadMore: () => void;
};
export declare const useFetchItemsForComboBox: <T>({ createOptions, fetchItems, fetchOnInit, initialName, responseAdapter, }: {
    createOptions: (items: T[]) => ComboBoxOption[];
    fetchItems: (params: FetchParams) => Promise<any>;
    fetchOnInit?: boolean | undefined;
    initialName?: string | undefined;
    responseAdapter?: ((response: any) => {
        items: T[];
        meta: ApiMetaData;
    }) | undefined;
}) => {
    items: T[];
    meta: ApiMetaData;
    options: ComboBoxOption[];
    setResponse: import("react").Dispatch<import("react").SetStateAction<{
        items: T[];
        meta: ApiMetaData;
    }>>;
    isLoading: boolean;
    hasFetched: boolean;
    currentFetchParams: FetchParams;
    fetchItemsForComboBox: ({ name, page, }?: FetchParams) => Promise<void>;
};
