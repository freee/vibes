import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { CommonProps } from '../../utilities/commonProps';
import { BaseComponentBorderProps, BaseComponentProps } from './types';
declare type Props = {
    children?: React.ReactNode;
} & BaseComponentProps & BaseComponentBorderProps & MarginClassProps & CommonProps;
/**
 * PopupBaseと同様にポップアップコンテンツに使用するコンポーネントです。
 *
 * - **z-indexが指定されているため注意が必要です**
 * - z-index: 500;
 *   - FloatingBase（z-index: 500) < DialogBase（z-index: 1000) < PopupBase（z-index: 2000) となります。
 *   - ポップアップからダイアログが出てくるようなコンポーネントはPopupBaseでは実現できないのでFloatingBaseを使用して下さい
 */
declare const FloatingBase: React.FC<Props>;
export default FloatingBase;
