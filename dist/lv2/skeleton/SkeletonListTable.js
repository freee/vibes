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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import ListTable from '../listTable/ListTable';
import { SkeletonParagraph } from './SkeletonParagraph';
import { SkeletonBase } from '../../lv1/skeleton/SkeletonBase';
/**
 * ローディング中のテーブルを表現するために使います
 * This component provides a skeleton image of ListTable.
 */
export var SkeletonListTable = function (props) {
    var _a = props.columnCount, columnCount = _a === void 0 ? 5 : _a, _b = props.rowCount, rowCount = _b === void 0 ? 3 : _b, rowCells = props.rowCells, commonProps = __rest(props, ["columnCount", "rowCount", "rowCells"]);
    var numberOfColumns = (rowCells === null || rowCells === void 0 ? void 0 : rowCells.length) || columnCount;
    return (React.createElement(ListTable, __assign({ headers: Array(numberOfColumns).fill({
            value: React.createElement(SkeletonBase, { width: 3, height: 0.75 }),
        }), rows: Array(rowCount).fill({
            cells: rowCells
                ? rowCells
                : Array(numberOfColumns)
                    .fill(1)
                    .map(function (_, i) { return ({
                    value: (React.createElement(SkeletonParagraph, { size: i === 0 ? 'medium' : 'small' })),
                }); }),
        }) }, commonProps)));
};
/**
 * @deprecated SkeletonListTable を使ってください。 Use SkeletonListTable instead.
 */
export var SkeltonListTable = SkeletonListTable;
//# sourceMappingURL=SkeletonListTable.js.map