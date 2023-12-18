import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    /**
     * アニメーションの開始を遅らせたいときに使います。単位はミリ秒です。
     */
    animationDelay?: number;
} & CommonProps;
declare const DiscoveryIllust: React.FC<Props>;
export default DiscoveryIllust;
