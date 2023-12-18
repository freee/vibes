import * as React from 'react';

import CardBase from './CardBase';
import Paragraph from '../typography/Paragraph';
import { commonKnobs } from '../../../stories';
import { boolean, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { VibesProvider } from '../../utilities';

export default {
  component: CardBase,
};
export const CardBaseComponent = () => (
  <CardBase
    small={boolean('Small', false, 'CardBase')}
    inline={boolean('Inline', false, 'CardBase')}
    clickable={boolean('Clickable', false, 'CardBase')}
    url={text('URL', '', 'CardBase')}
    target={text('Target', '', 'CardBase')}
    rel={text('Rel', '', 'CardBase')}
    paddingSize={
      select(
        'PaddingSize',
        { none: '', small: 'small', large: 'large', zero: 'zero' },
        '',
        'CardBase'
      ) || undefined
    }
    onClick={action('click')}
    onSelfWindowNavigation={action('selfWindowNavigation')}
    {...commonKnobs()}
  >
    カードベースはグルーピングされた要素を表示するときに使用するパーツです。
    <br />
    同等のグルーピングが複数並ぶ場合、例えばコレクションにおけるひとつのオブジェクトであったり、設定における複数カテゴリを同じ画面で並べる場合に用います。{' '}
    <br />
    周囲に24dpのpaddingが入ります。
  </CardBase>
);

export const Clickable = () => (
  <CardBase
    clickable
    small={boolean('Small', false, 'CardBase')}
    inline={boolean('Inline', false, 'CardBase')}
    url={text('URL', '', 'CardBase')}
    target={text('Target', '', 'CardBase')}
    rel={text('Rel', '', 'CardBase')}
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
        'CardBase'
      ) || undefined
    }
    onClick={action('click')}
    onSelfWindowNavigation={action('selfWindowNavigation')}
  >
    クリッカブルなCardBaseです。URLを渡すとリンクになり、そうでない場合はボタンになります。
  </CardBase>
);

export const PaddingSizeOption = () => (
  <>
    <CardBase mb={1}>default (1.5rem = 24px)</CardBase>
    <CardBase paddingSize="zero" mb={1}>
      paddingSize=&quot;zero&quot;
    </CardBase>
    <CardBase paddingSize="small" mb={1}>
      paddingSize=&quot;small&quot; (1rem = 16px)
    </CardBase>
    <CardBase paddingSize="medium" mb={1}>
      paddingSize=&quot;medium&quot; (1.5rem = 24px)
    </CardBase>
    <CardBase paddingSize="large" mb={1}>
      paddingSize=&quot;large&quot; (2rem = 32px)
    </CardBase>
  </>
);
export const ResponsivePaddingSize = () => (
  <VibesProvider fixedLayout={false}>
    <CardBase mb={1}>
      default (デスクトップ向けは1.5rem = 24px、モバイル向けは左右が1rem = 16px)
    </CardBase>
    <CardBase paddingSize="zero" mb={1}>
      paddingSize=&quot;zero&quot;
    </CardBase>
    <CardBase paddingSize="small" mb={1}>
      paddingSize=&quot;small&quot; (1rem = 16px)
    </CardBase>
    <CardBase paddingSize="medium" mb={1}>
      paddingSize=&quot;medium&quot; (1.5rem = 24px)
    </CardBase>
    <CardBase paddingSize="large" mb={1}>
      paddingSize=&quot;large&quot; (2rem = 32px)
    </CardBase>
  </VibesProvider>
);
export const InlineOption = () => (
  <>
    <Paragraph>
      inline propを使用すると、
      <CardBase inline paddingSize="small" ml={0.5} mr={0.5}>
        こんなふうに
      </CardBase>
      display:inline の表示になります
    </Paragraph>
  </>
);

export const Disabled = () => (
  <CardBase
    small={boolean('Small', false, 'CardBase')}
    inline={boolean('Inline', false, 'CardBase')}
    clickable={boolean('Clickable', false, 'CardBase')}
    disabled={boolean('disabled', true, 'CardBase')}
    url={text('URL', '', 'CardBase')}
    target={text('Target', '', 'CardBase')}
    rel={text('Rel', '', 'CardBase')}
    paddingSize={
      select(
        'PaddingSize',
        { none: '', small: 'small', large: 'large', zero: 'zero' },
        '',
        'CardBase'
      ) || undefined
    }
    onClick={action('click')}
    onSelfWindowNavigation={action('selfWindowNavigation')}
    {...commonKnobs()}
  >
    これはdisabled
  </CardBase>
);
