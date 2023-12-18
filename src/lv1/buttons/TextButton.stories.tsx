import * as React from 'react';

import TextButton from './TextButton';
import { commonKnobs } from '../../../stories';
import { MdChevronRight } from 'react-icons/md';
import { text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'deprecated/buttons/TextButton',
  component: TextButton,
};

export const TextButtonComponent = () => (
  <TextButton
    id={text('ID', '', 'TextButton')}
    url={text('URL', '', 'TextButton')}
    onClick={action('click')}
    target={select(
      'Target',
      {
        _blank: '_blank',
        _self: '_self',
      },
      '_self',
      'TextButton'
    )}
    rel={text('rel', '', 'TextButton')}
    noBorder={boolean('NoBorder', false, 'TextButton')}
    disabled={boolean('Disabled', false, 'TextButton')}
    small={boolean('Small', false, 'TextButton')}
    iconPosition={select(
      'IconPosition',
      { right: 'right', left: 'left' },
      'left',
      'TextButton'
    )}
    IconComponent={MdChevronRight}
    {...commonKnobs()}
  >
    テキストボタン
  </TextButton>
);
