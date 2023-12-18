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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import WithBalloon from '../withBalloon/WithBalloon';
import commonProps from '../../utilities/commonProps';
import vbClassNames from '../../utilities/vbClassNames';
/**
 * 与えられた各項目の構成比を、項目の幅によって視覚的に示す帯グラフ。
 * - コンポーネントの振る舞い
 *   - 割合が 0 の項目は表示されません。
 *   - 表示されている項目はクリッカブルで、クリックすることができます。
 *   - 親要素の幅に対して項目の数が多すぎる場合、項目が溢れることがあります。そのため、最小幅の 3.375rem × 項目数が親要素の幅よりも小さくなることを保証する必要があります。
 * - コンポーネントの使用方針
 *   - 全体量に対する割合がある項目を視覚化、フィルターとして利用したい時に使用してください。
 *   - このコンポーネントを使用する場合は、このコンポーネント以外にすべての項目を網羅して表示させることのできるフィルターを同画面内に配置してください。
 *     - Tab や SelectBox など、表示されるものを切り替えられるもの
 *     - 割合が 0 の場合などに、このコンポーネントのみだとありうる項目を網羅して表示させることができないため
 *   - 項目がクリックされフィルタリングされる際は、項目の詳細コンテンツを表示してください。
 *     - 割合が少ない場合、StackedBarChart 内では項目表記が省略されるので視認性観点でも代わりに説明できる手段を残してください。
 *   - 最終的に StackedBarChart を使用するにあたって同画面内に必要なパーツ
 *     - ありうる項目を網羅するフィルターUI（Tab や SelectBox）
 *     - フィルターUIや StackedBarChart の項目をクリックすることで表示される詳細コンテンツ
 */
export var StackedBarChart = function (props) {
    var items = props.items, onClickItem = props.onClickItem, others = __rest(props, ["items", "onClickItem"]);
    var sum = items.reduce(function (acc, item) { return acc + item.value; }, 0);
    // 割合が 0 の項目は非表示
    var visibleItems = React.useMemo(function () {
        return items.flatMap(function (item, i) {
            var proportion = sum > 0 ? item.value / sum : 0;
            if (proportion === 0) {
                return [];
            }
            return __assign(__assign({}, item), { proportion: proportion, originalIndex: i });
        });
    }, [items, sum]);
    var baseClass = 'vb-stackedBarChart';
    return (React.createElement("ul", __assign({}, commonProps(others, "".concat(baseClass, "__container"))), visibleItems.map(function (item, i) {
        var isFirst = i === 0;
        var isLast = i === visibleItems.length - 1;
        var classModifier = {
            first: isFirst,
            last: isLast,
            RE: item.color === 'RE',
            OR: item.color === 'OR',
            YE: item.color === 'YE',
            YG: item.color === 'YG',
            GR: item.color === 'GR',
            BG: item.color === 'BG',
            PU: item.color === 'PU',
            GY: item.color === 'GY',
        };
        return (React.createElement("li", { className: "".concat(baseClass, "__item"), key: i, style: {
                // ある幅以上の大きさで、割合に応じて幅を伸縮させる
                minWidth: '3.375rem',
                width: "calc(100% * ".concat(item.proportion, ")"),
                flexGrow: item.proportion,
            } },
            React.createElement(WithBalloon, { renderBalloonContent: function () { return "".concat(item.label, " ").concat(item.valueLabel); }, renderContent: function () { return (React.createElement("button", { className: vbClassNames("".concat(baseClass, "__item__button"), {
                        modifier: classModifier,
                    }), onClick: function () { return onClickItem(item.originalIndex); } }, "".concat(item.label, " ").concat(item.valueLabel))); } })));
    })));
};
//# sourceMappingURL=StackedBarChart.js.map