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
import { MdError, MdWarning, MdCheckCircle, MdHelp } from 'react-icons/md';
import Balloon from '../../lv1/bases/Balloon';
import { Keys } from '../../utilities/keyboard';
import VisuallyHidden from '../../lv1/a11y/VisuallyHidden';
import ScrollPortal from '../../utilities/ScrollPortal';
import commonProps from '../../utilities/commonProps';
import { useBalloon } from '../withBalloon/useBalloon';
import MessageDialog from '../dialogs/MessageDialog';
import { MobileBoundaryWidth } from '../../constants';
/**
 * アイコンからバルーンとしてメッセージを表示するコンポーネントです。
 *
 * アイコンと色は `label` `error` `notice` `success` から選べます（カスタマイズはできません）
 *
 * MobileBoundaryWidth以下の画面幅では、アイコンをクリックするとダイアログでメッセージを表示します。
 */
var MessageIcon = function (props) {
    var error = props.error, notice = props.notice, success = props.success, children = props.children, label = props.label, small = props.small, marginTop = props.marginTop, marginBottom = props.marginBottom, marginLeft = props.marginLeft, marginRight = props.marginRight, marginSize = props.marginSize;
    var _a = useBalloon(), balloonIsVisibleByHover = _a.balloonIsVisibleByHover, clearHoverFlags = _a.clearHoverFlags, handleTargetMouseEnter = _a.handleTargetMouseEnter, handleTargetMouseLeave = _a.handleTargetMouseLeave, handleBalloonMouseEnter = _a.handleBalloonMouseEnter, handleBalloonMouseLeave = _a.handleBalloonMouseLeave, position = _a.position, verticalPosition = _a.verticalPosition, adjustPosition = _a.adjustPosition, baseRef = _a.baseRef, balloonRef = _a.balloonRef;
    var _b = React.useState(false), clicked = _b[0], setClicked = _b[1];
    var balloonWrapperRef = React.useRef(null);
    var _c = React.useState(false), isOpenDialog = _c[0], setIsOpenDialog = _c[1];
    var isNarrowerThanMobileBoundery = function () {
        return window.matchMedia("(max-width: ".concat(MobileBoundaryWidth, ")")).matches;
    };
    React.useEffect(function () {
        if (clicked) {
            var closeMenu_1 = function () {
                setClicked(false);
            };
            // 開いた瞬間にwindowにイベントが伝播して閉じてしまうのを防ぐため、setTimeoutしてaddEventListenerを遅らせている
            window.setTimeout(function () { return window.addEventListener('click', closeMenu_1); });
            return function () { return window.removeEventListener('click', closeMenu_1); };
        }
    }, [clicked, setClicked]);
    React.useLayoutEffect(function () {
        if (clicked) {
            adjustPosition();
        }
    }, [adjustPosition, clicked]);
    var showBalloon = clicked || balloonIsVisibleByHover;
    var showMessage = isNarrowerThanMobileBoundery()
        ? isOpenDialog
        : showBalloon;
    return (React.createElement("span", __assign({}, commonProps(props, 'vb-messageIcon', { small: small }, { marginBottom: marginBottom, marginLeft: marginLeft, marginRight: marginRight, marginSize: marginSize, marginTop: marginTop })),
        "\u00A0",
        React.createElement("span", { className: "vb-messageIcon__control", tabIndex: 0, role: "button", "aria-label": "".concat(label || 'メッセージ', "\u3092").concat(showMessage ? '隠す' : '表示'), onClick: function () {
                if (isNarrowerThanMobileBoundery()) {
                    setIsOpenDialog(!isOpenDialog);
                }
                else {
                    /* バルーンが見えてる時にクリックした場合はすぐにバルーンが消えるようhoveredフラグを折る */
                    setClicked(!clicked);
                    clearHoverFlags();
                }
            }, onKeyDown: function (e) {
                /* バルーンが見えてる時にクリックした場合はすぐにバルーンが消えるようhoveredフラグを折る */
                if (e.key === Keys.ENTER || e.key === Keys.SPACE) {
                    e.preventDefault();
                    setClicked(!clicked);
                    clearHoverFlags();
                }
                else if (clicked && e.key === Keys.ESC) {
                    setClicked(false);
                    clearHoverFlags();
                }
                else if (clicked && e.key === Keys.TAB && balloonRef.current) {
                    e.preventDefault();
                    balloonRef.current.focus();
                }
            }, onMouseLeave: function () {
                isNarrowerThanMobileBoundery() ? undefined : handleTargetMouseLeave();
            }, onMouseEnter: function () {
                isNarrowerThanMobileBoundery() ? undefined : handleTargetMouseEnter();
            }, ref: baseRef }, error ? (React.createElement(MdError, { className: "vb-messageIcon__icon vb-messageIcon__icon--error" })) : notice ? (React.createElement(MdWarning, { className: "vb-messageIcon__icon vb-messageIcon__icon--notice" })) : success ? (React.createElement(MdCheckCircle, { className: "vb-messageIcon__icon vb-messageIcon__icon--success" })) : (React.createElement(MdHelp, { className: "vb-messageIcon__icon vb-messageIcon__icon--info" }))),
        isNarrowerThanMobileBoundery() ? (React.createElement(MessageDialog, { isOpen: isOpenDialog, title: label, closeButtonLabel: '閉じる', onRequestClose: function () { return setIsOpenDialog(false); }, closeButtonAppearance: 'secondary', responsive: true }, children)) : (React.createElement(React.Fragment, null,
            showBalloon && (React.createElement(VisuallyHidden, null,
                React.createElement("span", { className: "vb-messageIcon__hiddenMessage" }, children))),
            React.createElement(ScrollPortal, { positionalBaseElement: baseRef.current || undefined, isActive: showBalloon, onOverflow: function () {
                    setClicked(false);
                    clearHoverFlags();
                }, onScroll: adjustPosition, verticalPosition: verticalPosition, "data-masking": props['data-masking'] },
                React.createElement("div", { className: "vb-messageIconMessageWrapper ".concat(showBalloon ? '' : 'vb-messageIconMessageWrapper--hidden') },
                    React.createElement(VisuallyHidden, null,
                        React.createElement("button", { tabIndex: 0, onFocus: function () { var _a; return (_a = baseRef.current) === null || _a === void 0 ? void 0 : _a.focus(); }, onClick: function () { var _a; return (_a = baseRef.current) === null || _a === void 0 ? void 0 : _a.focus(); } },
                            label || 'メッセージ',
                            "\u3092\u96A0\u3059\u30DC\u30BF\u30F3\u306B\u30B8\u30E3\u30F3\u30D7")),
                    React.createElement("div", { className: "vb-messageIconMessage", onMouseEnter: handleBalloonMouseEnter, onMouseLeave: handleBalloonMouseLeave, onClick: function (e) { return e.stopPropagation(); }, onKeyDown: function (e) {
                            var _a;
                            if (e.key === Keys.ESC) {
                                setClicked(false);
                                clearHoverFlags();
                                (_a = baseRef.current) === null || _a === void 0 ? void 0 : _a.focus();
                            }
                        }, tabIndex: -1, ref: balloonWrapperRef, role: "tooltip" },
                        React.createElement(Balloon, { small: true, border: error
                                ? 'alert'
                                : notice
                                    ? 'notice'
                                    : success
                                        ? 'success'
                                        : 'default', position: position, verticalPosition: verticalPosition, ref: balloonRef }, children)),
                    React.createElement(VisuallyHidden, null,
                        React.createElement("button", { tabIndex: 0, onFocus: function () { var _a; return (_a = baseRef.current) === null || _a === void 0 ? void 0 : _a.focus(); }, onClick: function () { var _a; return (_a = baseRef.current) === null || _a === void 0 ? void 0 : _a.focus(); } },
                            label || 'メッセージ',
                            "\u3092\u96A0\u3059\u30DC\u30BF\u30F3\u306B\u30B8\u30E3\u30F3\u30D7"))))))));
};
export default MessageIcon;
//# sourceMappingURL=MessageIcon.js.map