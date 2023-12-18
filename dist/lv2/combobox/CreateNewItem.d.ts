import * as React from 'react';
declare type Props = {
    createLabel?: (fieldValue: string) => React.ReactNode;
    createNewItem: (fieldValue: string) => void;
    fieldValue: string;
    isSelected: boolean;
    selectedOptionRef: React.RefObject<HTMLDivElement>;
    uniqueId: string;
};
export declare const CreateNewItem: ({ createLabel, createNewItem, fieldValue, isSelected, selectedOptionRef, uniqueId, }: Props) => JSX.Element;
export {};
