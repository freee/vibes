import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import { useResponsive } from '../../utilities/VibesProvider';

type Props = {
  children: React.ReactNode;
  paddingSize?: 'small' | 'large';
} & MarginClassProps &
  CommonProps;

const ContentsBase: React.FC<Props> = (props: Props) => {
  const {
    children,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    marginSize,
    paddingSize,
  } = props;
  const baseClass = 'vb-contentsBase';
  const classModifiers = {
    responsive: useResponsive(),
    'padding-small': paddingSize === 'small',
    'padding-large': paddingSize === 'large',
  };

  return (
    <section
      {...commonProps(props, baseClass, classModifiers, {
        marginBottom,
        marginLeft,
        marginRight,
        marginSize,
        marginTop,
      })}
    >
      {children}
    </section>
  );
};

export default ContentsBase;
