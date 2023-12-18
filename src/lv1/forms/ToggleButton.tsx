import * as React from 'react';

import { FormHandlers } from '../../lv1/forms/types';
import commonProps, { CommonProps } from '../../utilities/commonProps';

type Props = {
  children?: React.ReactChild;
  /**
   * input type を指定します
   */
  type: 'checkbox' | 'radio';
  /**
   * input name を指定します
   */
  name?: string;
  /**
   * input value を指定します
   */
  value?: string;
  /**
   * 選択状態にします
   */
  toggled?: boolean;
  /**
   * サイズを小さくします
   */
  small?: boolean;
  /**
   * disabled 状態にします
   */
  disabled?: boolean;
} & FormHandlers<HTMLInputElement> &
  CommonProps;

/**
 * **ラジオボタンやチェックボックスの代替** として、オンオフを制御するボタンとして使用します。
 * 複数のオンオフ制御をグループ化して、くっつけて表示できます。
 *
 * - `last-child` `first-child` のスタイル指定があるので、グループごとに同一の親要素をもつようにしてください
 * - グループ内で複数選択可能な場合は `type="checkbox"` ひとつしか選択できない場合は `type="radio"` で使用し、同一グループ内で違うtypeが混在しないようにしてください。
 * - ラジオボタンやチェックボックスの代替なので、アクションボタンとしては使用しないでください
 */
const ToggleButton: React.FC<Props> = (props: Props) => {
  const {
    type,
    name,
    children,
    value,
    toggled,
    small,
    disabled,
    onBlur,
    onChange,
    onFocus,
    onInput,
    onKeyDown,
    onKeyUp,
  } = props;
  const className = 'vb-toggleButton';
  return (
    <label {...commonProps(props, className, { small, disabled })}>
      <input
        className={`${className}__input`}
        type={type}
        name={name}
        value={value}
        checked={toggled}
        disabled={disabled}
        onChange={onChange}
        onInput={onInput}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
      ></input>
      <span className={`${className}__body`}>{children}</span>
    </label>
  );
};
export default ToggleButton;
