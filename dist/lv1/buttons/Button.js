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
import { filterButtonAriaProps, filterLinkAriaProps, } from '../../utilities/AriaProps';
import selfWindowNavigator from '../../utilities/selfWindowNavigator';
function ButtonInner(props, ref) {
    var children = props.children, appearance = props.appearance, primary = props.primary, danger = props.danger, disabled = props.disabled, small = props.small, large = props.large, marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize, href = props.href, target = props.target, rel = props.rel, type = props.type, download = props.download, onClick = props.onClick, onSelfWindowNavigation = props.onSelfWindowNavigation, onKeyDown = props.onKeyDown, onFocus = props.onFocus, onBlur = props.onBlur, iconPosition = props.iconPosition, IconComponent = props.IconComponent, width = props.width, hasMinWidth = props.hasMinWidth;
    var buttonBaseClass = 'vb-button';
    var classModifier = {
        appearancePrimary: appearance
            ? appearance === 'primary'
            : primary || danger,
        appearanceSecondary: appearance === 'secondary' || (!appearance && !primary && !danger),
        appearanceTertiary: appearance === 'tertiary',
        small: small,
        large: large,
        danger: danger,
        disabled: disabled,
        leftIcon: IconComponent && iconPosition !== 'right',
        rightIcon: IconComponent && iconPosition === 'right',
        widthFull: width === 'full',
        hasMinWidth: hasMinWidth,
    };
    var content = (React.createElement(React.Fragment, null,
        IconComponent && (React.createElement(IconComponent, { className: "".concat(buttonBaseClass, "__icon ").concat(buttonBaseClass, "__icon--").concat(iconPosition === 'right' ? 'right' : 'left'), focusable: false })),
        children));
    if (href) {
        return (React.createElement("a", __assign({ href: href, target: target, rel: rel || rel === ''
                ? rel
                : target === '_blank'
                    ? 'noopener noreferrer'
                    : undefined, onClick: function (e) {
                disabled ? e.preventDefault() : onClick && onClick(e);
                if (href) {
                    var navigator_1 = selfWindowNavigator(onSelfWindowNavigation);
                    navigator_1 && navigator_1(e, href);
                }
            }, onKeyDown: onKeyDown, onFocus: onFocus, onBlur: onBlur, "aria-disabled": disabled && true, download: download, ref: ref }, filterLinkAriaProps(props), commonProps(props, buttonBaseClass, classModifier, {
            marginBottom: marginBottom,
            marginLeft: marginLeft,
            marginRight: marginRight,
            marginSize: marginSize,
            marginTop: marginTop,
        })), content));
    }
    return (React.createElement("button", __assign({ type: type, disabled: disabled && true, onClick: onClick, onKeyDown: onKeyDown, onFocus: onFocus, onBlur: onBlur, ref: ref }, filterButtonAriaProps(props), commonProps(props, buttonBaseClass, classModifier, {
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginSize: marginSize,
        marginTop: marginTop,
    })), content));
}
/**
 * ボタン
 *
 * - 見た目はボタンですが、セマンティクス上はリンクにもボタンにもなります
 *   - `href` が存在する場合はリンク `<a>` 要素、存在しない場合は `<button>` 要素となります
 *   - クリックでURLに移動する場合には `href` を渡してください（「別のタブで開く」など、リンクとしての挙動を期待できるので）
 *   - `href` に `"#"` や `"javascript:void(0)"` を **渡さないで** ください
 * - 他の画面に遷移するボタン用に `JumpButton` と `BackwardButton` も用意されています
 *   - 内部的には `Button` を使用していますが、遷移ボタン用の便利な機能を備えてあります。
 * - 右側または左側にアイコン（Material Design Iconsを想定）を表示できます
 *   - 「編集」「削除」「新規作成」など、ボタン押下によりもたらされれる動作のメタファーやアイキャッチが必要な際には左側 (left) にアイコンを表示してください
 *   - 「別ウインドウで開く」「ドロップダウンメニューを表示」などボタン押下時の挙動を示す必要がある際には右側 (right) にアイコンを表示してください
 *
 * ## `appearance` の使い分け
 *
 * `appearance` は、デフォルトでは `"secondary"` になっています。
 *
 * フォームの送信ボタンなど、「この場所のメインタスクはこれ」というものが明確な場合にのみ、そのボタンは `"primary"` としてください。
 *
 * `appearance="tertiary"` は、特に単体配置された場合にボタンとして認識することが困難なため、使用できる場所は非常に限定的です。
 *
 *  以下は、`"tertiary"` の使用で問題のないケースです。
 *
 *  - `appearance="secondary"` や `appearance="primary"` な `Button` と並んでいる場所（ボタンとして認識しやすくなるため）
 *  - 「詳細画面で実行できるアクションへのショートカットを一覧画面にも配置する」のような、その場所でそのボタンを認識できしなくても問題のない場所
 *  - 「画面上に複数並んでいるコメントの『編集』ボタン」のような、コンテンツよりも目立つ必要のないボタン
 *  - ほとんどの画面で同じ表示になっていて、ユーザーの学習が特に期待できる場所（ページ上部の見出しの右に必ず関連メニューとして配置されちえるなど）
 *
 * 一方、以下のような場所では、 `"tertiary"` が不向きです。 `"secondary"` や `InlineLink` を使用してください。
 * `InlineLink` も `Button` 同様、`href` を与えなければ `<button>` 要素となる仕様のため、ページ遷移以外に用いても問題ありません。
 *
 *  - 注意文や説明文の文中や末尾のリンクや、そういった箇所でモーダルダイアログを開いたり状態を変更したりするなどのアクションをするもの
 *    - `Button` には `"tertiary"` でも上下左右にpaddingがあるため、文中・文尾で使用すると不自然になります
 *    - `"tertiary"` の `Button` ではアンダーラインがないため、インタラクティブな要素であることがわかりにくくなります
 *  - 上にあげたような `"tertiary"` で問題のないケースに該当せず、それによって不利益のある場所
 *    - 同じアクションを `"primary"` や `"secondary"` のボタンで実行できる場所がなく、ボタンとして認識できないことがユーザーにとって大きな不利益になる場所
 *    - ユーザーによる学習効果や推測が期待できない場所
 *    - 画面の構成を理解する・メインのタスクを完了する上でボタンの存在に気付く必要がある場所
 *
 */
var Button = React.forwardRef(ButtonInner);
export default Button;
//# sourceMappingURL=Button.js.map