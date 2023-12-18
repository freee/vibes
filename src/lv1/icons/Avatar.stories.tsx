import * as React from 'react';
import Avatar from './Avatar';

import { commonKnobs } from '../../../stories';
import { select, text } from '@storybook/addon-knobs';
import dsSquare from './storyAssets/ds_square.jpeg';
import dsLandscape from './storyAssets/ds_landscape.jpeg';
import dsPortlait from './storyAssets/ds_portlait.jpeg';

export default {
  component: Avatar,
};

export const AvatarComponent = () => (
  <Avatar
    imageUrl={text('imageUrl', dsSquare, 'Avatar')}
    size={
      select(
        'size',
        {
          small: 'small',
          medium: 'medium',
          large: 'large',
          xLarge: 'xLarge',
          default: '',
        },
        '',
        'Avatar'
      ) || undefined
    }
    {...commonKnobs()}
  />
);

export const ImageCropping = () => (
  <>
    <Avatar imageUrl={dsSquare} />
    <Avatar imageUrl={dsPortlait} />
    <Avatar imageUrl={dsLandscape} />
    <Avatar imageUrl="" />
  </>
);

export const Size = () => (
  <>
    <div>
      <Avatar imageUrl={dsSquare} size="small" />
      <Avatar imageUrl={dsSquare} size="medium" />
      <Avatar imageUrl={dsSquare} size="large" />
      <Avatar imageUrl={dsSquare} size="xLarge" />
    </div>
    <div>
      <Avatar size="small" />
      <Avatar size="medium" />
      <Avatar size="large" />
      <Avatar size="xLarge" />
    </div>
  </>
);
