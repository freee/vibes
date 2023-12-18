import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { CommonProps } from '../../utilities/commonProps';
import { BaseComponentBorderProps, BaseComponentProps } from './types';
declare type Props = {
    children?: React.ReactNode;
    /**
     * メッセージダイアログ・確認ダイアログの場合にz-indexを高いものにするためのオプションです。
     * `true` にすることでz-indexが大きくなります
     */
    message?: boolean;
} & BaseComponentProps & BaseComponentBorderProps & MarginClassProps & CommonProps;
/**
 * モーダルウィンドウに使用するコンポーネントです。
 *
 * - **z-indexが指定されているため注意が必要です**
 * - `CardBase` や `PopupBase` との混同に注意してください。
 *   - ポップアップコンテンツ（ドロップダウンメニューやコンボボックス等）に使用するべきなのは `PopupBase` です
 *   - 作ろうとしているものがモーダルダイアログでも、ポップアップコンテンツでもない場合は、`CardBase` を使用してください
 */
declare const DialogBase: React.FC<Props>;
export default DialogBase;
