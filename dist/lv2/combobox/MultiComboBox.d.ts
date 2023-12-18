import * as React from 'react';
import { MultiComboBoxOption } from './hooks';
import { PropsFromTextField } from './MultiComboBoxField';
export type { MultiComboBoxOption } from './hooks';
export type { PropsFromTextField } from './MultiComboBoxField';
/**
 * 複数の項目を選択したり、種別をまたいで選択したりできるコンボボックスです
 *
 * - 選択できる項目が単一で、種別をまたがない場合には `SingleComboBox` または `ApiComboBox` の使用も検討してください
 *   - 「他の場所で MultiComboBox を使用している種別である」など、単一種別・単一項目を選択であってもMultiComboBoxの使用が妥当だと判断できる場合は MultiComboBox を使用しても問題ありません
 * - 選択した候補には `RE` `OR` `YE` `YG` `GR` `BG` `PU` `GY` の色を指定できます。種別ごとに一貫した色を使用してください。
 * - API経由での項目の取得が必要となる場合は `ApiMultiComboBox` の使用も検討してください
 */
export declare const MultiComboBox: React.ForwardRefExoticComponent<{
    values?: MultiComboBoxOption<never>[] | undefined;
    options: MultiComboBoxOption[];
    /**
     * 選択できる項目の最大数を指定します。無指定または `0` を指定した場合、いくつでも選択できるようになります
     */
    maxSelectionCount?: number | undefined;
    listWidth?: "small" | "medium" | "large" | "xSmall" | undefined;
    emptyMessage?: string | undefined;
    isLoading?: boolean | undefined;
    onChange?: ((values: MultiComboBoxOption[]) => void) | undefined;
} & PropsFromTextField & import("../../utilities/commonProps").CommonDataProps & import("../../utilities/functionalMarginClasses").FunctionalMarginProps & React.RefAttributes<HTMLInputElement>>;
