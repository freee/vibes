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
import useUniqueId from '../../hooks/useUniqueId';
import commonProps from '../../utilities/commonProps';
/**
 * 注釈をコンポーネントの右または下に置くためのコンポーネントです。
 * DOM上での並び順は見た目とは違い、注釈→対象のコンポーネントとなるため、CSSがあたっていない状態のユーザーに先に注釈を見せることができます。
 *
 * - `renderContent` は `renderDescriptionContent` が配置される要素のidを引数に取るため、 `aria-describedby` で紐付けることができます。
 * - `renderDescriptionContent` には `Note` コンポーネントを配置する想定です。
 * - `WithDescriptionContent` では注釈と対象のあいだのマージンは用意していないので、注釈と対象のどちらかに `0.5rem` 程度のマージンをつけて調整してください。
 * - ラベル（項目名）の配置には `FormControl` 等を使用してください
 * - `horizontal` `vertical` では、**DOM上の要素の順序と見た目上の順序が逆順になる** ことに注意が必要です
     - 「`renderContent` 内の入力フィールド等の状態によって `renderDescriptionContent` が変化する」ような使い方をしないでください
 *   - リンク等を `renderDescriptionContent` に入れた場合、 `renderContent` 内の要素よりも先にフォーカスが移動します
 */
var WithDescriptionContent = function (props) {
    var baseClassName = 'vb-withDescriptionContent';
    var uniqueId = useUniqueId(baseClassName);
    var descriptionContentId = "".concat(uniqueId, "__descriptionContent");
    var renderContent = props.renderContent, renderDescriptionContent = props.renderDescriptionContent, position = props.position;
    return (React.createElement("div", __assign({}, commonProps(props, baseClassName, {
        horizontal: position === 'horizontal',
        verticalReverse: position === 'vertical-reverse',
    })),
        React.createElement("div", { className: "".concat(baseClassName, "__description"), id: descriptionContentId }, renderDescriptionContent()),
        React.createElement("div", { className: "".concat(baseClassName, "__content") }, renderContent(descriptionContentId))));
};
export default WithDescriptionContent;
//# sourceMappingURL=WithDescriptionContent.js.map