import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import TextField from '../../lv1/forms/TextField';
import { SingleComboBoxOption, FixedItems } from './hooks';
import { TrailingItem } from './hooks/singleComboBox';
export type { ComboBoxOption, SingleComboBoxOption } from './hooks';
declare type PropsFromTextField = Pick<Parameters<typeof TextField>[0], 'id' | 'label' | 'labelledby' | 'placeholder' | 'name' | 'required' | 'disabled' | 'error' | 'small' | 'large' | 'width' | 'onFocus' | 'onBlur' | 'onInput' | 'onKeyDown' | 'borderless'>;
declare const SingleComboBox: React.ForwardRefExoticComponent<{
    value?: SingleComboBoxOption<never> | undefined;
    options: SingleComboBoxOption[];
    listWidth?: "small" | "medium" | "large" | "xSmall" | undefined;
    emptyMessage?: React.ReactNode;
    isLoading?: boolean | undefined;
    onChange?: ((option?: SingleComboBoxOption<never> | undefined) => void) | undefined;
    /**
     * @deprecated fixedItems を使用してください
     */
    trailingItem?: TrailingItem | undefined;
    /**
     * リストの最後尾に追加するアイテム 一つ目はもっと見る、二つ目新規登録を想定しています
     */
    fixedItems?: FixedItems | undefined;
    describedBy?: string | undefined;
} & PropsFromTextField & MarginClassProps & import("../../utilities/commonProps").CommonDataProps & import("../../utilities/functionalMarginClasses").FunctionalMarginProps & React.RefAttributes<HTMLInputElement>>;
export default SingleComboBox;
