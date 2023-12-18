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
import InlineLink from '../../lv1/buttons/InlineLink';
import vbClassNames from '../../utilities/vbClassNames';
/**
 * 箇条書きのためのコンポーネントです
 */
var BulletedList = function (props) {
    var listContents = props.listContents, listStyleType = props.listStyleType, small = props.small, marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize;
    var listBaseClass = 'vb-bulletedList';
    var listItems = listContents &&
        listContents.map(function (listCont, index) { return (React.createElement("li", { key: index, className: "".concat(listBaseClass, "__list__listItem") }, listCont.url ? (React.createElement(InlineLink, { href: listCont.url, target: listCont.target || '', "data-guide": listCont['data-guide'], "data-test": listCont['data-test'], "data-tracking": listCont['data-tracking'], "data-masking": listCont['data-masking'], rel: listCont.rel }, listCont.value)) : (listCont.value))); });
    switch (listStyleType) {
        case 'decimal':
            return (React.createElement("div", __assign({}, commonProps(props, listBaseClass, { small: small }, { marginBottom: marginBottom, marginLeft: marginLeft, marginRight: marginRight, marginSize: marginSize, marginTop: marginTop })),
                React.createElement("ol", { className: vbClassNames("".concat(listBaseClass, "__list"), {
                        modifier: { decimal: true },
                    }) }, listItems)));
        case 'disc':
        default:
            return (React.createElement("div", __assign({}, commonProps(props, listBaseClass, { small: small }, { marginBottom: marginBottom, marginLeft: marginLeft, marginRight: marginRight, marginSize: marginSize, marginTop: marginTop })),
                React.createElement("ul", { className: vbClassNames("".concat(listBaseClass, "__list"), {
                        modifier: { decimal: false },
                    }) }, listItems)));
    }
};
export default BulletedList;
//# sourceMappingURL=BulletedList.js.map