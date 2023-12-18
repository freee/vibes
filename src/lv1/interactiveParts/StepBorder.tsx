import * as React from 'react';
import commonProps, { CommonProps } from '../../utilities/commonProps';

type Props = {
  /**
   * 見た目を done にします
   */
  done?: boolean;
  /**
   * StepBlock の separator として使用します
   */
  separator?: boolean;
} & CommonProps;

/**
 * 古いコンポーネントなので使わないでください
 *
 * @deprecated
 */
const StepBorder: React.FC<Props> = (props: Props) => {
  const { done, separator } = props;
  const stepperBaseClass = 'vb-stepBorder';

  return (
    <li
      {...commonProps(props, stepperBaseClass, { done, separator })}
      aria-hidden="true"
    />
  );
};

export default StepBorder;
