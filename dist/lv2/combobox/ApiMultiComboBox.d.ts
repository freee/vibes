import * as React from 'react';
import { PropsFromTextField } from './MultiComboBox';
import { ApiMetaData, FetchParams, MultiComboBoxOption } from './hooks';
export { useApiMultiComboBox } from './hooks/apiMultiComboBox';
export type { ApiMetaData } from './hooks';
export type { MultiComboBoxOption } from './hooks';
/**
 * `MultiComboBox` に API による検索とページネーションの機能を付与したコンポーネントです。使い方・使い分けについては `MultiComboBox` も参照してください
 *
 * * リソース管理のため、基本的には`useApiMultiComboBox`を併用してください
 * * リスト内の項目が固定されている場合は`MultiComboBox`を使用してください。
 */
declare const ApiMultiComboBox: React.ForwardRefExoticComponent<{
    /**
     * コンボボックスに表示するためのデータを取得するメソッドです。
     * 検索やページネーションのタイミングで呼び出されます。
     */
    fetchItems: (params: FetchParams) => Promise<any>;
    /**
     * APIのローディング状態です。trueの間はコンボボックス上にスピナーが表示されます。
     */
    isLoading: boolean;
    /**
     * ページネーションのためのメタ情報です。
     */
    meta: ApiMetaData;
    /**
     * 新規登録時のハンドラです。新規登録を表示するか否かの判定も兼ねています。
     */
    createNewItem?: ((fieldValue: string) => void) | undefined;
    values?: MultiComboBoxOption<never>[] | undefined;
    options: MultiComboBoxOption[];
    maxSelectionCount?: number | undefined;
    listWidth?: "small" | "medium" | "large" | "xSmall" | undefined;
    emptyMessage?: string | undefined;
    onChange?: ((values: MultiComboBoxOption[]) => void) | undefined;
    onBlur?: ((e: React.FormEvent, fetchParams: FetchParams, values?: MultiComboBoxOption<never>[] | undefined) => void) | undefined;
    onFocus?: (() => void) | undefined;
} & Omit<PropsFromTextField, "onFocus" | "onBlur"> & import("../../utilities/commonProps").CommonDataProps & import("../../utilities/functionalMarginClasses").FunctionalMarginProps & React.RefAttributes<HTMLInputElement>>;
export default ApiMultiComboBox;
