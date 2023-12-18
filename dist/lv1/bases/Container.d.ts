import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    children: React.ReactNode;
    width?: 'normal' | 'narrow' | 'wide';
    responsive?: boolean;
} & MarginClassProps & CommonProps;
/**
 * Containerはコンテンツ領域全体（本文）を囲み、widthをnarrow/normal/wideで設定することができます
 * ＊コンテンツ領域全体（本文）はその画面の中心的な内容となり、Header/GlobalNavi/Footerを除く全体となります。（参考：[MDN}(https://developer.mozilla.org/ja/docs/Web/HTML/Element/main))
 *
 * ## accessibility
 * Containerはmain要素も含んでいます。（実装を確認ください）
 * もし、Containerが使われない場合には、main要素でコンテンツ領域全体（本文）を囲むよう同等の役割を果たす実装してください
 */
declare const Container: React.FC<Props>;
export default Container;
