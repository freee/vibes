import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import { MiniTag } from './MiniTag';

export default {
  component: MiniTag,
};

export const MiniTagComponent = () => (
  <MiniTag
    type={text('type', '取引先', 'MiniTag')}
    disabledRemoveButton={boolean('disabledRemoveButton', true, 'MiniTag')}
    removable={boolean('removable', true, 'MiniTag')}
    removeButtonTabIndex={select(
      'removeButtonTabIndex',
      { none: undefined, '0': 0, '-1': -1 },
      undefined,
      'MiniTag'
    )}
    onRemove={action('onRemove')}
    color={
      select(
        'Color',
        {
          RE: 'RE',
          OR: 'OR',
          YE: 'YE',
          YG: 'YG',
          GR: 'GR',
          BG: 'BG',
          PU: 'PU',
          GY: 'GY',
          undefined: '',
        },
        '',
        'MiniTag'
      ) || undefined
    }
    {...commonKnobs()}
  >
    {text('children', 'フリー株式会社', 'MiniTag')}
  </MiniTag>
);

export const AccentColor = () => (
  <>
    <MiniTag type="色" removable mr={1} mb={1}>
      None
    </MiniTag>
    <MiniTag color="RE" type="色" removable mr={1} mb={1}>
      RE
    </MiniTag>
    <MiniTag color="OR" type="色" removable mr={1} mb={1}>
      OR
    </MiniTag>
    <MiniTag color="YE" type="色" removable mr={1} mb={1}>
      YE
    </MiniTag>
    <MiniTag color="YG" type="色" removable mr={1} mb={1}>
      YG
    </MiniTag>
    <MiniTag color="GR" type="色" removable mr={1} mb={1}>
      GR
    </MiniTag>
    <MiniTag color="BG" type="色" removable mr={1} mb={1}>
      BG
    </MiniTag>
    <MiniTag color="PU" type="色" removable mr={1} mb={1}>
      PU
    </MiniTag>
    <MiniTag color="GY" type="色" removable mr={1} mb={1}>
      GY
    </MiniTag>
  </>
);

export const LongText = () => (
  <>
    <MiniTag mb={0.25}>{Array(1000).fill('あ').join('')}</MiniTag>
    <MiniTag removable>{Array(1000).fill('あ').join('')}</MiniTag>
  </>
);
