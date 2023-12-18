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
import { useResponsive } from '../../utilities/VibesProvider';
var useAutoResize = function (_a, ref) {
    var autoResize = _a.autoResize, resize = _a.resize, onInput = _a.onInput, height = _a.height;
    var autoResizable = autoResize && (!resize || ['vertical', 'both'].includes(resize));
    var tmpTextAreaRef = React.useRef(null);
    var textAreaRef = (ref ||
        tmpTextAreaRef);
    var _b = React.useState(height || 0), autoResizeHeight = _b[0], setAutoResizeHeight = _b[1];
    var baseFontSize = React.useMemo(function () {
        return parseInt(getComputedStyle(document.documentElement).fontSize.split('px')[0]) || 16;
    }, []);
    var onInputWithResize = function (e) {
        onInput && onInput(e);
        if (autoResizable &&
            textAreaRef.current &&
            textAreaRef.current.scrollHeight > textAreaRef.current.offsetHeight) {
            setAutoResizeHeight(Math.ceil(textAreaRef.current.scrollHeight / baseFontSize));
        }
    };
    return { textAreaRef: textAreaRef, autoResizeHeight: autoResizeHeight, onInputWithResize: onInputWithResize };
};
/**
 * 複数行の入力欄 コンポーネントです。`<textarea>`要素を返します。
 * コメント欄など、ユーザーが長い文章を入力することなどが想定される場所で使用することを想定しています。
 *
 * - 必ず `<label>` 要素によるラベル付けを行ってください
 *   - `FormControl` を使用する場合は、`SelectBox` に `id` を指定し、同じ文字列を `FormControl` の `fieldId` に指定してください
 *   - どうしても `<label>` 要素が使用できない場合に限り、 `label` または `labelledby` を使ってラベル付けをしてください
 * - resize オプションを指定すると、右下をドラッグして領域を広げるやつの方向固定などができます（デフォルトは垂直・水平方向どちらもリサイズできます）。
 * - autoResize オプションを指定すると、入力される行数に応じて自動で大きくなっていきます（自動で小さくはなりません）。
 */
var TextAreaInner = function (props, ref) {
    var _a;
    var id = props.id, label = props.label, labelledby = props.labelledby, placeholder = props.placeholder, name = props.name, value = props.value, defaultValue = props.defaultValue, required = props.required, autofocus = props.autofocus, disabled = props.disabled, error = props.error, small = props.small, large = props.large, autoComplete = props.autoComplete, autoResize = props.autoResize, maxLength = props.maxLength, resize = props.resize, width = props.width, height = props.height, onChange = props.onChange, onInput = props.onInput, onFocus = props.onFocus, onBlur = props.onBlur, onKeyDown = props.onKeyDown, onKeyUp = props.onKeyUp, marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize;
    var _b = useAutoResize({
        autoResize: autoResize,
        resize: resize,
        onInput: onInput,
        height: height,
    }, ref), autoResizeHeight = _b.autoResizeHeight, onInputWithResize = _b.onInputWithResize, textAreaRef = _b.textAreaRef;
    var classModifier = (_a = {
            error: error,
            small: small,
            large: large,
            responsive: useResponsive()
        },
        _a["resize".concat((resize || 'both')
            .split('')
            .map(function (char, i) { return (i === 0 ? char.toUpperCase() : char); })
            .join(''))] = true,
        _a["width".concat((width || 'medium')
            .split('')
            .map(function (char, i) { return (i === 0 ? char.toUpperCase() : char); })
            .join(''))] = true,
        _a["height".concat(autoResizeHeight || height || '')] = true,
        _a);
    return (React.createElement("textarea", __assign({ ref: textAreaRef, id: id, name: name && name, placeholder: placeholder && placeholder, disabled: disabled && true, required: required && true, autoFocus: autofocus && true, onChange: onChange, onInput: onInputWithResize, onFocus: onFocus, onBlur: onBlur, onKeyDown: onKeyDown, onKeyUp: onKeyUp, "aria-label": label, "aria-labelledby": labelledby, "aria-required": required && true, value: value, autoComplete: autoComplete, maxLength: maxLength }, commonProps(props, 'vb-textarea', classModifier, {
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginTop: marginTop,
        marginSize: marginSize,
    })), defaultValue));
};
var TextArea = React.forwardRef(TextAreaInner);
export default TextArea;
//# sourceMappingURL=TextArea.js.map