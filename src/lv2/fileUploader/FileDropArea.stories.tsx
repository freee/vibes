import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import FileDropArea from './FileDropArea';
import { Button, Loading, Paragraph } from '../../lv1';

export default {
  component: FileDropArea,
};

export const FileDropAreaComponent = () => (
  <FileDropArea
    fileLabel={text('fileLabel', 'ファイルラベル', 'FileDropArea')}
    fileName={text('fileName', 'dummy.csv', 'FileDropArea')}
    onFileSelect={action('file select')}
    multiple={boolean('multiple', true, 'FileDropArea')}
    status={
      select(
        'Status',
        {
          default: 'default',
          selected: 'selected',
          uploading: 'uploading',
          processing: 'processing',
          undefined: '',
        },
        '',
        'FileDropArea'
      ) || undefined
    }
    processingMessage={text(
      'processingMessage',
      '処理中のメッセージ',
      'FileDropArea'
    )}
    disabled={boolean('disabled', false, 'FileDropArea')}
    disabledMessage={text(
      'disabledMessage',
      'disabled時に表示するメッセージ',
      'FileDropArea'
    )}
    {...commonKnobs()}
  >
    <Paragraph mb={1}>
      長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト
      長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト
      長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト
    </Paragraph>
    <Button onClick={action('button clicked')}>ファイルを選択</Button>
  </FileDropArea>
);

export const FileDropAreaWithLoading = () => (
  <FileDropArea
    fileLabel={text('FileLabel', 'ファイルラベル', 'FileDropArea')}
    fileName={text('FileName', 'dummy.csv', 'FileDropArea')}
    onFileSelect={action('file select')}
    multiple={boolean('Multiple', true, 'FileDropArea')}
    status={
      select(
        'Status',
        {
          default: 'default',
          selected: 'selected',
          uploading: 'uploading',
          processing: 'processing',
          undefined: '',
        },
        '',
        'FileDropArea'
      ) || undefined
    }
    processingMessage={text(
      'processingMessage',
      '処理中のメッセージ',
      'FileDropArea'
    )}
    disabled={boolean('disabled', false, 'FileDropArea')}
    disabledMessage={text(
      'disabledMessage',
      'disabled時に表示するメッセージ',
      'FileDropArea'
    )}
    {...commonKnobs()}
  >
    <Loading isLoading={true}>
      <Paragraph mb={1}>
        長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト
        長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト
        長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト
      </Paragraph>
    </Loading>
    <Button onClick={action('button clicked')}>ファイルを選択</Button>
  </FileDropArea>
);
