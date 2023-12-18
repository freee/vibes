import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import {
  filterButtonAriaProps,
  ButtonAriaProps,
  filterLinkAriaProps,
  LinkAriaProps,
} from '../../utilities/AriaProps';
import { ButtonAppearanceType } from './Button';
import selfWindowNavigator, {
  SelfWindowNavigationProp,
} from '../../utilities/selfWindowNavigator';

type Props = {
  /**
   * アイコンとして表示するコンポーネントを渡します。react-iconsのコンポーネントが想定されています。
   */
  IconComponent: React.ElementType;
  /**
   * ボタンの代替テキストとして使用されます（`aria-label` になります）。
   * ボタンが何を表現しているのか、必ず指定してください。
   */
  label: string;
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
  /**
   * input type を指定します
   */
  type?: 'button' | 'submit' | 'reset';
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
   * click ハンドラを設定します
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
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
} & MarginClassProps &
  SelfWindowNavigationProp &
  ButtonAriaProps &
  LinkAriaProps &
  CommonProps;

/**
 * アイコン単体でボタンを配置する場合に使用します
 */
function IconOnlyButtonInner(
  props: Props,
  ref?: React.Ref<HTMLButtonElement>
): React.ReactElement {
  const {
    IconComponent,
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
    label,
    type,
    href,
    target,
    rel,
    download,
    onSelfWindowNavigation,
    onClick,
    onKeyDown,
    onFocus,
    onBlur,
  } = props;

  const buttonBaseClass = 'vb-iconOnlyButton';
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
  };

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
        download={download}
        onClick={(e: React.MouseEvent): void => {
          disabled
            ? e.preventDefault()
            : onClick && onClick(e as React.MouseEvent<HTMLAnchorElement>);
          if (href) {
            const navigator = selfWindowNavigator(onSelfWindowNavigation);
            navigator && navigator(e, href);
          }
        }}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        onBlur={onBlur}
        aria-disabled={disabled && true}
        ref={ref as React.Ref<HTMLAnchorElement>}
        {...filterLinkAriaProps(props)}
        {...commonProps(props, buttonBaseClass, classModifier, {
          marginBottom,
          marginLeft,
          marginRight,
          marginSize,
          marginTop,
        })}
        aria-label={label}
      >
        <IconComponent className={buttonBaseClass + '__icon'} />
      </a>
    );
  }

  return (
    <button
      disabled={disabled && true}
      onClick={onClick}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
      onBlur={onBlur}
      ref={ref}
      aria-label={label}
      type={type}
      {...filterButtonAriaProps(props)}
      {...commonProps(props, buttonBaseClass, classModifier, {
        marginBottom,
        marginLeft,
        marginRight,
        marginSize,
        marginTop,
      })}
    >
      <IconComponent className={buttonBaseClass + '__icon'} />
    </button>
  );
}

const IconOnlyButton = React.forwardRef(IconOnlyButtonInner);
export default IconOnlyButton;
