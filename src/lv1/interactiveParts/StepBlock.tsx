import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import { StepNumber } from './StepNumber';

type Props = {
  /**
   * 内部の文字列を指定します
   */
  number?: string;
  children?: React.ReactNode;
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
} & MarginClassProps &
  CommonProps;

/**
 * 古いコンポーネントなので使わないでください。丸囲み数字が必要な場合はStepNumberを、リストにしたい場合はStepperを使用してください
 *
 * @deprecated
 */
const StepBlock: React.FC<Props> = (props: Props) => {
  const {
    number,
    children,
    current,
    done,
    disabled,
    small,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    marginSize,
  } = props;

  const stepperBaseClass = 'vb-stepBlock';
  return (
    <li
      {...commonProps(
        props,
        stepperBaseClass,
        {
          current,
          done: !current && done,
          disabled: !current && !done && disabled,
          small,
        },
        { marginTop, marginLeft, marginRight, marginBottom, marginSize }
      )}
      aria-current={current ? 'step' : 'false'}
    >
      <StepNumber
        number={number || 1}
        current={current}
        done={done}
        disabled={disabled}
        small={small}
      />
      {children && (
        <span className={stepperBaseClass + '__title'}>{children}</span>
      )}
    </li>
  );
};

export default StepBlock;
