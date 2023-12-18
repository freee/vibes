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
import Dialog from '../../utilities/Dialog';
import DialogBase from '../../lv1/bases/DialogBase';
import ButtonGroup from '../buttonGroup/ButtonGroup';
import commonProps from '../../utilities/commonProps';
import { useResponsive } from '../../utilities/VibesProvider';
export var MessageDialogConfirmContent = function (props) {
    var id = props.id, titleId = props.titleId, title = props.title, children = props.children, onRequestClose = props.onRequestClose, onConfirm = props.onConfirm, confirmButtonLabel = props.confirmButtonLabel, confirmButtonHref = props.confirmButtonHref, confirmButtonTarget = props.confirmButtonTarget, confirmButtonIconPosition = props.confirmButtonIconPosition, confirmButtonIconComponent = props.confirmButtonIconComponent, closeButtonLabel = props.closeButtonLabel, disabled = props.disabled, suspend = props.suspend, danger = props.danger, contentAlign = props.contentAlign, mobileButtonLayout = props.mobileButtonLayout;
    var baseClassName = 'vb-messageDialog';
    // 雑にに書いてますが、各パーツをコンポーネントとして切り出すリファクタをする際に直します。
    var alignLeftClass = contentAlign === 'left' ? 'vb-messageDialog__body--alignLeft' : '';
    var responsive = useResponsive(props.responsive);
    return (React.createElement("div", __assign({}, commonProps(props, baseClassName, {
        responsive: responsive,
    }), { id: id }),
        React.createElement(DialogBase, { message: true, paddingSize: "zero" },
            React.createElement("div", { className: "".concat(baseClassName, "__inner") },
                React.createElement("div", { className: "".concat(baseClassName, "__header") },
                    React.createElement(PageTitle, { id: titleId }, title)),
                React.createElement("div", { className: "".concat(baseClassName, "__body ").concat(alignLeftClass), 
                    // 表示領域が足りないときにスクロールするので、tabIndexをつける（キーボードでスクロールできるようになる）
                    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
                    tabIndex: 0 }, children),
                React.createElement("div", { className: "".concat(baseClassName, "__footer") },
                    React.createElement(ButtonGroup, { responsive: responsive, mobileButtonLayout: mobileButtonLayout },
                        React.createElement(Button, { onClick: onConfirm, disabled: !!disabled || !!suspend, primary: !danger, danger: !!danger, href: confirmButtonHref, target: confirmButtonTarget, iconPosition: confirmButtonIconPosition, IconComponent: confirmButtonIconComponent, hasMinWidth: true }, confirmButtonLabel),
                        React.createElement(Button, { hasMinWidth: true, onClick: onRequestClose, disabled: !!disabled }, closeButtonLabel)))))));
};
/**
 * 操作（タスク）の確認に用いるダイアログです
 *
 * - 確認が必要となる操作の例には、削除などの不可逆的な操作や支払いなど金銭が絡むなど操作が間違うとリスクを生む場合が当てはまります。
 * - 原則として確認はなるべく、短い質問で2択で答えるようにしましょう。（データの内容を表示するなど表示領域が必要な場合は、横幅は70remまで伸び縦にはスクロールが起こります）
 * - モーダルで行う必要のあるタスク自体には `TaskDialog` を使用してください
 * - TaskDialogよりも上に表示されるので、TaskDialogでの操作に対する確認としても使えます。
 *
 * ## accessibility
 * dialogが閉じた際、dialogが開く直前にフォーカスしていた要素（多くの場合はdialogを開かせたボタン）に戻るようになっています。
 *
 * ただし、UIの状態の変化等の理由でdialogが開く直前にフォーカスしていた要素に戻れない場合は、戻り先として適切な任意の要素を指定するようにしてください。(`elementFocusAfterClose`を使って指定できます)
 *
 */
var MessageDialogConfirm = function (props) { return (React.createElement(Dialog, { id: props.id, alertDialog: true, contentRef: props.contentRef, shouldCloseOnOverlayClickOrEsc: false, isOpen: props.isOpen, onRequestClose: props.onRequestClose, elementFocusAfterClose: props.elementFocusAfterClose, render: function (p) { return React.createElement(MessageDialogConfirmContent, __assign({}, props, p)); } })); };
export default MessageDialogConfirm;
//# sourceMappingURL=MessageDialogConfirm.js.map