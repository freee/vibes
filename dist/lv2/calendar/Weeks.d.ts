import * as React from 'react';
import { TimeRecord } from '../../lv1/calendar/CalendarDate';
declare type Props = {
    weekStartsOn: number;
    starDateOfMonth: Date;
    contents?: TimeRecord[];
    nationalHolidays?: string[];
    onClickDate?: (date: string) => void;
    selectableDateRefs: HTMLDivElement[];
    handleKeyDownSelectedDate: (e: React.KeyboardEvent<HTMLDivElement>, date: string, onClickDate?: (date: string) => void) => void;
};
export default function Weeks({ weekStartsOn, starDateOfMonth, contents, nationalHolidays, onClickDate, selectableDateRefs, handleKeyDownSelectedDate, }: Props): React.ReactElement;
export {};
