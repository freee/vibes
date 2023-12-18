import * as React from 'react';
import { TimeRecord } from '../../lv1/calendar/CalendarDate';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    year: string;
    month: string;
    contents?: TimeRecord[];
    startFromMonday?: boolean;
    nationalHolidays?: string[];
    onClickDate?: (date: string) => void;
} & CommonProps;
export default class Calendar extends React.Component<Props> {
    selectableDateRefs: HTMLDivElement[];
    render(): React.ReactElement;
    handleKeyDownSelectedDate: (e: React.KeyboardEvent<HTMLDivElement>, date: string, onClickDate?: ((date: string) => void) | undefined) => void;
}
export {};
