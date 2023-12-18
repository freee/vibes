import * as React from 'react';
import { useMedia } from './useMedia';
import { ThemeContext, ThemeProvider } from 'styled-components';
import { VibesContext } from './VibesContext';
import { TabletBoundaryWidth, MobileBoundaryWidth, NarrowMobileBoundaryWidth, } from '../constants';
var baseRemSize = 16;
var deviceRemSize = typeof document === 'undefined'
    ? baseRemSize
    : parseFloat(getComputedStyle(document.documentElement).fontSize);
/**
 * Vibes共通のコンテクストを提供するProviderコンポーネントです。
 *
 * Provider component which determine media type according to screen width.
 *
 * 320 ~ 767px mobile
 * 768 ~ 1024px tablet
 * 1025px ~ pc
 *
 * (when 1rem = 16px)
 */
export var VibesProvider = function (_a) {
    var children = _a.children, _b = _a.fixedLayout, fixedLayout = _b === void 0 ? false : _b, _c = _a.portalParent, portalParent = _c === void 0 ? document.body : _c, _d = _a.portalParentRef, portalParentRef = _d === void 0 ? undefined : _d, _e = _a.lang, lang = _e === void 0 ? 'ja' : _e;
    var isTablet = useMedia("not (min-width: ".concat(TabletBoundaryWidth, ")"), window.innerWidth <
        deviceRemSize * Number(TabletBoundaryWidth.replace('rem', '')));
    var isMobile = useMedia("not (min-width: ".concat(MobileBoundaryWidth, ")"), window.innerWidth <
        deviceRemSize * Number(MobileBoundaryWidth.replace('rem', '')));
    // Narrower than iPhone8 (375px)
    var isNarrowMobile = useMedia("not (min-width: ".concat(NarrowMobileBoundaryWidth, ")"), window.innerWidth <
        deviceRemSize * Number(NarrowMobileBoundaryWidth.replace('rem', '')));
    var media = {
        mediaType: (fixedLayout
            ? 'pc'
            : isMobile
                ? 'mobile'
                : isTablet
                    ? 'tablet'
                    : 'pc'),
        isNarrowMobile: isNarrowMobile,
    };
    return (React.createElement(ThemeProvider, { theme: media },
        React.createElement(VibesContext.Provider, { value: {
                responsive: !fixedLayout,
                portalParent: portalParent,
                portalParentRef: portalParentRef,
                lang: lang,
            } }, children)));
};
export var useVibes = function () { return React.useContext(ThemeContext); };
export var useResponsive = function (responsiveProp) {
    var contextValue = React.useContext(VibesContext);
    return responsiveProp === undefined
        ? contextValue.responsive
        : responsiveProp;
};
export var usePortalParentContext = function () {
    var _a = React.useContext(VibesContext), portalParent = _a.portalParent, portalParentRef = _a.portalParentRef;
    return portalParent || (portalParentRef === null || portalParentRef === void 0 ? void 0 : portalParentRef.current) || document.body;
};
export var useLang = function () {
    var lang = React.useContext(VibesContext).lang;
    return lang || 'ja';
};
//# sourceMappingURL=VibesProvider.js.map