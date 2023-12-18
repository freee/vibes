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
import { CSSTransition } from 'react-transition-group';
import spinner from './Loading/loading-parts.json';
import commonProps from '../utilities/commonProps';
import vbClassNames from '../utilities/vbClassNames';
var InlineSpinner = function (props) {
    var isLoading = props.isLoading, large = props.large;
    var lottieRef = React.useRef(null);
    React.useEffect(function () {
        if (lottieRef.current != null) {
            var anim_1 = lottie.loadAnimation({
                animationData: spinner,
                autoplay: true,
                container: lottieRef.current,
                loop: true,
                renderer: 'svg',
            });
            return function () { return anim_1.destroy(); };
        }
    }, [isLoading, lottieRef]);
    var baseClass = 'vb-spinner';
    return (React.createElement("span", __assign({}, commonProps(props, baseClass, { large: large })),
        React.createElement("span", { className: vbClassNames("".concat(baseClass, "__base"), { modifier: { large: large } }) },
            React.createElement(CSSTransition, { classNames: vbClassNames("".concat(baseClass, "__fade"), {
                    modifier: { large: large },
                }), in: isLoading, timeout: 300, exit: true, unmountOnExit: true, 
                // StrictModeで、"Warning: findDOMNode is deprecated in StrictMode."が出ないように
                // [FYI] https://github.com/reactjs/react-transition-group/issues/668#issuecomment-695162879
                nodeRef: lottieRef },
                React.createElement("div", { className: vbClassNames("".concat(baseClass, "__animation"), {
                        modifier: { large: large },
                    }), ref: lottieRef })))));
};
export default InlineSpinner;
//# sourceMappingURL=InlineSpinner.js.map