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
import { RequiredIcon } from '../../lv1/icons/RequiredIcon';
import commonProps from '../../utilities/commonProps';
var FormControlLabel = function (props) {
    var children = props.children, id = props.id, htmlFor = props.htmlFor, required = props.required, marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize;
    var inner = (React.createElement(React.Fragment, null,
        React.createElement("span", { className: "vb-formControlLabel__text" }, children),
        required ? React.createElement(RequiredIcon, { ml: 0.5 }) : null));
    return htmlFor ? (React.createElement("label", __assign({ id: id, htmlFor: htmlFor }, commonProps(props, 'vb-formControlLabel', {}, {
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginTop: marginTop,
        marginSize: marginSize,
    })), inner)) : (React.createElement("span", __assign({ id: id }, commonProps(props, 'vb-formControlLabel', {}, {
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginTop: marginTop,
        marginSize: marginSize,
    })), inner));
};
export default FormControlLabel;
//# sourceMappingURL=FormControlLabel.js.map