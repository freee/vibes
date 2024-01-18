import * as React from 'react';

import commonProps, { CommonProps } from '../../utilities/commonProps';
import DigitInput from '../formFields/DigitsInput';

type Props = {
  /**
   * input required を指定します
   */
  required?: boolean;
  /**
   * disabled 状態にします
   */
  disabled?: boolean;
  /**
   * エラー状態にします
   */
  error?: boolean;
  /**
   * 最小値を指定します
   */
  minAmount?: number | null;
  /**
   * 最小値の id を指定します
   */
  minAmountId?: string;
  /**
   * 最小値の name を指定します
   */
  minAmountName?: string;
  /**
   * 最小値の aria-label を指定します
   */
  minAmountLabel?: string;
  /**
   * 最小値の aria-labelledby を指定します
   */
  minAmountLabelledby?: string;
  /**
   * 最小値の input placeholder を指定します
   */
  minAmountPlaceholder?: string;
  /**
   * 最大値を指定します
   */
  maxAmount?: number | null;
  /**
   * 最大値の id を指定します
   */
  maxAmountId?: string;
  /**
   * 最大値の name を指定します
   */
  maxAmountName?: string;
  /**
   * 最大値の aria-label を指定します
   */
  maxAmountLabel?: string;
  /**
   * 最大値の aria-labelledby を指定します
   */
  maxAmountLabelledby?: string;
  /**
   * 最大値の input placeholder を指定します
   */
  maxAmountPlaceholder?: string;
  /**
   * サイズを小さくします
   */
  small?: boolean;
  /**
   * null を許可するか指定します
   */
  nullable?: boolean;
  onChange?: (range: [number | null, number | null]) => void;
  onFocus?: React.FormEventHandler;
  onBlur?: React.FormEventHandler;
  onInput?: React.FormEventHandler;
  onKeyDown?: React.KeyboardEventHandler;
} & CommonProps;

const AmountRangeField = ({
  required,
  disabled,
  error,
  minAmount: originalMinAmount,
  minAmountId,
  minAmountName,
  minAmountLabel,
  minAmountLabelledby,
  minAmountPlaceholder,
  maxAmount: originalMaxAmount,
  maxAmountId,
  maxAmountName,
  maxAmountLabel,
  maxAmountLabelledby,
  maxAmountPlaceholder,
  small,
  nullable,
  onChange,
  onFocus,
  onBlur,
  onInput,
  onKeyDown,
  ...rest
}: Props) => {
  const [minAmount, setMinAmount] = React.useState<number | null>(
    originalMinAmount || null
  );
  const [maxAmount, setMaxAmount] = React.useState<number | null>(
    originalMaxAmount || null
  );

  React.useEffect(() => {
    setMinAmount(originalMinAmount || null);
  }, [originalMinAmount]);

  React.useEffect(() => {
    setMaxAmount(originalMaxAmount || null);
  }, [originalMaxAmount]);

  const handleBlurMinAmount = React.useCallback(
    (e: React.FormEvent): void => {
      if (onBlur) {
        onBlur(e);
      }

      if (onChange) {
        if (minAmount && maxAmount && minAmount > maxAmount) {
          // 最小値と最大値が逆行する場合は最大値を最小値に合わせる
          onChange([minAmount, minAmount]);
        } else {
          onChange([minAmount, maxAmount]);
        }
      }
    },
    [maxAmount, minAmount, onBlur, onChange]
  );

  const handleBlurMaxAmount = React.useCallback(
    (e: React.FormEvent): void => {
      if (onBlur) {
        onBlur(e);
      }

      if (onChange) {
        if (minAmount && maxAmount && minAmount > maxAmount) {
          // 最小値と最大値が逆行する場合は最小値を最大値に合わせる
          onChange([maxAmount, maxAmount]);
        } else {
          onChange([minAmount, maxAmount]);
        }
      }
    },
    [maxAmount, minAmount, onBlur, onChange]
  );

  return (
    <div {...commonProps(rest, 'vb-amountRangeField')}>
      <DigitInput
        id={minAmountId}
        label={minAmountLabel ?? '最小値'}
        labelledby={minAmountLabelledby}
        name={minAmountName}
        value={minAmount}
        required={required}
        disabled={disabled}
        error={error}
        placeholder={minAmountPlaceholder}
        onChange={setMinAmount}
        onFocus={onFocus}
        onBlur={handleBlurMinAmount}
        onInput={onInput}
        onKeyDown={onKeyDown}
        small={small}
        nullable={nullable}
        width="small"
      />
      <span>&nbsp;〜&nbsp;</span>
      <DigitInput
        id={maxAmountId}
        label={maxAmountLabel ?? '最大値'}
        labelledby={maxAmountLabelledby}
        name={maxAmountName}
        value={maxAmount}
        required={required}
        disabled={disabled}
        error={error}
        placeholder={maxAmountPlaceholder}
        onChange={setMaxAmount}
        onFocus={onFocus}
        onBlur={handleBlurMaxAmount}
        onInput={onInput}
        onKeyDown={onKeyDown}
        small={small}
        nullable={nullable}
        width="small"
      />
    </div>
  );
};

export default AmountRangeField;
