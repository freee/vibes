import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
export declare type TabElement = string | {
    name: React.ReactNode;
    notification?: string;
    'data-guide'?: string;
    'data-test'?: string;
    'data-tracking'?: string;
    'data-masking'?: boolean;
};
declare type Props = {
    tabs: Array<TabElement>;
    currentTabIndex: number;
    small?: boolean;
    onClickTab: (i: number) => void;
    renderButtons?: () => React.ReactNode | React.ReactNodeArray;
} & CommonProps;
declare const TabBar: React.FC<Props>;
export default TabBar;
