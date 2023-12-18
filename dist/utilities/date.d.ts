export declare function parseDate(date: Date | string | null | undefined): Date | null;
export declare function isValidDateInRange(date: string | Date, minDate?: string | Date, maxDate?: string | Date): boolean;
export declare function getValidDateNearestTarget(target: Date | string, minDate?: Date | string, maxDate?: Date | string): Date | null;
export declare function formatDate(date: string | Date): string;
export declare function formatDayOfWeek(date: string | Date): string;
