import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { number, boolean } from '@storybook/addon-knobs';
import Pager from './Pager';
import { commonKnobs } from '../../../stories';

export default {
  component: Pager,
};

export const PagerComponent = () => (
  <Pager
    currentPage={number('currentPage', 10, undefined, 'Pager')}
    disabled={boolean('disabled', false, 'Pager')}
    pageCount={number('pageCount', 20, undefined, 'Pager')}
    pageRange={number('pageRange', 5, undefined, 'Pager')}
    sidePageRange={number('sidePageRange', 1, undefined, 'Pager')}
    onPageChange={action('page changed')}
    small={boolean('small', false, 'Pager')}
    {...commonKnobs()}
  />
);
export const Small = () => (
  <Pager
    currentPage={number('currentPage', 500, undefined, 'Pager')}
    pageCount={number('pageCount', 1000, undefined, 'Pager')}
    pageRange={number('pageRange', 7, undefined, 'Pager')}
    sidePageRange={number('sidePageRange', 3, undefined, 'Pager')}
    onPageChange={action('page changed')}
    small
    {...commonKnobs()}
  />
);

class PagerWithHandler extends React.Component<
  Record<string, never>,
  { page: number }
> {
  state = {
    page: 1,
  };

  render() {
    return (
      <Pager
        currentPage={this.state.page}
        pageCount={number('pageCount', 20, undefined, 'Pager')}
        pageRange={number('pageRange', 5, undefined, 'Pager')}
        sidePageRange={number('sidePageRange', 1, undefined, 'Pager')}
        onPageChange={(page: number) => this.setState({ page })}
        {...commonKnobs()}
      />
    );
  }
}
export const WithHandler = () => <PagerWithHandler />;
