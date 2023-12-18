import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { text, number } from '@storybook/addon-knobs';
import GuideDialog from './GuideDialog';
import Paragraph from '../../lv1/typography/Paragraph';
import { commonKnobs } from '../../../stories';
import ToggleDialog from './ToggleDialog';
import { walkthroughImage } from './parts/walkthroughImage';

export default {
  component: GuideDialog,
};

export const GuideDialogComponent = () => (
  <ToggleDialog
    render={(isOpen, toggle) => (
      <GuideDialog
        isOpen={isOpen}
        id={text('Id', '', 'GuideDialog')}
        title={text('Title', 'ガイドダイアログ', 'GuideDialog')}
        stepCount={number('stepCount', 1, undefined, 'GuideDialog')}
        totalStepCount={number('totalStepCount', 3, undefined, 'GuideDialog')}
        onRequestBackward={action('backward')}
        backwardButtonLabel={text('BackwardButtonLabel', '戻る', 'GuideDialog')}
        onRequestForward={action('forward')}
        forwardButtonLabel={text('ForwardButtonLabel', '次へ', 'GuideDialog')}
        onRequestClose={toggle}
        closeButtonLabel={text('CloseButtonLabel', 'キャンセル', 'GuideDialog')}
        image={{
          src: walkthroughImage,
          alt: '',
        }}
        {...commonKnobs()}
      >
        <Paragraph>
          サービスのチュートリアル
          <br />
          テキストテキストテキストテキストテキストテキスト
        </Paragraph>
      </GuideDialog>
    )}
  />
);

export const GuideStartDialogComponent = () => (
  <ToggleDialog
    render={(isOpen, toggle) => (
      <GuideDialog
        isOpen={isOpen}
        title={text('Title', 'ガイドスタートダイアログ', 'GuideDialog')}
        onRequestForward={action('forward')}
        forwardButtonLabel={text('ForwardButtonLabel', '次へ', 'GuideDialog')}
        onRequestClose={toggle}
        closeButtonLabel={text('CloseButtonLabel', 'キャンセル', 'GuideDialog')}
        image={{
          src: walkthroughImage,
          alt: '',
        }}
        type="start"
        {...commonKnobs()}
      >
        <Paragraph>
          サービスの紹介
          <br />
          テキストテキストテキストテキストテキストテキスト
        </Paragraph>
      </GuideDialog>
    )}
  />
);
