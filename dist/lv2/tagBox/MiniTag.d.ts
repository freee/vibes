import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    /**
     * タグの名前を指定します
     */
    children: string;
    /**
     * タグの種別（取引先、品目、etc...）を指定します
     */
    type?: string;
    /**
     * 削除ボタンが押せない場合 true を指定します
     */
    disabledRemoveButton?: boolean;
    /**
     * 削除ボタンを表示するかを指定します
     */
    removable?: boolean;
    /**
     * 削除時の処理を指定します
     */
    onRemove?: () => void;
    color?: 'RE' | 'OR' | 'YE' | 'YG' | 'GR' | 'BG' | 'PU' | 'GY';
    /**
     * 削除ボタンの `tabIndex` を指定します。
     * コンボボックスなどで、ボタンにフォーカスして押下する以外のキーボード操作による削除が可能な場合のみ `-1` を指定してください。
     */
    removeButtonTabIndex?: 0 | -1;
} & CommonProps;
/**
 * TagBoxよりも小さいサイズの、タグ表示用コンポーネントです。コンボボックスの内部などで使う想定です。
 *
 * コンボボックスの内部以外では、**TagBoxを使用することを強く推奨します**。
 * どうしてもこのコンポーネントである必要がある場合のみ、アクセシビリティに細心の注意を払ったうえで使ってください。
 *
 * - サイズを小さくするため、タグの種別が非表示になっています
 *   - 可能な限り、色と種別の対応をユーザーが理解できるようにしてください
 * - 色と種別の対応は、Vibes内では定義していません。プロダクト内では一貫したものを使用してください
 * - 種別 (`type`) はoptionalにしていますが、複数の種別を並べて表示する場合には必ず指定してください
 *   - VisuallyHiddenにて、スクリーンリーダーからは読み取れるようにしてあります
 */
export declare const MiniTag: React.FC<Props>;
export {};
