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
import ListTable from '../listTable/ListTable';
/**
 * BasicTableはListTableにリネームされました。
 * 新規に使用する場合はListTableを使用してください。
 */
var BasicTable = function (props) { return React.createElement(ListTable, __assign({}, props)); };
export default BasicTable;
//# sourceMappingURL=BasicTable.js.map