import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
import { DropdownContent } from '../dropdown/types';
declare type Props = {
    /**
     * ボタンの選択状態を指定します。
     * The selection state of the button.
     */
    selected?: boolean;
    /**
     * ボタン内に表示するラベルを指定します。
     * The label of the button.
     */
    label: string;
    /**
     * ボタンを押下したときの処理を指定します。
     * The handler when the button is clicked.
     */
    onClick?: () => void;
    /**
     * 選択中のボタンを再選択したときに表示するドロップダウンの内容を指定します。
     * 指定を行わない場合、ドロップダウンは表示されず、通常のボタンのように動作します。
     * The contents of the dropdown to be displayed when the selected button is reselected.
     * If not specified, the dropdown will not be displayed and will behave like a normal button.
     */
    dropdownContents?: DropdownContent[];
    /**
     * バッジに表示する数値を指定します。
     * 0を指定した場合はバッジは表示されません。
     * The number to be displayed in the badge.
     * If 0 is specified, the badge will not be displayed.
     */
    badge?: number;
} & CommonProps;
/**
 * 選択中に再度選択するとドロップダウンを表示できるボタンです。
 */
declare const SelectableButton: React.FC<Props>;
export default SelectableButton;
