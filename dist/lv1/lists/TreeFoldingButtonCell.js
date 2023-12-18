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
import { MdExpandMore, MdChevronRight } from 'react-icons/md';
var TreeFoldingButtonCell = function (props) {
    var folded = props.folded, onToggleFolded = props.onToggleFolded;
    var className = 'vb-treeFoldingButtonCell';
    return (React.createElement("td", __assign({}, commonProps(props, className)),
        React.createElement("button", { className: "".concat(className, "__button"), "aria-label": folded ? '展開する' : '折り畳む', "aria-expanded": !folded, onClick: function (e) {
                onToggleFolded(!folded);
                e.stopPropagation();
            } }, folded ? (React.createElement(MdChevronRight, { className: "".concat(className, "__icon") })) : (React.createElement(MdExpandMore, { className: "".concat(className, "__icon") })))));
};
export default TreeFoldingButtonCell;
//# sourceMappingURL=TreeFoldingButtonCell.js.map