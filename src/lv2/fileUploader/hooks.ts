import { useState } from 'react';
import { useDrop } from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';
import { FileType, FileTypes } from './types';

// FileTypesに加えてAcceptする必要のあるMIME types
const extraMIME: { [key: string]: string[] } = {
  // ExcelのインストールされたWindowsマシンではMIMEタイプがExcelになっていることがある……
  [FileTypes.CSV]: [FileTypes.XLS],
};

const filterFiles = (
  files: File[],
  mimeTypes: FileType[] | undefined,
  multiple: boolean
): File[] => {
  if (!mimeTypes || mimeTypes.length === 0) {
    return multiple ? files : files.slice(0, 1);
  }

  const acceptableTypes: string[] = mimeTypes.reduce(
    (prev, type) => prev.concat([type], extraMIME[type] || []),
    [] as string[]
  );
  // MIME typeと一致しているもののみを返す
  // ただしIE/EdgeでMIME typeが扱えない問題があるので、typeが空文字列のものは許容する
  const filtered = files.filter(
    (file) => acceptableTypes.indexOf(file.type) >= 0 || file.type === ''
  );
  return multiple ? filtered : filtered.slice(0, 1);
};

export const useDropFile = (
  onFileSelect: (files: Array<File>) => any,
  acceptFileTypes?: Array<FileType>,
  multiple?: boolean
) => {
  const [invalidFileDropped, setInvalidFileUploaded] = useState<boolean>(false);
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: NativeTypes.FILE,
    drop: (
      item: any // react-dnd 側の型が間違っているかも。DragObjectWithType を求められるが 実際には { files: Array<File> } のみ
    ) => {
      if (status === 'uploading') {
        return;
      }
      const droppedFiles = item.files as Array<File>;
      const filteredFiles = filterFiles(
        droppedFiles,
        acceptFileTypes,
        !!multiple
      );
      if (filteredFiles.length > 0) {
        onFileSelect(filteredFiles);
      } else {
        setInvalidFileUploaded(true);
        setTimeout(() => {
          setInvalidFileUploaded(false);
        }, 3000);
      }
    },
    collect: (monitor) => ({
      canDrop: !!monitor.canDrop(),
      isOver: !!monitor.isOver(),
    }),
  });
  return { canDrop, isOver, drop, invalidFileDropped };
};
