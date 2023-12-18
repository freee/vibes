declare type FlatRow<Row> = Row & {
    /**
     * 階層レベル
     */
    level: number;
    /**
     * 直下の子行の数
     */
    childCount: number;
    /**
     * すべての子孫行の数
     */
    totalChildCount: number;
    setSize: number;
    posInset: number;
};
export declare type FlatRowWithStatus<Row> = FlatRow<Row> & {
    folded: boolean;
    visible: boolean;
};
export declare const useHierarchicalTable: <Row extends {
    childRows: Row[];
}>(rows: Row[]) => [FlatRowWithStatus<Row>[], (rowIndex: number) => void];
export {};
