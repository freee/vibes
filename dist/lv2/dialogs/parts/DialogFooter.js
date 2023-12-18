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
import commonProps from '../../../utilities/commonProps';
import vbClassNames from '../../../utilities/vbClassNames';
import ButtonGroup from '../../buttonGroup/ButtonGroup';
/**
 * Dialogのfooterに「任意のコンポーネントを置く & レスポンシブ対応する」ためのパーツです。
 *
 * 「左寄せでボタン等を並べられる」かつ「任意で右寄せに何か置ける」を想定しています。
 *
 *  レスポンシブ時は、全てのパーツが中央寄せで、縦済みになります。
 */
var DialogFooter = function (props) {
    var children = props.children, sideContent = props.sideContent, responsive = props.responsive, mobileButtonLayout = props.mobileButtonLayout;
    var baseClassName = 'vb-DialogFooter';
    return (React.createElement("div", __assign({}, commonProps(props, baseClassName, { responsive: responsive })),
        React.createElement(ButtonGroup, { align: "left", responsive: responsive, mobileButtonLayout: mobileButtonLayout }, children),
        sideContent && (React.createElement("div", { className: vbClassNames("".concat(baseClassName, "__sideContent"), {
                modifier: { responsive: responsive },
            }) },
            React.createElement(ButtonGroup, { responsive: responsive }, sideContent)))));
};
export default DialogFooter;
//# sourceMappingURL=DialogFooter.js.map