import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    /**
     * 選択中の日付を指定します。 `YYYY-MM-DD` 形式の日付を渡してください。
     */
    selectedDate: string | null;
    /**
     * 選択できる日付の範囲の開始地点を指定します。`YYYY-MM-DD` 形式の日付を渡してください。
     */
    startDate: string;
    /**
     * 選択できる日付の範囲の終了地点を指定します。 `YYYY-MM-DD` 形式の日付を渡してください。
     */
    endDate: string;
    /**
     * 表示サイズを小さくします
     */
    small?: boolean;
    disabled?: boolean;
    error?: boolean;
    required?: boolean;
    /**
     * `autoComplete` 属性の値を指定します。生年月日フィールドの場合は `bday` を指定してください。
     */
    autoComplete?: 'off' | 'bday';
    /**
     * `true` にすると、日付を未選択状態にできるようになります
     */
    nullable?: boolean;
    /**
     * `true` にすると、「年」のセレクトボックスが和暦併記になります
     */
    wareki?: boolean;
    onChange?: (date: string | null) => void;
    onInput?: (date: string | null) => void;
    onFocus?: (date: string | null) => void;
    onBlur?: (date: string | null) => void;
    onKeyDown?: (date: string | null) => void;
} & MarginClassProps & CommonProps;
/**
 *
 * セレクトボックスで年月日を選択するフォーム用のフィールドです。
 *
 * - `DateField` は生年月日など、年単位で離れた日付を入力する場合に使用してください
 *   - 近い日付を入力することが多い場合には `DateInput` を使用してください。
 *     `DateInput` はカレンダーを見ながら入力でき、曜日をヒントにすることができる一方、月単位でカレンダーを移動するため年単位で離れた日付の入力には向きません。
 * - `wareki` オプションを使用すると、「年」のセレクトボックスで和暦を併記することができます
 *   - 和暦で認識しているユーザーが多いと思われる、生年月日のフィールド等にはこちらを使用してください
 *
 */
declare const DateField: React.FC<Props>;
export default DateField;
