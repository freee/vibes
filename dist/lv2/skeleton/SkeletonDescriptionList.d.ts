import React from 'react';
import { CommonProps } from '../../utilities';
declare type Props = {
    /**
     * 行数を指定します。デフォルトは３です。
     */
    rowCount?: number;
} & CommonProps;
/**
 * ローディング中の DescriptionList を表現するために使います
 * This component provides a skeleton image of DescriptionList.
 */
export declare const SkeletonDescriptionList: React.FC<Props>;
export {};
