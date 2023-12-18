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
import { useResponsive } from '../../utilities/VibesProvider';
import commonProps from '../../utilities/commonProps';
var DescriptionListHeadCell = function (props) {
    var children = props.children, minWidth = props.minWidth, spacing = props.spacing;
    // DescriptionList は横型のテーブルに限られるのでヘッダが対応するスコープは行単位
    var baseClassName = 'vb-descriptionListHeadCell';
    var classModifier = {
        spacingCompact: spacing === 'compact',
        responsive: useResponsive(),
    };
    var cp = commonProps(props, baseClassName, classModifier);
    return (React.createElement("th", __assign({}, __assign(__assign({}, cp), { className: "".concat(cp.className).concat(minWidth ? " ".concat(baseClassName, "--minWidth").concat(minWidth) : '') }), { scope: "row" }), children));
};
export default DescriptionListHeadCell;
//# sourceMappingURL=DescriptionListHeadCell.js.map