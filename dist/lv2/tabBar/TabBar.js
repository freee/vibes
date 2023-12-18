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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import Tab from '../../lv1/interactiveParts/Tab';
import { KeyCodes } from '../../utilities/keyboard';
import commonProps from '../../utilities/commonProps';
import ButtonGroup from '../buttonGroup/ButtonGroup';
var TabBar = function (_a) {
    var currentTabIndex = _a.currentTabIndex, onClickTab = _a.onClickTab, small = _a.small, tabs = _a.tabs, renderButtons = _a.renderButtons, props = __rest(_a, ["currentTabIndex", "onClickTab", "small", "tabs", "renderButtons"]);
    var selfRef = React.useRef(null);
    var _b = React.useState(currentTabIndex), selectedTabIndex = _b[0], setSelectedTabIndex = _b[1];
    var handleKeyDown = function (e) {
        var focusableItems = selfRef.current
            ? selfRef.current.querySelectorAll('.vb-tab')
            : null;
        if (!focusableItems) {
            return;
        }
        switch (e.keyCode) {
            case KeyCodes.LEFT: {
                var newIndex = (selectedTabIndex < 0 ? currentTabIndex : selectedTabIndex) - 1;
                var newTab = focusableItems[newIndex];
                if (newTab) {
                    setSelectedTabIndex(newIndex);
                    newTab.focus();
                }
                break;
            }
            case KeyCodes.RIGHT: {
                var newIndex = (selectedTabIndex < 0 ? currentTabIndex : selectedTabIndex) + 1;
                var newTab = focusableItems[newIndex];
                if (newTab) {
                    setSelectedTabIndex(newIndex);
                    newTab.focus();
                }
                break;
            }
            case KeyCodes.TAB: {
                setSelectedTabIndex(currentTabIndex);
                break;
            }
        }
    };
    var handleFocus = function (e) {
        var focusableItems = selfRef.current
            ? selfRef.current.querySelectorAll('.vb-tab')
            : null;
        if (focusableItems && e.target) {
            var index = Array.prototype.indexOf.call(focusableItems, e.target);
            if (index >= 0) {
                setSelectedTabIndex(index);
            }
        }
    };
    return (React.createElement("div", __assign({ onKeyDown: handleKeyDown, onFocus: handleFocus, role: "tablist", tabIndex: -1 }, commonProps(props, 'vb-tabBar'), { ref: selfRef }),
        React.createElement("div", null, tabs.map(function (tab, i) { return (React.createElement(Tab, { key: i, current: currentTabIndex === i, small: small && true, selected: selectedTabIndex === i, onClick: function () { return onClickTab(i); }, "data-guide": typeof tab !== 'string' ? tab['data-guide'] : undefined, "data-test": typeof tab !== 'string' ? tab['data-test'] : undefined, "data-tracking": typeof tab !== 'string' ? tab['data-tracking'] : undefined, "data-masking": typeof tab !== 'string' ? tab['data-masking'] : undefined, notification: typeof tab !== 'string' && tab.notification
                ? tab.notification
                : undefined }, typeof tab !== 'string' ? tab.name : tab)); })),
        renderButtons && React.createElement(ButtonGroup, { ml: 1 }, renderButtons())));
};
export default TabBar;
//# sourceMappingURL=TabBar.js.map