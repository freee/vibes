import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import commonProps, { CommonProps } from '../../utilities/commonProps';

type Props = {
  children?: React.ReactNode;
} & MarginClassProps &
  CommonProps;

export default function GridWrapper(props: Props): React.ReactElement {
  const {
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginSize,
    children,
  } = props;

  return (
    <div
      {...commonProps(
        props,
        'vb-gridWrapper',
        {},
        {
          marginBottom,
          marginLeft,
          marginRight,
          marginTop,
          marginSize,
        }
      )}
    >
      {children}
    </div>
  );
}
