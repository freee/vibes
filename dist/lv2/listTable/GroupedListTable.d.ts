import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
import { SelfWindowNavigationProp } from '../../utilities/selfWindowNavigator';
import { FitContentProps } from '../../lv1/bases/types';
import { TableHeader, TableRow, TableCell } from './ListTable';
export declare type TableRowGroup = {
    rows: TableRow[];
    summaryCells: TableCell[];
    /**
     * 行クリック時の処理を渡せます。遷移先のURLが存在する場合にはonClick内で遷移させるのではなく、URLを渡してください。
     * react-routerの遷移処理を入れたい場合は onSelfWindowNavigationを使用してください
     */
    onClick?: () => void;
    url?: string;
    onChangeCheckBox?: React.ChangeEventHandler<HTMLInputElement>;
    checkBoxName?: string;
    checkBoxValue?: string;
    folded?: boolean;
    onToggleFolded?: (fold: boolean) => void;
    'data-test'?: string;
} & SelfWindowNavigationProp;
declare type Props = {
    headers: TableHeader[];
    rowGroups: TableRowGroup[];
    withCheckBox?: boolean;
    onChangeHeaderCheckBox?: React.ChangeEventHandler<HTMLInputElement>;
    foldable?: boolean;
} & CommonProps & FitContentProps;
declare const GroupedListTable: React.FC<Props>;
export default GroupedListTable;
