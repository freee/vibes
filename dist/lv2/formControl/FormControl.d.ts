import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    children: React.ReactNode;
    label?: React.ReactNode;
    required?: boolean;
    fieldId?: string;
    id?: string;
    help?: React.ReactNode;
} & CommonProps & MarginClassProps;
/**
 * フォームの入力欄1つずつを表現するコンポーネントです。
 *
 * * `FormControlGroup` 内に複数個配置することで、水平方向にフィールドの並んだフォームを作ることができます。
 * * `help` propによって入力方法の案内などをヘルプアイコンとして表示することができます
 *   * 案内の内容が複雑であったり、理解・記憶・学習が難しいものについてはヘルプアイコンにせず、常時表示しておくことを検討してください
 *
 * ## accessibility
 * * 中に入るフィールド (`TextField` 等) が1つの場合は、フィールドの `id` 属性を必ず設定し、 `FormControl` の `fieldId` propを必ず同じにしてください。
 *   * [フォーム・コントロールのラベル付け](https://a11y-guidelines.freee.co.jp/explanations/form-labeling.html) のために必要です
 *   * `CheckBox` や `RadioButton` コンポーネントは、内部 (`children` propの部分）に `<label>` 要素を持つため、`fieldId` の指定は必要ありません
 * * 複数のラジオボタンやテキストフィールドが入る場合には、`fieldId` を設定しないでください（`<fieldset>`と`<legend>` による表現になります）。
 *   この場合、個別のフィールドには別の方法でラベル付けを行ってください。
 *   * `CheckBox` や `RadioButton` コンポーネントは、内部 (`children` propの部分）に `<label>` 要素を持つため、何もしなくてOKです
 *   * テキストフィールドやセレクトボックス、Vibesのコンポーネントを使わずに作るラジオボタンやチェックボックス は、`<label>` 要素と並べて配置してください。
 *   * どうしても`<label>`要素が使用できない場合は、 `aria-label` 属性や `aria-labelledby` 属性を使用してください。 `TextField` `SelectBox` `TextArea` の各コンポーネントは、 `label` と `labelledby` propが `aria-label` 属性と `aria-labelledby` 属性に対応します
 */
declare const FormControl: React.FC<Props>;
export default FormControl;
