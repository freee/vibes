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
import { useResponsive } from '../../utilities/VibesProvider';
/**
 * Containerはコンテンツ領域全体（本文）を囲み、widthをnarrow/normal/wideで設定することができます
 * ＊コンテンツ領域全体（本文）はその画面の中心的な内容となり、Header/GlobalNavi/Footerを除く全体となります。（参考：[MDN}(https://developer.mozilla.org/ja/docs/Web/HTML/Element/main))
 *
 * ## accessibility
 * Containerはmain要素も含んでいます。（実装を確認ください）
 * もし、Containerが使われない場合には、main要素でコンテンツ領域全体（本文）を囲むよう同等の役割を果たす実装してください
 */
var Container = function (props) {
    var children = props.children, width = props.width, responsive = props.responsive, marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize;
    return (React.createElement("main", __assign({}, commonProps(props, 'vb-container', {
        responsive: useResponsive(responsive),
        widthNarrow: width === 'narrow',
        widthWide: width === 'wide',
    }, { marginBottom: marginBottom, marginLeft: marginLeft, marginRight: marginRight, marginSize: marginSize, marginTop: marginTop }), { role: "main" }), children));
};
export default Container;
//# sourceMappingURL=Container.js.map