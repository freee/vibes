import * as React from 'react';
import commonProps, { CommonProps } from '../../utilities/commonProps';

type Props = {
  /**
   * 進捗を数値化できる場合にその数値を渡します
   */
  value?: number;
  /**
   * `value` の最大値です。指定しない場合 `100` となります
   */
  maxValue?: number;
  /**
   * 進捗を数値化できない場合に `true` にすると、ループするアニメーションを表示します
   */
  indeterminate?: boolean;
  /**
   * `default` 時に横幅11rem、`full` の場合 `100%` となります
   */
  width?: 'default' | 'full' | 'large' | 'small' | 'xSmall';
  /**
   * ProgressBarのラベルとして `aria-label` を指定します。
   * WAI-ARIAの`progressbar` roleでアクセシブルな名前が要求されるため、 `ariaLabel` または `ariaLabelledby` を指定してください。
   */
  ariaLabel?: string;
  /**
   * ProgressBarのラベルとして `aria-labelledby` を指定します。
   * WAI-ARIAの`progressbar` roleでアクセシブルな名前が要求されるため、 `ariaLabel` または `ariaLabelledby` を指定してください。
   */
  ariaLabelledby?: string;
} & CommonProps;

/**
 * インポートや外部サービス連携など、時間のかかる処理の進捗表示に使用するプログレスバーです。
 *
 * - 進捗を数値化できる場合は `value` `maxValue` を使用し、ユーザーがあとどれくらい待てば良いのか予測できるようにしてください
 * - 進捗を数値化できない場合は `indeterminate` を使用してください。こちらの使用は可能なかぎり避け、なるべく数値化できるようにしてください
 * - OSのアクセシビリティ設定等で「視差効果を減らす」「動きを減らす」設定を有効化している場合、 `indeterminate` 時にはアニメーションしません
 *
 */
export const ProgressBar: React.FC<Props> = ({
  value,
  maxValue = 100,
  indeterminate = false,
  width = 'default',
  ariaLabel,
  ariaLabelledby,
  ...props
}: Props) => {
  const className = 'vb-progressBar';
  const status = () => {
    if (value === 0 || value === undefined) {
      return 'initial';
    } else if (value === maxValue) {
      return 'complete';
    } else {
      return 'progressing';
    }
  };

  return (
    <span
      {...commonProps(props, className, {
        widthFull: width === 'full',
        widthLarge: width === 'large',
        widthSmall: width === 'small',
        widthXSmall: width === 'xSmall',
        progressing: status() === 'progressing',
      })}
      role="progressbar"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      aria-valuemax={indeterminate ? undefined : maxValue}
      aria-valuenow={indeterminate ? undefined : value}
    >
      {indeterminate ? (
        <span className={`${className}__indeterminateBar`} />
      ) : (
        <span
          className={`${className}__valueBar ${className}__valueBar--${status()}`}
          style={{
            transform: `translate(${
              (value ? (100 * value) / maxValue : 0) - 100
            }%, 0)`,
          }}
        />
      )}
    </span>
  );
};
