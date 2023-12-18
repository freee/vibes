import * as React from 'react';
import { ProgressBar } from './ProgressBar';
import { Button } from '../../';

export default {
  component: ProgressBar,
};
export const ProgressBarComponent = ({
  value = 30,
  maxValue = 100,
  indeterminate = false,
  width = 'default',
  ariaLabel = '××の進捗',
  ariaLabelledby = undefined,
  ...args
}: React.ComponentProps<typeof ProgressBar>) => (
  <ProgressBar
    value={value}
    maxValue={maxValue}
    indeterminate={indeterminate}
    width={width}
    ariaLabel={ariaLabel}
    ariaLabelledby={ariaLabelledby}
    {...args}
  />
);

export const IndeterminateProgressBar = (
  args: React.ComponentProps<typeof ProgressBar>
) => <ProgressBar {...args} indeterminate />;

export const AutoIncreaseSample = ({
  width = 'default',
  ...args
}: React.ComponentProps<typeof ProgressBar>) => {
  const [progress, setProgress] = React.useState(0);
  const [intervalId, setIntervalId] = React.useState<number | null>(null);

  const start = () => {
    if (intervalId) {
      return;
    }
    setIntervalId(
      window.setInterval(() => {
        setProgress((progress) => (progress >= 100 ? 0 : progress + 1));
      }, 50)
    );
  };

  const stop = () => {
    intervalId && window.clearInterval(intervalId);
    setIntervalId(null);
  };

  return (
    <>
      <ProgressBar width={width} {...args} value={progress} />
      <Button
        ml={1}
        onClick={() => {
          if (intervalId) {
            stop();
          } else {
            start();
          }
        }}
      >
        {intervalId ? 'stop' : 'start'}
      </Button>
      <Button
        ml={0.5}
        onClick={() => {
          setProgress(0);
          stop();
        }}
      >
        reset
      </Button>
    </>
  );
};
