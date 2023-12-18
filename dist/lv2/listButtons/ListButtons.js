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
import ListButton from '../../lv1/buttons/ListButton';
/**
 * `lv2/ListButtonSelector` で使用される想定のボタンです。単独で使用しないでください
 */
var ListButtons = function (props) {
    var buttons = props.buttons, selectableItemRef = props.selectableItemRef, onKeyDown = props.onKeyDown, marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize;
    var selectableItemIdxCounter = 0;
    return (React.createElement("div", __assign({ role: "listbox" }, commonProps(props, 'vb-listButtons', {}, {
        marginTop: marginTop,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginBottom: marginBottom,
        marginSize: marginSize,
    })), buttons.map(function (contents, i) {
        // 選択済み以外のもので何番めか
        var selectableItemIndex = contents.selected
            ? -1
            : selectableItemIdxCounter++;
        return (React.createElement(ListButton, { key: i, selectableItemIndex: selectableItemIndex, href: contents.href, target: contents.target, rel: contents.rel, selected: contents.selected, statusIconText: contents.statusIconText, statusIconType: contents.statusIconType, onClick: contents.onClick, bgTransparent: i % 2 != 0, selectableItemRef: selectableItemRef, onKeyDown: onKeyDown }, contents.label));
    })));
};
export default ListButtons;
//# sourceMappingURL=ListButtons.js.map