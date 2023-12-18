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
import { KeyCodes } from '../../utilities/keyboard';
import selfWindowNavigator from '../../utilities/selfWindowNavigator';
import { filterTableRowAriaProps, } from '../../utilities/AriaProps';
var TableListRow = function (props, ref) {
    var children = props.children, onClick = props.onClick, url = props.url, onSelfWindowNavigation = props.onSelfWindowNavigation;
    var baseClassName = 'vb-tableListRow';
    var classModifier = {
        clickable: !!onClick || !!url,
    };
    return onClick || url ? (React.createElement("tr", __assign({ tabIndex: 0, ref: ref, onClick: onClick, onKeyDown: function (e) {
            if (e.target !== e.currentTarget) {
                return;
            }
            if (e.keyCode === KeyCodes.ENTER) {
                e.preventDefault();
                if (url) {
                    var a = document.createElement('a');
                    a.setAttribute('href', url);
                    var event_1 = new MouseEvent('click', {
                        ctrlKey: e.ctrlKey,
                        shiftKey: e.shiftKey,
                        metaKey: e.metaKey,
                        altKey: e.altKey,
                        cancelable: true,
                    });
                    var navigator_1 = selfWindowNavigator(onSelfWindowNavigation);
                    if (navigator_1) {
                        a.addEventListener('click', function (e) { return navigator_1(e, url); });
                    }
                    a.dispatchEvent(event_1);
                }
                if (onClick) {
                    onClick();
                }
            }
        } }, commonProps(props, baseClassName, classModifier), filterTableRowAriaProps(props)), children)) : (React.createElement("tr", __assign({}, commonProps(props, baseClassName, classModifier), filterTableRowAriaProps(props), { ref: ref }), children));
};
export default React.forwardRef(TableListRow);
//# sourceMappingURL=TableListRow.js.map