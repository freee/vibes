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
import useUniqueId from '../hooks/useUniqueId';
import { usePortalParentContext } from '../utilities/VibesProvider';
var overlayStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
};
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
var Dialog = function (props) {
    var id = props.id, alertDialog = props.alertDialog, render = props.render, isOpen = props.isOpen, onRequestClose = props.onRequestClose, shouldCloseOnOverlayClickOrEsc = props.shouldCloseOnOverlayClickOrEsc, elementFocusAfterClose = props.elementFocusAfterClose, contentRef = props.contentRef;
    var uniqueId = useUniqueId('vb-Dialog', id);
    var portalParent = usePortalParentContext();
    var titleId = "".concat(uniqueId, "__title");
    return (React.createElement(Modal, { isOpen: isOpen, onRequestClose: onRequestClose, onAfterClose: function () {
            if (elementFocusAfterClose) {
                elementFocusAfterClose.focus();
            }
        }, style: {
            overlay: __assign(__assign({}, overlayStyle), { 
                // $vbMessageModalZIndex もしくは $vbModalZIndex
                zIndex: alertDialog ? 1500 - 1 : 1000 - 1 }),
            content: contentStyle,
        }, contentLabel: props.contentLabel, ariaHideApp: false, aria: {
            labelledby: props.contentLabel ? undefined : titleId,
        }, shouldCloseOnOverlayClick: shouldCloseOnOverlayClickOrEsc, shouldCloseOnEsc: shouldCloseOnOverlayClickOrEsc, 
        // 閉じたときにフォーカスする要素が指定されている場合は、react-modalのフォーカスを戻す機構を使用しない
        shouldReturnFocusAfterClose: !elementFocusAfterClose, id: "".concat(uniqueId, "__screen"), bodyOpenClassName: "vb-ReactModal__Body--open", parentSelector: function () { return portalParent; }, contentRef: contentRef, closeTimeoutMS: 300 }, render({ id: uniqueId, titleId: titleId })));
};
export default Dialog;
//# sourceMappingURL=Dialog.js.map