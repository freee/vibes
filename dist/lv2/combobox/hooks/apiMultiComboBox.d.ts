import React, { FormEvent } from 'react';
import { ApiMetaData, FetchParams, MultiComboBoxOption } from '.';
export declare const useApiMultiComboBoxInternal: ({ createNewItem, currentPage, fetchItems, onBlur, onChange, onFocus, onKeyDown, options, totalPages, values, maxSelectionCount, }: {
    createNewItem?: ((fieldValue: string) => void) | undefined;
    currentPage: number;
    fetchItems: (params: FetchParams) => Promise<any>;
    onBlur?: ((e: FormEvent, fetchParams: FetchParams, values?: MultiComboBoxOption<never>[] | undefined) => void) | undefined;
    onChange?: ((options: MultiComboBoxOption[]) => void) | undefined;
    onFocus?: (() => void) | undefined;
    onKeyDown?: React.KeyboardEventHandler<Element> | undefined;
    options: MultiComboBoxOption[];
    totalPages: number;
    values: MultiComboBoxOption[];
    maxSelectionCount?: number | undefined;
}) => {
    filteredOptions: MultiComboBoxOption<never>[];
    isLoadingMore: boolean;
    loadMore: () => void;
    fieldValue: string;
    isOpen: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    selectedIndex: number;
    listOptionsRef: React.RefObject<HTMLDivElement>;
    selectedOptionRef: React.RefObject<HTMLDivElement>;
    borderRef: React.RefObject<HTMLSpanElement>;
    onFieldBlur: (e: any) => void;
    onFieldChange: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
    onFieldFocus: () => void;
    onFieldKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onSelectOption: (option: MultiComboBoxOption) => void;
    onRemoveOption: (option: MultiComboBoxOption) => void;
    onClickNewItem: (fieldValue: string) => Promise<void>;
};
/**
 * ApiMultiComboBoxのためにAPIをラップし、以下の機能を付与します。
 *
 * - 複数のApiMultiComboBoxで利用するためのリソース管理
 * - ローディング状態の管理
 * - 初期化時のAPI呼び出し
 * - フォーカス時の挙動制御
 *
 * このhooksの利用は必須ではありません。
 *
 */
export declare const useApiMultiComboBox: <T, E = never>({ createOptions, fetchItems, fetchOnInit, responseAdapter, }: {
    createOptions: (items: T[]) => MultiComboBoxOption<E>[];
    fetchItems: (params: FetchParams) => Promise<any>;
    /**
     * 初期化時にfetchを一回呼ぶ
     */
    fetchOnInit?: boolean | undefined;
    /**
     * APIレスポンスの形が合わない場合に整形する
     */
    responseAdapter?: ((response: any) => {
        items: T[];
        meta: ApiMetaData;
    }) | undefined;
}) => {
    fetchItems: ({ name, page, }?: FetchParams) => Promise<void>;
    isLoading: boolean;
    meta: ApiMetaData;
    onFocus: () => void;
    options: import(".").ComboBoxOption[];
    /**
     * ApiMultiComboBox の props としては使用しないが、useApiMultiComboBox で取得したリソースを
     * 他のコンポーネントから参照・編集したいケースのために返している
     */
    items: T[];
    createOptions: (items: T[]) => MultiComboBoxOption<E>[];
    setItems: (newItems: T[]) => void;
    setMeta: (newMeta: ApiMetaData) => void;
};
