import * as React from 'react';

import { commonKnobs } from '../../../stories';
import { FocusHighlight } from './FocusHighlight';
import { boolean, select } from '@storybook/addon-knobs';
import { VibesBlackColor, VibesColumnColor } from '../../constants';

export default {
  component: FocusHighlight,
};
const FocusableElement: React.FC = ({
  children,
}: {
  children?: React.ReactNode;
}) => (
  <div
    style={{
      outline: 'none',
      display: 'inline-block',
      minWidth: '11rem',
      background: VibesColumnColor,
      textAlign: 'center',
      color: VibesBlackColor,
      padding: '0.5rem',
      border: '1px solid #5a5a5a',
    }}
    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
    tabIndex={0}
  >
    {children}
  </div>
);
export const FocusHighlightComponent = () => (
  <FocusHighlight
    inline={boolean('inline', false, 'FocusHighlight')}
    highlightStyle={
      select(
        'highlightStyle',
        { inset: 'inset', outset: 'outset', undefined: '' },
        'outset',
        'FocusHighlight'
      ) || undefined
    }
    cornerStyle={
      select(
        'cornerStyle',
        { round: 'round', sharp: 'sharp', undefined: '' },
        'sharp',
        'FocusHighlight'
      ) || undefined
    }
    {...commonKnobs()}
  >
    <FocusableElement>focusable element</FocusableElement>
  </FocusHighlight>
);

export const HighlightStyle = () => (
  <>
    <FocusHighlight inline highlightStyle="outset" mr={1} mb={1}>
      <FocusableElement>outset</FocusableElement>
    </FocusHighlight>
    <FocusHighlight inline highlightStyle="inset" mr={1} mb={1}>
      <FocusableElement>inset</FocusableElement>
    </FocusHighlight>
  </>
);

export const CornerStyle = () => (
  <>
    <FocusHighlight inline cornerStyle="sharp" mr={1} mb={1}>
      <FocusableElement>sharp</FocusableElement>
    </FocusHighlight>
    <FocusHighlight inline cornerStyle="round" mr={1} mb={1}>
      <FocusableElement>round</FocusableElement>
    </FocusHighlight>

    <FocusHighlight
      inline
      cornerStyle="sharp"
      highlightStyle="inset"
      mr={1}
      mb={1}
    >
      <FocusableElement>sharp (inset)</FocusableElement>
    </FocusHighlight>
    <FocusHighlight
      inline
      cornerStyle="round"
      highlightStyle="inset"
      mr={1}
      mb={1}
    >
      <FocusableElement>round (inset)</FocusableElement>
    </FocusHighlight>
  </>
);
