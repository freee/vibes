import * as React from 'react';
import { MdChevronRight, MdOpenInNew } from 'react-icons/md';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import IconOnlyButton from './IconOnlyButton';

type Props = {
  /**
   * ボタンのaria-labelに使用される文字列です。必ず遷移先を表す文字列を指定してください。
   */
  buttonLabel: string;
  /**
   * href を設定します
   */
  url?: string;
  /**
   * click ハンドラを指定します
   */
  onClick?: React.MouseEventHandler;
} & Pick<
  Parameters<typeof IconOnlyButton>[0],
  | 'appearance'
  | 'danger'
  | 'disabled'
  | 'small'
  | 'large'
  | 'rel'
  | 'target'
  | 'type'
  | 'onSelfWindowNavigation'
> &
  CommonProps;

/**
 * IconOnlyJumpButton は遷移のためのボタンです。別URLへ遷移させることが目的の際に使用してください。
 *
 * - 文字列として遷移先を表現できないので、「次の画面へ進む」のように遷移先が自明な場合にのみ使用してください。
 * - `buttonLabel` に必ず代替テキストを設定してください
 * - 前の画面に戻るボタンには `IconOnlyBackwardButton` を使用してください
 * - `target="_self"`（同じウィンドウ・タブで開く） の場合は RightChevron アイコン、`target="_blank"` （新しいウィンドウ・タブで開く）の場合は OpenInNew アイコンになります
 * - ListTableの行内に入れる場合など、高さを小さくしたい場合には `small` を使用してください
 */
export default function IconOnlyJumpButton(props: Props): React.ReactElement {
  const {
    buttonLabel,
    url,
    appearance,
    danger,
    disabled,
    small,
    large,
    target,
    type,
    rel,
    onClick,
    onSelfWindowNavigation,
  } = props;

  const buttonBaseClass = 'vb-jumpButton';
  return (
    <span {...commonProps(props, buttonBaseClass)}>
      <IconOnlyButton
        label={buttonLabel}
        href={url}
        disabled={disabled}
        appearance={appearance}
        danger={danger}
        small={small}
        large={large}
        target={target}
        rel={rel}
        type={type}
        onClick={onClick}
        onSelfWindowNavigation={onSelfWindowNavigation}
        IconComponent={target === '_blank' ? MdOpenInNew : MdChevronRight}
      />
    </span>
  );
}
