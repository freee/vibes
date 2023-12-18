import * as React from 'react';
import vbClassName from '../../utilities/vbClassNames';
export var LoadMoreItem = function (_a) {
    var createLabel = _a.createLabel, fieldValue = _a.fieldValue, isSelected = _a.isSelected, loadMore = _a.loadMore, selectedOptionRef = _a.selectedOptionRef, uniqueId = _a.uniqueId;
    return (
    /* eslint-disable-next-line jsx-a11y/click-events-have-key-events */
    React.createElement("div", { id: "".concat(uniqueId, "__listOption__loadMore"), className: "vb-comboBox__listOption ".concat(isSelected ? 'vb-comboBox__listOption--selected' : ''), role: "option", "aria-selected": isSelected, tabIndex: -1, onClick: loadMore, ref: isSelected ? selectedOptionRef : undefined },
        React.createElement("div", { className: vbClassName("vb-comboBox__fixedItem ".concat(isSelected ? 'vb-comboBox__fixedItem--selected' : ''), {
                modifier: { more: true },
            }) }, createLabel ? createLabel(fieldValue) : 'もっと見る')));
};
//# sourceMappingURL=LoadMoreItem.js.map