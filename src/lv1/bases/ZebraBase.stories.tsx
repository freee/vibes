import * as React from 'react';

import ZebraBase from './ZebraBase';
import { commonKnobs } from '../../../stories';
import { select } from '@storybook/addon-knobs';
import { VibesProvider } from '../../utilities';

export default {
  component: ZebraBase,
};
export const ZebraBaseComponent = () => (
  <>
    <ZebraBase
      {...commonKnobs()}
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
          'ZebraBase'
        ) || undefined
      }
    >
      ZebraBase
      は要素をグルーピングして表示するときに、交互に背景色をつけてくれます。
    </ZebraBase>
    <ZebraBase>周囲に24dpのpaddingが入ります。</ZebraBase>
    <ZebraBase>
      CSSのnth-childで色を付けているので、他の要素・コンポーネントと兄弟になる場合は
      <code>&lt;div&gt;</code>で囲うなどしてください
    </ZebraBase>
    <ZebraBase>hoge</ZebraBase>
    <ZebraBase>hoge</ZebraBase>
  </>
);

export const PaddingSizeOptions = () => (
  <>
    <div>
      <ZebraBase>default (1.5rem = 24px)</ZebraBase>
      <ZebraBase>default (1.5rem = 24px)</ZebraBase>
      <ZebraBase mb={1}>default (1.5rem = 24px)</ZebraBase>
    </div>
    <div>
      <ZebraBase paddingSize="zero">paddingSize=&quot;zero&quot;</ZebraBase>
      <ZebraBase paddingSize="zero">paddingSize=&quot;zero&quot;</ZebraBase>
      <ZebraBase paddingSize="zero" mb={1}>
        paddingSize=&quot;zero&quot;
      </ZebraBase>
    </div>
    <div>
      <ZebraBase paddingSize="small">
        paddingSize=&quot;small&quot; (1rem = 16px)
      </ZebraBase>
      <ZebraBase paddingSize="small">
        paddingSize=&quot;small&quot; (1rem = 16px)
      </ZebraBase>
      <ZebraBase paddingSize="small" mb={1}>
        paddingSize=&quot;small&quot; (1rem = 16px)
      </ZebraBase>
    </div>
    <div>
      <ZebraBase paddingSize="medium">
        paddingSize=&quot;medium&quot; (1.5rem = 24px)
      </ZebraBase>
      <ZebraBase paddingSize="medium">
        paddingSize=&quot;medium&quot; (1.5rem = 24px)
      </ZebraBase>
      <ZebraBase paddingSize="medium" mb={1}>
        paddingSize=&quot;medium&quot; (1.5rem = 24px)
      </ZebraBase>
    </div>
    <div>
      <ZebraBase paddingSize="large">
        paddingSize=&quot;large&quot; (2rem = 32px)
      </ZebraBase>
      <ZebraBase paddingSize="large">
        paddingSize=&quot;large&quot; (2rem = 32px)
      </ZebraBase>
      <ZebraBase paddingSize="large" mb={1}>
        paddingSize=&quot;large&quot; (2rem = 32px)
      </ZebraBase>
    </div>
  </>
);

export const ResponsivePaddingSize = () => (
  <VibesProvider fixedLayout={false}>
    <div>
      <ZebraBase>default (1.5rem = 24px)</ZebraBase>
      <ZebraBase>モバイル向けには左右が (1rem = 16px) となります</ZebraBase>
      <ZebraBase mb={1}>default (1.5rem = 24px)</ZebraBase>
    </div>
    <div>
      <ZebraBase paddingSize="zero">paddingSize=&quot;zero&quot;</ZebraBase>
      <ZebraBase paddingSize="zero">paddingSize=&quot;zero&quot;</ZebraBase>
      <ZebraBase paddingSize="zero" mb={1}>
        paddingSize=&quot;zero&quot;
      </ZebraBase>
    </div>
    <div>
      <ZebraBase paddingSize="small">
        paddingSize=&quot;small&quot; (1rem = 16px)
      </ZebraBase>
      <ZebraBase paddingSize="small">
        paddingSize=&quot;small&quot; (1rem = 16px)
      </ZebraBase>
      <ZebraBase paddingSize="small" mb={1}>
        paddingSize=&quot;small&quot; (1rem = 16px)
      </ZebraBase>
    </div>
    <div>
      <ZebraBase paddingSize="medium">
        paddingSize=&quot;medium&quot; (1.5rem = 24px)
      </ZebraBase>
      <ZebraBase paddingSize="medium">
        paddingSize=&quot;medium&quot; (1.5rem = 24px)
      </ZebraBase>
      <ZebraBase paddingSize="medium" mb={1}>
        paddingSize=&quot;medium&quot; (1.5rem = 24px)
      </ZebraBase>
    </div>
    <div>
      <ZebraBase paddingSize="large">
        paddingSize=&quot;large&quot; (2rem = 32px)
      </ZebraBase>
      <ZebraBase paddingSize="large">
        paddingSize=&quot;large&quot; (2rem = 32px)
      </ZebraBase>
      <ZebraBase paddingSize="large" mb={1}>
        paddingSize=&quot;large&quot; (2rem = 32px)
      </ZebraBase>
    </div>
  </VibesProvider>
);
