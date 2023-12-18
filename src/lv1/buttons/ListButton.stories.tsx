import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import ListButton from './ListButton';

export default {
  title: 'deprecated/buttons/ListButton',
  component: ListButton,
};

export const ListButtonComponent = () => (
  <ListButton
    selected={boolean('Selected', false, 'ListButton')}
    href={text('Href', '#', 'ListButton')}
    target={select(
      'Target',
      {
        _blank: '_blank',
        _self: '_self',
      },
      '_self',
      'ListButton'
    )}
    rel={text('Rel', '', 'ListButton')}
    statusIconText={text('StatusIconText', '', 'ListButton')}
    statusIconType={select(
      'StatusIconType',
      {
        done: 'done',
        success: 'success',
        progress: 'progress',
        required: 'required',
        disabled: 'disabled',
        emphasis: 'emphasis',
        warning: 'warning',
        error: 'error',
      },
      'success',
      'ListButton'
    )}
    actionButton={boolean('ActionButton', false, 'ListButton')}
    bgTransparent={boolean('BgTransparent', false, 'ListButton')}
    onClick={action('click')}
    {...commonKnobs()}
  >
    {text('Children', 'リスト', 'ListButton')}
  </ListButton>
);
