import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    listContents: Array<{
        title: React.ReactNode;
        value?: React.ReactNode;
    }>;
    /**
     * 見出しセルの最小幅を設定します
     */
    headCellMinWidth?: number;
    /**
     * リストの高さを設定します
     */
    spacing?: 'normal' | 'compact';
} & MarginClassProps & CommonProps;
/**
 * ## accessibility
 * DescriptionListにてフィールドを扱う場合、「フィールドとラベル」の紐付けを実装時に行う必要があります。
 *
 * 典型的な例として、以下のような対応が挙げられます。
 *
 * - valueに含まれるフィールドにidを付与する。
 * - titleを<label>で囲み、htmlForにフィールドのidを指定する
 *
 * storyのフィールドのある行が実装例として参考になります。
 *
 */
declare const DescriptionList: React.FC<Props>;
export default DescriptionList;
