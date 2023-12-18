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
import Button from '../../lv1/buttons/Button';
import IconOnlyButton from '../../lv1/buttons/IconOnlyButton';
import WithFilterableDropdown from '../withFilterableDropdown/WithFilterableDropdown';
import { MdArrowDropDown, MdMoreHoriz } from 'react-icons/md';
import { pickCommonProps } from '../../utilities/commonProps';
/**
 * 選択肢をフィルター可能なドロップダウンボタンです。
 *
 * - 項目が少なく、フィルターが不要な場合は `DropdownButton` を使用してください。
 * - ボタン部分のカスタマイズがどうしても必要な場合は `WithFilterableDropdown` を使用してください。
 * - 上下キーでフォーカス移動、ESCキーで閉じられます。Tabキーでフォーカスを移動させる場合、メニューの外に出るとボタンへのフォーカスに戻ります
 * - メニューに入れられる項目は「クリック可能な項目（ボタンまたはリンク）」「チェックボックス」です
 *   - `DropdownButton` と違い、「テキスト」「区切り線」は使用できません。
 *   - 項目には複数の `keywords` を設定できます。読みがなやショートカットコードなどを指定すると、フィルターに使用できます
 *   - クリック可能な項目は `url` を渡されるとリンクとなります。遷移先のURLを特定できる場合は必ず `url` を渡してください
 *   - リンクに `target="_blank"` を渡した場合、右側に OpenInNew アイコンが表示されます。
 * - `iconOnly` を `true` とすることで、ラベルを表示せず「…」アイコンのみのボタンとなります。 **この場合も `aria-label` として使用するため、必ず `buttonLabel` に意味のある文字列を指定してください**
 */
var FilterableDropdownButton = function (props) {
    var iconOnly = props.iconOnly, appearance = props.appearance, buttonLabel = props.buttonLabel, small = props.small, large = props.large, disabled = props.disabled, dropdownContents = props.dropdownContents, onFilterChange = props.onFilterChange, onOpen = props.onOpen, iconPosition = props.iconPosition, IconComponent = props.IconComponent, isLoading = props.isLoading, fixedItems = props.fixedItems, noResultsMessage = props.noResultsMessage, noDataMessage = props.noDataMessage, renderDropdownBottomContent = props.renderDropdownBottomContent;
    return (React.createElement(WithFilterableDropdown, __assign({ disabled: disabled, dropdownContents: dropdownContents, onFilterChange: onFilterChange, onOpen: onOpen, isLoading: isLoading, fixedItems: fixedItems, noResultsMessage: noResultsMessage, noDataMessage: noDataMessage, renderDropdownBottomContent: renderDropdownBottomContent }, pickCommonProps(props), { render: function (dropdownId, isOpen, ref) {
            return iconOnly ? (React.createElement(IconOnlyButton, { IconComponent: IconComponent || MdMoreHoriz, appearance: appearance, "aria-controls": dropdownId, "aria-expanded": isOpen, "aria-haspopup": true, disabled: disabled, label: buttonLabel, small: small, large: large, ref: ref, type: "button" })) : (React.createElement(Button, { IconComponent: IconComponent || MdArrowDropDown, iconPosition: iconPosition || 'right', disabled: disabled, small: small, large: large, appearance: appearance, "aria-expanded": isOpen, "aria-haspopup": true, "aria-controls": dropdownId, ref: ref, type: "button" }, buttonLabel));
        } })));
};
export default FilterableDropdownButton;
//# sourceMappingURL=FilterableDropdownButton.js.map