import * as React from 'react';
import TextField from '../../lv1/forms/TextField';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = Pick<React.ComponentProps<typeof TextField>, 'id' | 'label' | 'labelledby' | 'placeholder' | 'name' | 'required' | 'autofocus' | 'disabled' | 'error' | 'small' | 'large' | 'alignCenter' | 'alignRight' | 'width' | 'suffix' | 'onInput' | 'onFocus' | 'onBlur' | 'onKeyDown' | 'onKeyUp' | 'min' | 'max' | 'hideSpinner' | keyof CommonProps> & {
    /**
     * 空値の入力を許可します
     * @default false
     */
    nullable?: boolean;
    onChange?: (value: number | null) => void;
    /**
     * spinnerの増減値
     * @default 1 / Math.pow(10, places)
     */
    step?: number;
    /**
     * 小数点以下の表示桁数を指定します
     * @default 2
     */
    places?: number;
    value?: number | null;
};
/**
 * 入力値が1〜2桁のことが大半の場合や、小数点を含む可能性が高い数値入力用のコンポーネントです。
 *
 * - 仕様の多くは `TextField` と共通しています。
 * - `<input type="number">` としてレンダリングされ、 `max` `min` `step` が使用できます。
 *   - ブラウザによってスピナーが表示され、`step` で指定した数値を加算・減産できるようになります。
 * - 金額や、小数点以下の無い大きな数値を扱う場合は DigitsInput を使用してください。
 *   - どちらを使うかは、「整数部分の桁数が3〜4桁以上になる頻度」「`step` 単位で加算・除算して調整する頻度」「小数点が含まれる頻度」などから判断してください
 * - places オプションで小数点以下の表示桁数を指定します。それ以上の精度の小数点以下の数値はフォーカスが離れたときに指定の精度まで `toFixed()` で丸められます。
 */
declare const DecimalInput: React.FC<Props>;
export default DecimalInput;
