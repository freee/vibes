import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
import { MarginClassProps } from '../../utilities/marginClasses';
import { MessageTypes } from '../../lv1/messages/Message';
import { SelfWindowNavigationProp } from '../../utilities/selfWindowNavigator';
declare type Props = ({
    /**
     * メッセージ本文
     */
    children: React.ReactNode;
    message?: undefined;
} | {
    children?: undefined;
    /**
     * @deprecated children を使用してください
     */
    message: React.ReactNode;
}) & {
    assistance?: boolean;
    discovery?: boolean;
    explanatory?: boolean;
    linkTitle?: string;
    linkUrl?: string;
    linkTarget?: string;
    linkRel?: string;
    onLinkClick?: () => any;
    onRequestClose?: () => any;
    /**
     * @deprecated shadowが入る表示はFloatingMessageBlockを使用してください。FloatingMessageBlock側でスタイルが付くので指定は不要です。
     */
    hover?: boolean;
} & MessageTypes & MarginClassProps & SelfWindowNavigationProp & CommonProps;
/**
 * セクションメッセージまたはスクリーンメッセージとして使用するコンポーネントです。
 * ただしスクリーンメッセージに関しては `FloatingMessageBlock` を使用してください（このコンポーネントを内包しています）
 *
 * - 画面の大きな部分（セクション）に関するメッセージを表示します
 *   - エラーメッセージに使用する場合には、このコンポーネントではエラーの概要を表示するに留め、
 *     エラーの発生箇所の近くにインラインメッセージとして `Message` コンポーネントを配置して、詳細を伝えてください
 * - 右側にはメッセージの詳細リンクを配置できます。`linkTarget` を `"_blank"` にした場合には OpenInNew アイコンが表示されます。
 * - メッセージを非表示にできるようにする場合は、 `onRequestClose` を渡して「閉じる」ボタンを表示してください
 *
 */
declare const MessageBlock: React.FC<Props>;
export default MessageBlock;
