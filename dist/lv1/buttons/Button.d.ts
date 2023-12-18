import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { LinkAriaProps, ButtonAriaProps } from '../../utilities/AriaProps';
import { SelfWindowNavigationProp } from '../../utilities/selfWindowNavigator';
export declare type ButtonAppearanceType = 'primary' | 'secondary' | 'tertiary';
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
declare const Button: React.ForwardRefExoticComponent<{
    /**
     * ボタンのラベルとなる文字列を指定します。アイコンを表示する場合はここに入れずにIconComponentを使用してください。
     */
    children?: React.ReactNode;
    /**
     * 導線の優先度から、ボタンの種類を指定するのに使います。
     * primaryは背景ベタ塗り+白字、secondaryは白背景+グレーの枠線+リンク色字、tertiaryは枠線なし+リンク色字となります。
     */
    appearance?: ButtonAppearanceType | undefined;
    /**
     * ボタンを押したものの動作が危険性を伴うかどうか。 `true` にすると赤系の色になります。
     * appearance無指定時には `appearance: 'primary', danger: true` の見た目になります。
     */
    danger?: boolean | undefined;
    /**
     * (廃止予定) appearanceを使用してください。appearance指定時は無視されます。
     */
    primary?: boolean | undefined;
    /**
     * disabled に設定します
     */
    disabled?: boolean | undefined;
    /**
     * サイズを小さくします
     */
    small?: boolean | undefined;
    /**
     * サイズを大きくします
     */
    large?: boolean | undefined;
    /**
     * 押下時に遷移させるURLを指定します。指定した場合は `<a>` 要素、空文字列もしくはundefinedの場合は `<button>` 要素となります
     */
    href?: string | undefined;
    /**
     * target を設定します
     */
    target?: string | undefined;
    /**
     * 未指定の場合、`target="_blank"` であれば `noopener noreferrer`となります
     *
     * （空文字列を渡した場合には `""` が指定されます）
     */
    rel?: string | undefined;
    /**
     * download を設定します。hrefと異なる名前でファイルを保存したい場合は文字列を指定してください。
     */
    download?: string | boolean | undefined;
    /**
     * 押下時に意図しないフォーム送信が発生する場合は `button` にしてください。
     */
    type?: "button" | "reset" | "submit" | undefined;
    /**
     * click ハンドラを設定します
     */
    onClick?: React.MouseEventHandler<Element> | undefined;
    /**
     * keydown ハンドラを設定します
     */
    onKeyDown?: React.KeyboardEventHandler<HTMLAnchorElement | HTMLButtonElement> | undefined;
    /**
     * focus ハンドラを設定します
     */
    onFocus?: React.FocusEventHandler<HTMLAnchorElement | HTMLButtonElement> | undefined;
    /**
     * blur ハンドラを設定します
     */
    onBlur?: React.FocusEventHandler<HTMLAnchorElement | HTMLButtonElement> | undefined;
    /**
     * アイコンの配置箇所を設定します。ボタンの意味を説明するアイコンは左側 (left) に、ボタンの挙動を説明するアイコンは右側 (right) につけてください。
     */
    iconPosition?: "left" | "right" | undefined;
    /**
     * 'full' で包括している要素に対して横幅を100%にします。
     */
    width?: "default" | "full" | undefined;
    /**
     * ダイアログ等でボタンが並ぶ場合などで、ボタンラベルの長さによる幅の違いを避けるために、ボタンに最小幅を設定することが可能です。
     */
    hasMinWidth?: boolean | undefined;
    /**
     * アイコンとして表示するコンポーネントを渡します。react-iconsのコンポーネントが想定されています。
     */
    IconComponent?: React.ElementType<any> | undefined;
} & MarginClassProps & SelfWindowNavigationProp & LinkAriaProps & ButtonAriaProps & import("../../utilities/commonProps").CommonDataProps & import("../../utilities/functionalMarginClasses").FunctionalMarginProps & React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>>;
export default Button;
