import { FormEvent } from 'react';
import { SingleComboBoxOption, FetchParams, ApiMetaData } from '.';
export declare const useApiComboBoxInternal: ({ createNewItem, currentPage, fetchItems, onBlur, onChange, onFocus, onKeyDown, options, totalPages, value, }: {
    createNewItem?: ((fieldValue: string) => void) | undefined;
    currentPage: number;
    fetchItems: (params: FetchParams) => Promise<any>;
    onBlur?: ((e: FormEvent, fetchParams: FetchParams, value?: SingleComboBoxOption<never> | undefined) => void) | undefined;
    onChange?: ((option?: SingleComboBoxOption<never> | undefined) => void) | undefined;
    onFocus?: ((e: FormEvent, fetchParams: FetchParams, isFieldChanged: boolean, value?: SingleComboBoxOption<never> | undefined) => void) | undefined;
    onKeyDown?: import("react").KeyboardEventHandler<Element> | undefined;
    options: SingleComboBoxOption[];
    totalPages: number;
    value?: SingleComboBoxOption<never> | undefined;
}) => {
    fieldValue: string;
    isLoadingMore: boolean;
    isOpen: boolean;
    listOptionsRef: import("react").RefObject<HTMLDivElement>;
    loadMore: () => void;
    onFieldBlur: (e: React.FormEvent<HTMLInputElement>) => void;
    onFieldChange: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
    onFieldFocus: (e: React.FormEvent<HTMLInputElement>) => void;
    onFieldKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onSelectOption: (option?: SingleComboBoxOption<never> | undefined) => void;
    selectedIndex: number;
    selectedOptionRef: import("react").RefObject<HTMLDivElement>;
};
/**
 * ApiComboBoxのためにAPIをラップし、以下の機能を付与します。
 *
 * - 複数のApiComboBoxで利用するためのリソース管理
 * - ローディング状態の管理
 * - 初期化時のAPI呼び出し
 * - フォーカス時の挙動制御
 *
 * このhooksの利用は必須ではありません。
 *
 */
export declare const useApiComboBox: <T, E = never>({ createOptions, fetchItems, fetchOnInit, initialName, responseAdapter, }: {
    createOptions: (items: T[]) => SingleComboBoxOption<E>[];
    fetchItems: (params: FetchParams) => Promise<any>;
    /**
     * 初期化時にfetchを一回呼ぶ
     */
    fetchOnInit?: boolean | undefined;
    /**
     * 初期値としてセットするアイテム名
     */
    initialName?: string | undefined;
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
    onFocus: (_e: FormEvent, _fetchParams: FetchParams, _isFieldChanged: boolean, _value?: SingleComboBoxOption<never> | undefined) => void;
    options: import(".").ComboBoxOption[];
    /**
     * ApiComboBox の props としては使用しないが、useApiComboBox で取得したリソースを
     * 他のコンポーネントから参照・編集したいケースのために返している
     */
    items: T[];
    createOptions: (items: T[]) => SingleComboBoxOption<E>[];
    setItems: (newItems: T[]) => void;
    setMeta: (newMeta: ApiMetaData) => void;
};
