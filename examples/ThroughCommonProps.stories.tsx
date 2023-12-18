import * as React from 'react';
import ThroughCommonProps from './ThroughCommonProps.mdx';
import { Button, CommonProps, MarginBase, pickCommonProps } from '../src';

export default {
  title: 'examples/ThroughCommonProps',
  parameters: { docs: { page: ThroughCommonProps } }
};

export const Sample = () => {
  type InnerProps = CommonProps & { children?: React.ReactNode };

  const InnerBlock: React.FC<InnerProps> = (props: InnerProps) => {
    const commonProps = pickCommonProps(props);
    const { children } = props;

    return <MarginBase {...commonProps}>{children}</MarginBase>;
  };

  const InnerButton: React.FC<InnerProps> = (props: InnerProps) => {
    const commonProps = pickCommonProps(props);
    const { children } = props;

    return (
      <Button {...commonProps} appearance="primary">
        {children}
      </Button>
    );
  };

  return (
    <>
      <InnerBlock mb={3}>margin bottom = 3</InnerBlock>
      <InnerButton ml={1} data-test="through-common-props-example">
        Button (ml=1, data-test=through-common-props-example)
      </InnerButton>
    </>
  );
};
