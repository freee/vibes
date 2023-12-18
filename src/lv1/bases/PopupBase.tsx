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
 * ポップアップコンテンツ（ドロップダウンやコンボボックスの選択部分など）に使用するコンポーネントです。
 *
 * - **z-indexが指定されているため注意が必要です**
 * - z-index: 1000;
 *   - FloatingBase（z-index: 500) < DialogBase（z-index: 1000) < PopupBase（z-index: 2000) となります。
 *   - ポップアップからダイアログが出てくるようなコンポーネントはPopupBaseでは実現できないのでFloatingBaseを使用して下さい
 * - `CardBase` や `DialogBase` との混同に注意してください。
 *   - モーダルダイアログに使用するべきなのは `DialogBase` です
 *   - 作ろうとしているものがモーダルダイアログでも、ポップアップコンテンツでもない場合は、`CardBase` を使用してください
 */
const PopupBase: React.FC<Props> = (props: Props) => {
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
  const baseClass = 'vb-popupBase';

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

export default PopupBase;
