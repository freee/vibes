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
import { CSSTransition } from 'react-transition-group';
import commonProps from '../../utilities/commonProps';
import ButtonGroup from '../buttonGroup/ButtonGroup';
import PopupBase from '../../lv1/bases/PopupBase';
import vbClassNames from '../../utilities/vbClassNames';
import { convertRemToPixel } from '../../utilities/convertRemToPixel';
var useSticky = function (position) {
    var _a = React.useState(false), sticked = _a[0], setSticked = _a[1];
    var ref = React.useRef(null);
    React.useEffect(function () {
        var el = ref.current;
        if (position !== 'sticky' || !el) {
            return;
        }
        var handleScroll = function () {
            var rect = el.getBoundingClientRect();
            // 固定配置する FormActions の表示を切り替えるスクロール位置を FormActions の高さと揃えるため 1rem 減算する（PopupBase の paddingSize 分）
            var sticked = window.innerHeight <= rect.top - convertRemToPixel(1);
            setSticked(sticked);
        };
        handleScroll();
        window.addEventListener('resize', handleScroll);
        window.addEventListener('scroll', handleScroll);
        return function () {
            window.removeEventListener('resize', handleScroll);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [position]);
    return { ref: ref, sticked: sticked };
};
var InnerFixedWrapper = function (_a, ref) {
    var children = _a.children, sticked = _a.sticked, sticky = _a.sticky;
    return sticky ? (React.createElement(CSSTransition, { classNames: "vb-formActions__animation", in: sticked, timeout: 300, mountOnEnter: true, unmountOnExit: true, nodeRef: ref }, children)) : (React.createElement(React.Fragment, null, children));
};
var FixedWrapper = React.forwardRef(InnerFixedWrapper);
var FormActions = function (props) {
    var _a, _b;
    var fixed = props.fixed, orgPosition = props.position, responsive = props.responsive, children = props.children, width = props.width;
    var position = orgPosition ? orgPosition : fixed ? 'fixed' : 'static';
    var _c = useSticky(position), staticRef = _c.ref, sticked = _c.sticked;
    var fixedRef = React.useRef(null);
    var hasFixedContent = position === 'fixed' || position === 'sticky';
    var hasStaticContent = position === 'static' || position === 'sticky';
    var hideStaticContent = position === 'sticky' && sticked;
    return (React.createElement(React.Fragment, null,
        hasFixedContent && (React.createElement(FixedWrapper, { ref: fixedRef, sticked: sticked, sticky: position === 'sticky' },
            React.createElement("div", __assign({}, commonProps(props, 'vb-formActions', {
                fixed: true,
                responsive: responsive,
            }), { ref: fixedRef }),
                React.createElement(PopupBase, { paddingSize: "small" },
                    React.createElement("div", { className: vbClassNames('vb-formActions__inner', {
                            modifier: {
                                widthNarrow: width === 'narrow',
                                widthWide: width === 'wide',
                            },
                        }) },
                        React.createElement(ButtonGroup, { align: (_a = props.align) !== null && _a !== void 0 ? _a : 'center', responsive: responsive }, children)))))),
        hasStaticContent && (React.createElement("div", __assign({}, commonProps(props, 'vb-formActions', {
            responsive: responsive,
        }), { ref: staticRef, style: hideStaticContent ? { visibility: 'hidden' } : undefined }),
            React.createElement(ButtonGroup, { align: (_b = props.align) !== null && _b !== void 0 ? _b : 'left', responsive: responsive }, children)))));
};
export default FormActions;
//# sourceMappingURL=FormActions.js.map