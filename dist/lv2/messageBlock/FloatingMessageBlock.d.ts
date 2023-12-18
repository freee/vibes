import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
import { SelfWindowNavigationProp } from '../../utilities/selfWindowNavigator';
import { MessageTypes } from '../../lv1/messages/Message';
export declare type FloatingMessageBlockProps = ({
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
    linkRel?: string;
    linkTarget?: string;
    linkTitle?: string;
    linkUrl?: string;
    wrapperRef?: React.RefObject<HTMLDivElement>;
    /**
     * メッセージを閉じる際に呼ばれるコールバック。ただしマウスホバーやフォーカスにより表示が延長されている間に呼ばれる可能性がある。
     */
    onClose?: (autoClose: boolean) => void;
    onLinkClick?: () => any;
} & MessageTypes & SelfWindowNavigationProp & CommonProps;
/**
 * 画面上部にフロート表示するメッセージ。スクリーンメッセージとして、ユーザーが見ている画面全体に関わるメッセージを表示するために使用してください。
 *
 * - 「エラーが起きた」「送信に成功した」など、短くて画面全体に関わるメッセージを伝えるのに使用してください。
 * - あくまで「ユーザーがフィードバックを見落とさないようにする」のを目的として使用してください。
 *   - 「○○は半角で入力してください」のようなエラーの詳細は、このコンポーネントとは別に、画面レイアウト内で表示してください。
 * - `success` のメッセージは、ユーザーが行った操作の結果が永続化される（そのまま離脱しても結果が残る）場合に使用してください。
 *   - 登録フォームを送信してその結果が保存されたときなどに使うことを想定しています。
 *   - たとえば「登録フォーム内にある `入力欄を追加する` ボタンを押して入力欄を追加した」といった操作に対しては、まだそのフォームを送信しておらず内容が永続化されていないので、`FloatingMessageBlock` を使わないでください。
 *     - `FloatingMessageBlock` が表示されることで「入力内容が送信されて確定した」とユーザーが誤解するのを防ぐためです。
 *     - そういった「操作結果が永続化されない」操作に対しては、明示的に完了メッセージを出すというよりも、トランジションなどによってフィードバックを返すことを検討してください。
 *   - 「操作結果が永続化されない」操作が失敗し、それを何らかの方法で伝えなければならない場合は `error` の `FloatingMessageBlock` を使用できます。
 * - `success` `info` タイプのメッセージは一定時間経過後に非表示となります。 `error` `notice` に関しては自動的には消えません。
 * - **基本的には同時に複数のメッセージを出す使い方は想定していませんが** 、連続した操作のフィードバックなどの際には配列に入れて表示するようにしたほうが、 `aria-live` での読み上げが正しくなる可能性が高まります。
 * - 表示されるメッセージはPortalで `<body>` 要素の最後部に挿入されます。React上の挿入箇所には、`VisuallyHidden` による非表示メッセージが配置されます。
 *
 * ## accessibility
 * **FloatingMessageBlockが表示された際、スクリーンリーダーは`aria-live`により`message`の内容を読み上げますが、MessageTypeによって読み上げられる挙動は異なります。**
 *
 * errorの場合は必ず読み上げられ、他のタイプでは読み上げを妨げるものがない場合に読み上げられます。
 * (errorではaria-live="assertive"、それ以外はaria-live="polite"となるため上記の挙動の違いが起こります）
 * a11yチェックで読み上げを確認する際は、上記の仕様を考慮して判定ください。
 * 例えば、成功のときは aria-live="polite" なので読み上げられない場合がありますが、dialogを閉じたことによるフォーカス移動などで何が起きているのかを把握できるときは自動的に読み上げられなくても構いません。
 *
 * **FloatingMessageBlockにキーボードによるフォーカスやスクリーンリーダーのカーソルを移動させるのは困難です**
 *
 * そのため、置いているメッセージやリンクが見逃されたり、スクリーンリーダーのカーソルで到達できなかったとしても問題のない状況であることが望ましいです。
 * 言い換えると、FloatingMessageBlockのメッセージやリンクが唯一の動線とならないようにユーザーの操作しやすい場所にも配置をしたり、操作対象（フォームやオブジェクト等）のUIの状態変化からユーザーが理解可能である必要があります。
 */
declare const FloatingMessageBlock: React.FC<FloatingMessageBlockProps>;
export default FloatingMessageBlock;
