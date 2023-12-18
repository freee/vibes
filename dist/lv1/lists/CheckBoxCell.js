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
var CheckBoxCell = function (props) {
    var header = props.header, name = props.name, value = props.value, checked = props.checked, onChange = props.onChange, disabled = props.disabled;
    var baseClassName = 'vb-checkBoxCell';
    /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
    /* eslint-disable jsx-a11y/click-events-have-key-events */
    var input = (React.createElement("label", { className: "".concat(baseClassName, "__label").concat(disabled ? '--disabled' : ''), onClick: function (e) { return e.stopPropagation(); } },
        React.createElement("input", { type: "checkbox", "aria-label": props['aria-label'] || 'この行を選択', name: name, value: value, checked: checked, disabled: disabled, onChange: onChange })));
    var cellProps = commonProps(props, baseClassName, { header: header });
    return header ? (React.createElement("th", __assign({}, cellProps), input)) : (React.createElement("td", __assign({}, cellProps), input));
};
export default CheckBoxCell;
//# sourceMappingURL=CheckBoxCell.js.map