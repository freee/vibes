import * as React from 'react';

import { text, select, number } from '@storybook/addon-knobs';
import PopupProgressBar from './PopupProgressBar';

export default {
  component: PopupProgressBar,
};

export const PopupProgressBarComponent = () => (
  <PopupProgressBar
    status={select(
      'status',
      {
        doing: 'doing',
        done: 'done',
        error: 'error',
      },
      'doing',
      'PopupProgressBar'
    )}
    message={text('message', 'メッセージ', 'PopupProgressBar')}
    progressValue={number('progressValue', 30, undefined, 'PopupProgressBar')}
    progressMaxValue={number(
      'progressMaxValue',
      100,
      undefined,
      'PopupProgressBar'
    )}
    onClose={() => undefined}
  />
);
