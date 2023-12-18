import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import ContentsBase from '../../lv1/bases/ContentsBase';
import FileUploader from './FileUploader';
import { FileUploaderStatus, FileTypes } from './types';
import Button from '../../lv1/buttons/Button';
import { MdFileUpload } from 'react-icons/md';

export default {
  component: FileUploader,
};

export const FileUploaderComponent = () => (
  <div style={{ height: '25rem' }}>
    <FileUploader
      fileLabel={text('FileLabel', 'ファイルラベル', 'FileUploader')}
      fileName={text('FileName', 'dummy.csv', 'FileUploader')}
      isUploading={boolean('IsUploading', false, 'FileUploader')}
      onFileSelect={action('file select')}
      multiple={boolean('Multiple', false, 'FileUploader')}
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
          'FileUploader'
        ) || undefined
      }
      type={
        select(
          'Type',
          {
            Normal: 'normal',
            Compact: 'compact',
            undefined: '',
          },
          '',
          'FileUploader'
        ) || undefined
      }
      width={
        select(
          'Width',
          {
            Medium: 'medium',
            Full: 'full',
            undefined: '',
          },
          '',
          'FileUploader'
        ) || undefined
      }
      processingMessage={text(
        'processingMessage',
        '処理中のメッセージ',
        'FileUploader'
      )}
      {...commonKnobs()}
    />
  </div>
);

export const AcceptFileTypes = () => (
  <>
    <FileUploader
      fileLabel="CSVファイル"
      acceptFileTypes={[FileTypes.CSV]}
      isUploading={false}
      onFileSelect={() => undefined}
      marginBottom
    />
    <FileUploader
      fileLabel="TSVファイル"
      acceptFileTypes={[FileTypes.TSV]}
      isUploading={false}
      onFileSelect={() => undefined}
      marginBottom
    />
    <FileUploader
      fileLabel="画像"
      acceptFileTypes={[FileTypes.JPG, FileTypes.GIF, FileTypes.PNG]}
      isUploading={false}
      onFileSelect={() => undefined}
      marginBottom
    />
    <FileUploader
      fileLabel="PDFファイル"
      acceptFileTypes={[FileTypes.PDF]}
      isUploading={false}
      onFileSelect={() => undefined}
      marginBottom
    />
  </>
);

export const InteractiveSample = () => {
  const [files, setFiles] = React.useState<File[]>([]);
  const [status, setStatus] = React.useState<FileUploaderStatus>('default');
  const disabled = status !== 'selected';
  const fileName = React.useMemo(() => {
    if (!files.length) {
      return '';
    }
    return files.length > 1 ? `${files.length}個のファイル` : files[0].name;
  }, [files]);

  const handleFileSelect = (files: File[]) => {
    if (files.length) {
      setFiles(files);
      setStatus('selected');
    } else {
      setFiles([]);
      setStatus('default');
    }
  };

  const handleClickUpload = () => {
    setStatus('uploading');
    setTimeout(() => {
      setFiles([]);
      setStatus('default');
    }, 3000);
  };

  return (
    <ContentsBase>
      <div style={{ display: 'inline-block', textAlign: 'center' }}>
        <FileUploader
          acceptFileTypes={[FileTypes.CSV]}
          fileLabel="CSVファイル"
          fileName={fileName}
          onFileSelect={handleFileSelect}
          status={status}
          multiple
          mb={1.5}
        />
        <Button
          IconComponent={MdFileUpload}
          disabled={disabled}
          onClick={handleClickUpload}
        >
          アップロード
        </Button>
      </div>
    </ContentsBase>
  );
};

export const StatusSample = () => (
  <>
    <FileUploader
      fileLabel="画像"
      acceptFileTypes={[FileTypes.JPG, FileTypes.GIF, FileTypes.PNG]}
      isUploading={false}
      onFileSelect={() => undefined}
      status="default"
      marginBottom
    />
    <FileUploader
      fileLabel="画像"
      acceptFileTypes={[FileTypes.JPG, FileTypes.GIF, FileTypes.PNG]}
      isUploading={false}
      onFileSelect={() => undefined}
      status="selected"
      marginBottom
    />
    <FileUploader
      fileLabel="画像"
      acceptFileTypes={[FileTypes.JPG, FileTypes.GIF, FileTypes.PNG]}
      isUploading={false}
      onFileSelect={() => undefined}
      status="uploading"
      marginBottom
    />
    <FileUploader
      fileLabel="画像"
      acceptFileTypes={[FileTypes.JPG, FileTypes.GIF, FileTypes.PNG]}
      isUploading={false}
      onFileSelect={() => undefined}
      status="processing"
      marginBottom
    />
  </>
);

export const ProcessingMessageSample = () => (
  <>
    <FileUploader
      fileLabel="画像"
      acceptFileTypes={[FileTypes.JPG, FileTypes.GIF, FileTypes.PNG]}
      isUploading={false}
      onFileSelect={() => undefined}
      status="processing"
      processingMessage="OCR処理中"
      marginBottom
    />
  </>
);
