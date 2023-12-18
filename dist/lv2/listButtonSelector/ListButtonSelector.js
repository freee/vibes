var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import PopupBase from '../../lv1/bases/PopupBase';
import NegativeMarginBase from '../../lv1/bases/NegativeMarginBase';
import TextButton from '../../lv1/buttons/TextButton';
import ListButtons from '../listButtons/ListButtons';
import Note from '../../lv1/typography/Note';
import { MdArrowDropDown } from 'react-icons/md';
import { KeyCodes } from '../../utilities/keyboard';
/**
 * コンポーネントの位置付けについて議論の余地がある状態なので、新規に使用しないでください。
 *
 * どうしても使用したい場合は必ず相談してください
 */
var ListButtonSelector = /** @class */ (function (_super) {
    __extends(ListButtonSelector, _super);
    function ListButtonSelector(props) {
        var _this = _super.call(this, props) || this;
        _this.selectableItemRefs = [];
        _this.toggleOpen = function () {
            _this.setState({ isOpen: !_this.state.isOpen });
        };
        // これはwindowに対するlistenerなので、eventの型は組込みのMouseEventとなる
        _this.handleClose = function (e) {
            if (_this.ref.current &&
                e.target instanceof HTMLElement &&
                !_this.ref.current.contains(e.target)) {
                _this.setState({ isOpen: false });
            }
        };
        _this.ref = React.createRef();
        _this.state = { isOpen: false };
        return _this;
    }
    ListButtonSelector.prototype.componentDidMount = function () {
        var _this = this;
        // setTimeOutを0で置くことで、キューの最後に持ってくる
        setTimeout(function () {
            window.addEventListener('click', _this.handleClose);
        }, 0);
    };
    ListButtonSelector.prototype.componentWillUnmount = function () {
        window.removeEventListener('click', this.handleClose);
    };
    ListButtonSelector.prototype.handleKeyDownSelectableItem = function (e, itemIndex) {
        var prevItem = this.selectableItemRefs[itemIndex - 1];
        var nextItem = this.selectableItemRefs[itemIndex + 1];
        switch (e.keyCode) {
            case KeyCodes.UP:
                e.preventDefault();
                prevItem && prevItem.focus();
                break;
            case KeyCodes.DOWN:
                e.preventDefault();
                nextItem && nextItem.focus();
                break;
        }
    };
    ListButtonSelector.prototype.render = function () {
        var _this = this;
        var _a = this.props, selectedLabel = _a.selectedLabel, selectorLabel = _a.selectorLabel, actionLabel = _a.actionLabel, action = _a.action, ActionIconComponent = _a.ActionIconComponent, buttons = _a.buttons, disabled = _a.disabled, marginTop = _a.marginTop, marginLeft = _a.marginLeft, marginRight = _a.marginRight, marginBottom = _a.marginBottom, marginSize = _a.marginSize;
        var buttonClassName = vbClassNames('vb-listButtonSelector__button', {
            modifier: { disabled: disabled, isOpen: this.state.isOpen },
        });
        this.selectableItemRefs = [];
        var withAction = actionLabel && ActionIconComponent && action;
        return (React.createElement("div", __assign({ ref: this.ref }, commonProps(this.props, 'vb-listButtonSelector', {}, {
            marginTop: marginTop,
            marginLeft: marginLeft,
            marginRight: marginRight,
            marginBottom: marginBottom,
            marginSize: marginSize,
        })),
            React.createElement("button", { "aria-expanded": this.state.isOpen ? 'true' : 'false', onClick: function () {
                    !disabled && _this.toggleOpen();
                }, className: buttonClassName, disabled: disabled && true, type: "button" },
                selectedLabel,
                React.createElement(MdArrowDropDown, { className: "vb-listButtonSelector__icon", focusable: false })),
            this.state.isOpen && (React.createElement("div", { className: "vb-listButtonSelector__popupWrapper" },
                React.createElement(PopupBase, { small: true },
                    React.createElement(React.Fragment, null,
                        React.createElement(Note, { marginBottom: true, marginSize: "small" }, selectorLabel),
                        React.createElement(NegativeMarginBase, { marginSize: "small", left: true, right: true, bottom: !withAction },
                            React.createElement(ListButtons, { buttons: buttons, selectableItemRef: function (el) {
                                    el && _this.selectableItemRefs.push(el);
                                }, onKeyDown: this.handleKeyDownSelectableItem.bind(this) })),
                        withAction ? (React.createElement(TextButton, { onClick: function () {
                                action && action();
                            }, IconComponent: ActionIconComponent ? ActionIconComponent : undefined, marginTop: true, small: true, noBorder: true }, actionLabel)) : null))))));
    };
    return ListButtonSelector;
}(React.Component));
export default ListButtonSelector;
//# sourceMappingURL=ListButtonSelector.js.map