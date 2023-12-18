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
import { MdArrowDropDown, MdMoreHoriz } from 'react-icons/md';
import Button from '../../lv1/buttons/Button';
import IconOnlyButton from '../../lv1/buttons/IconOnlyButton';
import commonProps from '../../utilities/commonProps';
import WithDropdown from '../withDropdown/WithDropdown';
import { filterButtonAriaProps, } from '../../utilities/AriaProps';
/**
 * ボタンを押すとドロップダウンメニューが表示されるボタン。
 *
 * - 上下キーでフォーカス移動、ESCキーで閉じられます。Tabキーでフォーカスを移動させる場合、メニューの外に出るとボタンへのフォーカスに戻ります
 * - メニューに入れられる項目は「クリック可能な項目（ボタンまたはリンク）」「チェックボックス」「区切り線」「テキスト」です
 *   - クリック可能な項目は `url` を渡されるとリンクとなります。遷移先のURLを特定できる場合は必ず `url` を渡してください
 *   - リンクに `target="_blank"` を渡した場合、右側に OpenInNew アイコンが表示されます。
 * - `iconOnly` を `true` とすることで、ラベルを表示せず「…」アイコンのみのボタンとなります。 **この場合も `aria-label` として使用するため、必ず `buttonLabel` に意味のある文字列を指定してください**
 * - ユーザーが設定したものが並ぶ場合など、項目が多くなるときは `DropdownButton` の使用を検討してください。
 *
 * ## `SelectBox` との違い
 *
 * DropdownButtonは「押下するとドロップダウンメニューを開く **ボタン**」で、SelectBox は「選択肢のなかから一つを選ぶ **フォームの部品** 」です。
 *
 * - `SelectBox` は `TextField` などのフォームコンポーネントと同じく、別に配置した `FormControlLabel` などのラベルを紐付けて使用します。
 *   `DropdownButton` はボタンのラベルが accessible name （スクリーンリーダーが認識する名称）となり、別に配置したラベルを紐付けることはできません。
 * - コンポーネントを操作していないとき、 `SelectBox` は選択中の選択肢の名前を表示します。 `DropdownButton` はボタンのラベル ( `buttonLabel` ) を表示します。
 * - `DropdownButton` のボタンのラベル ( `buttonLabel` ) には、「押下することでメニューが開く」挙動であることが自然な文言を指定してください（「選択中のもの」の表示に使用しないでください）
 *
 * @param props
 */
var DropdownButton = function (props) {
    var buttonLabel = props.buttonLabel, disabled = props.disabled, small = props.small, large = props.large, dropdownContents = props.dropdownContents, appearance = props.appearance, iconOnly = props.iconOnly, iconPosition = props.iconPosition, contentsFixed = props.contentsFixed, IconOnlyComponent = props.IconOnlyComponent, marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize, onOpen = props.onOpen, onClose = props.onClose;
    return (React.createElement("span", __assign({}, commonProps(props, 'vb-dropdownButton', {}, { marginTop: marginTop, marginLeft: marginLeft, marginRight: marginRight, marginBottom: marginBottom, marginSize: marginSize })),
        React.createElement(WithDropdown, { dropdownContents: dropdownContents, disabled: disabled, renderButton: function (dropdownId, isOpen, ref) {
                return iconOnly ? (React.createElement(IconOnlyButton, __assign({}, filterButtonAriaProps(props), { IconComponent: IconOnlyComponent || MdMoreHoriz, appearance: appearance, "aria-controls": dropdownId, "aria-expanded": isOpen, "aria-haspopup": true, disabled: disabled, label: buttonLabel, small: small, large: large, ref: ref, type: "button" }))) : (React.createElement(Button, __assign({}, filterButtonAriaProps(props), { IconComponent: MdArrowDropDown, iconPosition: iconPosition || 'right', disabled: disabled, small: small, large: large, appearance: appearance, "aria-expanded": isOpen, "aria-haspopup": true, "aria-controls": dropdownId, ref: ref, type: "button" }), buttonLabel));
            }, contentsFixed: contentsFixed, onOpen: onOpen, onClose: onClose })));
};
export default DropdownButton;
//# sourceMappingURL=DropdownButton.js.map