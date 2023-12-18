import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
import { FileType, FileUploaderStatus } from './types';
declare type Props = {
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
/**
 * D&Dでしか操作できないことを防ぐため、必ず「ファイル選択ボタン」か` <input type="file"> `と一緒に使ってください
 */
declare const FileDropArea: React.FC<Props>;
export default FileDropArea;
