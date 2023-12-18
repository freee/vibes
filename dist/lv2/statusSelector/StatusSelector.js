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
import WithDropdown from '../withDropdown/WithDropdown';
import { MdArrowDropDown } from 'react-icons/md';
import commonProps from '../../utilities/commonProps';
/**
 * StatusIconをクリッカブルにし、ドロップダウンから選択してステータスを切り替えられるようにしたコンポーネントです。
 *
 * 用途や type の使い分けについては StatusIcon の doc を参照してください。
 */
var StatusSelector = function (props) {
    var dropdownContents = props.dropdownContents, disabled = props.disabled, children = props.children, type = props.type, marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize;
    var statusSelectorBaseClass = 'vb-statusSelector';
    var camelCase = function (str) {
        var s = str.charAt(0).toLowerCase() + str.slice(1);
        return s.replace(/[-_](.)/g, function (_, group1) { return group1.toUpperCase(); });
    };
    var classModifier = [
        'done',
        'success',
        'progress',
        'required',
        'disabled',
        'emphasis',
        'warning',
        'error',
    ].reduce(function (acm, mod) {
        var _a;
        return (__assign(__assign({}, acm), (_a = {}, _a[camelCase("type_".concat(mod))] = type === mod, _a)));
    }, {
        disabled: disabled,
    });
    return (React.createElement(WithDropdown, { dropdownContents: dropdownContents, disabled: disabled, renderButton: function (dropdownId, isOpen, buttonRef) { return (React.createElement("button", __assign({}, commonProps(props, statusSelectorBaseClass, classModifier, {
            marginBottom: marginBottom,
            marginLeft: marginLeft,
            marginRight: marginRight,
            marginTop: marginTop,
            marginSize: marginSize,
        }), { "aria-disabled": disabled, "aria-haspopup": true, "aria-controls": dropdownId, "aria-expanded": isOpen, ref: buttonRef }),
            children,
            React.createElement(MdArrowDropDown, { className: "".concat(statusSelectorBaseClass, "__dropdownIcon") }))); } }));
};
export default StatusSelector;
//# sourceMappingURL=StatusSelector.js.map