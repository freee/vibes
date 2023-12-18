import * as React from 'react';
import { useResponsive } from '../../utilities/VibesProvider';
import commonProps, { CommonProps } from '../../utilities/commonProps';

type Props = {
  children?: React.ReactNode;
} & CommonProps;

const DescriptionListCell: React.FC<Props> = (props: Props) => {
  const { children } = props;
  const listBaseClass = 'vb-descriptionListCell';

  return (
    <td {...commonProps(props, listBaseClass, { responsive: useResponsive() })}>
      {children}
    </td>
  );
};

export default DescriptionListCell;
