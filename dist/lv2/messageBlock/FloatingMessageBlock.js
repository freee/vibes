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
import MessageBlock from './MessageBlock';
import commonProps from '../../utilities/commonProps';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import VisuallyHidden from '../../lv1/a11y/VisuallyHidden';
import { usePortalParentContext } from '../../utilities/VibesProvider';
var HIDE_TIMEOUT_SEC = 6;
var portalEl;
var getPortalEl = function (portalParent) {
    if (!portalEl) {
        portalEl = document.createElement('div');
        portalEl.setAttribute('class', 'vb-floatingMessageBlockPortal');
        portalParent.appendChild(portalEl);
    }
    return portalEl;
};
/**
 * 画面上部にフロート表示するメッセージ。スクリーンメッセージとして、ユーザーが見ている画面全体に関わるメッセージを表示するために使用してください。
 *
 * - 「エラーが起きた」「送信に成功した」など、短くて画面全体に関わるメッセージを伝えるのに使用してください。
 * - あくまで「ユーザーがフィードバックを見落とさないようにする」のを目的として使用してください。
 *   - 「○○は半角で入力してください」のようなエラーの詳細は、このコンポーネントとは別に、画面レイアウト内で表示してください。
 * - `success` のメッセージは、ユーザーが行った操作の結果が永続化される（そのまま離脱しても結果が残る）場合に使用してください。
 *   - 登録フォームを送信してその結果が保存されたときなどに使うことを想定しています。
 *   - たとえば「登録フォーム内にある `入力欄を追加する` ボタンを押して入力欄を追加した」といった操作に対しては、まだそのフォームを送信しておらず内容が永続化されていないので、`FloatingMessageBlock` を使わないでください。
 *     - `FloatingMessageBlock` が表示されることで「入力内容が送信されて確定した」とユーザーが誤解するのを防ぐためです。
 *     - そういった「操作結果が永続化されない」操作に対しては、明示的に完了メッセージを出すというよりも、トランジションなどによってフィードバックを返すことを検討してください。
 *   - 「操作結果が永続化されない」操作が失敗し、それを何らかの方法で伝えなければならない場合は `error` の `FloatingMessageBlock` を使用できます。
 * - `success` `info` タイプのメッセージは一定時間経過後に非表示となります。 `error` `notice` に関しては自動的には消えません。
 * - **基本的には同時に複数のメッセージを出す使い方は想定していませんが** 、連続した操作のフィードバックなどの際には配列に入れて表示するようにしたほうが、 `aria-live` での読み上げが正しくなる可能性が高まります。
 * - 表示されるメッセージはPortalで `<body>` 要素の最後部に挿入されます。React上の挿入箇所には、`VisuallyHidden` による非表示メッセージが配置されます。
 *
 * ## accessibility
 * **FloatingMessageBlockが表示された際、スクリーンリーダーは`aria-live`により`message`の内容を読み上げますが、MessageTypeによって読み上げられる挙動は異なります。**
 *
 * errorの場合は必ず読み上げられ、他のタイプでは読み上げを妨げるものがない場合に読み上げられます。
 * (errorではaria-live="assertive"、それ以外はaria-live="polite"となるため上記の挙動の違いが起こります）
 * a11yチェックで読み上げを確認する際は、上記の仕様を考慮して判定ください。
 * 例えば、成功のときは aria-live="polite" なので読み上げられない場合がありますが、dialogを閉じたことによるフォーカス移動などで何が起きているのかを把握できるときは自動的に読み上げられなくても構いません。
 *
 * **FloatingMessageBlockにキーボードによるフォーカスやスクリーンリーダーのカーソルを移動させるのは困難です**
 *
 * そのため、置いているメッセージやリンクが見逃されたり、スクリーンリーダーのカーソルで到達できなかったとしても問題のない状況であることが望ましいです。
 * 言い換えると、FloatingMessageBlockのメッセージやリンクが唯一の動線とならないようにユーザーの操作しやすい場所にも配置をしたり、操作対象（フォームやオブジェクト等）のUIの状態変化からユーザーが理解可能である必要があります。
 */
var FloatingMessageBlock = function (props) {
    var children = props.children, message = props.message, linkTitle = props.linkTitle, linkUrl = props.linkUrl, linkTarget = props.linkTarget, linkRel = props.linkRel, info = props.info, notice = props.notice, error = props.error, success = props.success, onClose = props.onClose, onLinkClick = props.onLinkClick, onSelfWindowNavigation = props.onSelfWindowNavigation;
    var _a = React.useState(false), showing = _a[0], setShowing = _a[1];
    var _b = React.useState(false), hovered = _b[0], setHovered = _b[1];
    var _c = React.useState(), hoverTimeoutId = _c[0], setHoverTimeoutId = _c[1];
    var tmpWrapperRef = React.useRef(null);
    var wrapperRef = props.wrapperRef || tmpWrapperRef;
    var _d = React.useState(false), focused = _d[0], setFocused = _d[1];
    var _e = React.useState(), focusTimeoutId = _e[0], setFocusTimeoutId = _e[1];
    var portalParent = usePortalParentContext();
    // errorかnoitice以外は一定時間経過後に非表示
    var autoHide = !error && !notice;
    React.useEffect(function () {
        // メッセージが変わったら表示する
        // アニメーションさせるためにmount時にfalseにしておき、mountedでtrueにしたいのだが、
        // storyshotsがエラーになる関係でsetTimeoutを噛ませている
        setTimeout(function () { return setShowing(true); });
        if (autoHide) {
            var timeoutId_1 = window.setTimeout(function () {
                setShowing(false);
                if (onClose) {
                    onClose(true);
                }
            }, HIDE_TIMEOUT_SEC * 1000);
            return function () { return clearTimeout(timeoutId_1); };
        }
    }, [autoHide, info, error, notice, success, message, onClose]);
    // mouseEnterしたら一定時間表示しつづける
    var onMouseEnter = function () {
        setHovered(true);
        if (hoverTimeoutId) {
            window.clearTimeout(hoverTimeoutId);
            setHoverTimeoutId(null);
        }
    };
    var onMouseLeave = function () {
        if (!hoverTimeoutId) {
            setHoverTimeoutId(window.setTimeout(function () {
                setHovered(false);
            }, HIDE_TIMEOUT_SEC * 1000));
        }
    };
    // focusしたら一定時間表示しつづける
    var onFocusEvent = function () {
        var acticveElement = document.activeElement;
        if (wrapperRef.current &&
            acticveElement &&
            wrapperRef.current.contains(acticveElement)) {
            setFocused(true);
            if (focusTimeoutId) {
                clearTimeout(focusTimeoutId);
                setFocusTimeoutId(null);
            }
        }
        else if (!focusTimeoutId) {
            setFocusTimeoutId(window.setTimeout(function () {
                setFocused(false);
            }, HIDE_TIMEOUT_SEC * 1000));
        }
    };
    // 閉じるをクリックしたら全てのフラグを折る
    var onRequestClose = function () {
        setShowing(false);
        setHovered(false);
        setFocused(false);
        if (onClose) {
            onClose(false);
        }
    };
    // 自動的に消えるタイプの場合はマウスホバーしている・フォーカスしている場合は消えないようにする
    var visible = showing || (autoHide && (hovered || focused));
    return (React.createElement(React.Fragment, null,
        React.createElement(VisuallyHidden, { autoRead: true, assertive: error }, children || message),
        ReactDOM.createPortal(React.createElement(CSSTransition, { in: visible, classNames: "vb-floatingMessageBlock__animation", timeout: { enter: 500, exit: 500 }, unmountOnExit: true, 
            // StrictModeで、"Warning: findDOMNode is deprecated in StrictMode."が出ないように
            // [FYI] https://github.com/reactjs/react-transition-group/issues/668#issuecomment-695162879
            nodeRef: wrapperRef },
            React.createElement("div", __assign({}, commonProps(props, 'vb-floatingMessageBlock'), { ref: wrapperRef, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, onFocus: onFocusEvent, onBlur: onFocusEvent }),
                React.createElement(MessageBlock, { linkTitle: linkTitle, linkUrl: linkUrl, linkTarget: linkTarget, linkRel: linkRel, onLinkClick: onLinkClick, onRequestClose: onRequestClose, onSelfWindowNavigation: onSelfWindowNavigation, info: info, notice: notice, error: error, success: success, mb: 1.5 }, children || message))), getPortalEl(portalParent))));
};
export default FloatingMessageBlock;
//# sourceMappingURL=FloatingMessageBlock.js.map