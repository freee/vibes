import * as React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import Paragraph from '../../lv1/typography/Paragraph';
import { useDropFile } from './hooks';
import { FileType, FileUploaderStatus } from './types';
import { CSSTransition } from 'react-transition-group';
import { MdBlock } from 'react-icons/md';
import vbClassNames from '../../utilities/vbClassNames';

type Props = {
  children: React.ReactNodeArray | React.ReactNode;
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
   * DnD可能かどうかを設定します
   */
  disabled?: boolean;
  /**
   * disabled === true かつ、ドラッグした際に表示するメッセージ
   */
  disabledMessage?: string;
} & CommonProps;

const overlayClassName = (
  partName: 'overlay' | 'icon' | 'contentDescription',
  disabled?: boolean
) =>
  vbClassNames(`vb-fileDropArea__${partName}`, {
    modifier: { disabled },
  });

const DraggingContents: React.FC<{
  fileLabel: string;
  status?: FileUploaderStatus;
  processingMessage?: string;
  disabled?: boolean;
  disabledMessage?: string;
}> = ({ fileLabel, status, processingMessage, disabled, disabledMessage }) => {
  if (disabled) {
    return (
      <>
        <MdBlock className={overlayClassName('icon', true)} />
        <Paragraph>
          <div className={overlayClassName('contentDescription', true)}>
            {disabledMessage ?? 'ドラッグ＆ドロップできません'}
          </div>
        </Paragraph>
      </>
    );
  } else if (status === 'uploading' || status === 'processing') {
    return (
      <>
        <svg
          className="vb-fileDropArea__icon"
          width="48"
          height="48"
          role="img"
        >
          <path
            d="M38.7 12.08C37.34 5.18 31.28 0 24 0c-5.78 0-10.8 3.28-13.3 8.08C4.68 8.72 0 13.82 0 20c0 6.62 5.38 12 12 12h26c5.52 0 10-4.48 10-10 0-5.28-4.1-9.56-9.3-9.92zM38 28H12c-4.42 0-8-3.58-8-8s3.58-8 8-8h1.42C14.74 7.38 18.96 4 24 4c6.08 0 11 4.92 11 11v1h3c3.32 0 6 2.68 6 6s-2.68 6-6 6z"
            id="a"
          />
        </svg>
        <Paragraph>
          <div className="vb-fileDropArea__contentDescription">
            {status === 'uploading' ? 'アップロード中' : processingMessage}
          </div>
        </Paragraph>
      </>
    );
  } else {
    return (
      <>
        <svg
          className="vb-fileDropArea__icon"
          width="48"
          height="48"
          role="img"
        >
          <path
            d="M38.7 12.08C37.34 5.18 31.28 0 24 0c-5.78 0-10.8 3.28-13.3 8.08C4.68 8.72 0 13.82 0 20c0 6.62 5.38 12 12 12h26c5.52 0 10-4.48 10-10 0-5.28-4.1-9.56-9.3-9.92zM28 18v8h-8v-8h-6L24 8l10 10h-6z"
            id="a"
          />
        </svg>
        <Paragraph>
          <div className="vb-fileDropArea__contentDescription">
            {fileLabel}をドロップしてアップロード
          </div>
        </Paragraph>
      </>
    );
  }
};

const FileDropAreaInnerContainer: React.FC<Props> = (props: Props) => {
  const {
    children,
    acceptFileTypes,
    fileLabel,
    multiple,
    onFileSelect,
    status,
    processingMessage,
    disabled,
    disabledMessage,
  } = props;

  const nodeRef = React.useRef<HTMLDivElement>(null);
  const { canDrop, isOver, drop } = useDropFile(
    disabled ? () => undefined : onFileSelect,
    acceptFileTypes,
    multiple
  );
  const isDragging = status !== 'uploading' && canDrop && isOver;
  const isActive =
    isDragging || status === 'uploading' || status === 'processing';

  return (
    <div ref={drop} {...commonProps(props, 'vb-fileDropArea')}>
      {children}
      <CSSTransition
        classNames="vb-fileDropArea__fade"
        in={isActive}
        timeout={300}
        exit
        unmountOnExit
        // StrictModeで、"Warning: findDOMNode is deprecated in StrictMode."が出ないように
        // [FYI] https://github.com/reactjs/react-transition-group/issues/668#issuecomment-695162879
        nodeRef={nodeRef}
      >
        <div ref={nodeRef} className={overlayClassName('overlay', disabled)}>
          <DraggingContents
            fileLabel={fileLabel}
            status={status}
            processingMessage={processingMessage}
            disabled={disabled}
            disabledMessage={disabledMessage}
          />
        </div>
      </CSSTransition>
    </div>
  );
};

/**
 * D&Dでしか操作できないことを防ぐため、必ず「ファイル選択ボタン」か` <input type="file"> `と一緒に使ってください
 */
const FileDropArea: React.FC<Props> = (props) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <FileDropAreaInnerContainer {...props} />
    </DndProvider>
  );
};
export default FileDropArea;
