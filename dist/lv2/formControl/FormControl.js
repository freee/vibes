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
import FormControlLabel from '../../lv1/forms/FormControlLabel';
import MessageIcon from '../../lv2/messageIcon/MessageIcon';
import useUniqueId from '../../hooks/useUniqueId';
import commonProps from '../../utilities/commonProps';
/**
 * フォームの入力欄1つずつを表現するコンポーネントです。
 *
 * * `FormControlGroup` 内に複数個配置することで、水平方向にフィールドの並んだフォームを作ることができます。
 * * `help` propによって入力方法の案内などをヘルプアイコンとして表示することができます
 *   * 案内の内容が複雑であったり、理解・記憶・学習が難しいものについてはヘルプアイコンにせず、常時表示しておくことを検討してください
 *
 * ## accessibility
 * * 中に入るフィールド (`TextField` 等) が1つの場合は、フィールドの `id` 属性を必ず設定し、 `FormControl` の `fieldId` propを必ず同じにしてください。
 *   * [フォーム・コントロールのラベル付け](https://a11y-guidelines.freee.co.jp/explanations/form-labeling.html) のために必要です
 *   * `CheckBox` や `RadioButton` コンポーネントは、内部 (`children` propの部分）に `<label>` 要素を持つため、`fieldId` の指定は必要ありません
 * * 複数のラジオボタンやテキストフィールドが入る場合には、`fieldId` を設定しないでください（`<fieldset>`と`<legend>` による表現になります）。
 *   この場合、個別のフィールドには別の方法でラベル付けを行ってください。
 *   * `CheckBox` や `RadioButton` コンポーネントは、内部 (`children` propの部分）に `<label>` 要素を持つため、何もしなくてOKです
 *   * テキストフィールドやセレクトボックス、Vibesのコンポーネントを使わずに作るラジオボタンやチェックボックス は、`<label>` 要素と並べて配置してください。
 *   * どうしても`<label>`要素が使用できない場合は、 `aria-label` 属性や `aria-labelledby` 属性を使用してください。 `TextField` `SelectBox` `TextArea` の各コンポーネントは、 `label` と `labelledby` propが `aria-label` 属性と `aria-labelledby` 属性に対応します
 */
var FormControl = function (props) {
    var marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, fieldId = props.fieldId, id = props.id, label = props.label, required = props.required, help = props.help, children = props.children, marginSize = props.marginSize;
    var labelId = useUniqueId('vb-formControl', id && "".concat(id, "__label"));
    var baseClass = 'vb-formControl';
    var labelInner = label ? (React.createElement(FormControlLabel, { id: labelId, htmlFor: fieldId, required: required }, label)) : null;
    return (React.createElement("div", __assign({}, commonProps(props, baseClass, {}, { marginTop: marginTop, marginLeft: marginLeft, marginRight: marginRight, marginBottom: marginBottom, marginSize: marginSize })),
        React.createElement("fieldset", { className: "vb-formControl__fieldset", id: id },
            React.createElement("legend", { className: "vb-formControl__legend" },
                React.createElement("div", { className: "vb-formControl__labelArea" },
                    labelInner,
                    help ? (React.createElement(MessageIcon, { label: "\u30D8\u30EB\u30D7", ml: 0.25, small: true }, help)) : null)),
            React.createElement("div", { className: "vb-formControl__formArea" }, children))));
};
export default FormControl;
//# sourceMappingURL=FormControl.js.map