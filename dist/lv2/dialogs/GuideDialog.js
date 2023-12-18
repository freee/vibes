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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import { MdClose } from 'react-icons/md';
import Button from '../../lv1/buttons/Button';
import MarginBase from '../../lv1/bases/MarginBase';
import PageTitle from '../../lv1/typography/PageTitle';
import IconOnlyButton from '../../lv1/buttons/IconOnlyButton';
import DialogBase from '../../lv1/bases/DialogBase';
import Dialog from '../../utilities/Dialog';
import commonProps from '../../utilities/commonProps';
import GuideStepCount from './parts/GuideStepCount';
export var GuideDialogContent = function (_a) {
    var id = _a.id, titleId = _a.titleId, title = _a.title, type = _a.type, children = _a.children, stepCount = _a.stepCount, totalStepCount = _a.totalStepCount, onRequestBackward = _a.onRequestBackward, backwardButtonLabel = _a.backwardButtonLabel, onRequestForward = _a.onRequestForward, forwardButtonLabel = _a.forwardButtonLabel, onRequestClose = _a.onRequestClose, closeButtonLabel = _a.closeButtonLabel, image = _a.image, props = __rest(_a, ["id", "titleId", "title", "type", "children", "stepCount", "totalStepCount", "onRequestBackward", "backwardButtonLabel", "onRequestForward", "forwardButtonLabel", "onRequestClose", "closeButtonLabel", "image"]);
    return (React.createElement("div", __assign({}, commonProps(props, 'vb-guideDialog', { responsive: true }), { id: id }),
        React.createElement(DialogBase, { message: true },
            React.createElement("div", { className: "vb-guideDialog__inner" },
                React.createElement("div", { className: "vb-guideDialog__closeButtonBlock" },
                    React.createElement(IconOnlyButton, { appearance: "tertiary", IconComponent: MdClose, label: "\u9589\u3058\u308B", onClick: onRequestClose, mt: -0.5, mr: -0.5 })),
                React.createElement("div", { className: 'vb-guideDialog__body', 
                    // 表示領域が足りないときにスクロールするので、tabIndexをつける（キーボードでスクロールできるようになる）
                    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
                    tabIndex: 0 },
                    image && (React.createElement("img", { className: "vb-guideDialog__image", src: image.src, alt: image.alt, style: {
                            width: image.width,
                            height: image.height,
                        } })),
                    React.createElement(PageTitle, { mb: 1.5, id: titleId }, title),
                    children),
                type === 'start' ? (React.createElement(React.Fragment, null,
                    onRequestForward && (React.createElement(MarginBase, { mt: 1 },
                        React.createElement(Button, { hasMinWidth: true, appearance: "primary", onClick: onRequestForward }, forwardButtonLabel || '次へ'))),
                    React.createElement(MarginBase, { mt: 1 },
                        React.createElement(Button, { onClick: onRequestClose }, closeButtonLabel)))) : (React.createElement(React.Fragment, null,
                    stepCount && totalStepCount && totalStepCount > 1 && (React.createElement(GuideStepCount, { stepCount: stepCount, totalStepCount: totalStepCount, mt: 1 })),
                    React.createElement("div", { className: "vb-guideDialog__buttonBlock" },
                        React.createElement(MarginBase, { mt: 1 }, onRequestBackward && (React.createElement(Button, { hasMinWidth: true, onClick: onRequestBackward }, backwardButtonLabel || '戻る'))),
                        React.createElement(MarginBase, { mt: 1 }, onRequestForward ? (React.createElement(Button, { hasMinWidth: true, appearance: "primary", onClick: onRequestForward }, forwardButtonLabel || '次へ')) : (React.createElement(Button, { hasMinWidth: true, appearance: "primary", onClick: onRequestClose }, closeButtonLabel || '閉じる'))))))))));
};
/**
 * チュートリアルなどのガイドで使用します。
 *
 * - `isOpen` propで開閉します
 *
 * ## accessibility
 * dialogが閉じた際、dialogが開く直前にフォーカスしていた要素（多くの場合はdialogを開かせたボタン）に戻るようになっています。
 *
 * ただし、UIの状態の変化等の理由でdialogが開く直前にフォーカスしていた要素に戻れない場合は、戻り先として適切な任意の要素を指定するようにしてください。(`elementFocusAfterClose`を使って指定できます)
 *
 */
var GuideDialog = function (props) { return (React.createElement(Dialog, { id: props.id, alertDialog: true, contentRef: props.contentRef, shouldCloseOnOverlayClickOrEsc: true, isOpen: props.isOpen, onRequestClose: props.onRequestClose, elementFocusAfterClose: props.elementFocusAfterClose, render: function (p) { return React.createElement(GuideDialogContent, __assign({}, props, p)); } })); };
export default GuideDialog;
//# sourceMappingURL=GuideDialog.js.map