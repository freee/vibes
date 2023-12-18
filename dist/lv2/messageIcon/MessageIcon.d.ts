import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
import { MarginClassProps } from '../../utilities/marginClasses';
declare type Props = {
    children?: React.ReactNode;
    /**
     * アイコンの代替テキストとして、「(label)を表示」「(label)を非表示」のように使用されます。必ず指定してください。
     */
    label: string;
    error?: boolean;
    notice?: boolean;
    success?: boolean;
    small?: boolean;
};
declare type ComponentProps = Props & MarginClassProps & CommonProps;
/**
 * アイコンからバルーンとしてメッセージを表示するコンポーネントです。
 *
 * アイコンと色は `label` `error` `notice` `success` から選べます（カスタマイズはできません）
 *
 * MobileBoundaryWidth以下の画面幅では、アイコンをクリックするとダイアログでメッセージを表示します。
 */
declare const MessageIcon: React.FC<ComponentProps>;
export default MessageIcon;
