import * as React from 'react';
import TableListHead from '../../lv1/lists/TableListHead';
import { Order } from '../../lv1/lists/TableListHeadCell';
import { MarginClassProps } from '../../utilities/marginClasses';
import { CommonProps } from '../../utilities/commonProps';
import { SelfWindowNavigationProp } from '../../utilities/selfWindowNavigator';
import { FitContentProps } from '../../lv1/bases/types';
export declare type TableHeader = {
    value: React.ReactNode;
    alignCenter?: boolean;
    alignRight?: boolean;
    ordering?: Order;
    onClick?: (rowIndex: number) => any;
    width?: number;
    minWidth?: number;
    maxWidth?: number;
    /**
     * 折り返さない(`white-space: nowrap`)
     */
    noWrap?: boolean;
    'data-test'?: string;
};
export declare type TableRow = {
    /**
     * 行クリック時の処理を渡せます。遷移先のURLが存在する場合にはonClick内で遷移させるのではなく、URLを渡してください。
     * react-routerの遷移処理を入れたい場合は onSelfWindowNavigationを使用してください
     */
    onClick?: (rowIndex: number) => any;
    url?: string;
    cells: Array<TableCell>;
    checkBoxDisabled?: boolean;
    checked?: boolean;
    onChangeCheckBox?: React.ChangeEventHandler<HTMLInputElement>;
    checkBoxName?: string;
    checkBoxValue?: string;
    'data-test'?: string;
    ref?: React.Ref<HTMLTableRowElement>;
} & SelfWindowNavigationProp;
export declare type TableCell = {
    value: React.ReactNode;
    alignCenter?: boolean;
    alignRight?: boolean;
    alignTop?: boolean;
    small?: boolean;
    /**
     * なるべく単語の切れ目で改行するようにします(`word-break: break-word`)。メールアドレスや金額のカラムで指定してください。
     */
    breakWord?: boolean;
    colSpan?: number;
    'data-masking'?: boolean;
    'data-test'?: string;
};
declare type Props = {
    headers: Array<TableHeader>;
    rows: Array<TableRow>;
    withCheckBox?: boolean;
    onChangeHeaderCheckBox?: React.ChangeEventHandler<HTMLInputElement>;
    /**
     * Deprecated 使用しないでください
     */
    margins?: MarginClassProps;
} & Pick<React.ComponentPropsWithoutRef<typeof TableListHead>, 'fixedHeader' | 'fixedHeaderOffset'> & CommonProps & FitContentProps;
/**
 * リストを表現するテーブルです
 *
 * * 歴史的な理由で `BasicTable` と呼ばれていることがあります
 * * オブジェクトのリストを、1行につき1つ表現するときに使用してください。
 * * 行全体のクリックでその行の詳細または編集画面へ遷移（画面全体の遷移には限らず、「モーダルを開く」でも良い）するようにしてください
 *   * 詳細または編集画面でのアクションを、セル内にボタンとして配置することも可能です
 * * 行クリックでURLに遷移するときは、必ず `url` を渡してください（Ctrl+クリックの操作やリンクURLのコピーをできるようにするため）
 */
declare const ListTable: React.FC<Props>;
export default ListTable;
