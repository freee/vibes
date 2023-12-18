import * as React from 'react';

import { actions } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import DateInput from './DateInput';
import ScrollableBase from '../../lv1/bases/ScrollableBase';
import { Note, Stack, WithDescriptionContent } from '../../lv1';
import FormControl from '../formControl/FormControl';
import Button from '../../lv1/buttons/Button';

export default {
  component: DateInput,
};

const handlers = actions({
  onChange: 'onChange',
  onInput: 'onInput',
  onFocus: 'onFocus',
  onBlur: 'onBlur',
  onKeyDown: 'onKeyDown',
});

export const DateInputComponent = () => {
  const [val, setVal] = React.useState('');
  return (
    <DateInput
      value={val}
      label={text('label', 'DateInputのサンプル', 'DateInput')}
      placeholder={text('Placeholder', '', 'DateInput')}
      required={boolean('Required', false, 'DateInput')}
      autofocus={boolean('Autofocus', false, 'DateInput')}
      disabled={boolean('Disabled', false, 'DateInput')}
      error={boolean('Error', false, 'DateInput')}
      small={boolean('Small', false, 'DateInput')}
      minDate={text('MinDate', '2020-12-01', 'DateInput')}
      maxDate={text('MaxDate', '2024-05-15', 'DateInput')}
      width={select(
        'Width',
        {
          XSmall: 'xSmall',
          Small: 'small',
          Medium: 'medium',
          Large: 'large',
          Full: 'full',
        },
        'medium',
        'DateInput'
      )}
      {...{ ...handlers, onChange: (v) => setVal(v) }}
      {...commonKnobs()}
    />
  );
};

export const Disabled = () => {
  const [val, setVal] = React.useState('');
  return (
    <DateInput
      disabled
      value={val}
      label={text('label', 'DateInputのサンプル', 'DateInput')}
      placeholder={text('Placeholder', '', 'DateInput')}
      required={boolean('Required', false, 'DateInput')}
      autofocus={boolean('Autofocus', false, 'DateInput')}
      error={boolean('Error', false, 'DateInput')}
      small={boolean('Small', false, 'DateInput')}
      minDate={text('MinDate', '2022-12-04', 'DateInput')}
      maxDate={text('MaxDate', '2023-05-15', 'DateInput')}
      width={select(
        'Width',
        {
          XSmall: 'xSmall',
          Small: 'small',
          Medium: 'medium',
          Large: 'large',
          Full: 'full',
        },
        'medium',
        'DateInput'
      )}
      {...{ ...handlers, onChange: (v) => setVal(v) }}
    />
  );
};

export const Width = () => (
  <Stack alignItems="stretch">
    <Stack direction="horizontal">
      <FormControl label="medium" fieldId="dateinput-sizes-medium">
        <DateInput
          value="2022-12-01"
          width="medium"
          id="dateinput-sizes-medium"
        />
      </FormControl>
      <FormControl label="large" fieldId="dateinput-sizes-large">
        <DateInput
          value="2022-12-01"
          width="large"
          id="dateinput-sizes-large"
        />
      </FormControl>
    </Stack>
    <FormControl label="full" fieldId="dateinput-sizes-full">
      <DateInput value="2022-12-01" width="full" id="dateinput-sizes-full" />
    </FormControl>
    <WithDescriptionContent
      renderContent={() => (
        <Stack direction="horizontal">
          <FormControl label="xSmall" fieldId="dateinput-sizes-xSmall">
            <DateInput
              value="2022-12-01"
              width="xSmall"
              id="dateinput-sizes-xSmall"
            />
          </FormControl>
          <FormControl label="small" fieldId="dateinput-sizes-small">
            <DateInput
              value="2022-12-01"
              width="small"
              id="dateinput-sizes-small"
            />
          </FormControl>
        </Stack>
      )}
      renderDescriptionContent={() => (
        <Note mt={0.5}>
          <code>xSmall</code>, <code>small</code>{' '}
          は日付が隠れてしまうため、使用しないでください
        </Note>
      )}
    />
  </Stack>
);
function InteractiveExample() {
  const [val, setVal] = React.useState('');
  return (
    <DateInput
      value={val}
      label={text('label', 'DateInputのサンプル', 'DateInput')}
      maxDate={text('MaxDate', '2020-12-15', 'DateInput')}
      minDate={text('MinDate', '2017-01-15', 'DateInput')}
      {...{ ...handlers, onChange: (v) => setVal(v) }}
    />
  );
}

export const InsideScroll = () => (
  <div style={{ width: '30rem', height: '30rem', display: 'flex' }}>
    <ScrollableBase scrollableX scrollableY>
      <div style={{ position: 'relative', width: '80rem', height: '80rem' }}>
        <div style={{ position: 'absolute', left: '35rem', top: '10rem' }}>
          <InteractiveExample />
        </div>
      </div>
    </ScrollableBase>
  </div>
);

export const InBigBlock = () => (
  <div style={{ padding: '20rem 80rem' }}>
    <InteractiveExample />
  </div>
);

export const ManualFocus = () => {
  const ref = React.useRef<HTMLInputElement>(null);
  const onClick = () => {
    ref.current?.focus();
  };

  return (
    <div style={{ display: 'flex' }}>
      <Button mr={1} onClick={onClick}>
        フォーカスを当てる
      </Button>
      <DateInput value="2023-07-31" ref={ref} marginRight />
    </div>
  );
};
