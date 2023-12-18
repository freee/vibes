import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
import { SelfWindowNavigationProp } from '../../utilities/selfWindowNavigator';
export declare type LinkContent = {
    title: string;
    url: string;
    IconComponent?: React.ElementType;
    current?: boolean;
    'data-guide'?: string;
    'data-test'?: string;
    'data-tracking'?: string;
    'data-masking'?: boolean;
} & SelfWindowNavigationProp;
declare type Props = {
    /**
     * min-width から Container の左右 margin 分の値を取り除きます。
     */
    disableGutters?: boolean;
    /**
     * nav要素の aria-label を指定します。
     */
    label?: string;
    links?: LinkContent[];
    searchUrl?: string;
    /**
     * 検索フォームを非表示にします。
     */
    hideHelpForm?: boolean;
    /**
     * 検索時に追加でクエリパラメータを付与します。
     */
    searchQueryParams?: {
        [key: string]: string;
    };
    /**
     * グロナビの右側に表示する要素を指定します。（この値を指定すると強制的に検索フォームは非表示になります。）
     */
    sectionNode?: React.ReactNode;
} & CommonProps;
export default function GlobalNavi(props: Props): JSX.Element;
export {};
