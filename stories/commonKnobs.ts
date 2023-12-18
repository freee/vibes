import { select, text, boolean } from '@storybook/addon-knobs';
const marginOptions = {
  '0': '',
  '0.25rem': 0.25,
  '0.5rem': 0.5,
  '1rem': 1,
  '1.5rem': 1.5,
  '2rem': 2,
  '3rem': 3,
  '-0.25r': -0.25,
  '-0.5rem': -0.5,
  '-1rem': -1,
  '-1.5rem': -1.5,
  '-2rem': -2,
  '-3rem': -3,
  auto: 'auto'
} as const;
const commonKnobs = () => ({
  ma: select('MarginAll', marginOptions, '', 'CommonProps') || undefined,
  mt: select('MarginTop', marginOptions, '', 'CommonProps') || undefined,
  mb: select('MarginBottom', marginOptions, '', 'CommonProps') || undefined,
  mr: select('MarginRight', marginOptions, '', 'CommonProps') || undefined,
  ml: select('MarginLeft', marginOptions, '', 'CommonProps') || undefined,
  'data-guide': text('Data-Guide', '', 'CommonProps'),
  'data-test': text('Data-Test', '', 'CommonProps'),
  'data-tracking': text('Data-Tracking', '', 'CommonProps'),
  'data-masking': boolean('Data-Masking', false, 'CommonProps') || undefined
});
export default commonKnobs;
