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
var ZebraBase = function (props) {
    var children = props.children, marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize, paddingSize = props.paddingSize;
    return (React.createElement("div", __assign({}, commonProps(props, 'vb-zebraBase', {
        paddingSmall: paddingSize === 'small',
        paddingLarge: paddingSize === 'large',
        paddingZero: paddingSize === 'zero',
        // レスポンシブなpaddingの変更は、paddingSizeが無指定の場合のみ行う
        paddingResponsive: useResponsive() && !paddingSize,
    }, { marginTop: marginTop, marginBottom: marginBottom, marginLeft: marginLeft, marginRight: marginRight, marginSize: marginSize })), children));
};
export default ZebraBase;
//# sourceMappingURL=ZebraBase.js.map