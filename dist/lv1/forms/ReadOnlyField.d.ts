import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
import { TextFieldWidth } from './TextField';
declare type Props = {
    /**
     * id を指定します
     */
    id?: string;
    /**
     * aria-label を指定します
     */
    label?: string;
    /**
     * aria-labelledby を指定します
     */
    labelledby?: string;
    /**
     * input name を指定します
     */
    name?: string;
    /**
     * input value を指定します
     */
    value?: string;
    /**
     * 表示用のテキストを指定します
     */
    valueText?: string;
    /**
     * サイズを小さくします
     */
    small?: boolean;
    /**
     * サイズを大きくします
     */
    large?: boolean;
    /**
     * 中央寄せにします
     */
    alignCenter?: boolean;
    /**
     * 右寄せにします
     */
    alignRight?: boolean;
    /**
     * 幅を指定します
     */
    width?: TextFieldWidth;
} & CommonProps;
/**
 * ユーザーの入力内容が readonly で表示するためのコンポーネントです。
 *
 * - 高さが TextField などと揃うようにつくられているため、それらと並べて使用してもOKです。
 * - 幅の指定も TextField などと同様に行えます。
 */
declare const ReadOnlyField: React.FC<Props>;
export default ReadOnlyField;
