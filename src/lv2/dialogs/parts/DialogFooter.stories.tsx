import * as React from 'react';

import { boolean, select } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../../stories';
import Button from '../../../lv1/buttons/Button';
import TextButton from '../../../lv1/buttons/TextButton';
import CheckBox from '../../../lv1/forms/CheckBox';
import DialogFooter from './DialogFooter';

export default {
  component: DialogFooter,
};

export const DialogFooterComponent = () => (
  <DialogFooter
    sideContent={<TextButton>テキストボタン</TextButton>}
    responsive={boolean('responsive', true, 'DialogFooter')}
    mobileButtonLayout={
      select(
        'mobileButtonLayout',
        {
          row: 'row',
          column: 'column',
          undefined: '',
        },
        '',
        'DialogFooter'
      ) || undefined
    }
    {...commonKnobs()}
  >
    <Button primary>ボタン1</Button>
    <Button>ボタン2</Button>
    <CheckBox>チェックボックス</CheckBox>
  </DialogFooter>
);

export const ResponsiveDialogFooter = () => (
  <DialogFooter
    sideContent={<TextButton>テキストボタン</TextButton>}
    responsive={true}
    mobileButtonLayout="row"
    {...commonKnobs()}
  >
    <Button primary>ボタン1</Button>
    <Button>ボタン2</Button>
    <CheckBox>チェックボックス</CheckBox>
  </DialogFooter>
);
