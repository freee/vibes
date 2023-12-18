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
/**
 * 人のアバターを表現するためのコンポーネントです。
 *
 * - imageUrlが指定されない場合または画像の読み込みに失敗した場合はMdPersonアイコンが表示されます、prefetchがfalseの場合は画像の読み込みチェックを行わないため、画像が取得できなかった場合にMdPersonアイコンは出ません
 * - サイズは `small` (1.5rem = 24px), `medium` (2rem = 32px), `large` (3rem = 48px), XLarge (6rem = 96px) が用意されています
 */
var Avatar = function (props) {
    var imageUrl = props.imageUrl, size = props.size, _a = props.prefetch, prefetch = _a === void 0 ? true : _a;
    var classModifiers = {
        small: size === 'small',
        large: size === 'large',
        xLarge: size === 'xLarge',
    };
    var _b = React.useState(false), imageLoaded = _b[0], setImageLoaded = _b[1];
    // 画像の読み込みに失敗してなんも出なくなるとマズいので、img要素を作って読み込み、imageLoadedフラグが立つのを待ってから表示する
    React.useEffect(function () {
        if (!prefetch) {
            return;
        }
        setImageLoaded(false);
        if (imageUrl) {
            var img = document.createElement('img');
            img.src = imageUrl;
            img.addEventListener('load', function () { return setImageLoaded(true); });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [imageUrl]);
    return (React.createElement("span", __assign({}, commonProps(props, 'vb-avatar', classModifiers), { role: "img", "aria-label": "\u30A2\u30D0\u30BF\u30FC\u753B\u50CF" }),
        React.createElement("svg", { viewBox: "0 0 96 96", className: "vb-avatar__image" },
            React.createElement("g", { clipPath: "path('M96,48c0-7-.38-14.11-2.48-20.83A35.9,35.9,0,0,0,73.1,4.05C66.15,1,58.49.11,51,0A119.93,119.93,0,0,0,37.56.43C22.25,1.87,9.31,9.35,3.56,24.1.59,31.58,0,39.74,0,47.72s.51,16.43,3.51,24c5.78,15,18.91,22.47,34.43,23.84A124.8,124.8,0,0,0,51.48,96c7.3-.12,14.73-1.07,21.49-4A35.89,35.89,0,0,0,93.48,69C95.61,62.21,96,55.05,96,48Z')" },
                React.createElement("rect", { x: 0, y: 0, width: 96, height: 96, className: "vb-avatar__background" }),
                imageUrl && (imageLoaded || !prefetch) ? (React.createElement("image", { href: imageUrl, width: "100%", height: "100%", x: 0, y: 0, preserveAspectRatio: "xMidYMid slice" })) : (React.createElement("g", { className: "vb-avatar__placeholderIcon" },
                    React.createElement("path", { d: "M80.85,67.34c-3.38-3.41-10.06-9.45-23.26-11A69.79,69.79,0,0,0,48,55.66h0a69.79,69.79,0,0,0-9.59.64c-13.2,1.59-19.88,7.63-23.26,11-6,6.07-6.9,11.27-6.9,18.43s7,16.17,7,16.17h65.5s7-9,7-16.17S86.87,73.41,80.85,67.34Z" }),
                    React.createElement("circle", { cx: "48", cy: "33", r: "15" })))))));
};
export default Avatar;
//# sourceMappingURL=Avatar.js.map