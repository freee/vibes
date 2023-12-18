import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import commonProps, { CommonProps } from '../../utilities/commonProps';

type Props = {
  children?: React.ReactNode;
  /**
   * 選択状態にします
   */
  current?: boolean;
  /**
   * disabled に設定します
   */
  disabled?: boolean;
  /**
   * click ハンドラを指定します
   */
  onClick?: React.MouseEventHandler;
  /**
   * サイズを小さくします
   */
  small?: boolean;
  /**
   * ボタンの代替テキストとして使用されます（`aria-label` になります）。
   */
  label?: string;
} & MarginClassProps &
  CommonProps;

export default function PagerButton(props: Props): React.ReactElement {
  const {
    children,
    current,
    disabled,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    marginSize,
    onClick,
    small,
    label,
  } = props;
  const buttonBaseClass = 'vb-pagerButton';
  const classModifier = {
    current,
    small,
    disabled,
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      tabIndex={current || disabled ? -1 : undefined}
      aria-current={current ? 'true' : 'false'}
      aria-label={label}
      type="button"
      {...commonProps(props, buttonBaseClass, classModifier, {
        marginBottom,
        marginLeft,
        marginRight,
        marginSize,
        marginTop,
      })}
    >
      {children}
    </button>
  );
}
