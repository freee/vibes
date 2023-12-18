import * as React from 'react';
import Dialog, { DialogContentProps } from '../../utilities/Dialog';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    /**
     * ダイアログの見出しとなる文字列を指定します。
     */
    title: string;
    /**
     * レイアウトのタイプを指定します。指定しない場合はstepとなります。
     * （start: 始点用、ステップ番号と戻るボタンなし, step: ステップ用）
     */
    type?: 'start' | 'step';
    /**
     * ダイアログの本文となる要素を指定します。
     */
    children: React.ReactNode;
    /**
     * 現在のステップ番号を指定します。
     */
    stepCount?: number;
    /**
     * 合計ステップ数を指定します。
     * stepCount / totalStepCount で表示されます。
     */
    totalStepCount?: number;
    /**
     * 戻るボタンの click ハンドラを設定します。省略した場合はボタンは表示されません。
     */
    onRequestBackward?: React.MouseEventHandler;
    /**
     * 戻るボタンのラベルとなる文字列を指定します。
     */
    backwardButtonLabel?: string;
    /**
     * 次へボタンの click ハンドラを設定します。省略した場合はボタンは表示されません。
     */
    onRequestForward?: React.MouseEventHandler;
    /**
     * 次へボタンのラベルとなる文字列を指定します。
     */
    forwardButtonLabel?: string;
    /**
     * Close ボタンの click ハンドラを設定します。
     */
    onRequestClose: React.MouseEventHandler;
    /**
     * Close ボタンのラベルとなる文字列を指定します。
     */
    closeButtonLabel: string;
    /**
     * ダイアログ内に表示する画像を指定します。
     */
    image?: {
        /**
         * 画像のURLを指定します。
         */
        src: string;
        /**
         * 画像の横幅を指定します。
         */
        width?: string;
        /**
         * 画像の縦幅を指定します。
         */
        height?: string;
        /**
         * 画像のaltを指定します。
         */
        alt: string;
    };
} & DialogContentProps & CommonProps;
export declare const GuideDialogContent: React.FC<Props>;
/**
 * チュートリアルなどのガイドで使用します。
 *
 * - `isOpen` propで開閉します
 *
 * ## accessibility
 * dialogが閉じた際、dialogが開く直前にフォーカスしていた要素（多くの場合はdialogを開かせたボタン）に戻るようになっています。
 *
 * ただし、UIの状態の変化等の理由でdialogが開く直前にフォーカスしていた要素に戻れない場合は、戻り先として適切な任意の要素を指定するようにしてください。(`elementFocusAfterClose`を使って指定できます)
 *
 */
declare const GuideDialog: (props: Omit<Props, 'titleId'> & Pick<Parameters<typeof Dialog>[0], 'isOpen' | 'elementFocusAfterClose' | 'contentRef'>) => JSX.Element;
export default GuideDialog;
