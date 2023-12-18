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
import ReactDOM from 'react-dom';
import { usePortalParentContext } from './VibesProvider';
/**
 * children をfixedする要素でラップして Portal 化する
 */
var FixedPortal = function (_a) {
    var children = _a.children, isActive = _a.isActive, positionalBaseElement = _a.positionalBaseElement, _b = _a.verticalPosition, verticalPosition = _b === void 0 ? 'bottom' : _b, _c = _a.horizontalPosition, horizontalPosition = _c === void 0 ? 'left' : _c, popupRef = _a.popupRef, props = __rest(_a, ["children", "isActive", "positionalBaseElement", "verticalPosition", "horizontalPosition", "popupRef"]);
    var _d = React.useState('0'), listBoxLeft = _d[0], setListBoxLeft = _d[1];
    var _e = React.useState('0'), listBoxTop = _e[0], setListBoxTop = _e[1];
    var portalParent = usePortalParentContext();
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
                    : 0), "px"));
        if (!popupRef) {
            setListBoxTop("".concat(top + (verticalPosition === 'bottom' ? height : 0), "px"));
        }
        else {
            var popupHeight = (_a = popupRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().height;
            if (verticalPosition === 'bottom') {
                setListBoxTop("".concat(top + height, "px"));
            }
            else {
                if (popupHeight) {
                    setListBoxTop("".concat(bottom - popupHeight - height, "px"));
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
    }, [isActive, calculatePosition]);
    return ReactDOM.createPortal(React.createElement("div", { className: "vb-FixedPortal", style: {
            position: 'fixed',
            left: listBoxLeft,
            top: listBoxTop,
            zIndex: 9999,
        }, "data-masking": props['data-masking'] }, children), portalParent);
};
export default FixedPortal;
//# sourceMappingURL=FixedPortal.js.map