import * as React from 'react';
import { StatusType } from '../../lv1/icons/StatusIcon';
import { DropdownContent } from '../dropdown/types';
import { CommonProps } from '../../utilities/commonProps';
import { MarginClassProps } from '../../utilities/marginClasses';
declare type Props = {
    children?: React.ReactNode;
    /**
     * color type を指定します
     */
    type?: StatusType;
    /**
     * ドロップダウンで選択するステータスを指定します
     */
    dropdownContents: DropdownContent[];
    /**
     * ドロップダウン選択を disabled に設定します
     */
    disabled?: boolean;
} & MarginClassProps & CommonProps;
/**
 * StatusIconをクリッカブルにし、ドロップダウンから選択してステータスを切り替えられるようにしたコンポーネントです。
 *
 * 用途や type の使い分けについては StatusIcon の doc を参照してください。
 */
declare const StatusSelector: React.FC<Props>;
export default StatusSelector;
