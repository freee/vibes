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
var TableListHead = function (props) {
    var children = props.children, fixedHeader = props.fixedHeader, fixedHeaderOffset = props.fixedHeaderOffset;
    return (React.createElement(React.Fragment, null,
        React.createElement("tr", __assign({}, commonProps(props, 'vb-tableListHead', { fixedHeader: fixedHeader }), { style: {
                top: fixedHeader ? fixedHeaderOffset : undefined,
            } }), children)));
};
export default TableListHead;
//# sourceMappingURL=TableListHead.js.map