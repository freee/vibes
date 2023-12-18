import * as React from 'react';

import { commonKnobs } from '../../../stories';
import { OptionButton } from './OptionButton';
import { MarginBase, CheckBox, RadioButton, SectionTitle, Paragraph } from '..';
import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';

export default {
  component: OptionButton,
};

export const OptionButtonComponent = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <>
      <OptionButton
        checked={checked}
        size={
          select(
            'size',
            {
              meduim: 'medium',
              large: 'large',
              small: 'small',
              none: 'none',
              undefined: '',
            },
            'medium',
            'OptionButton'
          ) || undefined
        }
        {...commonKnobs()}
      >
        <CheckBox
          name="name"
          value="value"
          checked={checked}
          onChange={(e) => {
            setChecked(e.target.checked);
          }}
        >
          チェックボックス
        </CheckBox>
      </OptionButton>
    </>
  );
};

export const WithRadioButton = () => {
  const [answer, setAnswer] = React.useState<'yes' | 'no' | undefined>(
    undefined
  );
  return (
    <form>
      <OptionButton checked={answer === 'yes'} mr={2} size="medium">
        <RadioButton
          name="question"
          value="yes"
          checked={answer === 'yes'}
          onChange={(e) => e.target.checked && setAnswer('yes')}
        >
          はい
        </RadioButton>
      </OptionButton>
      <OptionButton checked={answer === 'no'} size="medium">
        <RadioButton
          name="question"
          value="yes"
          checked={answer === 'no'}
          onChange={(e) => e.target.checked && setAnswer('no')}
        >
          いいえ
        </RadioButton>
      </OptionButton>
    </form>
  );
};

export const Sizes = () => (
  <>
    <MarginBase mb={1}>
      <OptionButton checked={false} size="small" mr={1}>
        <CheckBox checked={false} onChange={action('onChange')}>
          small
        </CheckBox>
      </OptionButton>
      <OptionButton checked={false} size="medium" mr={1}>
        <CheckBox checked={false} onChange={action('onChange')}>
          medium
        </CheckBox>
      </OptionButton>
      <OptionButton checked={false} size="large" mr={1}>
        <CheckBox checked={false} onChange={action('onChange')}>
          large
        </CheckBox>
      </OptionButton>
      <OptionButton checked={false} size="none">
        <CheckBox checked={false} onChange={action('onChange')}>
          none
        </CheckBox>
      </OptionButton>
    </MarginBase>
    <MarginBase mb={1}>
      <OptionButton checked={true} size="small" mr={1}>
        <CheckBox checked={true} onChange={action('onChange')}>
          small
        </CheckBox>
      </OptionButton>
      <OptionButton checked={true} size="medium" mr={1}>
        <CheckBox checked={true} onChange={action('onChange')}>
          medium
        </CheckBox>
      </OptionButton>
      <OptionButton checked={true} size="large" mr={1}>
        <CheckBox checked={true} onChange={action('onChange')}>
          large
        </CheckBox>
      </OptionButton>
      <OptionButton checked={true} size="none">
        <CheckBox checked={true} onChange={action('onChange')}>
          none
        </CheckBox>
      </OptionButton>
    </MarginBase>
  </>
);

export const Width = () => (
  <>
    <OptionButton checked={false} mb={1} size="medium" width="default">
      <CheckBox checked={false} onChange={action('onChange')}>
        default
      </CheckBox>
    </OptionButton>
    <OptionButton checked={false} size="medium" width="full">
      <CheckBox checked={false} onChange={action('onChange')}>
        full
      </CheckBox>
    </OptionButton>
  </>
);

export const CustomizedButton = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <>
      <OptionButton checked={checked} size="none" {...commonKnobs()}>
        <span style={{ display: 'block', minWidth: '15rem', padding: '1rem' }}>
          <SectionTitle headlineLevel={-1} mb={0.5}>
            コイツの中身はカスタマイズ可能
          </SectionTitle>
          <CheckBox
            name="name"
            value="value"
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            mb={0.5}
          >
            チェックボックス
          </CheckBox>
          <Paragraph>
            さえあれば、中身は自由に変えられます。大きさもいい感じに変えてOK。
          </Paragraph>
        </span>
      </OptionButton>
    </>
  );
};
