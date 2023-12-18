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
import lottie from 'lottie-web';
import * as React from 'react';
import animDiscoveryIllust from './discovery-illust.json';
import commonProps from '../../utilities/commonProps';
var DiscoveryIllust = function (_a) {
    var _b = _a.animationDelay, animationDelay = _b === void 0 ? 0 : _b, otherProps = __rest(_a, ["animationDelay"]);
    var lottieRef = React.useRef(null);
    React.useEffect(function () {
        if (lottieRef.current == null)
            return;
        var anim = lottie.loadAnimation({
            animationData: animDiscoveryIllust,
            autoplay: false,
            container: lottieRef.current,
            loop: true,
            renderer: 'svg',
        });
        var timer = setTimeout(function () {
            anim.play();
        }, animationDelay);
        return function () {
            clearTimeout(timer);
            anim.destroy();
        };
    }, [lottieRef, animationDelay]);
    return (React.createElement("div", __assign({}, commonProps(otherProps, 'vb-discoveryIllust', {}), { ref: lottieRef })));
};
export default DiscoveryIllust;
//# sourceMappingURL=DiscoveryIllust.js.map