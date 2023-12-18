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
import commonProps, { pickCommonDataProps, } from '../../utilities/commonProps';
import vbClassNames from '../../utilities/vbClassNames';
import functionalMarginClasses from '../../utilities/functionalMarginClasses';
import { filterTextBoxAriaProps, filterNumberInputAriaProps, } from '../../utilities/AriaProps';
import InlineSpinner from '../InlineSpinner';
import { useResponsive } from '../../utilities/VibesProvider';
function filterNumberInputProps(props) {
    if (props.type != 'number') {
        return {};
    }
    return {
        min: props['min'],
        max: props['max'],
        step: props['step'],
    };
}
function TextFieldInner(props, ref) {
    var type = props.type, label = props.label, id = props.id, labelledby = props.labelledby, placeholder = props.placeholder, name = props.name, value = props.value, required = props.required, autofocus = props.autofocus, disabled = props.disabled, error = props.error, small = props.small, large = props.large, role = props.role, alignCenter = props.alignCenter, alignRight = props.alignRight, maxLength = props.maxLength, width = props.width, autoComplete = props.autoComplete, suffix = props.suffix, hideSpinner = props.hideSpinner, borderless = props.borderless, onChange = props.onChange, onInput = props.onInput, onFocus = props.onFocus, onBlur = props.onBlur, onKeyDown = props.onKeyDown, onKeyUp = props.onKeyUp, marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize, loading = props.loading, IconComponent = props.IconComponent, onIconClick = props.onIconClick, onIconBlur = props.onIconBlur, onIconFocus = props.onIconFocus, iconLabel = props.iconLabel, iconAriaProps = props.iconAriaProps, ma = props.ma, mt = props.mt, mb = props.mb, mr = props.mr, ml = props.ml;
    var inputBaseClass = 'vb-textField';
    var wrapperBaseClass = "".concat(inputBaseClass, "__wrapper");
    // 水平方向のマージンはwrapperに対してつける
    var wrapperClassBase = vbClassNames(wrapperBaseClass, {
        modifier: {
            widthFull: width === 'full',
        },
        margin: {
            marginLeft: marginLeft,
            marginRight: marginRight,
            marginSize: marginSize,
            marginTop: marginTop,
            marginBottom: marginBottom,
        },
    });
    var functionalMarginClass = functionalMarginClasses({
        ma: ma,
        mr: mr,
        ml: ml,
        mt: mt,
        mb: mb,
    });
    var wrapperClass = "".concat(wrapperClassBase, " ").concat(functionalMarginClass).trim();
    var suffixBaseClass = "".concat(inputBaseClass, "__suffix");
    var suffixClass = vbClassNames(suffixBaseClass, {
        modifier: {
            small: small,
            large: large,
        },
    });
    var iconClass = "".concat(inputBaseClass, "__").concat(!loading && onIconClick ? 'iconButton' : 'icon');
    return (React.createElement("span", { className: wrapperClass },
        React.createElement("input", __assign({ id: id, type: type || 'text', name: name && name, value: value && value, placeholder: placeholder && placeholder, disabled: disabled && true, required: required && true, autoFocus: autofocus && true, maxLength: maxLength, onChange: onChange, onInput: onInput, onFocus: onFocus, onBlur: onBlur, onKeyDown: onKeyDown, onKeyUp: onKeyUp, role: role, "aria-label": label, "aria-labelledby": labelledby, "aria-required": required && true, autoComplete: autoComplete, ref: ref }, commonProps(pickCommonDataProps(props), inputBaseClass, {
            error: error,
            small: small,
            large: large,
            alignCenter: alignCenter,
            alignRight: alignRight,
            hideSpinner: hideSpinner,
            borderless: borderless,
            widthXSmall: width === 'xSmall',
            widthSmall: width === 'small',
            widthMedium: width === 'medium' || !width,
            widthLarge: width === 'large',
            widthFull: width === 'full',
            withIcon: !!IconComponent || loading,
            responsive: useResponsive(),
        }, { marginTop: marginTop, marginBottom: marginBottom, marginSize: marginSize }), filterNumberInputProps(props), filterNumberInputAriaProps(props), filterTextBoxAriaProps(props))),
        (IconComponent || loading) &&
            (loading ? (React.createElement("span", { className: iconClass, "aria-hidden": "true" },
                React.createElement(InlineSpinner, { isLoading: true }))) : (IconComponent &&
                (onIconClick ? (React.createElement("button", __assign({ type: "button", disabled: disabled, className: iconClass, onClick: onIconClick, onBlur: onIconBlur, onFocus: onIconFocus, "aria-label": iconLabel }, iconAriaProps),
                    React.createElement(IconComponent, { focusable: false }))) : (React.createElement("span", { className: iconClass, role: iconLabel ? 'img' : 'presentation', "aria-label": iconLabel, "aria-hidden": !iconLabel },
                    React.createElement(IconComponent, { focusable: false })))))),
        !!suffix && React.createElement("span", { className: suffixClass }, suffix)));
}
/**
 * 汎用のinputコンポーネントです。
 *
 * - typeオプションでnumber, text, email, tel, passwordを切り替えられます（デザイナーはどのtypeを使うのか必要に応じて指定してください）。
 * - 幅を変えたいときは width オプションを変更します。特に柔軟に選択したい場合は、widthオプションを full にすることで親要素に対して100%にすることができます。
 * - 必ず `<label>` 要素によるラベル付けを行ってください
 *   - `FormControl` を使用する場合は、`SelectBox` に `id` を指定し、同じ文字列を `FormControl` の `fieldId` に指定してください
 *   - どうしても `<label>` 要素が使用できない場合に限り、 `label` または `labelledby` を使ってラベル付けをしてください
 * - 特定の用途に応じたコンポーネントが別途用意されている場合があります。適したコンポーネントを検討してください。
 *   - 日付の場合は `DateInput`, `DateField`
 *   - 数字の場合は `DigitsInput`, `DecimalInput`, `NumeralCodeInput`
 *     - 数値入力を `TextField` で行う場合は `alignRight` を指定してください。
 *   - 時間、時刻の場合は `TimeInput`, `TimeLengthInput`
 *   - 名前の場合は `NameField`
 *   - 電話番号の場合は `PhoneNumberField`
 *   - 検索欄の場合は `SearchField`
 *   - セレクトボックスの場合は `SelectBox`
 *   - 複数行の場合は `TextArea`
 *   - readonly の場合は `ReadOnlyField`
 * - 入力欄の右や下に入力規則などの補足を追記したい場合、それらの補足が先に読み上げられる必要があります。
 *   - `WithDescriptionContent` などを使用してレイアウト調整を行ってください。
 */
var TextField = React.forwardRef(TextFieldInner);
export default TextField;
//# sourceMappingURL=TextField.js.map