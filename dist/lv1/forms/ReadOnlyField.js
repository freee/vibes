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
 * ユーザーの入力内容が readonly で表示するためのコンポーネントです。
 *
 * - 高さが TextField などと揃うようにつくられているため、それらと並べて使用してもOKです。
 * - 幅の指定も TextField などと同様に行えます。
 */
var ReadOnlyField = function (props) {
    var id = props.id, label = props.label, labelledby = props.labelledby, name = props.name, value = props.value, valueText = props.valueText, small = props.small, large = props.large, alignRight = props.alignRight, alignCenter = props.alignCenter, width = props.width;
    var classModifier = {
        small: small,
        large: large,
        alignCenter: alignCenter,
        alignRight: alignRight,
        widthXSmall: width === 'xSmall',
        widthSmall: width === 'small',
        widthMedium: width === 'medium' || !width,
        widthLarge: width === 'large',
        widthFull: width === 'full',
    };
    /**
     * ユーザーの入力内容が表示される想定のコンポーネントのため、
     * data-masking が明示的に false でない限りは true にして行動追跡ツールに保存されないようにする。
     * props 自体は readonly のため、コピーした配列で data-masking が undefined のときに true で上書きしている。
     */
    var checkedProps = __assign(__assign({}, props), { 'data-masking': props['data-masking'] !== undefined ? props['data-masking'] : true });
    return (React.createElement("span", __assign({}, commonProps(checkedProps, 'vb-readOnlyField', classModifier), { id: id, "aria-label": label, "aria-labelledby": labelledby }),
        React.createElement("span", { className: "vb-readOnlyField__inner" }, valueText || value),
        React.createElement("input", { type: "hidden", name: name, value: value })));
};
export default ReadOnlyField;
//# sourceMappingURL=ReadOnlyField.js.map