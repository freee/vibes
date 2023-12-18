import * as React from 'react';

import MarginBase from './MarginBase';
import { boolean, select } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import ColumnBase from './ColumnBase';

export default {
  component: MarginBase,
};
export const MarginBaseComponent = () => (
  <MarginBase
    fitContent={boolean('FitContent', false, 'MarginBase')}
    marginTop={boolean('MarginTop (deprecated)', false, 'MarginBase')}
    marginLeft={boolean('MarginLeft (deprecated)', false, 'MarginBase')}
    marginRight={boolean('MarginRight (deprecated)', false, 'MarginBase')}
    marginBottom={boolean('MarginBottom (deprecated)', false, 'MarginBase')}
    marginSize={
      select(
        'MarginSize (deprecated)',
        {
          xSmall: 'xSmall',
          small: 'small',
          medium: '',
          large: 'large',
          xLarge: 'xLarge',
          xxLarge: 'xxLarge',
        },
        '',
        'MarginBase'
      ) || undefined
    }
    {...commonKnobs()}
  >
    MarginBaseは、マージンをつけるためのボックスです
  </MarginBase>
);

export const Fitcontent = () => (
  <MarginBase fitContent>
    <ColumnBase fitContent>
      fitContentを使用すると、コンテンツに合わせた大きさになります
    </ColumnBase>
  </MarginBase>
);

export const FunctionalMarginProps = () => (
  <>
    <MarginBase ml={1} mr={1.5}>
      <ColumnBase>ml=1, mr={1.5}</ColumnBase>
    </MarginBase>

    <MarginBase mt={2} mb={3}>
      <ColumnBase>mt=2, mb=3</ColumnBase>
    </MarginBase>
  </>
);

export const DeprecatedMarginProps = () => (
  <>
    <MarginBase marginLeft marginRight>
      <ColumnBase>marginLeft, marginRight</ColumnBase>
    </MarginBase>
    <MarginBase marginTop marginBottom marginSize="large">
      <ColumnBase>marginTop marginBottom marginSize=large</ColumnBase>
    </MarginBase>
    <MarginBase marginLeft marginRight marginBottom marginSize="xSmall">
      <ColumnBase>
        marginLeft marginRight marginBottom marginSize=xSmall
      </ColumnBase>
    </MarginBase>
    <MarginBase marginLeft marginRight marginBottom marginSize="small">
      <ColumnBase>
        marginLeft marginRight marginBottom marginSize=small
      </ColumnBase>
    </MarginBase>
    <MarginBase marginLeft marginRight marginBottom marginSize="large">
      <ColumnBase>
        marginLeft marginRight marginBottom marginSize=large
      </ColumnBase>
    </MarginBase>
    <MarginBase marginLeft marginRight marginBottom marginSize="xLarge">
      <ColumnBase>
        marginLeft marginRight marginBottom marginSize=xLarge
      </ColumnBase>
    </MarginBase>
    <MarginBase marginLeft marginRight marginBottom marginSize="xxLarge">
      <ColumnBase>
        marginLeft marginRight marginBottom marginSize=xxLarge
      </ColumnBase>
    </MarginBase>
  </>
);
