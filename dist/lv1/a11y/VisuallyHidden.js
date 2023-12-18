var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
import { pickCommonProps } from '../../utilities/commonProps';
import styled from 'styled-components';
import { CommonStyle } from '../../internal/CommonStyle';
var VisuallyHiddenStyle = styled(CommonStyle).attrs(function () { return ({ as: 'div' }); })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  clip: rect(1px 1px 1px 1px);\n"], ["\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  clip: rect(1px 1px 1px 1px);\n"])));
/**
 * 視覚的には見えないが、スクリーンリーダー等からは「見える」要素を提供します。
 * `autoRead` オプションを付けることで、 `aria-live="polite"` な、内部が書き変わったときに自動的に読み上げられる要素となります。
 */
var VisuallyHidden = function (props) {
    var children = props.children, autoRead = props.autoRead, id = props.id, assertive = props.assertive;
    var live = autoRead ? (assertive ? 'assertive' : 'polite') : undefined;
    var atomic = live ? true : undefined; //自動で読む場合は必ずtrueにする。そうしないと、firefoxで差分だけの読み上げになってしまう(ほんとうはこっちの挙動が正しいのだけれど、chromeはaria-atomicを無視するので、互換性的に差分読み上げは使わない)
    // aria-liveで自動的にスクリーンリーダーが読むようにしたいが、aria-liveな要素の挿入と同時にコンテンツを入れるとNVDAでは読み上げてくれない
    // そこで最初のレンダリング時のみ 100ms ディレイさせて中に入れてやることで、無理矢理読ませている
    var _a = React.useState(true), isInitialRender = _a[0], setInitialRender = _a[1];
    React.useEffect(function () {
        if (autoRead && isInitialRender) {
            var timeoutId_1 = setTimeout(function () { return setInitialRender(false); }, 100);
            return function () {
                clearTimeout(timeoutId_1);
            };
        }
    }, [autoRead, isInitialRender]);
    return (React.createElement(VisuallyHiddenStyle, __assign({}, pickCommonProps(props), { id: id, "aria-live": live, "aria-atomic": atomic }), isInitialRender && autoRead ? false : children));
};
export default VisuallyHidden;
var templateObject_1;
//# sourceMappingURL=VisuallyHidden.js.map