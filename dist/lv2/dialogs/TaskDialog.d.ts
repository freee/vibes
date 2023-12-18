import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
import Dialog, { DialogContentProps } from '../../utilities/Dialog';
declare type Props = {
    /**
     * ダイアログの見出しとなります。
     * 基本は文字列のみの想定ですが、用途に応じて他の要素を合わせて表示もできます。
     */
    title: React.ReactNode;
    /**
     * ダイアログの本文となる要素を指定します。
     */
    children: React.ReactNode;
    /**
     * プライマリボタンの click ハンドラを設定します。
     */
    onPrimaryAction?: React.MouseEventHandler;
    /**
     * プライマリボタンのラベルとなる文字列を指定します。
     */
    primaryButtonLabel?: string;
    /**
     * Close ボタンのラベルとなる文字列を指定します。
     */
    closeButtonLabel: string;
    /**
     * プライマリボタンを danger に設定します。ボタンを押したものの動作が危険性を伴う場合に指定します。
     */
    danger?: boolean;
    /**
     * プライマリボタン、 Close ボタンともに disalbed に設定します。データの読み込み中やプライマリボタンを押した後のレスポンス待ちの間など、ユーザーに何も操作させず待たせたいときに指定します。
     */
    disabled?: boolean;
    /**
     * プライマリボタンのみを disalbed に設定します。Confirm 前に何かしらの操作が必要な場合など、「キャンセルはできるけど実行はできない」場合に指定します。
     */
    suspend?: boolean;
    /**
     * Esc キーの押下やオーバーレイのクリックでダイアログを閉じられるようになります。
     *
     *  - 無指定の場合は `false` の状態になっています
     *  - ダイアログ内にフォーム等がある状態で `true` にする場合は、変更がある場合に確認ダイアログを出すなどして、Esc キーの押下やオーバーレイのクリックによって作業内容が不意に消えてしまうようなことが起きないようにしてください
     *  - ダイアログ内にフォーム等がない場合や、フォーム等の値に変更がない場合は、 `true` にして問題ありません
     */
    shouldCloseOnOverlayClickOrEsc?: boolean;
    /**
     * 指定するとブラウザ幅に応じてダイアログも狭くなります。指定しない場合の最低幅は 40 rem です。
     */
    responsive?: boolean;
    /**
     * ヘッダーに右寄せでコンテンツを配置したい場合に使います。
     */
    headerSideContent?: React.ReactNode;
    /**
     * 左寄せのPrimaryアクションのボタンとキャンセルボタンに続けて置きたい場合に使います。
     */
    footerOptionalContent?: React.ReactNode;
    /**
     * 右寄せに何か置きたい場合に使います。
     */
    footerSideContent?: React.ReactNode;
    /**
     * 上位2ボタンのレスポンシブ時の並び方を指定できます。
     */
    mobileButtonLayout?: 'row' | 'column';
    /**
     * モーダルのaria-labelを指定できます。
     * 指定しなかった場合はaria-labelledbyによってタイトルの文言が参照されます。
     */
    contentLabel?: string;
} & DialogContentProps & CommonProps;
export declare const TaskDialogContent: React.FC<Props>;
/**
 * 内部にフォームなどの複雑で大きなコンテンツを配置する場合に使用します。コンテンツ部分は大きくなるとスクロールします。
 *
 * - `isOpen` propで開閉します
 * - 表示するコンテンツが多く、入り切らない場合は `FullScreenModal` の使用を検討してください。
 *
 * ## accessibility
 * dialogが閉じた際、dialogが開く直前にフォーカスしていた要素（多くの場合はdialogを開かせたボタン）に戻るようになっています。
 *
 * ただし、UIの状態の変化等の理由でdialogが開く直前にフォーカスしていた要素に戻れない場合は、戻り先として適切な任意の要素を指定するようにしてください。(`elementFocusAfterClose`を使って指定できます)
 *
 */
declare const TaskDialog: (props: Omit<Props, 'titleId'> & Pick<Parameters<typeof Dialog>[0], 'isOpen' | 'elementFocusAfterClose' | 'contentRef'>) => JSX.Element;
export default TaskDialog;
