import * as React from 'react';
declare type Props = {
    createLabel?: (fieldValue: string) => string;
    fieldValue: string;
    isSelected: boolean;
    loadMore: () => void;
    selectedOptionRef: React.RefObject<HTMLDivElement>;
    uniqueId: string;
};
export declare const LoadMoreItem: ({ createLabel, fieldValue, isSelected, loadMore, selectedOptionRef, uniqueId, }: Props) => JSX.Element;
export {};
