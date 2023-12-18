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
import vbClassNames from '../../utilities/vbClassNames';
/**
 * Block上の見た目をした箇条書きのためのコンポーネントです
 */
var LineSeparatedList = function (props) {
    var _a = props.listContents, listContents = _a === void 0 ? [] : _a;
    var baseClass = 'vb-lineSeparatedList';
    var listItems = listContents.map(function (listContent, index) { return (React.createElement("li", { key: index, className: "".concat(baseClass, "__list__listItem") }, listContent.value)); });
    return (React.createElement("div", __assign({}, commonProps(props, baseClass)),
        React.createElement("ul", { className: vbClassNames("".concat(baseClass, "__list"), {}) }, listItems)));
};
export default LineSeparatedList;
//# sourceMappingURL=LineSeparatedList.js.map