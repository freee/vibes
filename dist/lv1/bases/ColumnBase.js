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
 * ColumnBaseは区切られたコンテンツを埋め込むための領域です。
 *
 * * `rounded` propによってColumnBaseに`border-radius`を指定できます
 *   * ColumnBaseの周囲に余白がある際は`rounded`propを使用することを推奨します
 *   * `border` propを使用する場合は周囲に余白があるはずなので、 `rounded` propを使用しなくても`border-radius`が指定されます
 */
var ColumnBase = function (props) {
    var children = props.children, small = props.small, rounded = props.rounded, marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize, border = props.border, inline = props.inline, _a = props.overflowHidden, overflowHidden = _a === void 0 ? true : _a, paddingSize = props.paddingSize;
    var classModifiers = {
        inline: inline,
        overflowHidden: overflowHidden,
        rounded: rounded || !!border,
        borderDefault: border === 'default',
        borderAlert: border === 'alert',
        borderNotice: border === 'notice',
        borderSuccess: border === 'success',
        paddingSmall: small || paddingSize === 'small',
        paddingLarge: paddingSize === 'large',
        paddingZero: paddingSize === 'zero',
        // レスポンシブなpaddingの変更は、inlineでなく、paddingSizeが無指定の場合のみ行う
        paddingResponsive: useResponsive() && !inline && !small && !paddingSize,
    };
    return (React.createElement("div", __assign({}, commonProps(props, 'vb-columnBase', classModifiers, {
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginSize: marginSize,
        marginTop: marginTop,
    })), children));
};
export default ColumnBase;
//# sourceMappingURL=ColumnBase.js.map