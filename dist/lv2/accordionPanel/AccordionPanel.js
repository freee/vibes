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
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import { Keys } from '../../utilities/keyboard';
import useUniqueId from '../../hooks/useUniqueId';
import commonProps from '../../utilities/commonProps';
import AnimateHeight from 'react-animate-height';
import { useLang, useResponsive } from '../../utilities/VibesProvider';
import vbClassNames from '../../utilities/vbClassNames';
var AccordionPanel = function (props) {
    var title = props.title, children = props.children, open = props.open, border = props.border, small = props.small, onClick = props.onClick, marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize;
    var baseClass = 'vb-accordionPanel';
    var uid = useUniqueId(baseClass);
    var Icon = open ? MdExpandLess : MdExpandMore;
    var lang = useLang();
    return (React.createElement("div", __assign({}, commonProps(props, baseClass, {
        open: open,
        borderBoth: border === 'both',
        borderBottom: border === 'bottom',
        borderTop: border === 'top',
        small: small,
        close: !open,
    }, { marginTop: marginTop, marginLeft: marginLeft, marginRight: marginRight, marginBottom: marginBottom, marginSize: marginSize })),
        React.createElement("div", { className: vbClassNames("".concat(baseClass, "__title"), {
                modifier: { responsive: useResponsive() },
            }), "aria-controls": "".concat(uid, "__description"), "aria-expanded": open, tabIndex: 0, role: "button", onClick: onClick, onKeyDown: function (e) {
                if (e.key === Keys.SPACE || e.key === Keys.ENTER) {
                    e.preventDefault();
                    onClick();
                }
            } },
            title,
            React.createElement(Icon, { className: vbClassNames("".concat(baseClass, "__icon"), {
                    modifier: { responsive: useResponsive() },
                }), role: "img", "aria-label": lang === 'ja'
                    ? open
                        ? 'クリックで閉じる'
                        : 'クリックで開く'
                    : open
                        ? 'Click to close'
                        : 'Click to open' })),
        React.createElement(AnimateHeight, { duration: open ? 200 : 150, height: open ? 'auto' : 0, animateOpacity: true },
            React.createElement("div", { className: vbClassNames("".concat(baseClass, "__description"), {
                    modifier: { responsive: useResponsive() },
                }), id: "".concat(uid, "__description"), "aria-hidden": !open }, children))));
};
export default AccordionPanel;
//# sourceMappingURL=AccordionPanel.js.map