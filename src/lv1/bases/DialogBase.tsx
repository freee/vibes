import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import { BaseComponentBorderProps, BaseComponentProps } from './types';

type Props = {
  children?: React.ReactNode;
  /**
   * メッセージダイアログ・確認ダイアログの場合にz-indexを高いものにするためのオプションです。
   * `true` にすることでz-indexが大きくなります
   */
  message?: boolean;
} & BaseComponentProps &
  BaseComponentBorderProps &
  MarginClassProps &
  CommonProps;

/**
 * モーダルウィンドウに使用するコンポーネントです。
 *
 * - **z-indexが指定されているため注意が必要です**
 * - `CardBase` や `PopupBase` との混同に注意してください。
 *   - ポップアップコンテンツ（ドロップダウンメニューやコンボボックス等）に使用するべきなのは `PopupBase` です
 *   - 作ろうとしているものがモーダルダイアログでも、ポップアップコンテンツでもない場合は、`CardBase` を使用してください
 */
const DialogBase: React.FC<Props> = (props: Props) => {
  const {
    children,
    small,
    message,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    marginSize,
    border,
    inline,
    paddingSize,
  } = props;
  const baseClass = 'vb-dialogBase';
  const classModifiers = {
    inline,
    message,
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

export default DialogBase;
