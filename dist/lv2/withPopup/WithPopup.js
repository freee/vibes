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
import { CSSTransition } from 'react-transition-group';
import commonProps from '../../utilities/commonProps';
import ScrollPortal from '../../utilities/ScrollPortal';
import FixedPortal from '../../utilities/FixedPortal';
import { Keys } from '../../utilities/keyboard';
import useUniqueId from '../../hooks/useUniqueId';
import { FocusTrap } from '../../lv1';
/**
 * ポップアップを実装するためのコンポーネントです。
 *
 * - ボタンからドロップダウンメニューを表示したい場合は、 `DropdownButton` コンポーネントを使用してください
 * - 作ろうとしている機能と同じ機能を持つコンポーネントが存在する場合はそちらを使用してください。このコンポーネントは扱いが面倒です。
 * - `render` の引数は以下のように使用してください
 *   - `popupId` を開閉コントロールの `aria-controls` に渡してください
 *   - `isOpen` を開閉コントロールの `aria-expanded` に渡してください
 *   - `controlRef` を開閉コントロールの `ref` に渡してください
 * - `renderPopup` の引数は以下のように使用してください
 *   - requestClose を呼ぶことでポップアップを閉じさせます
 *   - firstSelectedItemRef は、フォーカス可能な要素のうち最初の要素のrefに渡してください。
 *   - フォーカス可能な要素より前に説明文等がある場合は、firstSelectedItemRef をどの要素にも渡さないでください
 */
var WithPopup = function (props) {
    var render = props.render, disabled = props.disabled, contentsFixed = props.contentsFixed, renderPopup = props.renderPopup, onOpen = props.onOpen, onClose = props.onClose;
    var baseClass = 'vb-withPopup';
    var _a = React.useState(false), open = _a[0], setOpen = _a[1];
    var firstSelectableItemRef = React.useRef(null);
    var popupRef = React.useRef(null);
    var contentWrapperRef = React.useRef(null);
    var _b = React.useState('left'), horizontalPosition = _b[0], setHorizontalPosition = _b[1];
    var _c = React.useState('bottom'), verticalPosition = _c[0], setVerticalPosition = _c[1];
    var uid = useUniqueId(baseClass);
    var popupId = "".concat(uid, "__popup");
    var controlRef = React.useRef(null);
    var adjustPosition = function () {
        if (!(contentWrapperRef.current && popupRef.current)) {
            return;
        }
        var buttonRect = contentWrapperRef.current.getBoundingClientRect();
        var popupRect = popupRef.current.getBoundingClientRect();
        setHorizontalPosition(buttonRect.left + popupRect.width > document.documentElement.clientWidth
            ? 'right'
            : 'left');
        setVerticalPosition(buttonRect.bottom + popupRect.height >
            document.documentElement.clientHeight &&
            buttonRect.bottom > popupRect.height
            ? 'top'
            : 'bottom');
    };
    var openCallbackFlagRef = React.useRef(false);
    var closeCallbackFlagRef = React.useRef(false);
    var openMenu = function () {
        setOpen(true);
        openCallbackFlagRef.current = true;
    };
    var closeMenu = React.useCallback(function () {
        setOpen(false);
        closeCallbackFlagRef.current = true;
    }, []);
    var openCallback = React.useCallback(function () {
        if (openCallbackFlagRef.current) {
            onOpen === null || onOpen === void 0 ? void 0 : onOpen();
            openCallbackFlagRef.current = false;
        }
    }, [onOpen]);
    var closeCallback = React.useCallback(function () {
        if (closeCallbackFlagRef.current) {
            onClose === null || onClose === void 0 ? void 0 : onClose();
            closeCallbackFlagRef.current = false;
        }
    }, [onClose]);
    React.useEffect(function () {
        if (open) {
            openCallback();
            // 開いた瞬間にwindowにイベントが伝播して閉じてしまうのを防ぐため、setTimeoutしてaddEventListenerを遅らせている
            setTimeout(function () {
                var _a;
                (_a = (firstSelectableItemRef.current || popupRef.current)) === null || _a === void 0 ? void 0 : _a.focus();
                window.addEventListener('click', closeMenu);
            });
            return function () { return window.removeEventListener('click', closeMenu); };
        }
        else {
            closeCallback();
        }
    }, [closeMenu, open, openCallback, closeCallback]);
    React.useLayoutEffect(function () {
        adjustPosition();
    }, [open]);
    var requestClose = function () {
        closeMenu();
        if (controlRef.current) {
            controlRef.current.focus();
        }
    };
    var togglePopup = function (open) {
        if (disabled) {
            return;
        }
        if (open) {
            openMenu();
        }
        else {
            closeMenu();
        }
        if (controlRef.current) {
            controlRef.current.focus();
        }
    };
    var popupWrapper = function () {
        return (React.createElement(CSSTransition, { in: open, classNames: "".concat(baseClass, "__animation"), timeout: {
                enter: 300,
                exit: 300,
            }, unmountOnExit: true },
            React.createElement("div", { className: "".concat(baseClass, "__popupWrapper") },
                React.createElement(FocusTrap
                // ポップアップの始まり・終わりまでTabキーで移動した場合、ボタンあるいはポップアップ自体にフォーカスを戻す
                , { 
                    // ポップアップの始まり・終わりまでTabキーで移動した場合、ボタンあるいはポップアップ自体にフォーカスを戻す
                    onFocusInsideTop: function () {
                        if (controlRef.current) {
                            controlRef.current.focus();
                        }
                        else if (popupRef.current) {
                            popupRef.current.focus();
                        }
                        return true;
                    }, onFocusInsideBottom: function () {
                        if (controlRef.current) {
                            controlRef.current.focus();
                        }
                        else if (popupRef.current) {
                            popupRef.current.focus();
                        }
                        return true;
                    } },
                    React.createElement("div", { className: "".concat(baseClass, "__popup").concat(horizontalPosition === 'right'
                            ? " ".concat(baseClass, "__popup--rightAligned")
                            : ''), tabIndex: -1, id: popupId, onKeyDown: function (e) {
                            e.stopPropagation();
                            if (e.key === Keys.ESC) {
                                closeMenu();
                                if (controlRef.current) {
                                    controlRef.current.focus();
                                }
                            }
                        }, onClick: function (e) { return e.stopPropagation(); }, ref: popupRef }, renderPopup(requestClose, firstSelectableItemRef, controlRef))))));
    };
    return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    React.createElement("span", __assign({}, commonProps(props, baseClass), { onClick: function (e) {
            open && e.stopPropagation();
            if (!disabled) {
                if (open) {
                    closeMenu();
                }
                else {
                    openMenu();
                }
            }
        }, onKeyDown: function (e) {
            if (!open) {
                return;
            }
            if ((e.key === Keys.TAB || e.key === Keys.DOWN) &&
                (popupRef.current || firstSelectableItemRef.current)) {
                e.preventDefault();
                if (firstSelectableItemRef.current) {
                    firstSelectableItemRef.current.focus();
                }
                else if (popupRef.current) {
                    popupRef.current.focus();
                }
            }
        } }),
        React.createElement("span", { className: "".concat(baseClass, "__contentWrapper"), ref: contentWrapperRef }, render(popupId, open, controlRef, togglePopup)),
        contentsFixed ? (React.createElement(FixedPortal, { isActive: open, positionalBaseElement: contentWrapperRef.current || undefined, horizontalPosition: horizontalPosition, verticalPosition: verticalPosition, popupRef: popupRef, "data-masking": props['data-masking'] }, popupWrapper())) : (React.createElement(ScrollPortal, { isActive: open, positionalBaseElement: contentWrapperRef.current || undefined, horizontalPosition: horizontalPosition, verticalPosition: verticalPosition, onOverflow: function () { return closeMenu(); }, popupRef: popupRef, "data-masking": props['data-masking'] }, popupWrapper()))));
};
export default WithPopup;
//# sourceMappingURL=WithPopup.js.map