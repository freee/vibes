import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
import { ProgressState } from '../popupProgressBar/PopupProgressBar';
declare type Props = {
    progressStates: ProgressState[];
} & CommonProps;
/**
 * 画面左下にフロート表示するメッセージ。非同期処理の進捗、完了、エラーに関するメッセージを表示するために使用してください。
 *
 * - 「エラーが起きた」「完了した」など、短いメッセージを伝えるのに使用してください。
 * - あくまで「ユーザーがフィードバックを見落とさないようにする」のを目的として使用してください。
 *   - 「○○は半角で入力してください」のようなエラーの詳細は、このコンポーネントとは別に、画面レイアウト内で表示してください。
 * - `done` タイプのメッセージは一定時間経過後に非表示となります。 `error` `doing` に関しては自動的には消えません。
 * - 複数表示する際には、上から古い順に並ぶように表示して下さい。
 * - `progressValue` または `progressMaxValue` のどちらかが指定されていない場合、ProgressBarではなくアイコンでの表示になります。
 */
declare const PopupProgressBarPortal: React.FC<Props>;
export default PopupProgressBarPortal;
