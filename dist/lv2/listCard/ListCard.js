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
import selfWindowNavigator from '../../utilities/selfWindowNavigator';
import Note from '../../lv1/typography/Note';
import { MdChevronRight, MdOpenInNew } from 'react-icons/md';
/**
 * コレクションのひとつひとつのオブジェクトの表現に使用する、クリッカブルな要素です。
 *
 * - このコンポーネントは全体がクリッカブルです。全体をクリッカブルにしない場合は `CardBase` を使用してください
 * - モバイル向け画面では積極的に使用してください
 * - オブジェクトの属性を並べたリストを作るには `ListTable` (`BasicTable`) を使用してください。
 * - `title` は必須です
 * - `actions` として、オブジェクトの操作へのショートカットのボタン等を並べることができます
 * - `thumbnail` として、画像などを表示することができます
 * - `thumbnailSize` として画像サイズの指定を行うことができます default = 80px / large = 192px
 * - `title` `children` にはクリック可能な要素を渡さないでください
 * - `disabled` をtrueにしたときは、actionsのボタン等もdisabledにしてください
 * - `IconComponent` アイコンとして表示するコンポーネントを渡します。react-iconsのコンポーネントが想定されています。
 */
var ListCard = function (props) {
    var children = props.children, url = props.url, onClick = props.onClick, onSelfWindowNavigation = props.onSelfWindowNavigation, title = props.title, actions = props.actions, target = props.target, rel = props.rel, disabled = props.disabled, current = props.current, thumbnail = props.thumbnail, _a = props.IconComponent, IconComponent = _a === void 0 ? url && target === '_blank' ? MdOpenInNew : MdChevronRight : _a, _b = props.thumbnailSize, thumbnailSize = _b === void 0 ? 'default' : _b;
    var className = 'vb-listCard';
    var content = (React.createElement("div", { className: "".concat(className, "__content") },
        thumbnail && (React.createElement("div", { className: "".concat(className, "__thumbnail").concat(!!thumbnailSize && thumbnailSize === 'large'
                ? " ".concat(className, "__thumbnail--large")
                : '') }, thumbnail)),
        React.createElement("div", { className: "".concat(className, "__main") },
            React.createElement("div", { className: "".concat(className, "__title") }, title),
            children && (React.createElement(Note, { marginTop: true, marginSize: "small" }, children)))));
    // eslint-disable-next-line @typescript-eslint/naming-convention
    var _listCardProps = commonProps(props, className);
    var listCardProps = __assign(__assign({}, _listCardProps), {
        className: "".concat(_listCardProps.className).concat(disabled ? " ".concat(className, "--disabled") : '').concat(current ? " ".concat(className, "--current") : ''),
    });
    return (React.createElement("div", __assign({}, listCardProps),
        url ? (React.createElement("a", { className: "".concat(className, "__link").concat(disabled ? " ".concat(className, "__link--disabled") : '').concat(current ? " ".concat(className, "__link--current") : ''), href: url, target: target, rel: rel ? rel : target === '_blank' ? 'noopener noreferrer' : undefined, "aria-disabled": disabled && true, onClick: function (e) {
                disabled ? e.preventDefault() : onClick && onClick(e);
                if (url) {
                    var navigator_1 = selfWindowNavigator(onSelfWindowNavigation);
                    navigator_1 && navigator_1(e, url);
                }
            } },
            content,
            React.createElement(IconComponent, { className: "".concat(className, "__icon") }))) : (React.createElement("button", { className: "".concat(className, "__button").concat(disabled ? " ".concat(className, "__button--disabled") : '').concat(current ? " ".concat(className, "__button--current") : ''), disabled: disabled && true, onClick: onClick },
            content,
            React.createElement(IconComponent, { className: "".concat(className, "__icon") }))),
        actions && React.createElement("div", { className: "".concat(className, "__actions") }, actions)));
};
export default ListCard;
//# sourceMappingURL=ListCard.js.map