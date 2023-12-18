import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    folded: boolean;
    onToggleFolded: (folded: boolean) => void;
} & CommonProps;
declare const TreeFoldingButtonCell: React.FC<Props>;
export default TreeFoldingButtonCell;
