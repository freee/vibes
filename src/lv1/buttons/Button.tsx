import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import {
  filterButtonAriaProps,
  filterLinkAriaProps,
  LinkAriaProps,
  ButtonAriaProps,
} from '../../utilities/AriaProps';
import selfWindowNavigator, {
  SelfWindowNavigationProp,
} from '../../utilities/selfWindowNavigator';

export type ButtonAppearanceType = 'primary' | 'secondary' | 'tertiary';

type Props = {
  /**
   * ボタンのラベルとなる文字列を指定します。アイコンを表示する場合はここに入れずにIconComponentを使用してください。
   */
  children?: React.ReactNode;
  /**
   * 導線の優先度から、ボタンの種類を指定するのに使います。
   * primaryは背景ベタ塗り+白字、secondaryは白背景+グレーの枠線+リンク色字、tertiaryは枠線なし+リンク色字となります。
   */
  appearance?: ButtonAppearanceType;
  /**
   * ボタンを押したものの動作が危険性を伴うかどうか。 `true` にすると赤系の色になります。
   * appearance無指定時には `appearance: 'primary', danger: true` の見た目になります。
   */
  danger?: boolean;
  /**
   * (廃止予定) appearanceを使用してください。appearance指定時は無視されます。
   */
  primary?: boolean;
  /**
   * disabled に設定します
   */
  disabled?: boolean;
  /**
   * サイズを小さくします
   */
  small?: boolean;
  /**
   * サイズを大きくします
   */
  large?: boolean;
  /**
   * 押下時に遷移させるURLを指定します。指定した場合は `<a>` 要素、空文字列もしくはundefinedの場合は `<button>` 要素となります
   */
  href?: string;
  /**
   * target を設定します
   */
  target?: string;
  /**
   * 未指定の場合、`target="_blank"` であれば `noopener noreferrer`となります
   *
   * （空文字列を渡した場合には `""` が指定されます）
   */
  rel?: string;
  /**
   * download を設定します。hrefと異なる名前でファイルを保存したい場合は文字列を指定してください。
   */
  download?: boolean | string;
  /**
   * 押下時に意図しないフォーム送信が発生する場合は `button` にしてください。
   */
  type?: 'button' | 'submit' | 'reset';
  /**
   * click ハンドラを設定します
   */
  onClick?: React.MouseEventHandler;
  /**
   * keydown ハンドラを設定します
   */
  onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  /**
   * focus ハンドラを設定します
   */
  onFocus?: React.FocusEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  /**
   * blur ハンドラを設定します
   */
  onBlur?: React.FocusEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  /**
   * アイコンの配置箇所を設定します。ボタンの意味を説明するアイコンは左側 (left) に、ボタンの挙動を説明するアイコンは右側 (right) につけてください。
   */
  iconPosition?: 'left' | 'right';
  /**
   * 'full' で包括している要素に対して横幅を100%にします。
   */
  width?: 'default' | 'full';
  /**
   * ダイアログ等でボタンが並ぶ場合などで、ボタンラベルの長さによる幅の違いを避けるために、ボタンに最小幅を設定することが可能です。
   */
  hasMinWidth?: boolean;
  /**
   * アイコンとして表示するコンポーネントを渡します。react-iconsのコンポーネントが想定されています。
   */
  IconComponent?: React.ElementType;
} & MarginClassProps &
  SelfWindowNavigationProp &
  LinkAriaProps &
  ButtonAriaProps &
  CommonProps;

function ButtonInner(
  props: Props,
  ref?: React.Ref<HTMLButtonElement | HTMLAnchorElement>
): React.ReactElement {
  const {
    children,
    appearance,
    primary,
    danger,
    disabled,
    small,
    large,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    marginSize,
    href,
    target,
    rel,
    type,
    download,
    onClick,
    onSelfWindowNavigation,
    onKeyDown,
    onFocus,
    onBlur,
    iconPosition,
    IconComponent,
    width,
    hasMinWidth,
  } = props;

  const buttonBaseClass = 'vb-button';

  const classModifier = {
    appearancePrimary: appearance
      ? appearance === 'primary'
      : primary || danger,
    appearanceSecondary:
      appearance === 'secondary' || (!appearance && !primary && !danger),
    appearanceTertiary: appearance === 'tertiary',
    small,
    large,
    danger,
    disabled,
    leftIcon: IconComponent && iconPosition !== 'right',
    rightIcon: IconComponent && iconPosition === 'right',
    widthFull: width === 'full',
    hasMinWidth,
  };

  const content = (
    <>
      {IconComponent && (
        <IconComponent
          className={`${buttonBaseClass}__icon ${buttonBaseClass}__icon--${
            iconPosition === 'right' ? 'right' : 'left'
          }`}
          focusable={false}
        />
      )}
      {children}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={
          rel || rel === ''
            ? rel
            : target === '_blank'
            ? 'noopener noreferrer'
            : undefined
        }
        onClick={(e: React.MouseEvent): void => {
          disabled ? e.preventDefault() : onClick && onClick(e);
          if (href) {
            const navigator = selfWindowNavigator(onSelfWindowNavigation);
            navigator && navigator(e, href);
          }
        }}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        onBlur={onBlur}
        aria-disabled={disabled && true}
        download={download}
        ref={ref as React.Ref<HTMLAnchorElement>}
        {...filterLinkAriaProps(props)}
        {...commonProps(props, buttonBaseClass, classModifier, {
          marginBottom,
          marginLeft,
          marginRight,
          marginSize,
          marginTop,
        })}
      >
        {content}
      </a>
    );
  }
  return (
    <button
      type={type}
      disabled={disabled && true}
      onClick={onClick}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
      onBlur={onBlur}
      ref={ref as React.Ref<HTMLButtonElement>}
      {...filterButtonAriaProps(props)}
      {...commonProps(props, buttonBaseClass, classModifier, {
        marginBottom,
        marginLeft,
        marginRight,
        marginSize,
        marginTop,
      })}
    >
      {content}
    </button>
  );
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
const Button = React.forwardRef(ButtonInner);
export default Button;
