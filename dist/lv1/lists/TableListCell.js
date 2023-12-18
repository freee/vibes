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
import useUniqueId from '../../hooks/useUniqueId';
import selfWindowNavigator from '../../utilities/selfWindowNavigator';
import commonProps from '../../utilities/commonProps';
import vbClassNames from '../../utilities/vbClassNames';
var TableListCell = function (props) {
    var children = props.children, url = props.url, small = props.small, alignBottom = props.alignBottom, alignCenter = props.alignCenter, alignRight = props.alignRight, alignTop = props.alignTop, breakWord = props.breakWord, colSpan = props.colSpan, indentLevel = props.indentLevel, onSelfWindowNavigation = props.onSelfWindowNavigation;
    var listBaseClass = 'vb-tableListCell';
    var classModifier = {
        small: small,
        breakWord: breakWord,
        alignBottom: alignBottom,
        alignCenter: alignCenter,
        alignRight: alignRight,
        alignTop: alignTop,
    };
    var uniqueId = useUniqueId('vb-tabeListcell');
    var textNodeId = "".concat(uniqueId, "__text");
    return (React.createElement("td", __assign({}, commonProps(props, listBaseClass, classModifier), { colSpan: colSpan }),
        React.createElement("span", { className: "vb-tableListCell__indentContainerWrapper" },
            React.createElement("span", { className: "vb-tableListCell__indentContainer" },
                !!indentLevel &&
                    Array(indentLevel)
                        .fill(null)
                        .map(function (_, i) { return (React.createElement("span", { className: "vb-tableListCell__indent", key: i, role: "presentation", "aria-hidden": "true" }, "\u00A0")); }),
                React.createElement("span", { className: vbClassNames('vb-tableListCell__indentedContent', {
                        modifier: { alignCenter: alignCenter, alignRight: alignRight },
                    }) },
                    !!url && (
                    // eslint-disable-next-line jsx-a11y/anchor-has-content
                    React.createElement("a", { href: url, className: "vb-tableListCell__link", tabIndex: -1, "aria-labelledby": textNodeId, onClick: function (e) {
                            var navigator = selfWindowNavigator(onSelfWindowNavigation);
                            if (navigator) {
                                navigator(e, url);
                            }
                        } })),
                    React.createElement("span", { className: vbClassNames('vb-tableListCell__text', {
                            modifier: {
                                withLink: !!url,
                            },
                        }), id: textNodeId }, children))))));
};
export default TableListCell;
//# sourceMappingURL=TableListCell.js.map