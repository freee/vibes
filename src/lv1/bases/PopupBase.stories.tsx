import * as React from 'react';

import PopupBase from './PopupBase';
import Paragraph from '../typography/Paragraph';
import { select, boolean } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';

export default {
  component: PopupBase,
};
export const PopupBaseComponent = () => (
  <PopupBase
    small={boolean('Small', false, 'PopupBase')}
    inline={boolean('Inline', false, 'PopupBase')}
    fitContent={boolean('fitContent', false, 'PopupBase')}
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
        'PopupBase'
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
        'PopupBase'
      ) || undefined
    }
    {...commonKnobs()}
  >
    ポップアップベースは浮き上がるコンテンツを配置するための領域です。
    <br />
    周囲に24dpのpaddingが入り、メニューなどに使うことができます。
  </PopupBase>
);

export const PaddingSizeOption = () => (
  <>
    <PopupBase mb={1}>default (1.5rem = 24px)</PopupBase>
    <PopupBase paddingSize="zero" mb={1}>
      paddingSize=&quot;zero&quot;
    </PopupBase>
    <PopupBase paddingSize="small" mb={1}>
      paddingSize=&quot;small&quot; (1rem = 16px)
    </PopupBase>
    <PopupBase paddingSize="medium" mb={1}>
      paddingSize=&quot;medium&quot; (1.5rem = 24px)
    </PopupBase>
    <PopupBase paddingSize="large" mb={1}>
      paddingSize=&quot;large&quot; (2rem = 32px)
    </PopupBase>
  </>
);

export const BorderOption = () => (
  <>
    <PopupBase mb={1}>without border prop</PopupBase>
    <PopupBase border="default" mb={1}>
      border=&quot;default&quot;
    </PopupBase>
    <PopupBase border="alert" mb={1}>
      border=&quot;alert&quot;
    </PopupBase>
    <PopupBase border="notice" mb={1}>
      border=&quot;notice&quot;
    </PopupBase>
    <PopupBase border="success" mb={1}>
      border=&quot;success&quot;
    </PopupBase>
  </>
);

export const InlineOption = () => (
  <>
    <Paragraph>
      inline propを使用すると、
      <PopupBase inline paddingSize="small" ml={0.5} mr={0.5}>
        こんなふうに
      </PopupBase>
      display:inline の表示になります
    </Paragraph>
  </>
);
