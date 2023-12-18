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
 * モーダルウィンドウに使用するコンポーネントです。
 *
 * - **z-indexが指定されているため注意が必要です**
 * - `CardBase` や `PopupBase` との混同に注意してください。
 *   - ポップアップコンテンツ（ドロップダウンメニューやコンボボックス等）に使用するべきなのは `PopupBase` です
 *   - 作ろうとしているものがモーダルダイアログでも、ポップアップコンテンツでもない場合は、`CardBase` を使用してください
 */
var DialogBase = function (props) {
    var children = props.children, small = props.small, message = props.message, marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize, border = props.border, inline = props.inline, paddingSize = props.paddingSize;
    var baseClass = 'vb-dialogBase';
    var classModifiers = {
        inline: inline,
        message: message,
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
export default DialogBase;
//# sourceMappingURL=DialogBase.js.map