import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { CommonProps } from '../../utilities/commonProps';
import { FileUploaderStatus, FileType } from './types';
declare type Props = {
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
} & MarginClassProps & CommonProps;
declare const FileUploader: React.FC<Props>;
export default FileUploader;
