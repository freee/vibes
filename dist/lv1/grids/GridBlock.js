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
export default function GridBlock(props) {
    var size = props.size, children = props.children;
    var classModifier = {
        half: size === 'half',
        oneThird: size === 'oneThird',
        twoThirds: size === 'twoThirds',
        oneQuarter: size === 'oneQuarter',
        threeQuarters: size === 'threeQuarters',
    };
    return (React.createElement("div", __assign({}, commonProps(props, 'vb-gridBlock', classModifier, {})), children));
}
//# sourceMappingURL=GridBlock.js.map