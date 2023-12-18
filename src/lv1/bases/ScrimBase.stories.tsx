import * as React from 'react';

import ScrimBase from './ScrimBase';
import { boolean } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';

export default {
  component: ScrimBase,
};
export const ScrimBaseComponent = () => (
  <ScrimBase small={boolean('Small', false, 'ScrimBase')} {...commonKnobs()}>
    スクリムはダイアログやモーダルウインドウを表示する際に、下のコンテンツを覆う目隠しです。
  </ScrimBase>
);
