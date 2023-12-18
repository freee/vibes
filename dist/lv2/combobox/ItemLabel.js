import * as React from 'react';
import { MdAdd } from 'react-icons/md';
import vbClassName from '../../utilities/vbClassNames';
export var ItemLabel = function (_a) {
    var fixedItemOption = _a.fixedItemOption, fieldValue = _a.fieldValue, option = _a.option, trailingItem = _a.trailingItem;
    if (option.isTrailingItem && trailingItem) {
        return React.createElement(React.Fragment, null, trailingItem.render(fieldValue));
    }
    if (fixedItemOption) {
        var fixedItems = fixedItemOption.fixedItems, isSelected = fixedItemOption.isSelected;
        if (option.fixedItemType === 'more') {
            return (React.createElement("div", { className: vbClassName('vb-comboBox__fixedItem', {
                    modifier: { more: true, selected: isSelected },
                }) }, fixedItems[0].label ? fixedItems[0].label(fieldValue) : 'もっと見る'));
        }
        else if (option.fixedItemType === 'add' && fixedItems[1]) {
            return (React.createElement("div", { className: vbClassName('vb-comboBox__fixedItem', {
                    modifier: { add: true, selected: isSelected },
                }) },
                React.createElement(MdAdd, { className: vbClassName('vb-comboBox__fixedItemIcon', {
                        modifier: { more: true },
                    }), focusable: false }),
                fixedItems[1].label
                    ? fixedItems[1].label(fieldValue)
                    : "".concat(fieldValue, "\uFF08\u65B0\u898F\u767B\u9332\uFF09")));
        }
    }
    return React.createElement("div", { className: "vb-comboBox__listOptionLabel" }, option.label);
};
//# sourceMappingURL=ItemLabel.js.map