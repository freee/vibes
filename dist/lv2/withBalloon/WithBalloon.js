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
import Balloon from '../../lv1/bases/Balloon';
import ScrollPortal from '../../utilities/ScrollPortal';
import { FocusTrap } from '../../lv1';
import useUniqueId from '../../hooks/useUniqueId';
import { Keys } from '../../utilities/keyboard';
import { getFocusableElements, isFocusableElement } from '../../utilities';
import { useBalloon } from './useBalloon';
var findNextFocusable = function (el, backward) {
    if (backward === void 0) { backward = false; }
    var e = backward ? el.previousElementSibling : el.nextElementSibling;
    while (e) {
        if (isFocusableElement(e)) {
            return e;
        }
        var focusables = getFocusableElements(e);
        var focusableIndex = findFocusableElIndex(focusables);
        if (focusables.length > 0) {
            return focusables[backward ? focusableIndex : 0];
        }
        e = backward ? e.previousElementSibling : e.nextElementSibling;
    }
    var parent = el.parentElement;
    return parent ? findNextFocusable(parent, backward) : undefined;
};
var findFocusableElIndex = function (focusables) {
    var focusableLastIndex = 0;
    focusables.forEach(function (node, i) {
        var isVisible = true;
        var parent = node.parentElement;
        while (parent) {
            if (parent.style.display === 'none') {
                isVisible = false;
                break;
            }
            parent = parent.parentElement;
        }
        if (isVisible) {
            focusableLastIndex = i;
        }
    });
    return focusableLastIndex;
};
/**
 * `children` の要素にマウスホバーした際に表示されるバルーンを付与します。
 *
 * - タッチスクリーンによる操作ではバルーンを表示できません。**読めないことで使用できなくなる情報を配置しないでください**。
 * - バルーン内にはキーボード操作で到達できないため、何かの操作のUIを配置する場合は **必ず代替アクセス手段を用意してください**。
 * - バルーンの要素の `id` を `renderContent` の `balloonId` 引数で取得できます。`aria-describedby` で使用してください。
 * - バルーン表示中に `Esc` キーを押下すると、バルーンを非表示にできます。
 */
var WithBalloon = function (props) {
    var children = props.children, renderContent = props.renderContent, balloonContent = props.balloonContent, renderBalloonContent = props.renderBalloonContent, balloonDisabled = props.balloonDisabled, border = props.border;
    var baseClass = 'vb-withBalloon';
    var wrapperRef = React.useRef(null);
    var uniqueId = useUniqueId(baseClass);
    var _a = useBalloon(), balloonIsVisibleByHover = _a.balloonIsVisibleByHover, clearHoverFlags = _a.clearHoverFlags, handleTargetMouseEnter = _a.handleTargetMouseEnter, handleTargetMouseLeave = _a.handleTargetMouseLeave, handleBalloonMouseEnter = _a.handleBalloonMouseEnter, handleBalloonMouseLeave = _a.handleBalloonMouseLeave, position = _a.position, verticalPosition = _a.verticalPosition, adjustPosition = _a.adjustPosition, baseRef = _a.baseRef, balloonRef = _a.balloonRef;
    var _b = React.useState(false), focused = _b[0], setFocused = _b[1];
    var showBalloon = !balloonDisabled && (balloonIsVisibleByHover || focused);
    var balloonId = "".concat(uniqueId, "__balloonWrapper");
    React.useEffect(function () {
        var handleEsc = function (e) {
            if (e.key === Keys.ESC) {
                clearHoverFlags();
                setFocused(false);
            }
        };
        if (showBalloon) {
            window.addEventListener('keydown', handleEsc);
            return function () { return window.removeEventListener('keydown', handleEsc); };
        }
    }, [showBalloon, clearHoverFlags]);
    return (React.createElement("span", __assign({}, commonProps(props, baseClass), { ref: baseRef, id: uniqueId, "aria-describedby": balloonId }),
        React.createElement(FocusTrap, { onFocusInsideTop: function () {
                // Shift+Tabでフォーカスを外に出そうとしたときの挙動
                // 前のほうのフォーカス可能な要素を探してフォーカスする
                var target = baseRef.current
                    ? findNextFocusable(baseRef.current, true)
                    : undefined;
                if (target) {
                    target.focus();
                }
                return true;
            }, onFocusInsideBottom: function () {
                // Tabでフォーカスを外に出そうとしたときの挙動
                // 後ろのほうのフォーカス可能な要素を探してフォーカスする
                var target = baseRef.current
                    ? findNextFocusable(baseRef.current)
                    : undefined;
                if (target) {
                    target.focus();
                }
                return true;
            }, onFocusOutsideTop: function () {
                // Tabでフォーカスを内側に入れるときの挙動
                // フォーカス可能なものがあればそれに、無ければwrapperにフォーカスを移す
                if (wrapperRef.current) {
                    var focusable = getFocusableElements(wrapperRef.current);
                    if (focusable.length > 0) {
                        focusable.item(0).focus();
                    }
                    else {
                        wrapperRef.current.focus();
                    }
                }
                return true;
            }, onFocusOutsideBottom: function () {
                // Shift+Tabでフォーカスを内側に入れるときの挙動
                // フォーカス可能なものがあればそれに、無ければwrapperにフォーカスを移す
                if (wrapperRef.current) {
                    var focusable = getFocusableElements(wrapperRef.current);
                    if (focusable.length > 0) {
                        focusable.item(focusable.length - 1).focus();
                    }
                    else {
                        wrapperRef.current.focus();
                    }
                }
                return true;
            } },
            React.createElement("span", { className: "".concat(baseClass, "__contentWrapper"), tabIndex: -1, ref: wrapperRef, onMouseEnter: handleTargetMouseEnter, onMouseLeave: handleTargetMouseLeave, onFocus: function () { return setFocused(true); }, onBlur: function () { return setFocused(false); } }, renderContent ? renderContent(balloonId) : children)),
        React.createElement(ScrollPortal, { isActive: showBalloon, positionalBaseElement: baseRef.current || undefined, verticalPosition: verticalPosition, horizontalPosition: position, onOverflow: function () {
                clearHoverFlags();
                setFocused(false);
            }, onScroll: adjustPosition, "data-masking": props['data-masking'] },
            React.createElement("div", { className: "".concat(baseClass, "__balloonWrapper").concat(showBalloon ? '' : " ".concat(baseClass, "__balloonWrapper--hidden")), onMouseEnter: handleBalloonMouseEnter, onMouseLeave: handleBalloonMouseLeave, id: balloonId, role: "tooltip", "aria-hidden": !showBalloon },
                React.createElement(Balloon, { border: border, position: position, verticalPosition: verticalPosition, ref: balloonRef }, renderBalloonContent
                    ? renderBalloonContent(showBalloon)
                    : balloonContent)))));
};
export default WithBalloon;
//# sourceMappingURL=WithBalloon.js.map