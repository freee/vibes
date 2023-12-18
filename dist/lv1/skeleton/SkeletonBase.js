import * as React from 'react';
import ContentLoader from 'react-content-loader';
import { convertRemToPixel } from '../../utilities/convertRemToPixel';
export var SkeletonBase = function (props) {
    var widthPixel = convertRemToPixel(props.width);
    var heightPixel = convertRemToPixel(props.height);
    return (React.createElement(ContentLoader, { speed: 1, width: widthPixel, height: heightPixel, viewBox: "0 0 ".concat(widthPixel, " ").concat(heightPixel), backgroundColor: "rgba(212,212,212,0.3)" // #FFFFFF 上で #F2F2F2
        , foregroundColor: "rgba(188,188,188,0.3)" // #FFFFFF 上で #ebebeb
     },
        React.createElement("rect", { x: "0", y: "0", rx: "4", ry: "4", width: widthPixel, height: heightPixel })));
};
//# sourceMappingURL=SkeletonBase.js.map