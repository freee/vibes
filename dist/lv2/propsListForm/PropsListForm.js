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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import TextField from '../../lv1/forms/TextField';
import DigitsInput from '../formFields/DigitsInput';
import DateInput from '../formFields/DateInput';
import TextArea from '../../lv1/forms/TextArea';
import FormControlLabel from '../../lv1/forms/FormControlLabel';
import NumeralCodeInput from '../formFields/NumeralCodeInput';
import MessageIcon from '../../lv2/messageIcon/MessageIcon';
import { MarginBase, ReadOnlyField } from '../../lv1';
import Note from '../../lv1/typography/Note';
import { RequiredIcon } from '../../lv1/icons/RequiredIcon';
import WithDescriptionContent from '../../lv1/layout/WithDescriptionContent';
import useUniqueId from '../../hooks/useUniqueId';
/**
 * フォームの定義をすることでフォームの一覧表示をすることができるコンポーネントです。<br>
 * DescriptionListとデザイン面で大きく異なるのは2カラム以上で表示することができ、一画面で多くの項目を表示できる点です。
 */
var PropsListForm = function (props) {
    var blocks = props.blocks, rest = __rest(props, ["blocks"]);
    return (React.createElement("dl", { className: "vb-propListForm__list--wrap" }, blocks.map(function (block, i) { return (React.createElement(DLBlock, __assign({ block: block }, rest, { key: i }))); })));
};
var Item = function (_a) {
    var definition = _a.definition, itemWidth = _a.itemWidth, itemMarginRight = _a.itemMarginRight, rest = __rest(_a, ["definition", "itemWidth", "itemMarginRight"]);
    var values = rest.values, errors = rest.errors, readOnly = rest.readOnly, width = rest.width;
    var value = values[definition.key];
    var id = useUniqueId('vb-propListForm__form');
    var readOnlyValue = typeof definition.readOnlyValue === 'function' ? (definition.readOnlyValue({ value: value })) : typeof definition.readOnlyValue === 'string' ? (React.createElement(ReadOnlyField, { valueText: definition.readOnlyValue })) : (definition.readOnlyValue);
    var field = readOnly && readOnlyValue ? (readOnlyValue) : readOnly ? (React.createElement(ReadOnlyField, { valueText: value != null ? String(value) : undefined })) : (createField(definition, rest, id));
    var fieldErrors = ((errors === null || errors === void 0 ? void 0 : errors[definition.key]) || []);
    var annotation = typeof definition.annotation === 'function'
        ? definition.annotation({ readOnly: readOnly })
        : definition.annotation;
    var help = typeof definition.help === 'function'
        ? definition.help({ readOnly: readOnly })
        : definition.help;
    return (React.createElement("div", { className: "vb-propListForm__item", style: {
            width: itemWidth,
            marginRight: "".concat(itemMarginRight, "rem"),
        } },
        React.createElement("dt", { className: "vb-propListForm__term", style: {
                maxWidth: "".concat((width === null || width === void 0 ? void 0 : width.label) || 8, "rem"),
                minWidth: "".concat((width === null || width === void 0 ? void 0 : width.label) || 8, "rem"),
            } },
            React.createElement(MarginBase, { mb: 0.25, mt: 0.25 },
                React.createElement("span", { className: "vb-propListForm__termInner" },
                    React.createElement(FormControlLabel, { htmlFor: id },
                        React.createElement("span", { className: "vb-propListForm__termLabel" },
                            definition.label,
                            (definition.required || help) && (React.createElement("span", { className: "vb-propListForm__termIcons" },
                                !readOnly && definition.required && (React.createElement(RequiredIcon, { ml: 0.5 })),
                                help && (React.createElement(MessageIcon, { label: "\u30D8\u30EB\u30D7", ml: 0.25, small: true }, help))))))))),
        React.createElement("dd", { className: "vb-propListForm__description" },
            React.createElement(MarginBase, { mb: 0.25, mt: 0.25 },
                React.createElement("div", { className: "vb-propListForm__descriptionInner" },
                    React.createElement(WithDescriptionContent, { renderContent: function () { return (React.createElement("div", { className: "vb-propListForm__field" },
                            field,
                            fieldErrors.length > 0 && (React.createElement(ErrorMessageIcon, { errors: fieldErrors || [] })))); }, renderDescriptionContent: function () {
                            return annotation && React.createElement(Note, null, annotation);
                        } }))))));
};
var DLBlock = function (_a) {
    var block = _a.block, rest = __rest(_a, ["block"]);
    if (Array.isArray(block)) {
        return (React.createElement(React.Fragment, null, block.map(function (definition, i) { return (React.createElement(Item, __assign({ key: i, definition: definition, itemWidth: "calc((100% - ".concat(1.5 * (block.length - 1), "rem)/").concat(block.length, ")"), itemMarginRight: i + 1 === block.length ? 0 : 1.5 }, rest))); })));
    }
    else {
        var definitions = block.definitions, numberOfColumns_1 = block.numberOfColumns;
        return (React.createElement(React.Fragment, null, definitions.map(function (definition, i) { return (React.createElement(Item, __assign({ key: i, definition: definition, itemWidth: "calc((100% - ".concat(1.5 * (numberOfColumns_1 - 1), "rem)/").concat(numberOfColumns_1, ")"), itemMarginRight: (i + 1) % numberOfColumns_1 === 0 ? 0 : 1.5 }, rest))); })));
    }
};
var ErrorMessageIcon = function (_a) {
    var errors = _a.errors;
    return (React.createElement(MessageIcon, { error: true, label: "\u30A8\u30E9\u30FC", ml: 0.5 }, errors.map(function (error, i) {
        return (React.createElement("li", { key: i, style: { listStyle: 'none' } }, error));
    })));
};
var createField = function (_a, props, id) {
    var label = _a.label, key = _a.key, _b = _a.field, field = _b === void 0 ? { factor: 'text' } : _b;
    var values = props.values, errors = props.errors;
    var options = {
        id: id,
        error: errors && (errors[key] || []).length > 0,
        commonOnChange: function (value) {
            var _a;
            var newValues = __assign(__assign({}, values), (_a = {}, _a[key] = value, _a));
            props.onChange && props.onChange(newValues);
        },
        commonOnBlur: function (value) {
            var _a;
            var newValues = __assign(__assign({}, values), (_a = {}, _a[key] = value, _a));
            props.onBlur && props.onBlur(newValues);
        },
        label: label,
    };
    // フィールドの型指定がシンプルな型名だけの処理
    if (typeof field === 'object') {
        switch (field.factor) {
            case 'text':
                return createTextField(key, values, __assign(__assign({}, field), options));
            case 'text-area':
                return createTextArea(key, values, __assign(__assign({}, field), options));
            case 'number':
                return createNumberField(key, values, __assign(__assign({}, field), options));
            case 'date':
                return createDateField(key, values, __assign(__assign({}, field), options));
            case 'read-only-text':
                return React.createElement(ReadOnlyField, __assign({ valueText: String(values[key]) }, field));
            case 'numeral-code':
                return createNumeralCodeField(key, values, __assign(__assign({}, field), options));
        }
    }
    else if (typeof field === 'function') {
        return field({ id: id, value: values[key] });
    }
};
var createTextField = function (key, values, options) { return (React.createElement(TextField, __assign({}, options, { value: (values[key] || '') + '', onChange: (options === null || options === void 0 ? void 0 : options.onChange)
        ? options === null || options === void 0 ? void 0 : options.onChange
        : function (e) { return options === null || options === void 0 ? void 0 : options.commonOnChange(e.target.value); } }))); };
var createTextArea = function (key, values, options) { return (React.createElement(TextArea, __assign({}, options, { width: (options === null || options === void 0 ? void 0 : options.width) || 'small', value: (values[key] || '') + '', autoResize: true, onChange: (options === null || options === void 0 ? void 0 : options.onChange)
        ? options === null || options === void 0 ? void 0 : options.onChange
        : function (e) {
            return (options === null || options === void 0 ? void 0 : options.commonOnChange) && (options === null || options === void 0 ? void 0 : options.commonOnChange(e.target.value));
        } }))); };
var createNumberField = function (key, values, options) { return (React.createElement(DigitsInput, __assign({}, options, { value: +values[key], onChange: (options === null || options === void 0 ? void 0 : options.onChange) ? options === null || options === void 0 ? void 0 : options.onChange : options === null || options === void 0 ? void 0 : options.commonOnChange }))); };
var createDateField = function (key, values, options) { return (React.createElement(DateInput, __assign({}, options, { value: (values[key] || '') + '', onChange: (options === null || options === void 0 ? void 0 : options.onChange) ? options === null || options === void 0 ? void 0 : options.onChange : function (e) { return options === null || options === void 0 ? void 0 : options.commonOnChange(e); }, onBlur: (options === null || options === void 0 ? void 0 : options.onBlur)
        ? options === null || options === void 0 ? void 0 : options.onBlur
        : function (e) { return options === null || options === void 0 ? void 0 : options.commonOnBlur(e.target.value); } }))); };
var createNumeralCodeField = function (key, values, options) { return (React.createElement(NumeralCodeInput, __assign({}, options, { value: (values[key] || '') + '', onChange: (options === null || options === void 0 ? void 0 : options.onChange)
        ? options === null || options === void 0 ? void 0 : options.onChange
        : function (v) {
            if (!(options === null || options === void 0 ? void 0 : options.commonOnChange))
                return;
            if (v !== '')
                return options === null || options === void 0 ? void 0 : options.commonOnChange(Number(v));
            options === null || options === void 0 ? void 0 : options.commonOnChange(null);
        } }))); };
export default PropsListForm;
//# sourceMappingURL=PropsListForm.js.map