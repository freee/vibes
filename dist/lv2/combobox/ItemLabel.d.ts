/// <reference types="react" />
import type { InternalComboBoxOption, FixedItems } from './hooks';
import type { TrailingItem } from './hooks/singleComboBox';
export declare const ItemLabel: ({ fixedItemOption, fieldValue, option, trailingItem, }: {
    fixedItemOption?: {
        fixedItems: FixedItems;
        isSelected: boolean;
    } | undefined;
    fieldValue: string;
    option: InternalComboBoxOption;
    trailingItem?: TrailingItem | undefined;
}) => JSX.Element;
