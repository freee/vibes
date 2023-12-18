import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
import { MarginClassProps } from '../../utilities/marginClasses';
import { SelfWindowNavigationProp } from '../../utilities/selfWindowNavigator';
import { BaseComponentProps } from './types';
declare type Props = {
    children?: React.ReactNode;
    clickable?: boolean;
    disabled?: boolean;
    url?: string;
    target?: string;
    rel?: string;
    onClick?: React.MouseEventHandler;
    /**
     * `true` にすると、`overflow: hidden;`が指定されます。`CardBase`内で`Portal`を利用していない`DropDown`があった場合、`overflow: hidden;`によって見切れてしまう問題が発生しているので、それを避けるために暫定的にオンオフできるようにしています。デフォルトは`true`です。
     */
    overflowHidden?: boolean;
} & BaseComponentProps & SelfWindowNavigationProp & CommonProps & MarginClassProps;
/**
 * グルーピングされた要素を表示するときに使用するパーツです。
 *
 * 同等のグルーピングが複数並ぶ場合、例えばコレクションにおけるひとつのオブジェクトであったり、設定における複数カテゴリを同じ画面で並べる場合に用います。
 *
 * 周囲に24dpのpaddingが入ります。
 *
 * - `DialogBase` や `PopupBase` との混同に注意してください。
 *   - ポップアップコンテンツ（ドロップダウンメニューやコンボボックス等）に使用するべきなのは `PopupBase` です
 *   - モーダルダイアログに使用するべきなのは `DialogBase` です
 *   - `CardBase` は、これらとはシャドウのスタイルが違います。
 * - カード自体をクリック可能にする場合（ボタンやリンクとして使用する場合）は、`clickable` を `true` にしてください
 *   - react-router 等を使用している場合は、遷移時の処理を `onSelfWindowNavigation` に指定してください
 */
declare const CardBase: React.FC<Props>;
export default CardBase;
