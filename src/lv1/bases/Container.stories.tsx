import * as React from 'react';

import Container from './Container';
import ContentsBase from './ContentsBase';
import { select, boolean } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';

export default {
  component: Container,
};
export const ContainerComponent = () => (
  <Container
    width={
      select(
        'width',
        { none: '', narrow: 'narrow', normal: 'normal', wide: 'wide' },
        '',
        'Container'
      ) || undefined
    }
    responsive={boolean('responsive', false, 'Container')}
    {...commonKnobs()}
  >
    <div>Containerコンポーネントはwidthと中央寄せが設定された大枠です。</div>
  </Container>
);

export const Widths = () => (
  <>
    <Container width="normal" mb={1}>
      <ContentsBase>normal</ContentsBase>
    </Container>
    <Container width="wide" mb={1}>
      <ContentsBase>wide</ContentsBase>
    </Container>
    <Container width="narrow" mb={1}>
      <ContentsBase>narrow</ContentsBase>
    </Container>
    <Container width="normal" responsive mb={1}>
      <ContentsBase>normal responsive</ContentsBase>
    </Container>
    <Container width="wide" responsive mb={1}>
      <ContentsBase>wide resiponsive</ContentsBase>
    </Container>
    <Container width="narrow" responsive mb={1}>
      <ContentsBase>narrow responsive</ContentsBase>
    </Container>
  </>
);
