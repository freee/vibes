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
 * 他の headline の基底コンポーネント。vibes のコンポーネントとしては export していないので storybook も作成していない。
 */
function InternalHeadline(props, ref) {
    var children = props.children, className = props.className, id = props.id, inline = props.inline, textAlign = props.textAlign, headlineLevel = props.headlineLevel, marginTop = props.marginTop, marginRight = props.marginRight, marginLeft = props.marginLeft, marginBottom = props.marginBottom, marginSize = props.marginSize;
    var elementProps = __assign(__assign({}, commonProps(props, className, {
        inline: inline,
        responsive: useResponsive(),
        alignLeft: textAlign === 'left',
        alignRight: textAlign === 'right',
        alignCenter: textAlign === 'center',
    }, { marginTop: marginTop, marginRight: marginRight, marginLeft: marginLeft, marginBottom: marginBottom, marginSize: marginSize })), { id: id, ref: ref, tabIndex: -1 });
    switch (headlineLevel) {
        case 1:
            return React.createElement("h1", __assign({}, elementProps), children);
        case 2:
            return React.createElement("h2", __assign({}, elementProps), children);
        case 3:
            return React.createElement("h3", __assign({}, elementProps), children);
        case 4:
            return React.createElement("h4", __assign({}, elementProps), children);
        case 5:
            return React.createElement("h5", __assign({}, elementProps), children);
        case 6:
            return React.createElement("h6", __assign({}, elementProps), children);
        default:
            return React.createElement("span", __assign({}, elementProps), children);
    }
}
export default React.forwardRef(InternalHeadline);
//# sourceMappingURL=InternalHeadline.js.map