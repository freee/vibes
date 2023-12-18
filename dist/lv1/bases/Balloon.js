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
 * バルーンはツールチップやシステムメッセージなどに利用できます
 */
export var BalloonInternal = function (props, ref) {
    var children = props.children, small = props.small, marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, border = props.border, position = props.position, verticalPosition = props.verticalPosition, marginSize = props.marginSize;
    var classModifiers = {
        small: small,
        'border-default': border === 'default',
        'border-alert': border === 'alert',
        'border-notice': border === 'notice',
        'border-success': border === 'success',
        left: position === 'left',
        right: position === 'right',
        top: verticalPosition === 'top',
        bottom: verticalPosition === 'bottom',
    };
    return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    React.createElement("div", __assign({}, commonProps(props, 'vb-balloon', classModifiers, {
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginSize: marginSize,
        marginTop: marginTop,
    }), { 
        // フォーカスを受けられるようにtabIndex=-1にしているが、クリック時にフォーカスしてしまうため、mousedownを抑止する
        onMouseDown: function (e) { return e.preventDefault(); }, tabIndex: -1, ref: ref }), children));
};
var Balloon = React.forwardRef(BalloonInternal);
export default Balloon;
//# sourceMappingURL=Balloon.js.map