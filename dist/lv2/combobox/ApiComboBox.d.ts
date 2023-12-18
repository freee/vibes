import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import TextField from '../../lv1/forms/TextField';
import { SingleComboBoxOption, FetchParams, ApiMetaData } from './hooks';
export { useApiComboBox } from './hooks/apiComboBox';
export type { SingleComboBoxOption } from './hooks';
declare type PropsFromTextField = Pick<Parameters<typeof TextField>[0], 'id' | 'label' | 'labelledby' | 'placeholder' | 'name' | 'required' | 'disabled' | 'error' | 'small' | 'large' | 'width' | 'onInput' | 'onKeyDown' | 'borderless'>;
/**
 * SingleComboBox に API による検索とページネーションの機能を付与したコンポーネントです。
 *
 * * リソース管理のため、基本的には`useApiComboBox`を併用してください
 * * リスト内の項目が固定されている場合は`SingleComboBox`を使用してください。
 */
declare const ApiComboBox: React.ForwardRefExoticComponent<{
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
    value?: SingleComboBoxOption<never> | undefined;
    options: SingleComboBoxOption[];
    listWidth?: "small" | "medium" | "large" | "xSmall" | undefined;
    emptyMessage?: React.ReactNode;
    onChange?: ((option?: SingleComboBoxOption<never> | undefined) => void) | undefined;
    onBlur?: ((e: React.FormEvent, fetchParams: FetchParams, value?: SingleComboBoxOption<never> | undefined) => void) | undefined;
    onFocus?: ((e: React.FormEvent, fetchParams: FetchParams, isFieldChanged: boolean, value?: SingleComboBoxOption<never> | undefined) => void) | undefined;
} & PropsFromTextField & MarginClassProps & import("../../utilities/commonProps").CommonDataProps & import("../../utilities/functionalMarginClasses").FunctionalMarginProps & React.RefAttributes<HTMLInputElement>>;
export default ApiComboBox;
