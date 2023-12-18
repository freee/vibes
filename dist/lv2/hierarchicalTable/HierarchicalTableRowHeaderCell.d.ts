import * as React from 'react';
import BorderTableListCell from '../../lv1/lists/BorderTableListCell';
declare type Props = React.ComponentProps<typeof BorderTableListCell> & {
    onToggleFolded: () => void;
    level: number;
    foldable: boolean;
    folded: boolean;
};
declare const HierarchicalTableRowHeaderCell: React.FC<Props>;
export default HierarchicalTableRowHeaderCell;
