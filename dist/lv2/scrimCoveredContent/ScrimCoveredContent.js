var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
import { pickCommonProps } from '../../utilities/commonProps';
import Paragraph from '../../lv1/typography/Paragraph';
import styled from 'styled-components';
import { OverlayZIndex } from '../../constants';
import { CommonStyle } from '../../internal/CommonStyle';
var Style = styled(CommonStyle).attrs(function (_a) {
    var inline = _a.inline;
    return ({
        inline: inline,
        as: 'div',
    });
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  ", "\n\n  .vb-scrimCoveredContent__cover {\n    z-index: ", ";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(255, 255, 255, 0.7);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    backdrop-filter: blur(0.1rem);\n  }\n"], ["\n  position: relative;\n  ", "\n\n  .vb-scrimCoveredContent__cover {\n    z-index: ", ";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(255, 255, 255, 0.7);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    backdrop-filter: blur(0.1rem);\n  }\n"])), function (_a) {
    var inline = _a.inline;
    return ({ display: inline ? 'inline-block' : 'block' });
}, OverlayZIndex);
/**
 * 非活性なコンテンツにメッセージ付きのスクリムを被せるコンポーネント
 */
var ScrimCoveredContent = function (_a) {
    var children = _a.children, inline = _a.inline, message = _a.message, props = __rest(_a, ["children", "inline", "message"]);
    return (React.createElement(Style, __assign({ inline: inline }, pickCommonProps(props)),
        React.createElement("div", { className: "vb-scrimCoveredContent__cover" }, message && React.createElement(Paragraph, null, message)),
        children));
};
export default ScrimCoveredContent;
var templateObject_1;
//# sourceMappingURL=ScrimCoveredContent.js.map