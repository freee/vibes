import * as React from 'react';
import commonProps, { CommonProps } from '../../utilities/commonProps';

type Props = {
  children: React.ReactNode | React.ReactNodeArray;
} & CommonProps;

const FormControlGroup: React.FC<Props> = (props: Props) => {
  const { children } = props;

  return (
    <div
      {...commonProps(props, 'vb-formControlGroup', {
        block: React.Children.count(children) <= 1,
      })}
    >
      {children}
    </div>
  );
};
export default FormControlGroup;
