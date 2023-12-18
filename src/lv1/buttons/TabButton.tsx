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
   * サイズを小さくします
   */
  small?: boolean;
} & MarginClassProps &
  CommonProps;

export default function TabButton(props: Props): React.ReactElement {
  const {
    children,
    current,
    small,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    marginSize,
  } = props;

  const buttonBaseClass = 'vb-tabButton';
  const classModifier = {
    current,
    small,
  };
  return (
    <button
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
