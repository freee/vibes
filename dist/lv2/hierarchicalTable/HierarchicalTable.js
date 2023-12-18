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
import BorderTableListCell from '../../lv1/lists/BorderTableListCell';
import commonProps from '../../utilities/commonProps';
import HierarchicalTableRowHeaderCell from './HierarchicalTableRowHeaderCell';
import { useHierarchicalTable, } from './hooks/useHierarchicalTable';
function createHeader(headers, fixedRowHeader) {
    var headerContents = headers.map(function (header, index) { return (React.createElement(TableListHeadCell, { key: index, alignCenter: header.alignCenter, alignRight: header.alignRight, ordering: header.ordering, width: header.width, minWidth: header.minWidth, maxWidth: header.maxWidth, noWrap: header.noWrap, rowHeader: index === 0, fixedRowHeader: index === 0 && fixedRowHeader, onClick: header.onClick, "data-test": header['data-test'] }, header.value)); });
    return headerContents;
}
function createCells(cells, level, foldable, folded, onToggleFolded, fixedRowHeader) {
    return cells.map(function (cell, index) {
        return index === 0 ? (React.createElement(HierarchicalTableRowHeaderCell, { key: 0, small: cell.small, alignCenter: cell.alignCenter, alignRight: cell.alignRight, breakWord: cell.breakWord, noWrap: cell.noWrap, rowHeader: true, fixedRowHeader: fixedRowHeader, onClick: cell.onClick, onToggleFolded: onToggleFolded, level: level, foldable: foldable, folded: folded }, cell.value)) : (React.createElement(BorderTableListCell, { key: index, small: cell.small, alignCenter: cell.alignCenter, alignRight: cell.alignRight, breakWord: cell.breakWord, noWrap: cell.noWrap, onClick: cell.onClick }, cell.value));
    });
}
function createRows(rows, updateRowFoldedStatus, fixedRowHeader) {
    return rows.map(function (row, rowIndex) {
        if (row.visible) {
            var foldable = row.childCount > 0;
            return (React.createElement(TableListRow, { key: rowIndex, "aria-level": row.level, "aria-setsize": row.setSize, "aria-posinset": row.posInset, "aria-expanded": foldable ? !row.folded : undefined, "data-test": row['data-test'] }, createCells(row.cells, row.level, foldable, row.folded, function () { return updateRowFoldedStatus(rowIndex); }, fixedRowHeader)));
        }
    });
}
var HierarchicalTable = function (props) {
    var headers = props.headers, rows = props.rows, fixedHeader = props.fixedHeader, fixedRowHeader = props.fixedRowHeader;
    var _a = useHierarchicalTable(rows), hierarchicalRows = _a[0], updateRowFoldedStatus = _a[1];
    return (React.createElement("div", __assign({}, commonProps(props, 'vb-hierarchicalTable')),
        React.createElement("table", { className: "vb-hierarchicalTable__table" },
            React.createElement("thead", null,
                React.createElement(TableListHead, { fixedHeader: fixedHeader }, createHeader(headers, fixedRowHeader))),
            React.createElement("tbody", null, createRows(hierarchicalRows, updateRowFoldedStatus, fixedRowHeader)))));
};
export default HierarchicalTable;
//# sourceMappingURL=HierarchicalTable.js.map