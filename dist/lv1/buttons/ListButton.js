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
import StatusIcon from '../icons/StatusIcon';
import { MdOpenInNew } from 'react-icons/md';
import commonProps from '../../utilities/commonProps';
/**
 * `lv2/ListButtons` および `lv2/ListButtonSelector` で使用される想定のボタンです。単独で使用しないでください
 */
var ListButton = function (props) {
    var selectableItemIndex = props.selectableItemIndex, children = props.children, selected = props.selected, href = props.href, target = props.target, rel = props.rel, statusIconText = props.statusIconText, statusIconType = props.statusIconType, actionButton = props.actionButton, LeftIconComponent = props.LeftIconComponent, FarRightIconComponent = props.FarRightIconComponent, bgTransparent = props.bgTransparent, onClick = props.onClick, selectableItemRef = props.selectableItemRef, onKeyDown = props.onKeyDown, marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize;
    var buttonBaseClass = 'vb-listButton';
    var classModifier = {
        selected: selected,
        bgTransparent: bgTransparent,
        actionButton: actionButton,
    };
    var buttonValue = (React.createElement(React.Fragment, null,
        LeftIconComponent ? (React.createElement(LeftIconComponent, { className: buttonBaseClass + '__leftIcon' })) : null,
        children,
        statusIconText && (React.createElement(StatusIcon, { type: statusIconType, marginLeft: true, marginSize: "small" }, statusIconText)),
        FarRightIconComponent ? (React.createElement(FarRightIconComponent, { className: buttonBaseClass + '__farRightIcon' })) : null));
    return selected ? (React.createElement("span", __assign({ "aria-selected": "true", role: "option" }, commonProps(props, buttonBaseClass, classModifier, {
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginSize: marginSize,
        marginTop: marginTop,
    })), buttonValue)) : href ? (React.createElement("a", __assign({ href: href, target: target ? target : '_self', rel: rel, onClick: onClick, "aria-selected": selected && true, role: "option", ref: selectableItemRef, onKeyDown: function (e) {
            onKeyDown &&
                typeof selectableItemIndex === 'number' && // 0だと通らなくなってしまうのでtypeをみる
                onKeyDown(e, selectableItemIndex);
        } }, commonProps(props, buttonBaseClass, classModifier, {
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginSize: marginSize,
        marginTop: marginTop,
    })),
        buttonValue,
        target === '_blank' && (React.createElement(MdOpenInNew, { className: buttonBaseClass + '__farRightIcon' })))) : (React.createElement("button", __assign({ onClick: onClick, "aria-selected": selected && true, role: "option", type: "button", ref: selectableItemRef, onKeyDown: function (e) {
            onKeyDown &&
                typeof selectableItemIndex === 'number' && // 0だと通らなくなってしまうのでtypeをみる
                onKeyDown(e, selectableItemIndex);
        } }, commonProps(props, buttonBaseClass, classModifier, {
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginSize: marginSize,
        marginTop: marginTop,
    })), buttonValue));
};
export default ListButton;
//# sourceMappingURL=ListButton.js.map