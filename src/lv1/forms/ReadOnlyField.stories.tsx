import * as React from 'react';

import { boolean, select, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import ReadOnlyField from './ReadOnlyField';
import TextField from './TextField';

export default {
  component: ReadOnlyField,
};

export const ReadOnlyFieldComponent = () => (
  <ReadOnlyField
    id={text('Id', '', 'ReadOnlyField')}
    label={text('Label', '', 'ReadOnlyField')}
    labelledby={text('Labelledby', '', 'ReadOnlyField')}
    name={text('Name', 'name_of_field', 'ReadOnlyField')}
    value={text('Value', 'read_only_field', 'ReadOnlyField')}
    valueText={text('ValueText', 'read only なフィールド', 'ReadOnlyField')}
    small={boolean('Small', false, 'ReadOnlyField')}
    large={boolean('Large', false, 'ReadOnlyField')}
    alignRight={boolean('AlignRight', false, 'ReadOnlyField')}
    alignCenter={boolean('AlignCenter', false, 'ReadOnlyField')}
    width={select(
      'Width',
      {
        XSmall: 'xSmall',
        Small: 'small',
        Medium: 'medium',
        Large: 'large',
        Full: 'full',
      },
      'medium',
      'ReadOnlyField'
    )}
    {...commonKnobs()}
  />
);

export const VerticalAlign = () => (
  // TextFieldと位置が揃うよ！
  <>
    Hoge
    <ReadOnlyField value="Fuga" ml={0.5} />
    <TextField value="Moge" ml={0.5} />
  </>
);

export const LongValue = () => (
  <ReadOnlyField
    id={text('Id', '', 'ReadOnlyField')}
    label={text('Label', '', 'ReadOnlyField')}
    labelledby={text('Labelledby', '', 'ReadOnlyField')}
    name={text('Name', 'name_of_field', 'ReadOnlyField')}
    small={boolean('Small', false, 'ReadOnlyField')}
    large={boolean('Large', false, 'ReadOnlyField')}
    alignRight={boolean('AlignRight', false, 'ReadOnlyField')}
    alignCenter={boolean('AlignCenter', false, 'ReadOnlyField')}
    width={select(
      'Width',
      {
        XSmall: 'xSmall',
        Small: 'small',
        Medium: 'medium',
        Large: 'large',
        Full: 'full',
      },
      'medium',
      'ReadOnlyField'
    )}
    {...commonKnobs()}
    value={Array(50).fill('長いテキスト').join(' ')}
  />
);
