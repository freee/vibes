import * as React from 'react';
import commonProps, { CommonProps } from '../../../utilities/commonProps';

type Props = {
  stepCount: number;
  totalStepCount: number;
} & CommonProps;

const GuideStepCount: React.FC<Props> = (props: Props) => {
  const { stepCount, totalStepCount } = props;

  return (
    <div {...commonProps(props, 'vb-guideStepCount')}>
      <span className="vb-guideStepCount__currentStep">{stepCount}</span>
      <span> / </span>
      <span>{totalStepCount}</span>
    </div>
  );
};

export default GuideStepCount;
