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
import React, { useMemo, useRef } from 'react';
import { Link } from 'react-scroll';
import commonProps from '../../utilities/commonProps';
/**
 * `<WithTOC/>` represents a list of content sections with an automatically generated table of contents.
 * 目次付きのコンテンツリストです。
 */
var WithTOC = function (props) {
    var baseClass = 'vb-withTOC';
    var containerID = props.containerID, contents = props.contents, offsetTop = props.offsetTop, onNavigateTo = props.onNavigateTo;
    var contentsRef = useRef(null);
    var toc = useMemo(function () {
        return contents.map(function (c) { return (React.createElement("li", { key: "index-".concat(c.id) },
            React.createElement(Link, { to: c.id, className: "".concat(baseClass, "__toc__link"), activeClass: "".concat(baseClass, "__toc__link--current"), href: "#".concat(c.id), onClick: function () {
                    var _a, _b;
                    (_b = (_a = contentsRef.current) === null || _a === void 0 ? void 0 : _a.querySelector(".".concat(baseClass, "__contents__section#").concat(c.id))) === null || _b === void 0 ? void 0 : _b.focus({ preventScroll: true });
                    onNavigateTo && onNavigateTo(c.id);
                }, containerId: containerID, offset: offsetTop && 0 - offsetTop, smooth: "easeOutCubic", duration: 500, spy: true, hashSpy: true }, c.label))); });
    }, [containerID, contents, offsetTop, onNavigateTo]);
    var bodies = useMemo(function () {
        return contents.map(function (c) { return (React.createElement("section", { key: "body-".concat(c.id), id: c.id, className: "".concat(baseClass, "__contents__section"), "aria-label": c.label, tabIndex: -1 }, c.content)); });
    }, [contents]);
    var containerStyle = useMemo(function () { return (offsetTop ? { top: "".concat(offsetTop, "px") } : {}); }, [offsetTop]);
    return (React.createElement("section", __assign({}, commonProps(props, baseClass)),
        React.createElement("nav", { className: "".concat(baseClass, "__toc"), "aria-label": "\u76EE\u6B21" },
            React.createElement("ol", { className: "".concat(baseClass, "__toc__container"), style: containerStyle }, toc)),
        React.createElement("div", { ref: contentsRef, className: "".concat(baseClass, "__contents") }, bodies)));
};
export default WithTOC;
//# sourceMappingURL=WithTOC.js.map