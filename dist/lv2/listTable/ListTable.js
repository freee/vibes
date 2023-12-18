var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import TableListHead from '../../lv1/lists/TableListHead';
import TableListHeadCell from '../../lv1/lists/TableListHeadCell';
import TableListRow from '../../lv1/lists/TableListRow';
import TableListCell from '../../lv1/lists/TableListCell';
import CheckBoxCell from '../../lv1/lists/CheckBoxCell';
import commonProps from '../../utilities/commonProps';
/**
 * リストを表現するテーブルです
 *
 * * 歴史的な理由で `BasicTable` と呼ばれていることがあります
 * * オブジェクトのリストを、1行につき1つ表現するときに使用してください。
 * * 行全体のクリックでその行の詳細または編集画面へ遷移（画面全体の遷移には限らず、「モーダルを開く」でも良い）するようにしてください
 *   * 詳細または編集画面でのアクションを、セル内にボタンとして配置することも可能です
 * * 行クリックでURLに遷移するときは、必ず `url` を渡してください（Ctrl+クリックの操作やリンクURLのコピーをできるようにするため）
 */
var ListTable = function (props) {
    var margins = props.margins, headers = props.headers, rows = props.rows, withCheckBox = props.withCheckBox, onChangeHeaderCheckBox = props.onChangeHeaderCheckBox, fixedHeaderOffset = props.fixedHeaderOffset, fixedHeader = props.fixedHeader, fitContent = props.fitContent;
    var allEnabledCheckBoxesSelected = React.useMemo(function () {
        var filteredRows = rows.filter(function (row) { return !row.checkBoxDisabled; });
        return (filteredRows.length > 0 &&
            filteredRows
                .filter(function (row) { return !row.checkBoxDisabled; })
                .every(function (row) { return row.checked; }));
    }, [rows]);
    return (React.createElement("div", __assign({}, commonProps(props, 'vb-listTable', { fitContent: fitContent }, margins)),
        React.createElement("table", { className: "vb-listTable__table" },
            React.createElement("thead", null,
                React.createElement(TableListHead, { fixedHeader: fixedHeader, fixedHeaderOffset: fixedHeaderOffset },
                    withCheckBox && (React.createElement(CheckBoxCell, { header: true, "aria-label": "\u3059\u3079\u3066\u9078\u629E", onChange: onChangeHeaderCheckBox, checked: allEnabledCheckBoxesSelected })),
                    headers.map(function (header, i) {
                        return (React.createElement(TableListHeadCell, { key: i, alignCenter: header.alignCenter, alignRight: header.alignRight, ordering: header.ordering, onClick: header.onClick &&
                                (function () {
                                    header.onClick && header.onClick(i);
                                }), width: header.width, minWidth: header.minWidth, maxWidth: header.maxWidth, noWrap: header.noWrap, "data-test": header['data-test'] }, header.value));
                    }))),
            React.createElement("tbody", null, rows.map(function (row, i) {
                return (React.createElement(TableListRow, { key: i, url: row.url, onSelfWindowNavigation: row.onSelfWindowNavigation, onClick: row.onClick &&
                        (function () {
                            row.onClick ? row.onClick(i) : null;
                        }), "data-test": row['data-test'], ref: row.ref },
                    withCheckBox && (React.createElement(CheckBoxCell, { header: false, checked: row.checked, disabled: row.checkBoxDisabled, onChange: row.onChangeCheckBox, name: row.checkBoxName, value: row.checkBoxValue })),
                    row.cells.map(function (cell, j) {
                        return (React.createElement(TableListCell, { key: j, alignCenter: cell.alignCenter, alignRight: cell.alignRight, alignTop: cell.alignTop, small: cell.small, url: row.url, onSelfWindowNavigation: row.onSelfWindowNavigation, breakWord: cell.breakWord, colSpan: cell.colSpan, "data-masking": cell['data-masking'], "data-test": cell['data-test'] }, cell.value));
                    })));
            })))));
};
export default ListTable;
//# sourceMappingURL=ListTable.js.map