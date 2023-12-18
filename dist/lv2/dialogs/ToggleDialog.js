import * as React from 'react';
import Button from '../../lv1/buttons/Button';
var ToggleDialog = function (props) {
    var _a = React.useState(false), isOpen = _a[0], setOpen = _a[1];
    var toggle = function () { return setOpen(!isOpen); };
    return (React.createElement(React.Fragment, null,
        React.createElement(Button, { onClick: toggle }, "open"),
        props.render(isOpen, toggle)));
};
export default ToggleDialog;
//# sourceMappingURL=ToggleDialog.js.map