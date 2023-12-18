import * as React from 'react';
import Modal from 'react-modal';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    /**
     * モーダルのid属性を指定します。
     */
    id?: string;
    /**
     * モーダルの見出しのid属性を指定します
     */
    titleId?: string;
    /**
     * モーダルのaria-labelを指定できます。
     * 指定しなかった場合はaria-labelledbyによってタイトルの文言が参照されます。
     */
    contentLabel?: string;
    /**
     * モーダルの見出しとなります。
     * 基本は文字列のみの想定ですが、用途に応じて他の要素を合わせて表示もできます。
     */
    title: React.ReactNode;
    /**
     * モーダルの本文となる要素を指定します。
     */
    children: React.ReactNode;
    /**
     * プライマリボタン、 Close ボタンともに disalbed に設定します。データの読み込み中やプライマリボタンを押した後のレスポンス待ちの間など、ユーザーに何も操作させず待たせたいときに指定します。
     */
    disabled?: boolean;
    /**
     * Esc キーの押下でモーダルを閉じられるようになります。
     *
     *  - 無指定の場合は `false` の状態になっています
     *  - モーダル内にフォーム等がある状態で `true` にする場合は、変更がある場合に確認ダイアログを出すなどして、Esc キーの押下によって作業内容が不意に消えてしまうようなことが起きないようにしてください
     *  - モーダル内にフォーム等がない場合や、フォーム等の値に変更がない場合は、 `true` にして問題ありません
     */
    shouldCloseOnEsc?: boolean;
    /**
     * Close ボタンの click ハンドラを設定します。
     */
    onRequestClose: React.MouseEventHandler;
    /**
     * ヘッダーに右寄せでコンテンツを配置したい場合に使います。
     */
    headerSideContent?: React.ReactNode;
    /**
     * react-modal の contentRef に渡す値です。
     */
    contentRef?: React.ComponentProps<typeof Modal>['contentRef'];
} & CommonProps;
/**
 * TaskDialogに収まりきらないような大きくて複雑なコンテンツをモーダル上に配置したい時に使用します。
 * コンテンツ部分は大きくなるとスクロールします。
 *
 * - `isOpen` propで開閉します
 */
declare const FullScreenModal: (props: Omit<Props, 'titleId'> & {
    isOpen: boolean;
}) => JSX.Element;
export default FullScreenModal;
