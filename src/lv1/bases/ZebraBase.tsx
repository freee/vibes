import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import { BaseComponentPaddingProps } from './types';
import { useResponsive } from '../../utilities/VibesProvider';

type Props = {
  children?: React.ReactNode;
} & BaseComponentPaddingProps &
  MarginClassProps &
  CommonProps;

const ZebraBase: React.FC<Props> = (props: Props) => {
  const {
    children,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    marginSize,
    paddingSize,
  } = props;

  return (
    <div
      {...commonProps(
        props,
        'vb-zebraBase',
        {
          paddingSmall: paddingSize === 'small',
          paddingLarge: paddingSize === 'large',
          paddingZero: paddingSize === 'zero',
          // レスポンシブなpaddingの変更は、paddingSizeが無指定の場合のみ行う
          paddingResponsive: useResponsive() && !paddingSize,
        },
        { marginTop, marginBottom, marginLeft, marginRight, marginSize }
      )}
    >
      {children}
    </div>
  );
};

export default ZebraBase;
