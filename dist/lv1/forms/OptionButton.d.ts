import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    /**
     * ボタン内部のコンテンツです。
     * `<CheckBox>` `<RadioButton>` を1つ含むようにしてください。 また、リンクやボタンなどは含めないでください
     */
    children: React.ReactNode;
    /**
     * idを指定できます。 `<CheckBox>` `<RadioButton>` の `id` とは別になります
     */
    id?: string;
    /**
     * 選択済み状態であるかを指定します。
     * 必ず `children` 内の `<CheckBox>` `<RadioButton>` の `checked` と連動させてください。
     */
    checked: boolean;
    /**
     * 最小サイズを指定します。
     * サイズはButtonコンポーネントに `small` や `large` を指定した場合と同じです。`none`にした場合は最小サイズが未指定となります
     */
    size?: 'small' | 'medium' | 'large' | 'none';
    /**
     * 'full' で包括している要素に対して横幅を100%にします。
     */
    width?: 'default' | 'full';
} & CommonProps;
/**
 * チェックボックス・ラジオボタンをボタン風に見せるためのコンポーネントです
 *
 * * `<CheckBox>` `<RadioButton>` を `children` 内で使用してください
 *   * 領域内でのクリック時、 `<input>` に click イベントをdispatchします。必ず `<input>` が内部に1つだけ配置されるようにしてください（`<CheckBox>` `<RadioButton>` を1つだけ配置すれば、この条件を満たします）
 * * `checked` propをtrueにすると、枠線の色と太さが変わり、選択済みであることを示す見た目になります
 *   * `children` に入れた `<CheckBox>` `<RadioButton>` のステートとは連動しないので、必ず連動するようにコードを記述してください
 * * 内部には、リンクやボタンなどの、`<CheckBox>` `<RadioButton>`以外のクリッカブルな要素は配置できません
 */
export declare const OptionButton: React.FC<Props>;
export {};
