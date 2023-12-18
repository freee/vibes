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
/** 主にレスポンシブビューを想定して、複数のボタンをグループ化して配置します。 */
var ButtonGroup = function (props) {
    var children = props.children, align = props.align, responsive = props.responsive, mobileButtonLayout = props.mobileButtonLayout, marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize;
    var childrenArray = React.Children.toArray(children);
    var baseClassName = 'vb-buttonGroup';
    return (React.createElement("div", __assign({}, commonProps(props, baseClassName, {
        responsive: responsive,
        alignLeft: align === 'left',
    }, {
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginTop: marginTop,
        marginSize: marginSize,
    })), childrenArray.length > 1 ? (React.createElement(React.Fragment, null,
        React.createElement("div", { className: vbClassNames("".concat(baseClassName, "__topPair"), {
                modifier: { mobileButtonLayoutRow: mobileButtonLayout === 'row' },
            }) }, childrenArray.slice(0, 2).map(function (child, i) {
            return child && ( // undefinedが来た場合に備えてnil guardしている
            React.createElement("div", { key: i, className: vbClassNames("".concat(baseClassName, "__topItem"), {
                    modifier: {
                        mobileButtonLayoutRow: mobileButtonLayout === 'row',
                    },
                }) }, child));
        })),
        childrenArray.slice(2).map(function (child, i) {
            return child && ( // undefinedが来た場合に備えてnil guardしている
            React.createElement("div", { key: i + 2, className: "vb-buttonGroup__item" }, child));
        }))) : (children)));
};
export default ButtonGroup;
//# sourceMappingURL=ButtonGroup.js.map