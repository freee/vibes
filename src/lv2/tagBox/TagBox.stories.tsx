import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import TagBox from './TagBox';

export default {
  component: TagBox,
};

export const TagBoxComponent = () => (
  <TagBox
    type={text('Type', '取引先', 'TagBox')}
    removable={boolean('Removable', true, 'TagBox')}
    maxWidth={
      select(
        'MaxWidth',
        {
          small: 'small',
          medium: 'medium',
          large: 'large',
          undefined: '',
        },
        '',
        'TagBox'
      ) || undefined
    }
    color={
      select(
        'Color',
        {
          success: 'success',
          error: 'error',
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
        'TagBox'
      ) || undefined
    }
    onRemove={action('remove')}
    disabledRemoveButton={boolean('DisabledRemoveButton', false, 'TagBox')}
    {...commonKnobs()}
  >
    {text('Children', 'フリー株式会社', 'TagBox')}
  </TagBox>
);

export const MaxWidth = () => (
  <>
    <div style={{ marginBottom: '1rem' }}>
      <TagBox type="small" removable maxWidth="small">
        これは要素をはみ出るほど長い名前の会社です。とてもながーーーーーーーい
      </TagBox>
    </div>
    <div style={{ marginBottom: '1rem' }}>
      <TagBox type="medium" removable maxWidth="medium">
        これは要素をはみ出るほど長い名前の会社です。とてもながーーーーーーーい
      </TagBox>
    </div>
    <div style={{ marginBottom: '1rem' }}>
      <TagBox type="large" removable maxWidth="large">
        これは要素をはみ出るほど長い名前の会社です。とてもながーーーーーーーい
      </TagBox>
    </div>
  </>
);

export const Color = () => (
  <>
    <div style={{ marginBottom: '1rem' }}>
      <TagBox color="success">正常系の色</TagBox>
    </div>
    <div style={{ marginBottom: '1rem' }}>
      <TagBox color="error">異常系の色</TagBox>
    </div>
  </>
);

export const AccentColor = () => (
  <>
    <div style={{ marginBottom: '1rem' }}>
      <TagBox color="RE" type="type" removable>
        RE
      </TagBox>
    </div>
    <div style={{ marginBottom: '1rem' }}>
      <TagBox color="OR" type="type" removable>
        OR
      </TagBox>
    </div>
    <div style={{ marginBottom: '1rem' }}>
      <TagBox color="YE" type="type" removable>
        YE
      </TagBox>
    </div>
    <div style={{ marginBottom: '1rem' }}>
      <TagBox color="YG" type="type" removable>
        YG
      </TagBox>
    </div>
    <div style={{ marginBottom: '1rem' }}>
      <TagBox color="GR" type="type" removable>
        GR
      </TagBox>
    </div>
    <div style={{ marginBottom: '1rem' }}>
      <TagBox color="BG" type="type" removable>
        BG
      </TagBox>
    </div>
    <div style={{ marginBottom: '1rem' }}>
      <TagBox color="PU" type="type" removable>
        PU
      </TagBox>
    </div>
    <div style={{ marginBottom: '1rem' }}>
      <TagBox color="GY" type="type" removable>
        GY
      </TagBox>
    </div>
  </>
);

export const DisabledRemoveButton = () => (
  <div>
    <TagBox removable disabledRemoveButton onRemove={action('onRemove')}>
      フリー株式会社
    </TagBox>
  </div>
);
