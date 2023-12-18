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
import { MdError, MdWarning, MdCheckCircle, MdInfo } from 'react-icons/md';
import commonProps from '../../utilities/commonProps';
// lv1を参照しちゃうけど許して
// TODO: Messageコンポーネントをlv2に移動
import MaterialIcon from '../icons/MaterialIcon';
export default function Message(props) {
    var children = props.children, error = props.error, notice = props.notice, success = props.success, info = props.info, marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize;
    return (React.createElement("span", __assign({}, commonProps(props, 'vb-message', { error: error, notice: notice, success: success, info: info }, { marginBottom: marginBottom, marginLeft: marginLeft, marginRight: marginRight, marginSize: marginSize, marginTop: marginTop })),
        React.createElement("span", { className: "vb-message__icon" }, error ? (React.createElement(MaterialIcon, { IconComponent: MdError, error: true, mr: 0.5 })) : notice ? (React.createElement(MaterialIcon, { IconComponent: MdWarning, notice: true, mr: 0.5 })) : success ? (React.createElement(MaterialIcon, { IconComponent: MdCheckCircle, success: true, mr: 0.5 })) : (React.createElement(MaterialIcon, { IconComponent: MdInfo, color: "S8", mr: 0.5 }))),
        React.createElement("span", { className: "vb-message__content" }, children)));
}
//# sourceMappingURL=Message.js.map