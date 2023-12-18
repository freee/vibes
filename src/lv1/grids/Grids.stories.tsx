import * as React from 'react';

import { select } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import GridBlock, { GridSize } from '../grids/GridBlock';
import GridWrapper from '../grids/GridWrapper';

export default {
  component: GridWrapper,
};

const Column = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div
      style={{
        background: 'white',
        border: '1px solid lightgray',
        fontSize: 'smaller',
        padding: '0.5rem',
      }}
    >
      {children}
    </div>
  );
};

export const Grids = () => {
  const columns = select('Columns', [2, 3, 4], 2, 'Grids');

  const size = {
    2: 'half',
    3: 'oneThird',
    4: 'oneQuarter',
  }[columns] as GridSize;

  return (
    <>
      <GridWrapper {...commonKnobs()}>
        {Array(columns)
          .fill(1)
          .map((_, index) => (
            <GridBlock key={index} size={size}>
              <Column>{`${index + 1} of ${columns}`}</Column>
            </GridBlock>
          ))}
      </GridWrapper>
    </>
  );
};

export const TwoColumns = () => {
  return (
    <>
      <GridWrapper marginBottom marginSize="large">
        <GridBlock size="half">
          <Column>{'size="half"'}</Column>
        </GridBlock>
        <GridBlock size="half">
          <Column>{'size="half"'}</Column>
        </GridBlock>
      </GridWrapper>
      <GridWrapper marginBottom marginSize="large">
        <GridBlock size="oneThird">
          <Column>{'size="oneThird"'}</Column>
        </GridBlock>
        <GridBlock size="twoThirds">
          <Column>{'size="twoThirds"'}</Column>
        </GridBlock>
      </GridWrapper>
      <GridWrapper marginBottom marginSize="large">
        <GridBlock size="oneQuarter">
          <Column>{'size="oneQuarter"'}</Column>
        </GridBlock>
        <GridBlock size="threeQuarters">
          <Column>{'size="threeQuarters"'}</Column>
        </GridBlock>
      </GridWrapper>
    </>
  );
};

export const ThreeColumns = () => {
  return (
    <>
      <GridWrapper marginBottom marginSize="large">
        <GridBlock size="half">
          <Column>{'size="half"'}</Column>
        </GridBlock>
        <GridBlock size="oneQuarter">
          <Column>{'size="oneQuarter"'}</Column>
        </GridBlock>
        <GridBlock size="oneQuarter">
          <Column>{'size="oneQuarter"'}</Column>
        </GridBlock>
      </GridWrapper>
      <GridWrapper marginBottom marginSize="large">
        <GridBlock size="oneThird">
          <Column>{'size="oneThird"'}</Column>
        </GridBlock>
        <GridBlock size="oneThird">
          <Column>{'size="oneThird"'}</Column>
        </GridBlock>
        <GridBlock size="oneThird">
          <Column>{'size="oneThird"'}</Column>
        </GridBlock>
      </GridWrapper>
    </>
  );
};

export const FourColumns = () => {
  return (
    <>
      <GridWrapper marginBottom marginSize="large">
        <GridBlock size="oneQuarter">
          <Column>{'size="oneQuarter"'}</Column>
        </GridBlock>
        <GridBlock size="oneQuarter">
          <Column>{'size="oneQuarter"'}</Column>
        </GridBlock>
        <GridBlock size="oneQuarter">
          <Column>{'size="oneQuarter"'}</Column>
        </GridBlock>
        <GridBlock size="oneQuarter">
          <Column>{'size="oneQuarter"'}</Column>
        </GridBlock>
      </GridWrapper>
    </>
  );
};
