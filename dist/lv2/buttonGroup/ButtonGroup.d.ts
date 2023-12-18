import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
import { MarginClassProps } from '../../utilities/marginClasses';
declare type Props = {
    children: React.ReactNodeArray | React.ReactNode;
    align?: 'left' | 'center';
    responsive?: boolean;
    /** レスポンシブビューで、画面幅が狭い場合のボタンの並び方を調整します。 `column` を指定した場合はすべてのボタンが縦に並び、`row` を指定した場合は最初の2つのボタンが横に並び、残りのボタンは縦に並びます */
    mobileButtonLayout?: 'row' | 'column';
} & MarginClassProps & CommonProps;
/** 主にレスポンシブビューを想定して、複数のボタンをグループ化して配置します。 */
declare const ButtonGroup: React.FC<Props>;
export default ButtonGroup;
