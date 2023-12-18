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
import CheckBoxCell from '../../lv1/lists/CheckBoxCell';
import commonProps from '../../utilities/commonProps';
function createHeader(headers, rowHeaderCount, fixedRowHeader, fixedRowHeaderLeftList, checkboxProps) {
    var headerCheckBox = checkboxProps && (React.createElement(CheckBoxCell, { header: true, "aria-label": "\u3059\u3079\u3066\u9078\u629E", onChange: checkboxProps.onChange, checked: checkboxProps.checked }));
    var headerContents = headers.map(function (header, index) { return (React.createElement(TableListHeadCell, { key: index, alignCenter: header.alignCenter, alignRight: header.alignRight, ordering: header.ordering, width: header.width, minWidth: header.minWidth, maxWidth: header.maxWidth, noWrap: header.noWrap, rowHeader: index < rowHeaderCount, fixedRowHeader: index < rowHeaderCount && fixedRowHeader, fixedRowHeaderLeft: fixedRowHeaderLeftList === null || fixedRowHeaderLeftList === void 0 ? void 0 : fixedRowHeaderLeftList[index], onClick: header.onClick && (function () { var _a; return (_a = header.onClick) === null || _a === void 0 ? void 0 : _a.call(header, index); }), "data-test": header['data-test'] }, header.value)); });
    return (headerCheckBox ? [headerCheckBox] : []).concat(headerContents);
}
function createCells(row, rowHeaderCount, fixedRowHeader, fixedRowHeaderLeftList, withCheckBox) {
    var checkBoxCell = withCheckBox && (React.createElement(CheckBoxCell, { header: false, checked: row.checked, disabled: row.checkBoxDisabled, onChange: row.onChangeCheckBox, name: row.checkBoxName, value: row.checkBoxValue }));
    var cellContents = row.cells.map(function (cell, index) { return (React.createElement(BorderTableListCell, { key: index, small: cell.small, alignCenter: cell.alignCenter, alignRight: cell.alignRight, breakWord: cell.breakWord, noWrap: cell.noWrap, status: cell.status, rowHeader: index < rowHeaderCount, fixedRowHeader: index < rowHeaderCount && fixedRowHeader, fixedRowHeaderLeft: fixedRowHeaderLeftList === null || fixedRowHeaderLeftList === void 0 ? void 0 : fixedRowHeaderLeftList[index], onClick: cell.onClick && (function () { var _a; return (_a = cell.onClick) === null || _a === void 0 ? void 0 : _a.call(cell, index); }), "data-masking": cell['data-masking'], "data-test": row['data-test'] }, cell.value)); });
    return (checkBoxCell ? [checkBoxCell] : []).concat(cellContents);
}
function createRows(rows, rowHeaderCount, fixedRowHeader, fixedRowHeaderLeftList, withCheckBox) {
    var rowContents = rows.map(function (row, index) { return (React.createElement(TableListRow, { key: index, "data-test": row['data-test'] }, createCells(row, rowHeaderCount, fixedRowHeader, fixedRowHeaderLeftList, withCheckBox))); });
    return rowContents;
}
var NumericTable = function (props) {
    var headers = props.headers, rows = props.rows, withCheckBox = props.withCheckBox, onChangeHeaderCheckBox = props.onChangeHeaderCheckBox, fixedHeaderOffset = props.fixedHeaderOffset, fixedHeader = props.fixedHeader, hasRowHeader = props.hasRowHeader, rawRowHeaderCount = props.rowHeaderCount, fixedRowHeader = props.fixedRowHeader, marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize;
    var rowHeaderCount = rawRowHeaderCount || (hasRowHeader ? 1 : 0);
    // 今のところ header で colspan を指定できないので、最小単位での width の計算を headers から行う
    // もし指定できるようになった場合は、width の list を受け取るなどして対処する必要がある
    var fixedRowHeaderLeftList = headers
        .slice(0, rowHeaderCount)
        .reduce(function (acc, _, index, arr) {
        var _a;
        acc[index] = (acc[index - 1] || 0) + (((_a = arr[index - 1]) === null || _a === void 0 ? void 0 : _a.width) || 0);
        return acc;
    }, Array(rowHeaderCount).fill(0));
    var allEnabledCheckBoxesSelected = React.useMemo(function () {
        var filteredRows = rows.filter(function (row) { return !row.checkBoxDisabled; });
        return (filteredRows.length > 0 &&
            filteredRows
                .filter(function (row) { return !row.checkBoxDisabled; })
                .every(function (row) { return row.checked; }));
    }, [rows]);
    return (React.createElement("div", __assign({}, commonProps(props, 'vb-numericTable', {}, {
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginSize: marginSize,
        marginTop: marginTop,
    })),
        React.createElement("table", { className: "vb-numericTable__table" },
            React.createElement("thead", null,
                React.createElement(TableListHead, { fixedHeader: fixedHeader, fixedHeaderOffset: fixedHeaderOffset }, createHeader(headers, rowHeaderCount, !!fixedRowHeader, fixedRowHeaderLeftList, withCheckBox && !!onChangeHeaderCheckBox
                    ? {
                        checked: allEnabledCheckBoxesSelected,
                        onChange: onChangeHeaderCheckBox,
                    }
                    : undefined))),
            React.createElement("tbody", null, createRows(rows, rowHeaderCount, !!fixedRowHeader, fixedRowHeaderLeftList, withCheckBox)))));
};
export default NumericTable;
//# sourceMappingURL=NumericTable.js.map