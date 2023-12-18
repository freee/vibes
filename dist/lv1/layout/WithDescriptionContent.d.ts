import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    /**
     * 注釈をつける対象となるコンポーネント。`descriptionContentId` を引数に取るため、 `aria-describedby` で紐付けて使用できます
     */
    renderContent: (descriptionContentId: string) => React.ReactNode;
    /**
     * 注釈の内容。文字サイズやマージン等は指定されていないため、`<Note>` などを使用してください
     */
    renderDescriptionContent: () => React.ReactNode;
    /**
     * `horizontal` で右に、`vertical` で下に注釈をつけます。
     */
    position?: 'horizontal' | 'vertical' | 'vertical-reverse';
} & CommonProps;
/**
 * 注釈をコンポーネントの右または下に置くためのコンポーネントです。
 * DOM上での並び順は見た目とは違い、注釈→対象のコンポーネントとなるため、CSSがあたっていない状態のユーザーに先に注釈を見せることができます。
 *
 * - `renderContent` は `renderDescriptionContent` が配置される要素のidを引数に取るため、 `aria-describedby` で紐付けることができます。
 * - `renderDescriptionContent` には `Note` コンポーネントを配置する想定です。
 * - `WithDescriptionContent` では注釈と対象のあいだのマージンは用意していないので、注釈と対象のどちらかに `0.5rem` 程度のマージンをつけて調整してください。
 * - ラベル（項目名）の配置には `FormControl` 等を使用してください
 * - `horizontal` `vertical` では、**DOM上の要素の順序と見た目上の順序が逆順になる** ことに注意が必要です
     - 「`renderContent` 内の入力フィールド等の状態によって `renderDescriptionContent` が変化する」ような使い方をしないでください
 *   - リンク等を `renderDescriptionContent` に入れた場合、 `renderContent` 内の要素よりも先にフォーカスが移動します
 */
declare const WithDescriptionContent: React.FC<Props>;
export default WithDescriptionContent;
