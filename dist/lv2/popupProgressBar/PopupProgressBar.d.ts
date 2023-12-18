import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
export declare type ProgressState = {
    status: 'doing' | 'done' | 'error';
    message: string;
    progressValue?: number;
    progressMaxValue?: number;
};
declare type Props = ProgressState & {
    onClose: () => void;
} & CommonProps;
/**
 * 非同期処理の進捗を表示するメッセージ。非同期処理の進捗、完了、エラーに関するメッセージを表示するために使用してください。
 *
 * - 「エラーが起きた」「完了した」など、短いメッセージを伝えるのに使用してください。
 * - あくまで「ユーザーがフィードバックを見落とさないようにする」のを目的として使用してください。
 *   - 「○○は半角で入力してください」のようなエラーの詳細は、このコンポーネントとは別に、画面レイアウト内で表示してください。
 * - `progressValue` または `progressMaxValue` のどちらかが指定されていない場合、ProgressBarではなくアイコンでの表示になります。
 * - onCloseで閉じるボタンを押したときの挙動を指定してください。
 */
declare const PopupProgressBar: React.FC<Props>;
export default PopupProgressBar;
