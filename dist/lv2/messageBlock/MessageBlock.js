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
import Button from '../../lv1/buttons/Button';
import { MdOpenInNew, MdError, MdWarning, MdCheckCircle, MdInfo, MdLightbulb, MdCardGiftcard, } from 'react-icons/md';
import { useResponsive } from '../../utilities/VibesProvider';
import vbClassNames from '../../utilities/vbClassNames';
var InternalMessage = function (props) {
    var children = props.children, error = props.error, notice = props.notice, success = props.success, assistance = props.assistance, discovery = props.discovery, explanatory = props.explanatory;
    return (React.createElement("div", { className: "vb-messageBlockInternalMessage" },
        React.createElement("div", { className: "vb-messageBlockInternalMessage__inner" },
            error ? (React.createElement(MdError, { className: "vb-messageBlockInternalMessage__icon vb-messageBlockInternalMessage__icon--alert" })) : notice ? (React.createElement(MdWarning, { className: "vb-messageBlockInternalMessage__icon vb-messageBlockInternalMessage__icon--notice" })) : success ? (React.createElement(MdCheckCircle, { className: "vb-messageBlockInternalMessage__icon vb-messageBlockInternalMessage__icon--success" })) : assistance ? (React.createElement(MdLightbulb, { className: "vb-messageBlockInternalMessage__icon vb-messageBlockInternalMessage__icon--assistance" })) : discovery ? (React.createElement(MdCardGiftcard, { className: "vb-messageBlockInternalMessage__icon vb-messageBlockInternalMessage__icon--discovery" })) : explanatory ? (React.createElement(MdInfo, { className: "vb-messageBlockInternalMessage__icon vb-messageBlockInternalMessage__icon--explanatory" })) : (React.createElement(MdInfo, { className: "vb-messageBlockInternalMessage__icon vb-messageBlockInternalMessage__icon--info" })),
            React.createElement("span", { className: "vb-messageBlockInternalMessage__content" }, children))));
};
/**
 * セクションメッセージまたはスクリーンメッセージとして使用するコンポーネントです。
 * ただしスクリーンメッセージに関しては `FloatingMessageBlock` を使用してください（このコンポーネントを内包しています）
 *
 * - 画面の大きな部分（セクション）に関するメッセージを表示します
 *   - エラーメッセージに使用する場合には、このコンポーネントではエラーの概要を表示するに留め、
 *     エラーの発生箇所の近くにインラインメッセージとして `Message` コンポーネントを配置して、詳細を伝えてください
 * - 右側にはメッセージの詳細リンクを配置できます。`linkTarget` を `"_blank"` にした場合には OpenInNew アイコンが表示されます。
 * - メッセージを非表示にできるようにする場合は、 `onRequestClose` を渡して「閉じる」ボタンを表示してください
 *
 */
var MessageBlock = function (props) {
    var children = props.children, message = props.message, assistance = props.assistance, discovery = props.discovery, explanatory = props.explanatory, linkTitle = props.linkTitle, linkUrl = props.linkUrl, linkTarget = props.linkTarget, linkRel = props.linkRel, onLinkClick = props.onLinkClick, onRequestClose = props.onRequestClose, hover = props.hover, onSelfWindowNavigation = props.onSelfWindowNavigation;
    var error = props.error, notice = props.notice, success = props.success;
    var marginTop = props.marginTop, marginBottom = props.marginBottom, marginLeft = props.marginLeft, marginRight = props.marginRight, marginSize = props.marginSize;
    var responsive = useResponsive();
    return (React.createElement("div", __assign({}, commonProps(props, 'vb-messageBlock', { responsive: responsive, hover: hover }, {
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginSize: marginSize,
        marginTop: marginTop,
    })),
        React.createElement("div", { className: vbClassNames('vb-messageBlock__inner', {
                modifier: {
                    responsive: responsive,
                    success: success,
                    alert: error,
                    notice: notice,
                    assistance: assistance,
                    discovery: discovery,
                },
            }) },
            React.createElement("div", { className: "vb-messageBlock__message" },
                React.createElement(InternalMessage, { error: error, notice: notice, success: success, assistance: assistance, discovery: discovery, explanatory: explanatory }, children || message)),
            ((linkTitle && (linkUrl || onLinkClick || onSelfWindowNavigation)) ||
                onRequestClose) && (React.createElement("div", { className: vbClassNames('vb-messageBlock__buttons', {
                    modifier: { responsive: responsive },
                }) },
                linkTitle && (linkUrl || onLinkClick || onSelfWindowNavigation) && (React.createElement(Button, { appearance: "tertiary", href: linkUrl, onClick: onLinkClick, target: linkTarget, rel: linkRel, IconComponent: linkTarget === '_blank' ? MdOpenInNew : undefined, iconPosition: "right", ml: 0.5, onSelfWindowNavigation: onSelfWindowNavigation }, linkTitle)),
                onRequestClose && (React.createElement(Button, { onClick: onRequestClose, appearance: "tertiary", ml: 0.5 }, "\u9589\u3058\u308B")))))));
};
export default MessageBlock;
//# sourceMappingURL=MessageBlock.js.map