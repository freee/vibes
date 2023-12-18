import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    /**
     * position を使用してください。 position 指定時は無視されます。
     * @deprecated
     */
    fixed?: boolean;
    /**
     * 表示位置を指定します。
     */
    position?: 'static' | 'fixed' | 'sticky';
    /**
     * 指定するとブラウザ幅に応じてボタンの並び方が変わります。
     */
    responsive?: boolean;
    children?: React.ReactNode;
    /**
     * 水平方向の配置を指定します
     */
    align?: 'left' | 'center';
    /**
     * 固定表示時にボタンを配置する範囲を指定します。position が fixed or sticky の場合にのみ利用されます。
     */
    width?: 'normal' | 'narrow' | 'wide';
} & CommonProps;
declare const FormActions: React.FC<Props>;
export default FormActions;
