import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    children: React.ReactNode;
    inline?: boolean;
    message?: React.ReactNode;
} & CommonProps;
/**
 * 非活性なコンテンツにメッセージ付きのスクリムを被せるコンポーネント
 */
declare const ScrimCoveredContent: React.FC<Props>;
export default ScrimCoveredContent;
