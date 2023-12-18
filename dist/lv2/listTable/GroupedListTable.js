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
import commonProps from '../../utilities/commonProps';
import TableListHead from '../../lv1/lists/TableListHead';
import TableListHeadCell from '../../lv1/lists/TableListHeadCell';
import TableListRow from '../../lv1/lists/TableListRow';
import TableListCell from '../../lv1/lists/TableListCell';
import CheckBoxCell from '../../lv1/lists/CheckBoxCell';
import TreeFoldingButtonCell from '../../lv1/lists/TreeFoldingButtonCell';
import VisuallyHidden from '../../lv1/a11y/VisuallyHidden';
var GroupedListTable = function (props) {
    var headers = props.headers, withCheckBox = props.withCheckBox, rowGroups = props.rowGroups, onChangeHeaderCheckBox = props.onChangeHeaderCheckBox, foldable = props.foldable, fitContent = props.fitContent;
    return (React.createElement("div", __assign({}, commonProps(props, 'vb-groupedListTable', { fitContent: fitContent })),
        React.createElement("table", { className: "vb-groupedListTable__table" },
            React.createElement("thead", null,
                React.createElement(TableListHead, null,
                    withCheckBox && (React.createElement(CheckBoxCell, { header: true, "aria-label": "\u3059\u3079\u3066\u9078\u629E", onChange: onChangeHeaderCheckBox, checked: rowGroups.every(function (rowGroup) {
                            return rowGroup.rows.every(function (row) { return row.checked; });
                        }) })),
                    foldable && (React.createElement(TableListHeadCell, null,
                        React.createElement(VisuallyHidden, null, "\u884C\u306E\u958B\u9589"))),
                    headers.map(function (header, i) { return (React.createElement(TableListHeadCell, { key: i, alignCenter: header.alignCenter, alignRight: header.alignRight, ordering: header.ordering, onClick: header.onClick &&
                            (function () {
                                header.onClick && header.onClick(i);
                            }), minWidth: header.minWidth, maxWidth: header.maxWidth, "data-test": header['data-test'] }, header.value)); }))),
            React.createElement("tbody", null, rowGroups.map(function (rowGroup, rowGroupIndex) {
                return (React.createElement(React.Fragment, { key: rowGroupIndex },
                    React.createElement(TableListRow, { key: rowGroupIndex, "aria-level": 1, "aria-setsize": rowGroups.length, "aria-posinset": rowGroupIndex + 1, "aria-expanded": foldable ? !rowGroup.folded : undefined, url: rowGroup.url, onSelfWindowNavigation: rowGroup.onSelfWindowNavigation, onClick: rowGroup.onClick, "data-test": rowGroup['data-test'] },
                        withCheckBox && (React.createElement(CheckBoxCell, { header: false, checked: rowGroup.rows.every(function (row) { return row.checked; }), onChange: rowGroup.onChangeCheckBox, name: rowGroup.checkBoxName, value: rowGroup.checkBoxValue })),
                        foldable && (React.createElement(TreeFoldingButtonCell, { folded: !!rowGroup.folded, onToggleFolded: function (fold) {
                                rowGroup.onToggleFolded &&
                                    rowGroup.onToggleFolded(fold);
                            } })),
                        rowGroup.summaryCells.map(function (cell, cellIndex) { return (React.createElement(TableListCell, { key: cellIndex, alignCenter: cell.alignCenter, alignRight: cell.alignRight, small: cell.small, url: rowGroup.url, onSelfWindowNavigation: rowGroup.onSelfWindowNavigation, breakWord: cell.breakWord, colSpan: cell.colSpan, "data-test": cell['data-test'] }, cell.value)); })),
                    (!foldable || !rowGroup.folded) &&
                        rowGroup.rows.map(function (row, rowIndex) { return (React.createElement(TableListRow, { key: "".concat(rowGroupIndex, "-").concat(rowIndex), url: row.url, onSelfWindowNavigation: row.onSelfWindowNavigation, onClick: row.onClick &&
                                (function () {
                                    row.onClick ? row.onClick(rowIndex) : null;
                                }), "aria-level": 2, "aria-setsize": rowGroup.rows.length, "aria-posinset": rowIndex + 1, "data-test": row['data-test'] },
                            withCheckBox && (React.createElement(CheckBoxCell, { header: false, checked: row.checked, onChange: row.onChangeCheckBox, name: row.checkBoxName, value: row.checkBoxValue })),
                            foldable && React.createElement(TableListCell, null),
                            row.cells.map(function (cell, cellIndex) { return (React.createElement(TableListCell, { key: cellIndex, alignCenter: cell.alignCenter, alignRight: cell.alignRight, small: cell.small, url: row.url, onSelfWindowNavigation: row.onSelfWindowNavigation, breakWord: cell.breakWord, indentLevel: cellIndex === 0 ? 1 : 0, "data-test": cell['data-test'] }, cell.value)); }))); })));
            })))));
};
export default GroupedListTable;
//# sourceMappingURL=GroupedListTable.js.map