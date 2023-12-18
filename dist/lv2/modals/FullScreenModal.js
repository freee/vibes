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
import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';
import commonProps from '../../utilities/commonProps';
import useUniqueId from '../../hooks/useUniqueId';
import { IconOnlyButton, PageTitle, WithSideContent } from '../../';
import { usePortalParentContext } from '../../utilities/VibesProvider';
var contentStyle = {
    alignSelf: 'center',
    position: 'static',
    background: 'transparent',
    borderRadius: 0,
    border: 0,
    top: 'auto',
    left: 'auto',
    right: 'auto',
    bottom: 'auto',
    padding: 0,
    margin: 'auto',
};
var FullScreenModalContent = function (props) {
    var id = props.id, titleId = props.titleId, title = props.title, children = props.children, onRequestClose = props.onRequestClose, disabled = props.disabled, headerSideContent = props.headerSideContent;
    var baseClassName = 'vb-fullScreenModal';
    var headerRef = React.useRef(null);
    var _a = React.useState('85px'), headerHeight = _a[0], setHeaderHeight = _a[1];
    var adjustBodyHeight = function () {
        if (headerRef.current) {
            setHeaderHeight("".concat(headerRef.current.offsetHeight, "px"));
        }
    };
    React.useLayoutEffect(function () {
        adjustBodyHeight();
    }, []);
    return (React.createElement("div", __assign({}, commonProps(props, baseClassName), { id: id }),
        React.createElement("div", { className: "".concat(baseClassName, "__inner") },
            React.createElement("div", { className: "".concat(baseClassName, "__header"), ref: headerRef },
                React.createElement(IconOnlyButton, { IconComponent: MdClose, label: '閉じる', appearance: "tertiary", onClick: onRequestClose, disabled: !!disabled, mr: 1 }),
                React.createElement("div", { className: "".concat(baseClassName, "__headerInnerContent") }, headerSideContent ? (React.createElement(WithSideContent, { sideContent: headerSideContent },
                    React.createElement(PageTitle, { id: titleId }, title))) : (React.createElement(PageTitle, { id: titleId }, title)))),
            React.createElement("div", { className: "".concat(baseClassName, "__body"), 
                // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
                tabIndex: 0, style: {
                    // header の高さと、body に設定された上下の padding の合計を除いた値を minHeight に設定する
                    minHeight: "calc(100vh - ".concat(headerHeight, " - 3rem)"),
                } }, children))));
};
/**
 * TaskDialogに収まりきらないような大きくて複雑なコンテンツをモーダル上に配置したい時に使用します。
 * コンテンツ部分は大きくなるとスクロールします。
 *
 * - `isOpen` propで開閉します
 */
var FullScreenModal = function (props) {
    var uniqueId = useUniqueId('vb-Modal', props.id);
    var portalParent = usePortalParentContext();
    var titleId = "".concat(uniqueId, "__title");
    return (React.createElement(Modal, __assign({}, props, { style: {
            overlay: {
                display: 'flex',
                // $vbModalZIndex
                zIndex: 1000 - 1,
            },
            content: contentStyle,
        }, ariaHideApp: false, aria: {
            modal: true,
            labelledby: !props.contentLabel ? titleId : undefined,
        }, shouldCloseOnEsc: !!props.shouldCloseOnEsc, id: "".concat(uniqueId, "__screen"), bodyOpenClassName: "vb-ReactModal__Body--open", parentSelector: function () { return portalParent; }, closeTimeoutMS: 300 }),
        React.createElement(FullScreenModalContent, __assign({}, props, { id: uniqueId, titleId: titleId }))));
};
export default FullScreenModal;
//# sourceMappingURL=FullScreenModal.js.map