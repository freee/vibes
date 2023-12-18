import * as React from 'react';
import { ConnectDropTarget, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { MdBlock, MdRefresh } from 'react-icons/md';

import CsvUploadIllust from '../../lv1/images/CsvUploadIllust';
import CloudUploadIllust from '../../lv1/images/CloudUploadIllust';
import FileUploadIllust from '../../lv1/images/FileUploadIllust';
import ImageUploadIllust from '../../lv1/images/ImageUploadIllust';
import CloudSkeletonIllust from '../../lv1/images/CloudSkeletonIllust';

import Button from '../../lv1/buttons/Button';
import Paragraph from '../../lv1/typography/Paragraph';

import { MarginClassProps } from '../../utilities/marginClasses';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import vbClassNames from '../../utilities/vbClassNames';
import { useDropFile } from './hooks';
import {
  FileUploaderStatus,
  FileType,
  FileTypes,
  ImageTypes,
  FileExtensions,
} from './types';
import { VisuallyHidden } from '../..';

type Props = {
  /**
   * 選択可能なファイル種別を設定します
   */
  acceptFileTypes?: Array<FileType>;
  /**
   * 表示用のファイルタイプを設定します
   */
  fileLabel: string;
  /**
   * 選択中のファイル名を設定します
   */
  fileName?: string;
  /**
   * @deprecated status を使用してください
   */
  isUploading?: boolean;
  /**
   * 複数選択可能かどうかを設定します
   */
  multiple?: boolean;
  /**
   * ファイル選択時のイベントハンドラを設定します
   */
  onFileSelect: (files: Array<File>) => any;
  /**
   * ファイルの状態を設定します
   */
  status?: FileUploaderStatus;
  /**
   * 処理中の際に表示するメッセージ
   */
  processingMessage?: string;
  /**
   * 幅を設定します
   */
  width?: 'medium' | 'full';
  /**
   * コンポーネントの表示方法を設定します
   */
  type?: 'normal' | 'compact';
} & MarginClassProps &
  CommonProps;

type InnerProps = Omit<Props, 'isUploading'> & {
  canDrop?: boolean;
  connectDropTarget: ConnectDropTarget;
  isOver?: boolean;
  invalidFileDropped: boolean;
};

const getFileIllust = (
  mimeTypes: FileType[] | undefined
): React.FC<CommonProps> => {
  if (!mimeTypes) {
    return FileUploadIllust;
  } else if (mimeTypes.every((value) => ImageTypes.indexOf(value) >= 0)) {
    return ImageUploadIllust;
  } else if (mimeTypes.length === 1 && mimeTypes[0] === FileTypes.CSV) {
    return CsvUploadIllust;
  }
  return FileUploadIllust;
};

const FileUploaderInner = (props: InnerProps) => {
  const {
    acceptFileTypes,
    canDrop,
    connectDropTarget,
    invalidFileDropped,
    fileLabel,
    fileName,
    isOver,
    marginBottom,
    marginLeft,
    marginRight,
    marginSize,
    marginTop,
    multiple,
    onFileSelect,
    status = 'default',
    processingMessage = '処理中',
    width,
    type,
  } = props;

  const fileInputRef = React.useRef<HTMLInputElement | null>(null);
  const handleFileSelected = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      if (status === 'uploading') {
        return;
      }
      const files = Array.from(event.target.files ?? []);
      if (!files.length) {
        return;
      }

      onFileSelect(files);

      // 同じファイル名をアップロードしようとするとvalueが同じなのでonChangeが発火されないのでvalueを空にしておく
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    },
    [onFileSelect, status]
  );

  const isDragging = status !== 'uploading' && canDrop && isOver;
  const classModifier = {
    widthMedium: width === 'medium' || !width,
    widthFull: width === 'full',
    typeNormal: type === 'normal' || !type,
    typeCompact: type === 'compact',
    active: isDragging,
    error: invalidFileDropped,
  };

  const FileIllust = getFileIllust(acceptFileTypes);
  const acceptValue = acceptFileTypes
    ? acceptFileTypes
        .reduce(
          (prev, t) => prev.concat([t], FileExtensions[t] || []),
          [] as string[]
        )
        .join(',')
    : undefined;

  const handleClick = () => {
    // eventを作ってinputに発火させる
    const evt = document.createEvent('mouseevent');
    evt.initEvent('click', false, false);
    fileInputRef.current && fileInputRef.current.dispatchEvent(evt);
  };

  return (
    <div
      ref={connectDropTarget}
      {...commonProps(props, 'vb-fileUploader', classModifier, {
        marginBottom,
        marginLeft,
        marginRight,
        marginTop,
        marginSize,
      })}
    >
      <div className="vb-fileUploader__dropMessage" aria-hidden={!isDragging}>
        {/* いい感じのトランジションを表現するために、要素を消すのではなくaria-hiddenしています */}
        <div className="vb-fileUploader__contentIllust">
          <CloudUploadIllust mb={1} />
        </div>
        <div className="vb-fileUploader__contentDescription">
          <Paragraph marginBottom>
            {fileLabel}をドロップしてアップロード
          </Paragraph>
        </div>
      </div>
      <VisuallyHidden autoRead assertive={true}>
        {invalidFileDropped ? 'このファイル形式は受け付けられません' : ''}
      </VisuallyHidden>
      <div
        className="vb-fileUploader__errorMessage"
        aria-hidden={!invalidFileDropped}
      >
        <MdBlock className={'vb-fileUploader__icon'} />
        <div className="vb-fileUploader__contentDescription">
          <Paragraph marginBottom>
            このファイル形式は受け付けられません
          </Paragraph>
        </div>
      </div>
      {status === 'uploading' && (
        <div
          className={vbClassNames('vb-fileUploader__content', {
            modifier: { disabled: invalidFileDropped },
          })}
        >
          <div className="vb-fileUploader__contentIllust">
            <CloudSkeletonIllust mb={1} />
          </div>
          <div className="vb-fileUploader__contentDescription">
            <Paragraph>アップロード中</Paragraph>
          </div>
        </div>
      )}
      {status === 'processing' && (
        <div
          className={vbClassNames('vb-fileUploader__content', {
            modifier: { disabled: invalidFileDropped },
          })}
        >
          <div className="vb-fileUploader__contentIllust">
            <CloudSkeletonIllust mb={1} />
          </div>
          <div className="vb-fileUploader__contentDescription">
            <Paragraph>{processingMessage}</Paragraph>
          </div>
        </div>
      )}
      {status === 'selected' && (
        <div
          className={vbClassNames('vb-fileUploader__content', {
            modifier: { disabled: invalidFileDropped },
          })}
          aria-hidden={isDragging}
        >
          <div className="vb-fileUploader__contentIllust">
            <FileIllust mb={1} />
          </div>
          <div className="vb-fileUploader__contentDescription">
            {fileName && <Paragraph mb={1}>{fileName}</Paragraph>}
            <Button
              IconComponent={MdRefresh}
              onClick={handleClick}
              disabled={invalidFileDropped}
              type="button"
            >
              ファイルを再選択
            </Button>
          </div>
        </div>
      )}
      {status === 'default' && (
        <div
          className={vbClassNames('vb-fileUploader__content', {
            modifier: { disabled: invalidFileDropped },
          })}
          aria-hidden={isDragging}
        >
          <div className="vb-fileUploader__contentIllust">
            <FileIllust mb={1} />
          </div>
          <div className="vb-fileUploader__contentDescription">
            <Paragraph mb={1}>{fileLabel}をここにドラッグ＆ドロップ</Paragraph>
            <Paragraph mb={1}>または</Paragraph>
            <Button
              onClick={handleClick}
              disabled={invalidFileDropped}
              type="button"
            >
              ファイルを選択
            </Button>
          </div>
        </div>
      )}
      <input
        accept={acceptValue}
        multiple={multiple}
        onChange={handleFileSelected}
        ref={fileInputRef}
        style={{ display: 'none' }}
        type="file"
      />
    </div>
  );
};

const FileUploaderInnerContainer = (props: Props) => {
  const {
    acceptFileTypes,
    isUploading,
    multiple,
    onFileSelect,
    status: tmpStatus,
    ...others
  } = props;
  // status が設定されていない場合は isUploading の値を status に変換して props から isUploading を取り除く
  const status = tmpStatus ?? (isUploading ? 'uploading' : 'default');
  const { canDrop, isOver, drop, invalidFileDropped } = useDropFile(
    onFileSelect,
    acceptFileTypes,
    multiple
  );

  return (
    <FileUploaderInner
      {...others}
      acceptFileTypes={acceptFileTypes}
      canDrop={canDrop}
      connectDropTarget={drop}
      isOver={isOver}
      invalidFileDropped={invalidFileDropped}
      multiple={multiple}
      onFileSelect={onFileSelect}
      status={status}
    />
  );
};

const FileUploader: React.FC<Props> = (props) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <FileUploaderInnerContainer {...props} />
    </DndProvider>
  );
};

export default FileUploader;
