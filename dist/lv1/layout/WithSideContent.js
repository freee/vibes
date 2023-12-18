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
/**
 * 関連機能のボタン等を右側に配置するために使用するコンポーネントです
 *
 * - 左右にボタン等を振り分けて配置するときのほか、右にボタンだけ置きたいというときにも使用できます
 */
var WithSideContent = function (props) {
    var children = props.children, sideContent = props.sideContent, verticalAlign = props.verticalAlign;
    var baseClassName = 'vb-withSideContent';
    return (React.createElement("div", __assign({}, commonProps(props, baseClassName, {
        alignTop: verticalAlign === 'top',
        alignBottom: verticalAlign === 'bottom',
        alignMiddle: verticalAlign === 'middle',
    })),
        React.createElement("div", { className: "".concat(baseClassName, "__content") }, children),
        React.createElement("div", { className: "".concat(baseClassName, "__sideContent") }, sideContent)));
};
export default WithSideContent;
//# sourceMappingURL=WithSideContent.js.map