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
import ContentLoader from 'react-content-loader';
import commonProps from '../../utilities/commonProps';
import { convertRemToPixel } from '../../utilities/convertRemToPixel';
var getLength = function (size) {
    if (size === void 0) { size = 'medium'; }
    switch (size) {
        case 'small':
            return 0.75;
        case 'medium':
            return 1;
        case 'large':
            return 1.5;
        case 'xlarge':
            return 3;
    }
};
/**
 * ユーザーアバターなど、円形で表示されるUIパーツ用のスケルトンイメージのコンポーネントです。
 * This component provides a skeleton image of circular UI parts such as user avaters.
 */
export var SkeletonCircle = function (props) {
    var lengthPixel = convertRemToPixel(getLength(props.size));
    return (React.createElement("div", __assign({}, commonProps(props, 'vb-skeltonCircle', {
        small: props.size === 'small',
        large: props.size === 'large',
        xlarge: props.size === 'xlarge',
    })),
        React.createElement(ContentLoader, { speed: 1, width: lengthPixel * 2, height: lengthPixel * 2, viewBox: "0 0 ".concat(lengthPixel * 2, " ").concat(lengthPixel * 2), backgroundColor: "rgba(212,212,212,0.3)" // #FFFFFF 上で #F2F2F2
            , foregroundColor: "rgba(188,188,188,0.3)" // #FFFFFF 上で #ebebeb
         },
            React.createElement("circle", { cx: lengthPixel, cy: lengthPixel, r: lengthPixel }))));
};
/**
 * @deprecated SkeletonCircle を使ってください。 Use SkeletonCircle instead.
 */
export var SkeltonCircle = SkeletonCircle;
//# sourceMappingURL=SkeletonCircle.js.map