import * as React from 'react';
import { SectionData } from './types';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    /**
     * min-width から Container の左右 margin 分の値を取り除きます。
     */
    disableGutters?: boolean;
    /**
     * ロゴを指定します。
     */
    logo: React.ReactNode;
} & ({
    sectionDataList: Array<SectionData>;
    sectionNode?: React.ReactNode;
} | {
    sectionDataList?: Array<SectionData>;
    sectionNode: React.ReactNode;
}) & {
    logoUrl?: string;
    children?: React.ReactNode;
} & CommonProps;
declare const Header: React.FC<Props>;
export default Header;
