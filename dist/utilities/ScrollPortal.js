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
import { scrollableParent } from './DOMUtil';
import ReactDOM from 'react-dom';
import { usePortalParentContext } from '../utilities/VibesProvider';
/**
 * children をスクロールに追従する要素でラップして Portal 化する
 */
var ScrollPortal = function (_a) {
    var children = _a.children, isActive = _a.isActive, onOverflow = _a.onOverflow, onScroll = _a.onScroll, portalTargetElement = _a.portalTargetElement, positionalBaseElement = _a.positionalBaseElement, _b = _a.verticalPosition, verticalPosition = _b === void 0 ? 'bottom' : _b, _c = _a.horizontalPosition, horizontalPosition = _c === void 0 ? 'left' : _c, popupRef = _a.popupRef, props = __rest(_a, ["children", "isActive", "onOverflow", "onScroll", "portalTargetElement", "positionalBaseElement", "verticalPosition", "horizontalPosition", "popupRef"]);
    var _d = React.useState('0'), listBoxLeft = _d[0], setListBoxLeft = _d[1];
    var _e = React.useState('0'), listBoxTop = _e[0], setListBoxTop = _e[1];
    var portalParent = usePortalParentContext();
    // positionalBaseElementが画面から隠れていればonOverflowを呼ぶ
    var checkScrollPosition = React.useCallback(function () {
        if (!(onOverflow && positionalBaseElement)) {
            return;
        }
        var scrollableElement = scrollableParent(positionalBaseElement);
        if (scrollableElement) {
            // positionalBaseElementの上端座標（scrollableElement相対）
            // スクロール量によって変動
            var topEdge = positionalBaseElement.getBoundingClientRect().top -
                scrollableElement.getBoundingClientRect().top;
            // positionalBaseElementの下端座標（scrollableElement相対）
            var bottomEdge = topEdge + positionalBaseElement.getBoundingClientRect().height;
            var leftEdge = positionalBaseElement.getBoundingClientRect().left -
                scrollableElement.getBoundingClientRect().left;
            var rightEdge = leftEdge + positionalBaseElement.getBoundingClientRect().width;
            // スクロールコンテンツの上端/下端/左端/右端に到達
            if (bottomEdge < 0 ||
                topEdge > scrollableElement.clientHeight ||
                rightEdge < 0 ||
                leftEdge > scrollableElement.clientWidth) {
                onOverflow();
                return;
            }
        }
    }, [onOverflow, positionalBaseElement]);
    // positionalBaseElement の下端または上端につく形で位置を調整する
    var calculatePosition = React.useCallback(function () {
        var _a;
        if (!positionalBaseElement) {
            return;
        }
        var _b = positionalBaseElement.getBoundingClientRect(), left = _b.left, top = _b.top, bottom = _b.bottom, height = _b.height, width = _b.width;
        setListBoxLeft("".concat(left +
            (horizontalPosition === 'right'
                ? width
                : horizontalPosition === 'center'
                    ? width / 2
                    : 0) +
            window.pageXOffset, "px"));
        if (!popupRef) {
            setListBoxTop("".concat(top +
                (verticalPosition === 'bottom' ? height : 0) +
                window.pageYOffset, "px"));
        }
        else {
            var popupHeight = (_a = popupRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().height;
            if (verticalPosition === 'bottom') {
                setListBoxTop("".concat(top + height + window.pageYOffset, "px"));
            }
            else {
                if (popupHeight) {
                    setListBoxTop("".concat(bottom - popupHeight - height + window.pageYOffset, "px"));
                }
            }
        }
    }, [popupRef, horizontalPosition, positionalBaseElement, verticalPosition]);
    // 要素がactiveになったら表示位置を再計算する
    React.useLayoutEffect(function () {
        if (!isActive) {
            return;
        }
        calculatePosition();
        // scroll可能なElement がある時はscrollに追従するようにする
        var handleScroll = function () {
            calculatePosition();
            checkScrollPosition();
            onScroll && onScroll();
        };
        if (positionalBaseElement) {
            var target_1 = scrollableParent(positionalBaseElement);
            window.addEventListener('resize', handleScroll);
            if (target_1) {
                window.addEventListener('scroll', handleScroll);
                target_1.addEventListener('scroll', handleScroll);
            }
            return function () {
                window.removeEventListener('resize', handleScroll);
                if (target_1) {
                    window.removeEventListener('scroll', handleScroll);
                    target_1.removeEventListener('scroll', handleScroll);
                }
            };
        }
    }, [
        isActive,
        onScroll,
        calculatePosition,
        checkScrollPosition,
        positionalBaseElement,
    ]);
    return ReactDOM.createPortal(React.createElement("div", { className: "vb-scrollPortal", style: {
            position: 'absolute',
            left: listBoxLeft,
            top: listBoxTop,
        }, "data-masking": props['data-masking'] }, children), portalTargetElement || portalParent);
};
export default ScrollPortal;
//# sourceMappingURL=ScrollPortal.js.map