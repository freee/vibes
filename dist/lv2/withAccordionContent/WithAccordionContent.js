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
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import Button from '../../lv1/buttons/Button';
import commonProps, { pickCommonProps, } from '../../utilities/commonProps';
import useUniqueId from '../../hooks/useUniqueId';
var AccordionButton = function (props) {
    var contentId = props.contentId, open = props.open, onClick = props.onClick, children = props.children, appearance = props.appearance, small = props.small, large = props.large;
    return (React.createElement(Button, __assign({ IconComponent: open ? MdExpandLess : MdExpandMore, iconPosition: "right", appearance: appearance, small: small, large: large, "aria-controls": contentId, "aria-expanded": open, onClick: onClick }, pickCommonProps(props)), children));
};
/**
 * 開閉される要素に用いるコンポーネントです。
 * 同ファイル内に定義されているAccordionButtonと併せて使われる想定です。
 */
var WithAccordionContent = function (props) {
    var renderAccordionButtonArea = props.renderAccordionButtonArea, isOpen = props.isOpen, children = props.children;
    var contentId = useUniqueId('accordionContent');
    return (React.createElement("div", __assign({}, commonProps(props, 'vb-withAccordionContent')),
        renderAccordionButtonArea(AccordionButton, contentId),
        isOpen && (React.createElement("div", { id: contentId, "aria-hidden": !isOpen }, children))));
};
export default WithAccordionContent;
//# sourceMappingURL=WithAccordionContent.js.map