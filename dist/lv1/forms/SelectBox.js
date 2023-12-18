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
import vbClassNames from '../../utilities/vbClassNames';
import commonProps from '../../utilities/commonProps';
var SelectBoxInner = function (props, ref) {
    var label = props.label, labelledby = props.labelledby, id = props.id, options = props.options, name = props.name, value = props.value, defaultValue = props.defaultValue, required = props.required, autofocus = props.autofocus, disabled = props.disabled, error = props.error, small = props.small, large = props.large, alignCenter = props.alignCenter, alignRight = props.alignRight, width = props.width, autoComplete = props.autoComplete, onChange = props.onChange, onInput = props.onInput, onFocus = props.onFocus, onBlur = props.onBlur, onKeyDown = props.onKeyDown, onKeyUp = props.onKeyUp, marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize;
    var wrapClassName = vbClassNames('vb-select', {
        modifier: {
            widthXSmall: width === 'xSmall',
            widthSmall: width === 'small',
            widthMedium: width === 'medium' || !width,
            widthLarge: width === 'large',
            widthFull: width === 'full',
        },
    });
    var classModifier = {
        error: error,
        small: small,
        alignCenter: alignCenter,
        alignRight: alignRight,
    };
    var className = vbClassNames('vb-select__body', {
        modifier: {
            error: error,
            small: small,
            large: large,
            alignCenter: alignCenter,
            alignRight: alignRight,
        },
    });
    var makeOptionItems = function (opts) {
        return opts.map(function (opt, index) {
            return opt.options ? ( // optionsあればSelectBoxOptionGroupなんだぜ
            React.createElement("optgroup", { key: index, label: opt.name, disabled: !!opt.disabled }, makeOptionItems(opt.options))) : (React.createElement("option", { key: index, value: opt.value, disabled: !!opt.disabled }, opt.name));
        });
    };
    return (React.createElement("div", __assign({}, commonProps(props, wrapClassName, classModifier, {
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginTop: marginTop,
        marginSize: marginSize,
    })),
        React.createElement("select", { name: name && name, className: className, id: id, ref: ref, value: value, defaultValue: defaultValue, disabled: disabled && true, required: required && true, autoFocus: autofocus && true, onChange: onChange, onInput: onInput, onFocus: onFocus, onBlur: onBlur, onKeyDown: onKeyDown, onKeyUp: onKeyUp, "aria-label": label, "aria-labelledby": labelledby, "aria-required": required && true, autoComplete: autoComplete }, makeOptionItems(options || []))));
};
/**
 * 汎用のselectコンポーネントです。
 * 「複数のうちからひとつを選ぶ」入力欄の場合に使用してください。
 *
 * - 必ず `<label>` 要素によるラベル付けを行ってください
 *   - `FormControl` を使用する場合は、`SelectBox` に `id` を指定し、同じ文字列を `FormControl` の `fieldId` に指定してください
 *   - どうしても `<label>` 要素が使用できない場合に限り、 `label` または `labelledby` を使ってラベル付けをしてください
 * - 大量に選択肢がある場合は `SingleComboBox` の仕様を検討してください。テキストを入力することで選択肢を絞り込むことができます。
 * - 幅を変えたいときは width オプションを変更します。特に柔軟に選択したい場合は、widthオプションを full にすることで親要素に対して100%にすることができます。
 *
 * 似ているコンポーネントに `DropdownButton` が存在します。
 * `DropdownButton` は「押下するとドロップダウンメニューを開く **ボタン**」で、`SelectBox` は「選択肢のなかから一つを選ぶ **フォームの部品** 」です。
 * 両者の違いについては、 `DropdownButton` のドキュメントを参照してください。
 */
var SelectBox = React.forwardRef(SelectBoxInner);
export default SelectBox;
//# sourceMappingURL=SelectBox.js.map