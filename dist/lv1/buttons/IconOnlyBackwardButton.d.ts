import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
import IconOnlyButton from './IconOnlyButton';
declare type Props = {
    /**
     * ボタンのaria-labelに使用される文字列です。必ず遷移先を表す文字列を指定してください。
     */
    buttonLabel: string;
    /**
     * href を設定します
     */
    url?: string;
    /**
     * click ハンドラを指定します
     */
    onClick?: React.MouseEventHandler;
} & Pick<Parameters<typeof IconOnlyButton>[0], 'appearance' | 'danger' | 'disabled' | 'small' | 'large' | 'rel' | 'type' | 'onSelfWindowNavigation'> & CommonProps;
/**
 * IconOnlyBackwardButton は前画面への遷移のためのボタンです。
 *
 * - 文字列として遷移先を表現できないので、「次の画面へ進む」のように遷移先が自明な場合にのみ使用してください。
 * - `buttonLabel` に必ず代替テキストを設定してください
 * - 「次の画面」「他の画面」への遷移には IconOnlyJumpButton を使用してください
 * - `target="_blank"` は指定できません
 * - ListTableの行内に入れる場合など、高さを小さくしたい場合には `small` を使用してください
 */
declare const IconOnlyBackwardButton: React.FC<Props>;
export default IconOnlyBackwardButton;
