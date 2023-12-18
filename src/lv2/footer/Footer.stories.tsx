import * as React from 'react';

import { boolean, select, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import Footer from './Footer';

export default {
  component: Footer,
};

export const FooterComponent = () => (
  <Footer
    width={
      select(
        'width',
        { none: '', narrow: 'narrow', normal: 'normal', wide: 'wide' },
        '',
        'Footer'
      ) || undefined
    }
    disableAppStoreBadge={boolean('disableAppStoreBadgbe', false, 'Footer')}
    AppStoreUrl={text('AppStoreUrl', '', 'Footer') || undefined}
    disableGooglePlayBadge={boolean('disableGooglePlayBadge', false, 'Footer')}
    GooglePlayUrl={text('GooglePlayUrl', '', 'Footer') || undefined}
    copyright={text('copyright', '', 'Footer') || undefined}
    {...commonKnobs()}
  />
);

export const WithSectionNode = () => (
  <Footer
    sectionNode={
      <div
        style={{
          alignItems: 'center',
          backgroundColor: 'lightgray',
          display: 'flex',
          height: 40,
          justifyContent: 'center',
          width: 120,
        }}
      >
        <span>dummy badge</span>
      </div>
    }
  />
);
