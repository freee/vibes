import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
import DropdownMenuContent from './DropdownMenuContent';
declare type Props = Pick<Parameters<typeof DropdownMenuContent>[0], 'contents' | 'firstSelectableItemRef' | 'onRequestClose'> & {
    align?: 'left' | 'right';
    positionRelative?: boolean;
} & CommonProps;
/**
 * ドロップダウンメニューのコンポーネントです。
 *
 * 「ボタンを押したらメニューが表示される」UIであれば、DropdownButtonコンポーネントを使用してください。
 */
declare const Dropdown: React.FC<Props>;
export default Dropdown;
