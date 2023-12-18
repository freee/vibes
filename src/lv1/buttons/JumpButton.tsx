import * as React from 'react';
import { MdChevronRight, MdOpenInNew } from 'react-icons/md';
import { MarginClassProps } from '../../utilities/marginClasses';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import { SelfWindowNavigationProp } from '../../utilities/selfWindowNavigator';
import Button, { ButtonAppearanceType } from './Button';

type Props = {
  /**
   * ボタンのラベルとなる文字列を指定します
   */
  children?: React.ReactNode;
  /**
   * href を設定します
   */
  url?: string;
  /**
   * 導線の優先度から、ボタンの種類を指定するのに使います。
   * primaryは背景ベタ塗り+白字、secondaryは白背景+グレーの枠線+リンク色字、tertiaryは枠線なし+リンク色字となります。
   */
  appearance?: ButtonAppearanceType;
  /**
   * ボタンを押したものの動作が危険性を伴うかどうか。 `true` にすると赤系の色になります。
   */
  danger?: boolean;
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
   * rel を指定します
   */
  rel?: string;
  /**
   * `<a>` 要素の `target` 属性に渡されます。 `"_blank"` とした場合、アイコンが OpenInNew になります
   */
  target?: string;
  /**
   * input type を指定します
   */
  type?: 'button' | 'submit' | 'reset';
  /**
   * click ハンドラを指定します
   */
  onClick?: React.MouseEventHandler;
} & MarginClassProps &
  SelfWindowNavigationProp &
  CommonProps;

/**
 * JumpButton は遷移のためのボタンです。別URLへ遷移させることが目的の際に使用してください。
 *
 * - 前の画面に戻るボタンには `BackwardButton` を使用してください
 * - `target="_self"`（同じウィンドウ・タブで開く） の場合は RightChevron アイコン、`target="_blank"` （新しいウィンドウ・タブで開く）の場合は OpenInNew アイコンになります
 * - ListTableの行内に入れる場合など、高さを小さくしたい場合には `small` を使用してください
 * - フォームの送信を伴う場合など、不可逆な遷移をする場合には `Button` を使用してください
 */
const RenderJumpButton: React.ForwardRefRenderFunction<
  HTMLButtonElement | HTMLAnchorElement,
  Props
> = (
  props: Props,
  ref?: React.Ref<HTMLButtonElement | HTMLAnchorElement>
): React.ReactElement => {
  const {
    children,
    url,
    appearance,
    danger,
    disabled,
    small,
    large,
    target,
    type,
    rel,
    onClick,
    onSelfWindowNavigation,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    marginSize,
  } = props;

  const buttonBaseClass = 'vb-jumpButton';
  return (
    <span
      {...commonProps(
        props,
        buttonBaseClass,
        {},
        {
          marginBottom,
          marginLeft,
          marginRight,
          marginSize,
          marginTop,
        }
      )}
    >
      <Button
        href={url}
        disabled={disabled}
        appearance={appearance}
        danger={danger}
        small={small}
        large={large}
        target={target}
        rel={rel}
        type={type}
        onClick={onClick}
        onSelfWindowNavigation={onSelfWindowNavigation}
        IconComponent={target === '_blank' ? MdOpenInNew : MdChevronRight}
        iconPosition="right"
        ref={ref}
      >
        {children}
      </Button>
    </span>
  );
};

const JumpButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  Props
>(RenderJumpButton);

export default JumpButton;
