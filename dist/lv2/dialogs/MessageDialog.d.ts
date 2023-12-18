import * as React from 'react';
import { ButtonAppearanceType } from '../../lv1/buttons/Button';
import { CommonProps } from '../../utilities/commonProps';
import Dialog, { DialogContentProps } from '../../utilities/Dialog';
declare type Props = {
    /**
     * ダイアログの見出しとなる文字列を指定します。（場合に応じて、アイコンを並べるなどもできます）
     */
    title: React.ReactNode;
    /**
     * ダイアログの本文となる要素を指定します。
     */
    children: React.ReactNode;
    /**
     * Close ボタンのラベルとなる文字列を指定します。
     */
    closeButtonLabel: string;
    /**
     * 導線の優先度から、ボタンの種類を指定するのに使います。
     * primaryは背景ベタ塗り+白字、secondaryは白背景+グレーの枠線+リンク色字、tertiaryは枠線なし+リンク色字となります。
     */
    closeButtonAppearance?: ButtonAppearanceType;
    /**
     * 指定するとブラウザ幅に応じてダイアログも狭くなります。指定しない場合の幅は 40 rem 固定です。
     */
    responsive?: boolean;
    /**
     * コンテントの揃えを指定できます。デフォルトはcenterですが、情報量が多いときなど左揃えにすることもできます。
     */
    contentAlign?: 'left';
} & DialogContentProps & CommonProps;
/**
 * Storybookの都合でDocsに表示されていませんが、 `isOpen` propで開閉します
 */
export declare const MessageDialogContent: React.FC<Props>;
/**
 * 確認に用いる閉じるボタンのみのダイアログです
 *
 * - 確認はなるべく短いメッセージにしましょう。（データの内容を表示するなど表示領域が必要な場合は、横幅は70remまで伸び縦にはスクロールが起こります）
 * - 選択肢が1つしかないため、Escキー押下またはモーダル領域外のクリックで閉じられます
 *
 * ## accessibility
 * dialogが閉じた際、dialogが開く直前にフォーカスしていた要素（多くの場合はdialogを開かせたボタン）に戻るようになっています。
 *
 * ただし、UIの状態の変化等の理由でdialogが開く直前にフォーカスしていた要素に戻れない場合は、戻り先として適切な任意の要素を指定するようにしてください。(`elementFocusAfterClose`を使って指定できます)
 */
declare const MessageDialog: (props: Omit<Props, 'titleId'> & Pick<Parameters<typeof Dialog>[0], 'isOpen' | 'elementFocusAfterClose' | 'contentRef'>) => JSX.Element;
export default MessageDialog;
