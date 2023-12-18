import * as React from 'react';
import { MdClose, MdDone, MdError } from 'react-icons/md';
import {
  IconOnlyButton,
  InlineSpinner,
  PopupBase,
  ProgressBar,
  MaterialIcon,
} from '../..';
import { CommonProps } from '../../utilities/commonProps';
import vbClassNames from '../../utilities/vbClassNames';

export type ProgressState = {
  status: 'doing' | 'done' | 'error';
  message: string;
  progressValue?: number;
  progressMaxValue?: number;
};

type Props = ProgressState & { onClose: () => void } & CommonProps;

/**
 * 非同期処理の進捗を表示するメッセージ。非同期処理の進捗、完了、エラーに関するメッセージを表示するために使用してください。
 *
 * - 「エラーが起きた」「完了した」など、短いメッセージを伝えるのに使用してください。
 * - あくまで「ユーザーがフィードバックを見落とさないようにする」のを目的として使用してください。
 *   - 「○○は半角で入力してください」のようなエラーの詳細は、このコンポーネントとは別に、画面レイアウト内で表示してください。
 * - `progressValue` または `progressMaxValue` のどちらかが指定されていない場合、ProgressBarではなくアイコンでの表示になります。
 * - onCloseで閉じるボタンを押したときの挙動を指定してください。
 */
const PopupProgressBar: React.FC<Props> = ({
  status,
  message,
  progressValue,
  progressMaxValue,
  onClose,
}: Props) => {
  const indeterminate = progressValue == null || progressMaxValue == null;
  const baseClass = 'vb-popupProgressBar';

  return (
    <PopupBase paddingSize="zero" fitContent>
      <div className={`${baseClass}`}>
        <div className={`${baseClass}__contents`}>
          <div className={`${baseClass}__message`}>
            <div
              className={vbClassNames(`${baseClass}__message-block`, {
                modifier: { small: status === 'done' && !indeterminate },
              })}
            >
              <div className={`${baseClass}__icon`}>
                {indeterminate && status === 'doing' && (
                  <InlineSpinner isLoading large mr={0.5} />
                )}
                {(status === 'done' || status === 'error') && (
                  <MaterialIcon
                    IconComponent={status === 'done' ? MdDone : MdError}
                    success={status === 'done'}
                    error={status === 'error'}
                    small={status === 'done' && !indeterminate}
                    mr={0.5}
                    mt={status === 'done' && !indeterminate ? 0.25 : undefined}
                  />
                )}
              </div>
              <div
                aria-live={status === 'error' ? 'assertive' : 'polite'}
                aria-atomic="true"
              >
                {message}
              </div>
            </div>
            <div>
              {indeterminate ||
                status === 'error' ||
                `${progressValue}/${progressMaxValue}`}
            </div>
          </div>
          {indeterminate || status === 'error' || (
            <ProgressBar
              mt={0.5}
              mb={0.5}
              value={progressValue}
              maxValue={progressMaxValue}
              width="full"
            />
          )}
        </div>
        <div className={`${baseClass}__close`}>
          <IconOnlyButton
            ml={0.5}
            IconComponent={MdClose}
            label="閉じる"
            appearance="tertiary"
            onClick={() => onClose()}
          />
        </div>
      </div>
    </PopupBase>
  );
};
export default PopupProgressBar;
