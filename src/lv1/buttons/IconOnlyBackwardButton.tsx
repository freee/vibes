import * as React from 'react';
import { MdChevronLeft } from 'react-icons/md';
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
  | 'type'
  | 'onSelfWindowNavigation'
> &
  CommonProps;

/**
 * IconOnlyBackwardButton は前画面への遷移のためのボタンです。
 *
 * - 文字列として遷移先を表現できないので、「次の画面へ進む」のように遷移先が自明な場合にのみ使用してください。
 * - `buttonLabel` に必ず代替テキストを設定してください
 * - 「次の画面」「他の画面」への遷移には IconOnlyJumpButton を使用してください
 * - `target="_blank"` は指定できません
 * - ListTableの行内に入れる場合など、高さを小さくしたい場合には `small` を使用してください
 */
const IconOnlyBackwardButton: React.FC<Props> = (props: Props) => {
  const {
    buttonLabel,
    url,
    appearance,
    danger,
    disabled,
    small,
    large,
    type,
    onClick,
    onSelfWindowNavigation,
    rel,
  } = props;

  const buttonBaseClass = 'vb-backwardButton';

  return (
    <span {...commonProps(props, buttonBaseClass)}>
      <IconOnlyButton
        label={buttonLabel}
        href={url}
        appearance={appearance}
        danger={danger}
        disabled={disabled}
        small={small}
        large={large}
        type={type}
        onClick={onClick}
        onSelfWindowNavigation={onSelfWindowNavigation}
        rel={rel}
        IconComponent={MdChevronLeft}
      />
    </span>
  );
};
export default IconOnlyBackwardButton;
