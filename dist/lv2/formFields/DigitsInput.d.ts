import * as React from 'react';
import TextField from '../../lv1/forms/TextField';
import { MarginClassProps } from '../../utilities/marginClasses';
import { TextBoxAriaProps } from '../../utilities/AriaProps';
declare type PropsFromTextField = Pick<Parameters<typeof TextField>[0], 'id' | 'label' | 'labelledby' | 'placeholder' | 'name' | 'required' | 'disabled' | 'error' | 'small' | 'width' | 'suffix' | 'onFocus' | 'onBlur' | 'onInput' | 'onKeyDown' | 'borderless'>;
/**
 * 入力された数値を3桁ごとに区切って表示する機能をもつテキストフィールドです。
 * 金額や、大きな数値を扱う場合（目安としては 1,000 以上になるのが通常の場合）に使用してください。
 *
 * - 仕様の多くは `TextField` と共通しています
 * - ユーザーの入力値は、表示上はフィールドからフォーカスを外した時点で数値以外の文字は除去され3桁ごとにカンマが挿入されます
 *   - ユーザーの入力を妨げないよう、入力中（フォーカス中）は表示される値を変化させないようになっています
 *   - `onChange` の発火は、ユーザーのキー入力ごとに行われます
 * - 入力値が1〜2桁のことが大半の場合や、小数点を含む可能性が高い場合には、このコンポーネントではなく、 `DecimalInput` を使用することも検討してください
 *   - `DecimalInput` は、 `<input type="number">` としてレンダリングされ、 `max` `min` `step` が使用できるようになります
 *     （`DigitsInput` はカンマを挿入する関係で  `<input type="text">` としています）
 *     - このとき、ブラウザによってスピナーが表示され、`step` で指定した数値を加算・除算できるようになります
 *   - どちらを使うかは、「整数部分の桁数が3〜4桁以上になる頻度」「`step` 単位で加算・除算して調整する頻度」「小数点が含まれる頻度」などから判断してください
 * - デフォルトの挙動では、空欄にしてフォーカスを外すと入力値は `0` となります。 `nullable={true}` にすることで、空欄にすることができるようになります
 * - ユーザーの入力値は `number | null` として `onChange` で取得できます
 *   - 全角文字を半角文字に変換し、不要な文字を消した上で数値として評価します
 *   - 正の数や整数に限定したり、最大・最小値を指定するような処理はDigitsInputでは行っていません。入力値をそれらに限定したい場合は、使用する側でエラーメッセージを出すなどのハンドリングをしてください
 * - `,`を連続で入力するか`/`を入力すると、`000` が挿入されます
 */
declare const DigitsInput: React.ForwardRefExoticComponent<{
    value?: number | null | undefined;
    nullable?: boolean | undefined;
    onChange?: ((value: number | null) => void) | undefined;
    /**
     * 小数点の桁数上限
     */
    decimalLimit?: number | undefined;
} & PropsFromTextField & TextBoxAriaProps & MarginClassProps & import("../../utilities/commonProps").CommonDataProps & import("../../utilities/functionalMarginClasses").FunctionalMarginProps & React.RefAttributes<HTMLInputElement>>;
export default DigitsInput;
