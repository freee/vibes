import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
import WithPopup from '../withPopup/WithPopup';
import { DropdownContentCheckbox, DropdownContentSelectable } from '../dropdown/types';
declare type FixedItem = {
    disableOnRequestClose?: boolean;
    isVisible: (filterValue: string) => boolean;
    label: React.ReactNode | ((filterValue: string) => React.ReactNode);
    onSelect: (filterValue: string) => any;
};
export declare type FilterableDropdownContent = (DropdownContentCheckbox | DropdownContentSelectable) & {
    /**
     * 項目の読みがなやショートカットコードを指定してください（複数指定可能）
     */
    keywords?: string[];
};
declare type Props = Pick<Parameters<typeof WithPopup>[0], 'render' | 'disabled'> & {
    /**
     * メニューの項目です。`keywords` として、複数の読みがなやショートカットコードを指定できます。
     */
    dropdownContents: FilterableDropdownContent[];
    /**
     * `SearchField` の変化時に発火します
     */
    onFilterChange?: React.ChangeEventHandler<HTMLInputElement>;
    /**
     * Dropdownの展開時に発火します
     */
    onOpen?: () => void;
    /**
     * スピナーを表示します。
     */
    isLoading?: boolean;
    /**
     * リストの最後尾に追加するアイテム 一つ目はもっと見る、二つ目新規登録を想定しています
     */
    fixedItems?: FixedItem[];
    noResultsMessage?: React.ReactNode;
    noDataMessage?: React.ReactNode;
    renderDropdownBottomContent?: (requestClose: () => void) => React.ReactNode;
} & CommonProps;
/**
 * ボタン部分のカスタマイズがどうしても必要な場合を除いて `FilterableDropdownButton` を使用してください。
 */
declare const WithFilterableDropdown: React.FC<Props>;
export default WithFilterableDropdown;
