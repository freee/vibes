import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    /**
     * 週の始まりを指定する(1: 月曜日, それ以外: 日曜日)
     */
    weekStartsOn: number;
} & CommonProps;
export default function CalendarHead(props: Props): React.ReactElement;
export {};
