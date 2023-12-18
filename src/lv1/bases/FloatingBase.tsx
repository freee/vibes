import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import { BaseComponentBorderProps, BaseComponentProps } from './types';

type Props = {
  children?: React.ReactNode;
} & BaseComponentProps &
  BaseComponentBorderProps &
  MarginClassProps &
  CommonProps;
/**
 * PopupBaseと同様にポップアップコンテンツに使用するコンポーネントです。
 *
 * - **z-indexが指定されているため注意が必要です**
 * - z-index: 500;
 *   - FloatingBase（z-index: 500) < DialogBase（z-index: 1000) < PopupBase（z-index: 2000) となります。
 *   - ポップアップからダイアログが出てくるようなコンポーネントはPopupBaseでは実現できないのでFloatingBaseを使用して下さい
 */
const FloatingBase: React.FC<Props> = (props: Props) => {
  const {
    children,
    small,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    marginSize,
    border,
    inline,
    fitContent,
    paddingSize,
  } = props;
  const baseClass = 'vb-floatingBase';

  const classModifiers = {
    inline,
    fitContent,
    borderDefault: border === 'default',
    borderAlert: border === 'alert',
    borderNotice: border === 'notice',
    borderSuccess: border === 'success',
    paddingSmall: small || paddingSize === 'small',
    paddingLarge: paddingSize === 'large',
    paddingZero: paddingSize === 'zero',
  };

  return (
    <div
      {...commonProps(props, baseClass, classModifiers, {
        marginBottom,
        marginLeft,
        marginRight,
        marginSize,
        marginTop,
      })}
    >
      {children}
    </div>
  );
};

export default FloatingBase;
