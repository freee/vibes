import * as React from 'react';
import DateInput from '../formFields/DateInput';
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
     * 開始日を指定します
     */
    startDate?: Date | string;
    /**
     * 開始日の id を指定します
     */
    startDateId?: string;
    /**
     * 開始日の name を指定します
     */
    startDateName?: string;
    /**
     * 開始日の input aria-label を指定します
     */
    startDateLabel?: string;
    /**
     * 開始日の input aria-labelledby を指定します
     */
    startDateLabelledby?: string;
    /**
     * 開始日の input placeholder を指定します
     */
    startDatePlaceholder?: string;
    /**
     * 終了日を指定します
     */
    endDate?: Date | string;
    /**
     * 終了日の id を指定します
     */
    endDateId?: string;
    /**
     * 終了日の name を指定します
     */
    endDateName?: string;
    /**
     * 終了日の input aria-label を指定します
     */
    endDateLabel?: string;
    /**
     * 終了日の input aria-labelledby を指定します
     */
    endDateLabelledby?: string;
    /**
     * 終了日の input placeholder を指定します
     */
    endDatePlaceholder?: string;
    /**
     * サイズを小さくします
     */
    small?: boolean;
    /**
     * DateInput の幅を指定します（default: `small`）
     * 後方互換のために default を `small` にしていますが、日付が隠れてしまうため、`medium` 以上を指定するようにしてください。
     */
    width?: React.ComponentProps<typeof DateInput>['width'];
    /**
     * 入力できる最小値を指定します
     */
    minDate?: string;
    /**
     * 入力できる最大値を指定します
     */
    maxDate?: string;
    onChange?: (duration: [string, string]) => void;
    onFocus?: React.FormEventHandler;
    onBlur?: React.FormEventHandler;
    onInput?: React.FormEventHandler;
    onKeyDown?: React.KeyboardEventHandler;
};
declare const DateDurationField: React.FC<Props>;
export default DateDurationField;
