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
import NoSearchResultsIllust from '../../lv1/images/NoSearchResultsIllust';
import Paragraph from '../../lv1/typography/Paragraph';
import SectionTitle from '../../lv1/typography/SectionTitle';
/**
 * このコンポーネントは検索結果に合致するデータがない場合に使う、empty UIです。
 * データ自体が１件もない場合は `NoDataCreated` を使用してください。
 *
 * - 特に特別な考慮が必要のない時に使う想定です。
 * - 画像やメッセージは任意のものにも入れ替えられるようになっていますが、それ以上の事を実装したい場合は独自にempty UI を用意してください。
 * - デフォルトの見せ方で良い場合は、`objectName` を指定するだけで使えます。
 */
var NoSearchResults = function (props) {
    var objectName = props.objectName, image = props.image, mainText = props.mainText, subText = props.subText, _a = props.size, size = _a === void 0 ? 'medium' : _a;
    var baseClassName = 'vb-noSearchResults';
    return (React.createElement("div", __assign({}, commonProps(props, baseClassName, {}, {})),
        image ? (React.createElement("img", { className: "".concat(baseClassName, "__image"), src: image.src, alt: "", style: {
                width: image.width,
                height: image.height,
            } })) : (React.createElement(NoSearchResultsIllust, { mt: 2, mb: 1, size: size })),
        React.createElement(SectionTitle, { headlineLevel: -1, mb: 0.25 }, mainText ||
            "\u691C\u7D22\u306B\u8A72\u5F53\u3059\u308B".concat(objectName || 'データ', "\u306F\u3042\u308A\u307E\u305B\u3093\u3067\u3057\u305F")),
        React.createElement(Paragraph, null, subText || '検索条件を変えて再度絞り込みをお試しください')));
};
export default NoSearchResults;
//# sourceMappingURL=NoSearchResults.js.map