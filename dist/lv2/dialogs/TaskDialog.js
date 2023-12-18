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
import PageTitle from '../../lv1/typography/PageTitle';
import Button from '../../lv1/buttons/Button';
import DialogBase from '../../lv1/bases/DialogBase';
import DialogFooter from './parts/DialogFooter';
import commonProps from '../../utilities/commonProps';
import Dialog from '../../utilities/Dialog';
import { useResponsive } from '../../utilities/VibesProvider';
import { WithSideContent } from '../..';
export var TaskDialogContent = function (props) {
    var id = props.id, titleId = props.titleId, title = props.title, children = props.children, onRequestClose = props.onRequestClose, onPrimaryAction = props.onPrimaryAction, primaryButtonLabel = props.primaryButtonLabel, closeButtonLabel = props.closeButtonLabel, disabled = props.disabled, suspend = props.suspend, danger = props.danger, headerSideContent = props.headerSideContent, footerOptionalContent = props.footerOptionalContent, footerSideContent = props.footerSideContent, mobileButtonLayout = props.mobileButtonLayout;
    var baseClassName = 'vb-taskDialog';
    var responsive = useResponsive(props.responsive);
    return (React.createElement("div", __assign({}, commonProps(props, baseClassName, { responsive: responsive }), { id: id }),
        React.createElement(DialogBase, { paddingSize: "zero" },
            React.createElement("div", { className: "".concat(baseClassName, "__inner") },
                React.createElement("div", { className: "".concat(baseClassName, "__flex") },
                    React.createElement("div", { className: "".concat(baseClassName, "__header") }, headerSideContent ? (React.createElement(WithSideContent, { sideContent: headerSideContent },
                        React.createElement(PageTitle, { id: titleId }, title))) : (React.createElement(PageTitle, { id: titleId }, title))),
                    React.createElement("div", { className: "".concat(baseClassName, "__body"), tabIndex: 0 }, children),
                    React.createElement("div", { className: "".concat(baseClassName, "__footer") },
                        React.createElement(DialogFooter, { responsive: responsive, sideContent: footerSideContent && footerSideContent, mobileButtonLayout: mobileButtonLayout },
                            primaryButtonLabel && onPrimaryAction && (React.createElement(Button, { onClick: onPrimaryAction, disabled: !!disabled || !!suspend, primary: !danger, danger: !!danger, hasMinWidth: true }, primaryButtonLabel)),
                            React.createElement(Button, { hasMinWidth: true, onClick: onRequestClose, disabled: !!disabled }, closeButtonLabel),
                            footerOptionalContent && footerOptionalContent)))))));
};
/**
 * 内部にフォームなどの複雑で大きなコンテンツを配置する場合に使用します。コンテンツ部分は大きくなるとスクロールします。
 *
 * - `isOpen` propで開閉します
 * - 表示するコンテンツが多く、入り切らない場合は `FullScreenModal` の使用を検討してください。
 *
 * ## accessibility
 * dialogが閉じた際、dialogが開く直前にフォーカスしていた要素（多くの場合はdialogを開かせたボタン）に戻るようになっています。
 *
 * ただし、UIの状態の変化等の理由でdialogが開く直前にフォーカスしていた要素に戻れない場合は、戻り先として適切な任意の要素を指定するようにしてください。(`elementFocusAfterClose`を使って指定できます)
 *
 */
var TaskDialog = function (props) { return (React.createElement(Dialog, { id: props.id, alertDialog: false, shouldCloseOnOverlayClickOrEsc: !!props.shouldCloseOnOverlayClickOrEsc, isOpen: props.isOpen, onRequestClose: props.onRequestClose, contentLabel: props.contentLabel, contentRef: props.contentRef, elementFocusAfterClose: props.elementFocusAfterClose, render: function (p) { return React.createElement(TaskDialogContent, __assign({}, props, p)); } })); };
export default TaskDialog;
//# sourceMappingURL=TaskDialog.js.map