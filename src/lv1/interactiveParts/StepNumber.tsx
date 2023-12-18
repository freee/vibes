import * as React from 'react';
import { MdCheck } from 'react-icons/md';
import commonProps, { CommonProps } from '../../utilities/commonProps';

type Props = {
  /**
   * 数字を指定します
   */
  number: number | string;
  /**
   * 見た目を current にします
   */
  current?: boolean;
  /**
   * 見た目を done にします
   */
  done?: boolean;
  /**
   * 見た目を disabled にします
   */
  disabled?: boolean;
  /**
   * サイズを小さくします
   */
  small?: boolean;
} & CommonProps;

const baseClassName = 'vb-stepNumber';
export const StepNumber: React.FC<Props> = ({
  number,
  current,
  done,
  disabled,
  small,
  ...props
}: Props) => (
  <span
    {...commonProps(props, baseClassName, { current, done, disabled, small })}
  >
    <span className={`${baseClassName}__numberValue`}>
      {number ? number : '1'}
    </span>
    {done && (
      <figure className={`${baseClassName}__numberCheck`}>
        <MdCheck className={`${baseClassName}__numberCheckSvg`} />
      </figure>
    )}
  </span>
);
