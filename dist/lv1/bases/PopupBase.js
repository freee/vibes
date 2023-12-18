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
 * ポップアップコンテンツ（ドロップダウンやコンボボックスの選択部分など）に使用するコンポーネントです。
 *
 * - **z-indexが指定されているため注意が必要です**
 * - z-index: 1000;
 *   - FloatingBase（z-index: 500) < DialogBase（z-index: 1000) < PopupBase（z-index: 2000) となります。
 *   - ポップアップからダイアログが出てくるようなコンポーネントはPopupBaseでは実現できないのでFloatingBaseを使用して下さい
 * - `CardBase` や `DialogBase` との混同に注意してください。
 *   - モーダルダイアログに使用するべきなのは `DialogBase` です
 *   - 作ろうとしているものがモーダルダイアログでも、ポップアップコンテンツでもない場合は、`CardBase` を使用してください
 */
var PopupBase = function (props) {
    var children = props.children, small = props.small, marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize, border = props.border, inline = props.inline, fitContent = props.fitContent, paddingSize = props.paddingSize;
    var baseClass = 'vb-popupBase';
    var classModifiers = {
        inline: inline,
        fitContent: fitContent,
        borderDefault: border === 'default',
        borderAlert: border === 'alert',
        borderNotice: border === 'notice',
        borderSuccess: border === 'success',
        paddingSmall: small || paddingSize === 'small',
        paddingLarge: paddingSize === 'large',
        paddingZero: paddingSize === 'zero',
    };
    return (React.createElement("div", __assign({}, commonProps(props, baseClass, classModifiers, {
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginSize: marginSize,
        marginTop: marginTop,
    })), children));
};
export default PopupBase;
//# sourceMappingURL=PopupBase.js.map