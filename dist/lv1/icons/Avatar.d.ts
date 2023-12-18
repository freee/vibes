import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    imageUrl?: string;
    size?: 'small' | 'medium' | 'large' | 'xLarge';
    /**
     * 画像のprefetchでのチェックを有効にします、falseの場合は描画の際に一度だけ画像のfetchが行われます(キャッシュの効かない画像に対して有効です)
     */
    prefetch?: boolean;
} & CommonProps;
/**
 * 人のアバターを表現するためのコンポーネントです。
 *
 * - imageUrlが指定されない場合または画像の読み込みに失敗した場合はMdPersonアイコンが表示されます、prefetchがfalseの場合は画像の読み込みチェックを行わないため、画像が取得できなかった場合にMdPersonアイコンは出ません
 * - サイズは `small` (1.5rem = 24px), `medium` (2rem = 32px), `large` (3rem = 48px), XLarge (6rem = 96px) が用意されています
 */
declare const Avatar: React.FC<Props>;
export default Avatar;
