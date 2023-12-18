import * as React from 'react';
import commonProps, { CommonProps } from '../../utilities/commonProps';

export type GridSize =
  | 'half'
  | 'oneThird'
  | 'twoThirds'
  | 'oneQuarter'
  | 'threeQuarters';
type Props = {
  children?: React.ReactNode;
  size: GridSize;
} & CommonProps;

export default function GridBlock(props: Props): React.ReactElement {
  const { size, children } = props;

  const classModifier = {
    half: size === 'half',
    oneThird: size === 'oneThird',
    twoThirds: size === 'twoThirds',
    oneQuarter: size === 'oneQuarter',
    threeQuarters: size === 'threeQuarters',
  };
  return (
    <div {...commonProps(props, 'vb-gridBlock', classModifier, {})}>
      {children}
    </div>
  );
}
