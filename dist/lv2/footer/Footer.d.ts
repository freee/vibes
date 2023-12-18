import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
declare type Link = {
    title: string;
    url: string;
};
declare type Props = {
    links?: Link[];
    AppStoreUrl?: string;
    GooglePlayUrl?: string;
    disableAppStoreBadge?: boolean;
    disableGooglePlayBadge?: boolean;
    copyright?: string;
    width?: 'normal' | 'narrow' | 'wide';
    /**
     * フッタの右側に表示する要素を指定します。（この値を指定すると強制的にバッジは非表示になります。）
     */
    sectionNode?: React.ReactNode;
} & CommonProps;
export declare const defaultLinks: {
    title: string;
    url: string;
}[];
declare const Footer: React.FC<Props>;
export default Footer;
