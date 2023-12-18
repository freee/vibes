import * as React from 'react';
import commonProps, { CommonProps } from '../../utilities/commonProps';

type Props = {
  scrollableX?: boolean;
  scrollableY?: boolean;
  children?: React.ReactNode;
} & CommonProps;
const ScrollableBase: React.FC<Props> = (props: Props) => {
  const { scrollableX, scrollableY, children } = props;

  return (
    <div
      {...commonProps(props, 'vb-scrollableBase', { scrollableX, scrollableY })}
      // キーボードでスクロールできるようにするため、tabIndexをつけておく
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
    >
      {children}
    </div>
  );
};
export default ScrollableBase;
