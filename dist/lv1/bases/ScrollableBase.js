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
var ScrollableBase = function (props) {
    var scrollableX = props.scrollableX, scrollableY = props.scrollableY, children = props.children;
    return (React.createElement("div", __assign({}, commonProps(props, 'vb-scrollableBase', { scrollableX: scrollableX, scrollableY: scrollableY }), { 
        // キーボードでスクロールできるようにするため、tabIndexをつけておく
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex: 0 }), children));
};
export default ScrollableBase;
//# sourceMappingURL=ScrollableBase.js.map