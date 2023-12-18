import * as React from 'react';

import { commonKnobs } from '../../../stories';
import { Vibes2021BackgroundColor } from '../../constants';
import NotFoundSwallow from './NotFoundSwallow';

export default {
  component: NotFoundSwallow,
};

export const NotFoundSwallowComponent = () => (
  <NotFoundSwallow {...commonKnobs()} />
);

export const FitWidth = () => (
  <>
    <div
      style={{
        width: '10rem',
        background: Vibes2021BackgroundColor,
        marginBottom: '1rem',
      }}
    >
      <NotFoundSwallow size="fit-width" />
    </div>
    <div
      style={{
        width: '20rem',
        background: Vibes2021BackgroundColor,
        marginBottom: '1rem',
      }}
    >
      <NotFoundSwallow size="fit-width" />
    </div>
    <div
      style={{
        width: '30rem',
        background: Vibes2021BackgroundColor,
        marginBottom: '1rem',
      }}
    >
      <NotFoundSwallow size="fit-width" />
    </div>
  </>
);

export const FitHeight = () => (
  <>
    <div
      style={{
        height: '10rem',
        background: Vibes2021BackgroundColor,
        marginBottom: '1rem',
      }}
    >
      <NotFoundSwallow size="fit-height" />
    </div>
    <div
      style={{
        height: '20rem',
        background: Vibes2021BackgroundColor,
        marginBottom: '1rem',
      }}
    >
      <NotFoundSwallow size="fit-height" />
    </div>
    <div
      style={{
        height: '30rem',
        background: Vibes2021BackgroundColor,
        marginBottom: '1rem',
      }}
    >
      <NotFoundSwallow size="fit-height" />
    </div>
  </>
);
