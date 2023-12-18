import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import commonProps, { CommonProps } from '../../utilities/commonProps';

type Props = {
  children?: React.ReactNode;
  small?: boolean;
} & MarginClassProps &
  CommonProps;

const ScrimBase: React.FC<Props> = (props: Props) => {
  const {
    children,
    small,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    marginSize,
  } = props;
  const baseClass = 'vb-scrimBase';
  const classModifiers = { small };

  return (
    <div
      {...commonProps(props, baseClass, classModifiers, {
        marginTop,
        marginLeft,
        marginRight,
        marginBottom,
        marginSize,
      })}
    >
      {children}
    </div>
  );
};

export default ScrimBase;
