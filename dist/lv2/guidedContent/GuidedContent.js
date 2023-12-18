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
/**
 * メインコンテンツの横に補助コンテンツを表示するためのレイアウト用のコンポーネントです。
 * Interactive Sample のように、メインコンテンツにフォームなどを置き、補助部分にその説明コンテンツなどを置くときなどに使えます。
 *
 * - 読み上げは title, guide, content の順番で行われます。
 */
var GuidedContent = function (props) {
    var title = props.title, guide = props.guide, content = props.content, responsive = props.responsive;
    var baseClass = 'vb-guidedContent';
    var classModifiers = { responsive: useResponsive(responsive) };
    return (React.createElement("div", __assign({}, commonProps(props, baseClass, classModifiers)),
        React.createElement("div", { className: "".concat(baseClass, "__title") }, title),
        React.createElement("div", { className: "".concat(baseClass, "__guide") }, guide),
        React.createElement("div", { className: "".concat(baseClass, "__content") }, content)));
};
export default GuidedContent;
//# sourceMappingURL=GuidedContent.js.map