import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import { KeyCodes } from '../../utilities/keyboard';
import {
  filterButtonAriaProps,
  filterLinkAriaProps,
  ButtonAriaProps,
  LinkAriaProps,
} from '../../utilities/AriaProps';

type Props = {
  children?: React.ReactNode;
  IconComponent?: React.ElementType;
  iconPosition?: 'left' | 'right';
  id?: string;
  url?: string;
  target?: string;
  rel?: string;
  noBorder?: boolean;
  disabled?: boolean;
  small?: boolean;
  onClick?: (
    event: React.SyntheticEvent<HTMLSpanElement | HTMLAnchorElement>
  ) => void;
} & ButtonAriaProps &
  LinkAriaProps &
  MarginClassProps &
  CommonProps;

/**
 * このコンポーネントの使用は **非推奨** です。
 * 文中にリンクを配置したい場合は `InlineLink` を、それ以外の場所では `Button` を `appearance="tertiary"` で使用してください。
 */
const TextButton: React.FC<Props> = (props: Props) => {
  const {
    children,
    IconComponent,
    iconPosition,
    id,
    url,
    target,
    rel,
    noBorder,
    disabled,
    small,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    marginSize,
    onClick,
  } = props;

  const buttonClass = 'vb-textButton';
  const classModifier = {
    noBorder,
    small,
    disabled,
  };

  return (
    <span
      {...commonProps(props, buttonClass, classModifier, {
        marginBottom,
        marginLeft,
        marginRight,
        marginSize,
        marginTop,
      })}
    >
      {!!IconComponent && iconPosition !== 'right' && (
        <IconComponent className={`${buttonClass}__icon`} focusable={false} />
      )}

      {url ? (
        <a
          className={buttonClass + '__link'}
          id={id}
          href={!disabled ? url : undefined}
          target={target ? target : '_self'}
          onClick={!disabled ? onClick : undefined}
          aria-disabled={disabled && true}
          rel={rel}
          {...filterLinkAriaProps(props)}
        >
          {children}
        </a>
      ) : (
        <span
          id={id}
          role="button"
          tabIndex={0}
          onClick={!disabled ? onClick : undefined}
          onKeyDown={(e: React.KeyboardEvent<HTMLSpanElement>): void => {
            !disabled && e.keyCode === KeyCodes.ENTER && onClick && onClick(e);
          }}
          className={buttonClass + '__button'}
          aria-disabled={disabled && true}
          {...filterButtonAriaProps(props)}
        >
          {children}
        </span>
      )}

      {!!IconComponent && iconPosition === 'right' && (
        <IconComponent
          className={`${buttonClass}__icon ${buttonClass}__icon--right`}
          focusable={false}
        />
      )}
    </span>
  );
};
export default TextButton;
