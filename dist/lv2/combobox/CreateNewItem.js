import * as React from 'react';
import { MdAdd } from 'react-icons/md';
import vbClassName from '../../utilities/vbClassNames';
export var CreateNewItem = function (_a) {
    var createLabel = _a.createLabel, createNewItem = _a.createNewItem, fieldValue = _a.fieldValue, isSelected = _a.isSelected, selectedOptionRef = _a.selectedOptionRef, uniqueId = _a.uniqueId;
    return (
    /* eslint-disable-next-line jsx-a11y/click-events-have-key-events */
    React.createElement("div", { id: "".concat(uniqueId, "__listOption__createNew"), className: "vb-comboBox__listOption ".concat(isSelected ? 'vb-comboBox__listOption--selected' : ''), role: "option", "aria-selected": isSelected, tabIndex: -1, onClick: function () { return createNewItem(fieldValue); }, ref: isSelected ? selectedOptionRef : undefined },
        React.createElement("div", { className: vbClassName("vb-comboBox__fixedItem ".concat(isSelected ? 'vb-comboBox__fixedItem--selected' : ''), {
                modifier: { add: true },
            }) },
            React.createElement(MdAdd, { className: vbClassName('vb-comboBox__fixedItemIcon', {
                    modifier: { more: true },
                }), focusable: false }),
            createLabel
                ? createLabel(fieldValue)
                : fieldValue
                    ? "".concat(fieldValue, "\uFF08\u65B0\u898F\u767B\u9332\uFF09")
                    : '新規登録')));
};
//# sourceMappingURL=CreateNewItem.js.map