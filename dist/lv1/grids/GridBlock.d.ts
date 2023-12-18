import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
export declare type GridSize = 'half' | 'oneThird' | 'twoThirds' | 'oneQuarter' | 'threeQuarters';
declare type Props = {
    children?: React.ReactNode;
    size: GridSize;
} & CommonProps;
export default function GridBlock(props: Props): React.ReactElement;
export {};
