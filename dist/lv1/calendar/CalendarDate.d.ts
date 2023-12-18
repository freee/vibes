import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
export declare type TimeRecord = {
    type: 'TimeRecord';
    date: string;
    status?: 'alert' | 'notice' | 'success';
    dateLabel?: string;
    openingTime: string;
    endingTime: string;
};
declare type Props = {
    /**
     * 日付を設定します
     */
    date: string;
    /**
     * ラベルを設定します
     */
    dateLabel?: string;
    /**
     * 現在日に設定します
     */
    today?: boolean;
    /**
     * disabled に設定します
     */
    disabled?: boolean;
    /**
     * 休日に設定します
     */
    secondaryHoliday?: boolean;
    /**
     * 休日に設定します
     */
    primaryHoliday?: boolean;
    /**
     * 祝日に設定します
     */
    nationalHoliday?: boolean;
    /**
     * 勤務情報を設定します
     */
    content?: TimeRecord;
    /**
     * click ハンドラを設定します
     */
    onClickDate?: (date: string) => void;
    /**
     * ref を設定します
     */
    selectableDateRef?: (el: HTMLDivElement) => void;
    /**
     * keydown ハンドラを設定します
     */
    onKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>, date: string, onClickDate?: (date: string) => void) => void;
} & CommonProps;
export default function CalendarDate(props: Props): React.ReactElement;
export {};
