import * as React from 'react';
import { Stack, StepNumber, Text } from '../../lv1';
import commonProps, { CommonProps } from '../../utilities/commonProps';

type Props = {
  currentStepIndex: number;
  disabledStepIndex: Array<number>;
  small?: boolean;
  steps: Array<React.ReactNode>;
} & CommonProps;

const Stepper: React.FC<Props> = (props: Props) => {
  const { steps, currentStepIndex, disabledStepIndex, small } = props;
  const stepperBaseClass = 'vb-stepper';

  return (
    <ul {...commonProps(props, stepperBaseClass, { small })}>
      {steps.map((name, i) => (
        <li key={i} className={`${stepperBaseClass}__listItem`}>
          <div className={`${stepperBaseClass}__listContent`}>
            <Stack
              direction="vertical"
              gap={small ? 0.25 : 0.5}
              alignItems="center"
            >
              <StepNumber
                number={(i + 1).toString()}
                current={currentStepIndex === i}
                done={currentStepIndex > i}
                small={small}
                disabled={disabledStepIndex.includes(i)}
              />
              <Text color={currentStepIndex === i ? 'P5' : 'S9'} size={0.75}>
                {name}
              </Text>
            </Stack>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Stepper;
