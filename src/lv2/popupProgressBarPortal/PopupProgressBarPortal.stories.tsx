import * as React from 'react';

import PopupProgressBarPortal from './PopupProgressBarPortal';
import { Button } from '../..';

export default {
  component: PopupProgressBarPortal,
};

export const PopupProgressBarComponent = () => (
  <PopupProgressBarPortal
    progressStates={[
      {
        status: 'doing' as const,
        message: 'メッセージ',
        progressValue: 30,
        progressMaxValue: 100,
      },
    ]}
  />
);

export const MultipleExample = () => {
  const exampleProps = [
    {
      status: 'doing' as const,
      message: 'メッセージ',
      progressValue: 30,
      progressMaxValue: 100,
    },
    {
      status: 'done' as const,
      message: 'メッセージ',
    },
    {
      status: 'error' as const,
      message: 'メッセージ',
    },
  ];

  const [example, setExample] = React.useState<number>(0);
  const [examples, setExamples] = React.useState<Array<number>>([]);

  return (
    <>
      <Button
        onClick={() => {
          setExamples([...examples, example]);
          setExample((example + 1) % 3);
        }}
      >
        追加
      </Button>
      <PopupProgressBarPortal
        progressStates={examples.map((example) => exampleProps[example])}
      />
    </>
  );
};
