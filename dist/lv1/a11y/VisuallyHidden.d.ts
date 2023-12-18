import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    children?: React.ReactNode;
    id?: string;
    autoRead?: boolean;
    assertive?: boolean;
} & CommonProps;
/**
 * 視覚的には見えないが、スクリーンリーダー等からは「見える」要素を提供します。
 * `autoRead` オプションを付けることで、 `aria-live="polite"` な、内部が書き変わったときに自動的に読み上げられる要素となります。
 */
declare const VisuallyHidden: React.FC<Props>;
export default VisuallyHidden;
