import * as React from 'react';

import DialogBase from './DialogBase';
import Paragraph from '../typography/Paragraph';
import { commonKnobs } from '../../../stories';
import { select, boolean } from '@storybook/addon-knobs';

export default {
  component: DialogBase,
};
export const DialogBaseComponent = () => (
  <DialogBase
    small={boolean('Small', false, 'DialogBase')}
    inline={boolean('Inline', false, 'DialogBase')}
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
        'DialogBase'
      ) || undefined // none時にundefinedにしたいが、selectのoptionにundefinedを渡せないので空文字を||でundefinedにしている
    }
    paddingSize={
      select(
        'PaddingSize',
        {
          none: '',
          small: 'small',
          medium: 'medium',
          large: 'large',
          zero: 'zero',
        },
        '',
        'DialogBase'
      ) || undefined
    }
    {...commonKnobs()}
  >
    ダイアログベースは浮き上がるウインドウを配置するための領域です。
    <br />
    周囲に24dpのpaddingが入り、モーダルなどに使うことができます。
  </DialogBase>
);

export const PaddingSizeOption = () => (
  <>
    <DialogBase mb={1}>default (1.5rem = 24px)</DialogBase>
    <DialogBase paddingSize="zero" mb={1}>
      paddingSize=&quot;zero&quot;
    </DialogBase>
    <DialogBase paddingSize="small" mb={1}>
      paddingSize=&quot;small&quot; (1rem = 16px)
    </DialogBase>
    <DialogBase paddingSize="medium" mb={1}>
      paddingSize=&quot;medium&quot; (1.5rem = 24px)
    </DialogBase>
    <DialogBase paddingSize="large" mb={1}>
      paddingSize=&quot;large&quot; (2rem = 32px)
    </DialogBase>
  </>
);

export const BorderOption = () => (
  <>
    <DialogBase mb={1}>without border prop</DialogBase>
    <DialogBase border="default" mb={1}>
      border=&quot;default&quot;
    </DialogBase>
    <DialogBase border="alert" mb={1}>
      border=&quot;alert&quot;
    </DialogBase>
    <DialogBase border="notice" mb={1}>
      border=&quot;notice&quot;
    </DialogBase>
    <DialogBase border="success" mb={1}>
      border=&quot;success&quot;
    </DialogBase>
  </>
);

export const InlineOption = () => (
  <>
    <Paragraph>
      inline propを使用すると、
      <DialogBase inline paddingSize="small" ml={0.5} mr={0.5}>
        こんなふうに
      </DialogBase>
      display:inline の表示になります
    </Paragraph>
  </>
);
