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
import lottie from 'lottie-web';
import * as React from 'react';
import animFinishTaskIllust from './finish-task-illust.json';
import commonProps from '../../utilities/commonProps';
var FinishTaskIllust = function (props) {
    var lottieRef = React.useRef(null);
    React.useEffect(function () {
        if (lottieRef.current != null) {
            var anim_1 = lottie.loadAnimation({
                animationData: animFinishTaskIllust,
                autoplay: true,
                container: lottieRef.current,
                loop: false,
                renderer: 'svg',
            });
            return function () { return anim_1.destroy(); };
        }
    }, [lottieRef]);
    return (React.createElement("div", __assign({}, commonProps(props, 'vb-finishTaskIllust', {}), { ref: lottieRef })));
};
export default FinishTaskIllust;
//# sourceMappingURL=FinishTaskIllust.js.map