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
import IconOnlyButton from '../../lv1/buttons/IconOnlyButton';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdArrowDropDown, } from 'react-icons/md';
import { WithPopup } from '..';
import { Button } from '../../lv1';
import commonProps from '../../utilities/commonProps';
/**
 * 月ごとに作られるページなどの切り替えに使用します。
 *
 * - 左右に「前へ」「次へ」ボタンがあります
 * - 中央にタイトル部分があります。クリックすることでポップアップを開くことができます。
 */
var PageSelector = function (props) {
    var prevDisabled = props.prevDisabled, nextDisabled = props.nextDisabled, onClickNext = props.onClickNext, onClickTitle = props.onClickTitle, onClickPrev = props.onClickPrev, children = props.children, renderPopup = props.renderPopup, hasDropdown = props.hasDropdown, isExpanded = props.isExpanded, marginTop = props.marginTop, marginRight = props.marginRight, marginLeft = props.marginLeft, marginBottom = props.marginBottom, marginSize = props.marginSize;
    return (React.createElement("span", __assign({}, commonProps(props, 'vb-pageSelector', {}, {
        marginTop: marginTop,
        marginRight: marginRight,
        marginLeft: marginLeft,
        marginBottom: marginBottom,
        marginSize: marginSize,
    })),
        React.createElement(IconOnlyButton, { IconComponent: MdKeyboardArrowLeft, onClick: onClickPrev, disabled: prevDisabled, label: "\u524D\u3078", mr: 0.25, small: true }),
        renderPopup ? (React.createElement(WithPopup, { render: function (popupId, isOpen, controlRef) { return (React.createElement(Button, { "aria-haspopup": true, "aria-expanded": isOpen, onClick: onClickTitle, "aria-controls": popupId, ref: controlRef, iconPosition: "right", IconComponent: MdArrowDropDown, appearance: "tertiary" }, children)); }, renderPopup: renderPopup })) : hasDropdown ? (React.createElement(Button, { "aria-haspopup": true, "aria-expanded": isExpanded, onClick: onClickTitle, iconPosition: "right", IconComponent: MdArrowDropDown, appearance: "tertiary" }, children)) : onClickTitle ? (React.createElement(Button, { onClick: onClickTitle, appearance: "tertiary" }, children)) : (React.createElement("span", { className: "vb-pageSelector__currentPage" }, children)),
        React.createElement(IconOnlyButton, { IconComponent: MdKeyboardArrowRight, onClick: onClickNext, disabled: nextDisabled, label: "\u6B21\u3078", ml: 0.25, small: true })));
};
export default PageSelector;
//# sourceMappingURL=PageSelector.js.map