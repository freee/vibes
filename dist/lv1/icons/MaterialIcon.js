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
 * Material Design Iconsを表示するためのコンポーネントです。
 *
 * - [react-icons](https://react-icons.github.io/react-icons/) の Material Design iconsのアイコンを使う想定です
 *   - UIの統一感を損なわないよう、Material Design icons 以外を使用しないでください。
 * - freeeのブランドカラーを使用することができます
 *   - `success` `error` `notice` の状態を表現する場合は、`color` propを使用せず、 `success` `error` `notice` のpropを使用してください。
 * - アイコンを単体で使用する（近くにアイコンの内容を説明するテキストがない）場合には、
 *   - 代替テキストを `label` propに指定してください
 *   - 背景色と 3:1 以上のコントラスト比をもつ色を使用してください
 */
var MaterialIcon = function (props) {
    var _a;
    var label = props.label, small = props.small, error = props.error, notice = props.notice, success = props.success, color = props.color, pointerEvents = props.pointerEvents, IconComponent = props.IconComponent, marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize;
    var colorClass = success
        ? 'P7'
        : notice
            ? 'YE7'
            : error
                ? 'RE5'
                : color === 'inherit'
                    ? 'Inherit'
                    : color === 'white'
                        ? 'White'
                        : color;
    var classModifier = (_a = {
            small: small,
            error: error,
            notice: notice,
            success: success,
            pointerEventsNone: pointerEvents === 'none'
        },
        _a["color".concat(colorClass)] = !!colorClass,
        _a);
    return (React.createElement(IconComponent, __assign({ focusable: false, role: label ? 'img' : 'presentation', "aria-label": label }, commonProps(props, 'vb-materialIcon', classModifier, {
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginTop: marginTop,
        marginSize: marginSize,
    }))));
};
export default MaterialIcon;
//# sourceMappingURL=MaterialIcon.js.map