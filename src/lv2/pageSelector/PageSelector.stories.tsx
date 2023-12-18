import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import PageSelector from './PageSelector';
import { PopupBase } from '../../lv1';

export default {
  component: PageSelector,
};

export const PageSelectorComponent = () => (
  <PageSelector
    prevDisabled={boolean('PrevDisabled', false, 'PageSelector')}
    nextDisabled={boolean('NextDisabled', false, 'PageSelector')}
    hasDropdown={boolean('HasDropdown', false, 'PageSelector')}
    isExpanded={boolean('IsExpanded', false, 'PageSelector')}
    onClickNext={action('click next')}
    onClickPrev={action('click prev')}
    onClickTitle={action('click title')}
    {...commonKnobs()}
  >
    {text('Children', 'タイトル', 'PageSelector')}
  </PageSelector>
);

export const WithPopup = () => (
  <PageSelector
    renderPopup={() => (
      <PopupBase paddingSize="small">
        <div style={{ minWidth: '11rem' }}>ポップアップ</div>
      </PopupBase>
    )}
    onClickNext={action('click next')}
    onClickPrev={action('click prev')}
    onClickTitle={action('click title')}
  >
    2022年9月
  </PageSelector>
);

export const Samples = () => (
  <>
    <div style={{ marginBottom: '1rem' }}>
      <PageSelector
        onClickNext={action('clickNext')}
        onClickPrev={action('clickPrev')}
      >
        2018年6月
      </PageSelector>
    </div>
    <div style={{ marginBottom: '1rem' }}>
      <PageSelector
        onClickNext={action('clickNext')}
        onClickPrev={action('clickPrev')}
        onClickTitle={action('onclickTitle')}
        hasDropdown
      >
        2018年6月
      </PageSelector>
    </div>
    <div style={{ marginBottom: '1rem' }}>
      <PageSelector
        nextDisabled
        prevDisabled
        onClickNext={action('clickNext')}
        onClickPrev={action('clickPrev')}
        onClickTitle={action('onclickTitle')}
        hasDropdown
        isExpanded
      >
        2018年6月
      </PageSelector>
    </div>
  </>
);
