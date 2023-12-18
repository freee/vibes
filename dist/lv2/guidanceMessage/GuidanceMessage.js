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
import commonProps, { pickCommonProps, } from '../../utilities/commonProps';
import vbClassNames from '../../utilities/vbClassNames';
import selfWindowNavigator from '../../utilities/selfWindowNavigator';
import IconOnlyButton from '../../lv1/buttons/IconOnlyButton';
import { MdClose } from 'react-icons/md';
import { useResponsive } from '../../utilities/VibesProvider';
var CloseButton = function (props) {
    var onClick = props.onClick, small = props.small;
    return (React.createElement(IconOnlyButton, __assign({ IconComponent: MdClose, label: "\u9589\u3058\u308B", small: small, appearance: 'tertiary', onClick: function (e) {
            onClick && onClick(e);
            e.stopPropagation();
        } }, pickCommonProps(props))));
};
var CloseSmallButton = function (props) {
    var onClick = props.onClick;
    return React.createElement(CloseButton, { onClick: onClick, small: true });
};
/**
 * ## 注意点
 * ＊現状のGuidanceMessageを廃止予定です。clickできる場合とできない場合を見た目から判別することが難しいため、全体クリックの使用は廃止し、inlineでの配置に絞る形で新しく用意する見込みです。
 *
 * block要素として利用したい場合は、MessageBlockのリリース情報(discovery)/アシスタンス（assistance）で対応ください。
 *
 * 暫定対応として、以下のように利用ください。
 * - 全体をclickableとさせないよう、url / onClickは指定しないでください。
 * - inlineかつsmallを指定し、クリックさせたい要素はchildrenに含めてください。（文中にInlineLinkを渡す形を推奨しています）
 * - verticalAlignのdefaultは'top'ですが、inlineかつsmallで改行がない形では'middle'を指定してください。
 *
 */
var GuidanceMessage = function (props) {
    var IconComponent = props.IconComponent, children = props.children, renderCloseButton = props.renderCloseButton, inline = props.inline, small = props.small, _a = props.verticalAlign, verticalAlign = _a === void 0 ? 'top' : _a, _b = props.width, width = _b === void 0 ? 'fit-content' : _b, url = props.url, target = props.target, rel = props.rel, onClick = props.onClick, onSelfWindowNavigation = props.onSelfWindowNavigation;
    var className = 'vb-guidanceMessage';
    var responsive = useResponsive();
    var clickable = !!url || !!onClick;
    var isSmall = inline && small;
    var containerClassName = vbClassNames("".concat(className, "__container"), {
        modifier: {
            responsive: responsive,
            small: isSmall,
            alignTop: verticalAlign === 'top',
            alignMiddle: verticalAlign === 'middle',
        },
    });
    var renderButton = function (small) {
        return renderCloseButton &&
            renderCloseButton(small ? CloseSmallButton : CloseButton);
    };
    var renderIconComponent = function (IconComponent) {
        return IconComponent && (React.createElement(IconComponent, { className: vbClassNames("".concat(className, "__icon"), {
                modifier: {
                    small: isSmall,
                },
            }), focusable: false }));
    };
    return (React.createElement("div", __assign({}, commonProps(props, className, {
        inline: inline,
        clickable: clickable,
        widthFitContent: width === 'fit-content',
        widthFull: width === 'full',
    })), clickable ? (url ? (React.createElement("div", { className: containerClassName },
        renderIconComponent(IconComponent),
        React.createElement("span", { className: vbClassNames("".concat(className, "__content"), {
                modifier: {
                    alignMiddle: verticalAlign === 'middle',
                },
            }) },
            React.createElement("a", { className: "".concat(className, "__link"), href: url, target: target, rel: rel
                    ? rel
                    : target === '_blank'
                        ? 'noopener noreferrer'
                        : undefined, onClick: function (e) {
                    if (onClick) {
                        onClick(e);
                    }
                    var navigator = selfWindowNavigator(onSelfWindowNavigation);
                    if (navigator) {
                        navigator(e, url);
                    }
                } }, children),
            renderButton(isSmall)))) : (React.createElement("div", { className: containerClassName },
        renderIconComponent(IconComponent),
        React.createElement("span", { className: vbClassNames("".concat(className, "__content"), {
                modifier: {
                    alignMiddle: verticalAlign === 'middle',
                },
            }) },
            React.createElement("button", { className: "".concat(className, "__button"), onClick: onClick }, children),
            renderButton(isSmall))))) : (React.createElement("div", { className: containerClassName },
        renderIconComponent(IconComponent),
        React.createElement("span", { className: vbClassNames("".concat(className, "__content"), {
                modifier: {
                    alignMiddle: verticalAlign === 'middle',
                },
            }) },
            children,
            renderButton(isSmall))))));
};
export default GuidanceMessage;
//# sourceMappingURL=GuidanceMessage.js.map