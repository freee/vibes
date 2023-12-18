import * as React from 'react';

import { select, boolean } from '@storybook/addon-knobs';
import Balloon, { BalloonInternal } from './Balloon';
import { commonKnobs } from '../../../stories';

export default {
  component: BalloonInternal,
};
export const BaloonComponent = () => (
  <div
    style={{
      width: '60rem',
      marginTop: '6rem',
      marginRight: 'auto',
      marginLeft: 'auto',
      position: 'relative',
    }}
  >
    <Balloon
      small={boolean('Small', false, 'Balloon')}
      border={
        select(
          'Border',
          {
            none: '',
            default: 'default',
            notice: 'notice',
            alert: 'alert',
            success: 'success',
          },
          '',
          'Balloon'
        ) || undefined // none時にundefinedにしたいが、selectのoptionにundefinedを渡せないので空文字を||でundefinedにしている
      }
      position={select(
        'Position',
        {
          center: 'center',
          left: 'left',
          right: 'right',
        },
        'center',
        'Balloon'
      )}
      verticalPosition={
        select(
          'verticalPosition',
          { top: 'top', bottom: 'bottom', none: '' },
          '',
          'Balloon'
        ) || undefined
      }
      {...commonKnobs()}
    >
      バルーンはツールチップやシステムメッセージなどに利用できます
    </Balloon>
  </div>
);
