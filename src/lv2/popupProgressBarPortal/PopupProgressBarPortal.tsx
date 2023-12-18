import * as React from 'react';

import { CommonProps } from '../../utilities/commonProps';
import AnimateHeight from 'react-animate-height';
import PopupProgressBar, {
  ProgressState,
} from '../popupProgressBar/PopupProgressBar';

type Props = {
  progressStates: ProgressState[];
} & CommonProps;

const PopupProgressBarWithAnimation = (state: ProgressState) => {
  const [isShow, setIsShow] = React.useState<boolean>(false);

  // フェードインさせるために初期値はfalseにしておく
  React.useEffect(() => {
    setTimeout(() => setIsShow(true), 100);
  }, []);

  React.useEffect(() => {
    if (state.status === 'done') {
      setTimeout(() => {
        setIsShow(false);
      }, 5000);
    }
  }, [state.status]);

  return (
    <AnimateHeight
      duration={isShow ? 250 : 200}
      height={isShow ? 'auto' : 0}
      animateOpacity={true}
    >
      <div className="vb-popupProgressBarPortal__element">
        <PopupProgressBar {...state} onClose={() => setIsShow(false)} />
      </div>
    </AnimateHeight>
  );
};

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
const PopupProgressBarPortal: React.FC<Props> = ({
  progressStates: states,
}: Props) => {
  return (
    <div className="vb-popupProgressBarPortal">
      {states.map((state, index) => (
        <PopupProgressBarWithAnimation key={index} {...state} />
      ))}
    </div>
  );
};
export default PopupProgressBarPortal;
