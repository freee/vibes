/// <reference types="react" />
import ListTable from '../listTable/ListTable';
declare type Props = Parameters<typeof ListTable>[0];
/**
 * BasicTableはListTableにリネームされました。
 * 新規に使用する場合はListTableを使用してください。
 */
declare const BasicTable: (props: Props) => JSX.Element;
export default BasicTable;
