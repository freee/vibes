import { boolean, text } from '@storybook/addon-knobs';
import * as React from 'react';

import Loading from './Loading';
import Button from './buttons/Button';
import SectionTitle from './typography/SectionTitle';
import { commonKnobs } from '../../stories';
import { TextField } from '.';

const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export default {
  component: Loading,
};
export const WithKnobs = () => (
  <Loading
    inline={boolean('inline', false, 'Loading')}
    isLoading={boolean('isLoading', true, 'Loading')}
    coverAll={boolean('CoverAll', false, 'Loading')}
    message={text('message', '', 'Loading')}
    {...commonKnobs()}
  >
    {LOREM}
  </Loading>
);

export const IsLoadingFalse = () => (
  <Loading isLoading={false}>{LOREM}</Loading>
);
export const IsLoadingTrue = () => <Loading isLoading={true}>{LOREM}</Loading>;

export const IsInlineTrue = () => (
  <Loading isLoading inline>
    <TextField />
  </Loading>
);

const CoverAllInternal = ({ message }: { message?: React.ReactNode }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  return (
    <Loading coverAll message={message} isLoading={isLoading}>
      <Button
        onClick={() => {
          setIsLoading(true);
          setTimeout(() => setIsLoading(false), 5 * 1000);
        }}
      >
        ローディングを表示(5秒間)
      </Button>
    </Loading>
  );
};
export const CoverAll = () => <CoverAllInternal />;
export const CoverAllWithMessage = () => (
  <CoverAllInternal message={<SectionTitle>ローディング中です</SectionTitle>} />
);
