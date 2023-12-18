import * as React from 'react';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import { useResponsive } from '../../utilities/VibesProvider';

type Props = {
  children: React.ReactNode;
  contentsBasePaddingSize?: 'small' | 'large';
} & CommonProps;

/**
 * `ContentsBase` のpaddingを打ち消すための専用コンポーネントです。 `ContentsBase` の左右のpaddingを打ち消します。末尾に置いた場合（ `:last-child` となる場合）には下方向のmarginを打ち消します。
 *
 * * 必ず `ContentsBase` の直下に配置してください（下側のマージンの打ち消しのため）
 * * `ContentsBase` に `paddingSize` を指定している場合は、`contentsBasePaddingSize` にそれと同じ値をセットしてください
 */
export const NegativeContentsBase: React.FC<Props> = (props: Props) => {
  const { children, contentsBasePaddingSize } = props;
  const baseClass = 'vb-negativeContentsBase';
  const classModifiers = {
    responsive: useResponsive(),
    negativeMarginSmall: contentsBasePaddingSize === 'small',
    negativeMarginLarge: contentsBasePaddingSize === 'large',
  };

  return (
    <div {...commonProps(props, baseClass, classModifiers)}>{children}</div>
  );
};
