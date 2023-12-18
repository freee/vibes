import * as React from 'react';
import ListTable from '../listTable/ListTable';

type Props = Parameters<typeof ListTable>[0];

/**
 * BasicTableはListTableにリネームされました。
 * 新規に使用する場合はListTableを使用してください。
 */
const BasicTable = (props: Props) => <ListTable {...props} />;
export default BasicTable;
