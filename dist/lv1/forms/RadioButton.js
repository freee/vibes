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
import vbClassNames from '../../utilities/vbClassNames';
/**
 * 複数の選択肢からひとつだけを選ばせるコンポーネントです。
 *
 * - 「いくつかの選択肢の中からひとつ以上のものを選ぶ」用途には `CheckBox` を使用してください。
 * - ある状態に対して ON/OFF の選択肢からどちらかを選ぶ用途の場合は、`RadioButton` ふたつを使用しても、`CheckBox`ひとつを使用してもOKです。
 *     - スペースの都合や「デフォルト値を設定するべきか」などを考慮して決定してください。
 * - `RadioButton` を使うべきか `SelectBox` を使うべきかは、スペース上の都合などを考慮して決定してください。
 *   - `RadioButton` は `SelectBox` よりスペースが必要ですが、はじめから選択肢が表示されているという特徴があります。
 * - 基本的にラジオボタンのラベルには句読点は使わないようにしてください。
 *
 *  ## accessibility
 * VibesのRadioButtonコンポーネントはブラウザのデフォルト表示の見た目から変更していません。
 * a11yチェックにある「クリックやタッチに反応するサイズが、充分な大きさになっているか」の項目OKにして問題ありません。
 *
 * ラジオボタンを実装する際は、グループ単位で使用してください。
   - 一つのグループ内に複数の選択肢があるイメージです。
 * グループ内を上下左右キーを使って移動できるようにしてください。
   - グループ内の最後の選択肢まで移動したら最初の選択肢に戻るようになっていれば、name属性の指定によって正しい挙動が設定できています。
 * `name`属性を正しく指定することが必要です。
   - `name`属性は、選択肢がどのグループに属しているのかを判別するために使われます。
     - 複数のグループが並んでいる際、グループごとに別々のname 属性がないと全ての選択肢が１つのグループとして認識されてしまうため、キーボード操作やスクリーンリーダーで不便になります。
 * 以下のように設定してください
 
  ```jsx
      <FormControl label="性別">
          <RadioButton name="sex">男性</RadioButton>
          <RadioButton name="sex">女性</RadioButton>
          <RadioButton name="sex">その他</RadioButton>
          <RadioButton name="sex">回答しない</RadioButton>
      </FormControl>
      <FormControl label="年齢">
          <RadioButton name="age">10代</RadioButton>
          <RadioButton name="age">20代</RadioButton>
          <RadioButton name="age">30代</RadioButton>
          <RadioButton name="age">40代</RadioButton>
         <RadioButton name="age">50代</RadioButton>
          <RadioButton name="age">60代以上</RadioButton>
      </FormControl>
  ```
 */
var RadioButton = function (props) {
    var children = props.children, name = props.name, value = props.value, checked = props.checked, required = props.required, autofocus = props.autofocus, disabled = props.disabled, error = props.error, small = props.small, onChange = props.onChange, onInput = props.onInput, onFocus = props.onFocus, onBlur = props.onBlur, onKeyDown = props.onKeyDown, onKeyUp = props.onKeyUp, marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize;
    var className = 'vb-radio';
    var classModifier = {
        disabled: disabled,
        error: error,
        small: small,
    };
    return (React.createElement("label", __assign({}, commonProps(props, className, classModifier, {
        marginTop: marginTop,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginBottom: marginBottom,
        marginSize: marginSize,
    })),
        React.createElement("input", { type: "radio", name: name && name, value: value && value, className: vbClassNames(className + '__control', {
                modifier: classModifier,
            }), disabled: disabled && true, checked: checked && true, required: required && true, autoFocus: autofocus && true, onChange: onChange, onInput: onInput, onFocus: onFocus, onBlur: onBlur, onKeyDown: onKeyDown, onKeyUp: onKeyUp }),
        React.createElement("span", { className: className + '__label' }, children)));
};
export default RadioButton;
//# sourceMappingURL=RadioButton.js.map