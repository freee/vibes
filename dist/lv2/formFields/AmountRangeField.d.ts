import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
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
declare const AmountRangeField: ({ required, disabled, error, minAmount: originalMinAmount, minAmountId, minAmountName, minAmountLabel, minAmountLabelledby, minAmountPlaceholder, maxAmount: originalMaxAmount, maxAmountId, maxAmountName, maxAmountLabel, maxAmountLabelledby, maxAmountPlaceholder, small, nullable, onChange, onFocus, onBlur, onInput, onKeyDown, ...rest }: Props) => JSX.Element;
export default AmountRangeField;
