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
import DescriptionListHeadCell from '../../lv1/lists/DescriptionListHeadCell';
import DescriptionListCell from '../../lv1/lists/DescriptionListCell';
import commonProps from '../../utilities/commonProps';
import vbClassNames from '../../utilities/vbClassNames';
import { useResponsive } from '../../utilities/VibesProvider';
/**
 * ## accessibility
 * DescriptionListにてフィールドを扱う場合、「フィールドとラベル」の紐付けを実装時に行う必要があります。
 *
 * 典型的な例として、以下のような対応が挙げられます。
 *
 * - valueに含まれるフィールドにidを付与する。
 * - titleを<label>で囲み、htmlForにフィールドのidを指定する
 *
 * storyのフィールドのある行が実装例として参考になります。
 *
 */
var DescriptionList = function (props) {
    var listContents = props.listContents, headCellMinWidth = props.headCellMinWidth, marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize, spacing = props.spacing;
    return (React.createElement("div", __assign({}, commonProps(props, 'vb-descriptionList', { responsive: useResponsive() }, {
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginSize: marginSize,
        marginTop: marginTop,
    })),
        React.createElement("table", { className: "vb-descriptionList__table" },
            React.createElement("thead", { className: "vb-descriptionList__header" },
                React.createElement("tr", null,
                    React.createElement("th", null, "\u9805\u76EE\u540D"),
                    React.createElement("th", null, "\u5185\u5BB9"))),
            React.createElement("tbody", null, listContents.map(function (listCont, index) { return (React.createElement("tr", { className: vbClassNames('vb-descriptionList__row', {
                    modifier: { spacingCompact: spacing === 'compact' },
                }), key: index },
                React.createElement(DescriptionListHeadCell, { minWidth: headCellMinWidth, spacing: spacing }, listCont.title),
                React.createElement(DescriptionListCell, null, listCont.value))); })))));
};
export default DescriptionList;
//# sourceMappingURL=DescriptionList.js.map