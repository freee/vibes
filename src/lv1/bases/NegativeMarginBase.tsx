import * as React from 'react';
import commonProps, { CommonProps } from '../../utilities/commonProps';

type Props = {
  children?: React.ReactNode;
  /** マージンの大きさを指定します。 `small` = 1rem, `medium` = 1.5rem, `large` = 2rem （サイズ指定が独特なので要注意）*/
  marginSize?: 'small' | 'medium' | 'large';
  top?: boolean;
  left?: boolean;
  right?: boolean;
  bottom?: boolean;
} & CommonProps;

/**
 * マイナスのマージンを持つ領域です。このコンポーネントは将来的に廃止する可能性があります。かわりに
 * マージンをつけたいコンポーネントや `MarginBase` コンポーネントの `ma`, `mb`, `ml`, `mr`, `mt` 属性にマイナス値を渡してください。
 */
const NegativeMarginBase: React.FC<Props> = (props: Props) => {
  const { children, marginSize = 'large', top, left, right, bottom } = props;

  return (
    <div
      {...commonProps(props, `vb-negativeMargin--${marginSize}`, {
        top,
        left,
        right,
        bottom,
      })}
    >
      {children}
    </div>
  );
};

export default NegativeMarginBase;
