import * as React from 'react';
import Modal from 'react-modal';
declare type DialogProps = {
    /**
     * ダイアログのid属性を指定します。
     * 指定しない場合は、重複しないように生成された文字列が使用されます。
     */
    id?: string;
    /**
     * アラートダイアログ（他のダイアログの上に表示されるダイアログ）の場合はtrueにしてください
     */
    alertDialog: boolean;
    render: (props: {
        /**
         * モーダルの固有のidが指定されます
         */
        id: string;
        /**
         * モーダルのタイトルを表示する要素のidが指定されます
         * aria-labelledbyに使用されるため、必ずタイトルを表示する要素にidとして渡してください
         */
        titleId: string;
    }) => React.ReactNode;
    /**
     * ダイアログの開閉状態を指定します
     */
    isOpen: boolean;
    /**
     * Close ボタンの click ハンドラを設定します。
     */
    onRequestClose: React.MouseEventHandler;
    /**
     * `true` のとき、ダイアログの外（オーバーレイ部分）のクリックまたは、Escキーの押下によりダイアログを閉じられるようにします。
     * ユーザーの意図しないタイミングで閉じられることがない場合のみ、`true` にしてください。
     */
    shouldCloseOnOverlayClickOrEsc: boolean;
    /**
     * ダイアログを閉じたときにフォーカスする要素を指定します。
     * 指定しない場合には、ダイアログが開く直前にフォーカスしていた要素にフォーカスします。
     */
    elementFocusAfterClose?: HTMLElement;
    /**
     * モーダルのaria-labelを指定できます。
     * 指定しなかった場合はaria-labelledbyによってタイトルの文言が参照されます。
     */
    contentLabel?: string;
    /**
     * react-modal の contentRef に渡す値です。
     */
    contentRef?: React.ComponentProps<typeof Modal>['contentRef'];
};
export declare type DialogContentProps = {
    /**
     * ダイアログのid属性を指定します。
     */
    id?: string;
    /**
     * ダイアログの見出しのid属性を指定します
     */
    titleId?: string;
} & Pick<DialogProps, 'onRequestClose'>;
declare const Dialog: (props: DialogProps) => JSX.Element;
export default Dialog;
