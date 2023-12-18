import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
import { SelfWindowNavigationProp } from '../../utilities/selfWindowNavigator';
declare type Props = {
    title: React.ReactNode;
    url?: string;
    onClick?: React.MouseEventHandler;
    children?: React.ReactNode;
    actions?: React.ReactNode;
    thumbnail?: React.ReactNode;
    thumbnailSize?: 'default' | 'large';
    target?: string;
    rel?: string;
    disabled?: boolean;
    current?: boolean;
    IconComponent?: React.ElementType;
} & SelfWindowNavigationProp & CommonProps;
/**
 * コレクションのひとつひとつのオブジェクトの表現に使用する、クリッカブルな要素です。
 *
 * - このコンポーネントは全体がクリッカブルです。全体をクリッカブルにしない場合は `CardBase` を使用してください
 * - モバイル向け画面では積極的に使用してください
 * - オブジェクトの属性を並べたリストを作るには `ListTable` (`BasicTable`) を使用してください。
 * - `title` は必須です
 * - `actions` として、オブジェクトの操作へのショートカットのボタン等を並べることができます
 * - `thumbnail` として、画像などを表示することができます
 * - `thumbnailSize` として画像サイズの指定を行うことができます default = 80px / large = 192px
 * - `title` `children` にはクリック可能な要素を渡さないでください
 * - `disabled` をtrueにしたときは、actionsのボタン等もdisabledにしてください
 * - `IconComponent` アイコンとして表示するコンポーネントを渡します。react-iconsのコンポーネントが想定されています。
 */
declare const ListCard: React.FC<Props>;
export default ListCard;
