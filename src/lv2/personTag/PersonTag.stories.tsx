import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import PersonTag from './PersonTag';
import dsSquare from '../../lv1/icons/storyAssets/ds_square.jpeg';

export default {
  component: PersonTag,
};

export const PersonTagComponent = () => (
  <PersonTag
    removable={boolean('Removable', true, 'PersonTag')}
    color={
      select(
        'Color',
        {
          success: 'success',
          error: 'error',
          undefined: '',
        },
        '',
        'PersonTag'
      ) || undefined
    }
    onRemove={action('remove')}
    disabledRemoveButton={boolean('DisabledRemoveButton', false, 'PersonTag')}
    imageUrl={dsSquare}
    {...commonKnobs()}
  >
    {text('Children', '佐々木大輔', 'PersonTag')}
  </PersonTag>
);

export const Color = () => (
  <>
    <div style={{ marginBottom: '1rem' }}>
      <PersonTag imageUrl={dsSquare} color="success" type="success">
        佐々木大輔
      </PersonTag>
    </div>
    <div style={{ marginBottom: '1rem' }}>
      <PersonTag imageUrl={dsSquare} color="error" type="error">
        佐々木大輔
      </PersonTag>
    </div>
  </>
);

export const DisabledRemoveButton = () => (
  <div>
    <PersonTag
      removable
      imageUrl={dsSquare}
      disabledRemoveButton
      onRemove={action('onRemove')}
    >
      佐々木大輔
    </PersonTag>
  </div>
);
