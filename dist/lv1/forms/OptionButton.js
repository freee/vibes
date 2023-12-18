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
import useUniqueId from '../../hooks/useUniqueId';
var dispatchClickToInput = function (elm) {
    var input = elm.querySelector('input');
    var evt = new MouseEvent('click', {
        bubbles: true,
        cancelable: false,
    });
    input && input.dispatchEvent(evt);
};
/**
 * チェックボックス・ラジオボタンをボタン風に見せるためのコンポーネントです
 *
 * * `<CheckBox>` `<RadioButton>` を `children` 内で使用してください
 *   * 領域内でのクリック時、 `<input>` に click イベントをdispatchします。必ず `<input>` が内部に1つだけ配置されるようにしてください（`<CheckBox>` `<RadioButton>` を1つだけ配置すれば、この条件を満たします）
 * * `checked` propをtrueにすると、枠線の色と太さが変わり、選択済みであることを示す見た目になります
 *   * `children` に入れた `<CheckBox>` `<RadioButton>` のステートとは連動しないので、必ず連動するようにコードを記述してください
 * * 内部には、リンクやボタンなどの、`<CheckBox>` `<RadioButton>`以外のクリッカブルな要素は配置できません
 */
export var OptionButton = function (props) {
    var children = props.children, id = props.id, checked = props.checked, size = props.size, width = props.width;
    var className = 'vb-optionButton';
    var selfRef = React.useRef(null);
    var internalId = useUniqueId(className, id);
    return (React.createElement("span", __assign({}, commonProps(props, className, {
        checked: checked,
        sizeSmall: size === 'small',
        sizeMedium: size === 'medium',
        sizeLarge: size === 'large',
        widthFull: width === 'full',
    }), { id: internalId, ref: selfRef }),
        React.createElement("span", { className: "".concat(className, "__button"), id: "".concat(internalId, "__button"), onClick: function () {
                selfRef.current && dispatchClickToInput(selfRef.current);
            }, 
            // ラジオボタンのクリック可能領域を視覚的に巨大にするための要素なのでaria-hiddenだけど、ロール的にはbuttonだしaria-labelledbyするよ
            role: "button", "aria-hidden": "true", "aria-labelledby": "".concat(internalId, "__children") }),
        React.createElement("span", { className: "".concat(className, "__children"), id: "".concat(internalId, "__children") },
            React.createElement("span", { className: "".concat(className, "__children__inner") }, children))));
};
//# sourceMappingURL=OptionButton.js.map