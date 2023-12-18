import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { SelfWindowNavigationProp } from '../../utilities/selfWindowNavigator';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    links: ({
        title: string;
        url?: string;
        onClick?: () => void;
        /**
         * (deprecated) `onSelfWindowNavigation` を使用してください
         */
        onClickNavigator?: () => void;
        /**
         * Shows a skeleton instead of the title while loading / 読込中に項目名を Skeleton 表示にします
         */
        loading?: boolean;
    } & SelfWindowNavigationProp)[];
    label?: string;
} & MarginClassProps & CommonProps;
declare const Breadcrumbs: React.FC<Props>;
export default Breadcrumbs;
