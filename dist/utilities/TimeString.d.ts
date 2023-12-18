export declare const TimeString: {
    createTimeString: (hour: number, min: number) => string;
    getHour: (timeStr: string) => number;
    getMin: (timeStr: string) => number;
    convert: (str: string, minTime?: string | undefined, maxTime?: string | undefined) => string;
};
