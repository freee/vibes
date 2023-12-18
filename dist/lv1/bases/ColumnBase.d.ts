import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { CommonProps } from '../../utilities/commonProps';
import { BaseComponentBorderProps, BaseComponentProps } from './types';
declare type Props = {
    children?: React.ReactNode;
    /**
     * `true` にすると、`border-radius`が指定されます
     */
    rounded?: boolean;
    /**
     * `true` にすると、`overflow: hidden;`が指定されます。`ColumnBase`内で`Portal`を利用していない`DropDown`があった場合、`overflow: hidden;`によって見切れてしまう問題が発生しているので、それを避けるために暫定的にオンオフできるようにしています。デフォルトは`true`です。
     */
    overflowHidden?: boolean;
} & BaseComponentProps & BaseComponentBorderProps & MarginClassProps & CommonProps;
/**
 * ColumnBaseは区切られたコンテンツを埋め込むための領域です。
 *
 * * `rounded` propによってColumnBaseに`border-radius`を指定できます
 *   * ColumnBaseの周囲に余白がある際は`rounded`propを使用することを推奨します
 *   * `border` propを使用する場合は周囲に余白があるはずなので、 `rounded` propを使用しなくても`border-radius`が指定されます
 */
declare const ColumnBase: React.FC<Props>;
export default ColumnBase;
