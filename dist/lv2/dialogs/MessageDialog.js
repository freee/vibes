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
import commonProps from '../../utilities/commonProps';
import Dialog from '../../utilities/Dialog';
import { useResponsive } from '../../utilities/VibesProvider';
/**
 * Storybookの都合でDocsに表示されていませんが、 `isOpen` propで開閉します
 */
export var MessageDialogContent = function (props) {
    var id = props.id, titleId = props.titleId, title = props.title, children = props.children, onRequestClose = props.onRequestClose, closeButtonLabel = props.closeButtonLabel, closeButtonAppearance = props.closeButtonAppearance, responsive = props.responsive, contentAlign = props.contentAlign;
    var baseClassName = 'vb-messageDialog';
    // 雑にに書いてますが、各パーツをコンポーネントとして切り出すリファクタをする際に直します。
    var alignLeftClass = contentAlign === 'left' ? 'vb-messageDialog__body--alignLeft' : '';
    return (React.createElement("div", __assign({}, commonProps(props, baseClassName, {
        responsive: useResponsive(responsive),
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
                    React.createElement(Button, { hasMinWidth: true, appearance: closeButtonAppearance, onClick: onRequestClose }, closeButtonLabel))))));
};
/**
 * 確認に用いる閉じるボタンのみのダイアログです
 *
 * - 確認はなるべく短いメッセージにしましょう。（データの内容を表示するなど表示領域が必要な場合は、横幅は70remまで伸び縦にはスクロールが起こります）
 * - 選択肢が1つしかないため、Escキー押下またはモーダル領域外のクリックで閉じられます
 *
 * ## accessibility
 * dialogが閉じた際、dialogが開く直前にフォーカスしていた要素（多くの場合はdialogを開かせたボタン）に戻るようになっています。
 *
 * ただし、UIの状態の変化等の理由でdialogが開く直前にフォーカスしていた要素に戻れない場合は、戻り先として適切な任意の要素を指定するようにしてください。(`elementFocusAfterClose`を使って指定できます)
 */
var MessageDialog = function (props) { return (React.createElement(Dialog, { id: props.id, alertDialog: true, contentRef: props.contentRef, shouldCloseOnOverlayClickOrEsc: true, isOpen: props.isOpen, onRequestClose: props.onRequestClose, elementFocusAfterClose: props.elementFocusAfterClose, render: function (p) { return React.createElement(MessageDialogContent, __assign({}, props, p)); } })); };
export default MessageDialog;
//# sourceMappingURL=MessageDialog.js.map