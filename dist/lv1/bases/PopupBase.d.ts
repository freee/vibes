import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { CommonProps } from '../../utilities/commonProps';
import { BaseComponentBorderProps, BaseComponentProps } from './types';
declare type Props = {
    children?: React.ReactNode;
} & BaseComponentProps & BaseComponentBorderProps & MarginClassProps & CommonProps;
/**
 * ポップアップコンテンツ（ドロップダウンやコンボボックスの選択部分など）に使用するコンポーネントです。
 *
 * - **z-indexが指定されているため注意が必要です**
 * - z-index: 1000;
 *   - FloatingBase（z-index: 500) < DialogBase（z-index: 1000) < PopupBase（z-index: 2000) となります。
 *   - ポップアップからダイアログが出てくるようなコンポーネントはPopupBaseでは実現できないのでFloatingBaseを使用して下さい
 * - `CardBase` や `DialogBase` との混同に注意してください。
 *   - モーダルダイアログに使用するべきなのは `DialogBase` です
 *   - 作ろうとしているものがモーダルダイアログでも、ポップアップコンテンツでもない場合は、`CardBase` を使用してください
 */
declare const PopupBase: React.FC<Props>;
export default PopupBase;
