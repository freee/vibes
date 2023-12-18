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
import { useCallback, useMemo, useState } from 'react';
var toFlatRow = function (_a) {
    var row = _a.row, rowIndex = _a.rowIndex, level = _a.level, setSize = _a.setSize;
    var parentRow = __assign(__assign({}, row), { level: level, childCount: row.childRows.length, totalChildCount: 0, setSize: setSize, posInset: rowIndex + 1 });
    if (parentRow.childCount === 0) {
        return [parentRow];
    }
    var childRows = row.childRows.flatMap(function (childRow, childRowIndex, childRowArr) {
        return toFlatRow({
            row: childRow,
            rowIndex: childRowIndex,
            level: level + 1,
            setSize: childRowArr.length,
        });
    });
    return [__assign(__assign({}, parentRow), { totalChildCount: childRows.length })].concat(childRows);
};
export var useHierarchicalTable = function (rows) {
    var flatRows = useMemo(function () {
        return rows.flatMap(function (row, rowIndex, arr) {
            return toFlatRow({ row: row, rowIndex: rowIndex, level: 1, setSize: arr.length });
        });
    }, [rows]);
    // flatRowの各行が内部的に折りたたまれているかどうかを保持する（true のとき閉じている）
    var _a = useState(new Array(flatRows.length).fill(false)), rowFoldedStatus = _a[0], setRowFoldedStatus = _a[1];
    // rows が変更されたら、開閉状態を初期化する
    var _b = useState(rows), prevRows = _b[0], setPrevRows = _b[1];
    if (rows !== prevRows) {
        setPrevRows(rows);
        setRowFoldedStatus(new Array(flatRows.length).fill(false));
    }
    // flatRowの各行が画面上で見える状態になっているかどうかを保持する
    // 折りたたまれている行の子孫すべてが画面上で見えない状態になる（その行自体は見える）
    var rowVisibility = useMemo(function () {
        var ret = new Array(flatRows.length).fill(true);
        var rowIndex = 0;
        while (rowIndex < flatRows.length) {
            var folded = rowFoldedStatus[rowIndex];
            var totalChildCount = flatRows[rowIndex].totalChildCount;
            if (folded && totalChildCount > 0) {
                for (var i = 1; i <= totalChildCount; i++) {
                    ret[rowIndex + i] = false;
                }
                // 同階層の次の行まで飛ばす
                rowIndex += totalChildCount + 1;
            }
            else {
                rowIndex++;
            }
        }
        return ret;
    }, [flatRows, rowFoldedStatus]);
    var updateRowFoldedStatus = useCallback(function (rowIndex) {
        return setRowFoldedStatus(function (prev) {
            return prev
                .slice(0, rowIndex)
                .concat([!prev[rowIndex]])
                .concat(prev.slice(rowIndex + 1));
        });
    }, []);
    return [
        flatRows.map(function (flatRow, rowIndex) { return (__assign(__assign({}, flatRow), { folded: rowFoldedStatus[rowIndex], visible: rowVisibility[rowIndex] })); }),
        updateRowFoldedStatus,
    ];
};
//# sourceMappingURL=useHierarchicalTable.js.map