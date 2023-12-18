import * as React from 'react';

import ColumnBase from './ColumnBase';
import Paragraph from '../typography/Paragraph';
import { select, boolean } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import { VibesProvider } from '../../utilities';

export default {
  component: ColumnBase,
};
export const ColumnBaseComonent = () => (
  <ColumnBase
    small={boolean('Small', false, 'ColumnBase')}
    rounded={boolean('Rounded', false, 'ColumnBase')}
    inline={boolean('Inline', false, 'ColumnBase')}
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
        'ColumnBase'
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
        'ColumnBase'
      ) || undefined
    }
    {...commonKnobs()}
  >
    コラムベースはタブやディバイダーなどで区切られたコンテンツを埋め込むための領域です。
    <br />
    周囲に24dpのpaddingが入ります。注釈などにも使うことができます。
  </ColumnBase>
);

export const PaddingSizeOption = () => (
  <>
    <ColumnBase mb={1}>default (1.5rem = 24px)</ColumnBase>
    <ColumnBase paddingSize="zero" mb={1}>
      paddingSize=&quot;zero&quot;
    </ColumnBase>
    <ColumnBase paddingSize="small" mb={1}>
      paddingSize=&quot;small&quot; (1rem = 16px)
    </ColumnBase>
    <ColumnBase paddingSize="medium" mb={1}>
      paddingSize=&quot;medium&quot; (1.5rem = 24px)
    </ColumnBase>
    <ColumnBase paddingSize="large" mb={1}>
      paddingSize=&quot;large&quot; (2rem = 32px)
    </ColumnBase>
  </>
);

export const ResponsivePaddingSize = () => (
  <VibesProvider fixedLayout={false}>
    <ColumnBase mb={1}>
      default (デスクトップ向けは1.5rem = 24px、モバイル向けは左右が1rem = 16px)
    </ColumnBase>
    <ColumnBase paddingSize="zero" mb={1}>
      paddingSize=&quot;zero&quot;
    </ColumnBase>
    <ColumnBase paddingSize="small" mb={1}>
      paddingSize=&quot;small&quot; (1rem = 16px)
    </ColumnBase>
    <ColumnBase paddingSize="medium" mb={1}>
      paddingSize=&quot;medium&quot; (1.5rem = 24px)
    </ColumnBase>
    <ColumnBase paddingSize="large" mb={1}>
      paddingSize=&quot;large&quot; (2rem = 32px)
    </ColumnBase>
  </VibesProvider>
);

export const BorderOption = () => (
  <>
    <ColumnBase mb={1}>without border prop</ColumnBase>
    <ColumnBase border="default" mb={1}>
      border=&quot;default&quot;
    </ColumnBase>
    <ColumnBase border="alert" mb={1}>
      border=&quot;alert&quot;
    </ColumnBase>
    <ColumnBase border="notice" mb={1}>
      border=&quot;notice&quot;
    </ColumnBase>
    <ColumnBase border="success" mb={1}>
      border=&quot;success&quot;
    </ColumnBase>
  </>
);

export const InlineOption = () => (
  <>
    <Paragraph>
      inline propを使用すると、
      <ColumnBase inline paddingSize="small" ml={0.5} mr={0.5}>
        こんなふうに
      </ColumnBase>
      display:inline の表示になります
    </Paragraph>
  </>
);

export const RoundedOption = () => (
  <>
    <ColumnBase mb={1} rounded>
      rounded 左右に余白があるときに使用推奨です
    </ColumnBase>
    <ColumnBase>not rounded 横幅いっぱいにするときに使用推奨です</ColumnBase>
  </>
);
