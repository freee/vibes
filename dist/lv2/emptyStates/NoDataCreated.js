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
import Paragraph from '../../lv1/typography/Paragraph';
import SectionTitle from '../../lv1/typography/SectionTitle';
import NoDataIllust from '../../lv1/images/NoDataIllust';
/**
 * このコンポーネントは作成されたデータがまだ存在しない場合に使う、empty UIです。
 * 検索条件に合致するものがない場合は `NoSearchResults` の使用を検討してください。
 *
 * - 「まだデータがないこと」「作成されると一覧に表示されること」の２つをデフォルトの表示として伝えています。
 * - テキストはそれぞれ任意のものにも差し替え可能です。
 * - テキストの下に新規作成ボタンなどのアクションを用意することも可能です。
 * - オンボーディングにつなげるなどの理由でより複雑なレイアウトにしたい場合は独自にempty UIを用意してください。
 *   - このコンポーネントはそういった特別な意図がない場合に手軽に empty UI を構築する用途で使用することを想定しています。
 */
var NoDataCreated = function (props) {
    var actionWord = props.actionWord, objectName = props.objectName, image = props.image, mainText = props.mainText, subText = props.subText, children = props.children, _a = props.size, size = _a === void 0 ? 'medium' : _a;
    var baseClassName = 'vb-noDataCreated';
    return (React.createElement("div", __assign({}, commonProps(props, baseClassName, {}, {})),
        image ? (React.createElement("img", { className: "".concat(baseClassName, "__image"), src: image.src, alt: "", style: {
                width: image.width,
                height: image.height,
            } })) : (React.createElement(NoDataIllust, { mb: 1, size: size })),
        React.createElement(SectionTitle, { headlineLevel: -1, mb: 0.25 }, mainText ||
            "".concat(actionWord || '作成', "\u3055\u308C\u305F").concat(objectName || 'データ', "\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093")),
        React.createElement(Paragraph, null, subText ||
            "\u65B0\u898F\u306B".concat(actionWord || '作成', "\u3092\u3059\u308B\u3068\u4E00\u89A7\u3068\u3057\u3066\u8868\u793A\u3055\u308C\u307E\u3059")),
        children));
};
export default NoDataCreated;
//# sourceMappingURL=NoDataCreated.js.map