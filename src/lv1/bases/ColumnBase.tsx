import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import { BaseComponentBorderProps, BaseComponentProps } from './types';
import { useResponsive } from '../../utilities/VibesProvider';

type Props = {
  children?: React.ReactNode;
  /**
   * `true` にすると、`border-radius`が指定されます
   */
  rounded?: boolean;
  /**
   * `true` にすると、`overflow: hidden;`が指定されます。`ColumnBase`内で`Portal`を利用していない`DropDown`があった場合、`overflow: hidden;`によって見切れてしまう問題が発生しているので、それを避けるために暫定的にオンオフできるようにしています。デフォルトは`true`です。
   */
  overflowHidden?: boolean;
} & BaseComponentProps &
  BaseComponentBorderProps &
  MarginClassProps &
  CommonProps;

/**
 * ColumnBaseは区切られたコンテンツを埋め込むための領域です。
 *
 * * `rounded` propによってColumnBaseに`border-radius`を指定できます
 *   * ColumnBaseの周囲に余白がある際は`rounded`propを使用することを推奨します
 *   * `border` propを使用する場合は周囲に余白があるはずなので、 `rounded` propを使用しなくても`border-radius`が指定されます
 */
const ColumnBase: React.FC<Props> = (props: Props) => {
  const {
    children,
    small,
    rounded,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    marginSize,
    border,
    inline,
    overflowHidden = true,
    paddingSize,
  } = props;
  const classModifiers = {
    inline,
    overflowHidden,
    rounded: rounded || !!border,
    borderDefault: border === 'default',
    borderAlert: border === 'alert',
    borderNotice: border === 'notice',
    borderSuccess: border === 'success',
    paddingSmall: small || paddingSize === 'small',
    paddingLarge: paddingSize === 'large',
    paddingZero: paddingSize === 'zero',
    // レスポンシブなpaddingの変更は、inlineでなく、paddingSizeが無指定の場合のみ行う
    paddingResponsive: useResponsive() && !inline && !small && !paddingSize,
  };

  return (
    <div
      {...commonProps(props, 'vb-columnBase', classModifiers, {
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

export default ColumnBase;
