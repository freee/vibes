import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { CommonProps } from '../../utilities/commonProps';
import { ButtonAriaProps } from '../../utilities/AriaProps';
import Button from './Button';

type Props = {
  children?: React.ReactNode;
  IconComponent: React.ElementType;
  primary?: boolean;
  danger?: boolean;
  disabled?: boolean;
  small?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler;
} & MarginClassProps &
  CommonProps &
  ButtonAriaProps;

/**
 * (廃止予定) Buttonコンポーネントを使用してください
 *
 * 「別ウインドウで開く」「ポップアップ表示」などボタン押下時の挙動を示す必要がある際に使用してください
 */
export default function RightIconButton(props: Props): React.ReactElement {
  return <Button {...props} iconPosition="right" />;
}
