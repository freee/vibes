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
import { MdSearch } from 'react-icons/md';
import vbClassNames from '../../utilities/vbClassNames';
import commonProps from '../../utilities/commonProps';
import { useResponsive } from '../../utilities/VibesProvider';
var SearchFieldInner = function (props, ref) {
    var id = props.id, label = props.label, labelledby = props.labelledby, placeholder = props.placeholder, name = props.name, value = props.value, required = props.required, autofocus = props.autofocus, disabled = props.disabled, error = props.error, small = props.small, large = props.large, width = props.width, maxLength = props.maxLength, _a = props.borderless, borderless = _a === void 0 ? false : _a, onChange = props.onChange, onInput = props.onInput, onFocus = props.onFocus, onBlur = props.onBlur, onKeyDown = props.onKeyDown, onKeyUp = props.onKeyUp, marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize;
    var fieldClass = 'vb-searchField';
    var inputClass = fieldClass + '__input';
    var inputClassName = vbClassNames(inputClass, {
        modifier: {
            error: error,
            small: small,
            large: large,
            widthXSmall: width === 'xSmall',
            widthSmall: width === 'small',
            widthMedium: width === 'medium' || !width,
            widthLarge: width === 'large',
            widthFull: width === 'full',
            borderless: borderless,
            responsive: useResponsive(),
        },
    });
    var iconClassName = small
        ? fieldClass + '__icon--small'
        : fieldClass + '__icon';
    return (React.createElement("div", __assign({}, commonProps(props, fieldClass, { widthFull: width === 'full' }, { marginBottom: marginBottom, marginLeft: marginLeft, marginRight: marginRight, marginSize: marginSize, marginTop: marginTop })),
        React.createElement("input", { id: id, type: "search", name: name && name, value: value && value, className: inputClassName, placeholder: placeholder && placeholder, disabled: disabled && true, required: required && true, autoFocus: autofocus && true, maxLength: maxLength, onChange: onChange, onInput: onInput, onFocus: onFocus, onBlur: onBlur, onKeyDown: onKeyDown, onKeyUp: onKeyUp, "aria-label": label ? label : placeholder ? placeholder : undefined, "aria-labelledby": labelledby, "aria-required": required && true, ref: ref }),
        React.createElement(MdSearch, { className: iconClassName })));
};
var SearchField = React.forwardRef(SearchFieldInner);
export default SearchField;
//# sourceMappingURL=SearchField.js.map