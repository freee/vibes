import * as React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

import ScrimCoveredContent from './ScrimCoveredContent';
import Button from '../../lv1/buttons/Button';
import SectionTitle from '../../lv1/typography/SectionTitle';
import TextField from '../../lv1/forms/TextField';
import FormControl from '../formControl/FormControl';
import { commonKnobs } from '../../../stories';

const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export default {
  component: ScrimCoveredContent,
};

export const WithKnobs = () => (
  <ScrimCoveredContent
    inline={boolean('inline', false)}
    message={text('message', 'このコンテンツは利用できません')}
    {...commonKnobs()}
  >
    {LOREM}
  </ScrimCoveredContent>
);

export const IsInline = () => (
  <ScrimCoveredContent message="このコンテンツは利用できません" inline>
    <SectionTitle>タイトル</SectionTitle>
    <FormControl>
      <TextField disabled />
      <Button ml={1} disabled>
        Submit
      </Button>
    </FormControl>
  </ScrimCoveredContent>
);
