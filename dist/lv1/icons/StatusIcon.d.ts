import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
import { MarginClassProps } from '../../utilities/marginClasses';
export declare type StatusType = 'done' | 'success' | 'progress' | 'required' | 'disabled' | 'emphasis' | 'warning' | 'error';
declare type Props = {
    children?: React.ReactNode;
    /**
     * color type を指定します
     */
    type?: StatusType;
} & MarginClassProps & CommonProps;
/**
 * オブジェクトのステータスを表示するためのコンポーネントです。
 *
 * ## 用途
 * - ユーザーの操作やシステムによる処理の進捗などによって変わっていくステータス表示に使用することを想定しています。
 *  - そのオブジェクトの属性（例：取引における収入か支出）を示す場合は別の方法を検討してください。
 *  - たとえば、あるフォームが入力必須であることを示す場合は `RequiredIcon` を使用してください。
 * - ボタンとして使うことは想定していません。
 *  - 「ステータスを変更するためのボタン」が必要な場合は、`StatusSelector` コンポーネントを使用してください。
 *
 * ## type の使い分け
 * - filled 系か outlined 系かの使い分け
 *   - ユーザーが何かしらの操作をしなければならないステータスの場合は、他のステータスと比べてユーザーの注意を引けるよう filled 系を使用してください。
 *     - 例：ワークフローが自分の承認待ちである場合、何かしらの修正を必要としている場合
 *   - そうではない場合は基本的に outlined 系を使用してください。
 * - 色の使い分け
 *   - type 名が意味をもった名称になっていますが、それにとらわれなくてOKです（type名変更したほうがいいかもしれない）。
 *   - そのオブジェクトのステータスとして異常であるためユーザーの注意を喚起しておきたい場合は、赤系の色（`error`, `required`）を使ってください。
 *   - ユーザーがそのオブジェクトのステータスに注意を払う必要がなくなった場合は、グレー系の色（`done`, `disabled`）を使ってください。
 *
 */
declare const StatusIcon: React.FC<Props>;
export default StatusIcon;
