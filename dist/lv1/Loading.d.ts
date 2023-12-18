import * as React from 'react';
import { CommonProps } from '../utilities/commonProps';
declare type Props = ({
    coverAll: true;
    children?: React.ReactNode;
} | {
    coverAll?: false;
    children: NonNullable<React.ReactNode>;
}) & {
    isLoading: boolean;
    message?: React.ReactNode;
    inline?: boolean;
} & CommonProps;
/**
 * ローディング中に表示領域のカバーとアイコンを表示するコンポーネント。
 *
 * * `coverAll` props を指定しないと子要素をカバー、指定すると全画面領域をカバーする。
 * * `coverAll` props を指定しているときに `message` props を指定すると、つばめの下に内容が表示される。
 *   * 「ローディング中です」とかプログレスバーを表示する場合に使用する想定。
 * * Loading を表示中でも、カバーされたコンテンツはキーボード操作等により操作できます。必要に応じて追加の措置を講じてください
 *   * 「フォームが再度送信される」「ロードが終わった後にユーザーが迷子になる」のような理由でユーザーの操作を防ぎたいボタン等については、 `disabled` 属性によって非活性にするなどして操作を防ぐ必要があります。
 *   * 他の画面へのリンクについては、ブラウザの「戻る」ボタンやブラウザのウインドウを閉じる操作を防げないことから、非活性にする必要はないでしょう（本来、リンクには `disabled` 属性は存在しません）。
 *
 * 使用例1:
 *
 * ```jsx
 * <Loading isLoading={isLoading}>
 *   <p>
 *     isLoading が true 時に表示領域をカバーしたいコンテンツを子要素として配置する。
 *   </p>
 * </Loading>
 * ```
 *
 * 使用例2:
 *
 * ```jsx
 * <Loading coverAll isLoading={isLoading}>
 *   <p>
 *     coverAll 指定時は全画面をカバーする。
 *   </p>
 * </Loading>
 * ```
 */
declare const Loading: React.FC<Props>;
export default Loading;
