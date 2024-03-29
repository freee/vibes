import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
import { DropdownContent } from '../dropdown/types';
import WithPopup from '../withPopup/WithPopup';
declare type Props = {
    /**
     * メニュー開閉ボタン描画用 render function
     *
     * - `dropdownId` を開閉ボタンの `aria-controls` に渡してください
     * - `isOpen` を開閉ボタンの `aria-expanded` に渡してください
     * - `buttonRef` を開閉ボタンの `ref` に渡してください
     */
    renderButton: Pick<Parameters<typeof WithPopup>[0], 'render'>['render'];
    disabled?: boolean;
    dropdownContents: Array<DropdownContent>;
    /**
     * @deprecated このプロパティは使用されません
     */
    contentsFixed?: boolean;
    /**
     * dropdownを開いた時に発火します。useEffectのトリガーになるためメモ化したものを渡すことを推奨します。
     */
    onOpen?: () => void;
    /**
     * dropdownを閉じた時に発火します。useEffectのトリガーになるためメモ化したものを渡すことを推奨します。
     */
    onClose?: () => void;
} & CommonProps;
/**
 * ドロップダウンメニューを実装するためのコンポーネントです。
 *
 * - ボタンからドロップダウンメニューを表示したい場合は、 `DropdownButton` コンポーネントを使用してください
 * - どうしてもという場合でなければ `DropdownButton` コンポーネントを使用してください。このコンポーネントは扱いが面倒です。
 * - 開閉ボタンを `Button` `IconOnlyButton` 以外にしたい場合のみ、こちらのコンポーネントを使用してください
 * - `renderButton` の引数は以下のように使用してください
 *   - `dropdownId` を開閉ボタンの `aria-controls` に渡してください
 *   - `isOpen` を開閉ボタンの `aria-expanded` に渡してください
 *   - `buttonRef` を開閉ボタンの `ref` に渡してください
 */
declare const WithDropdown: React.FC<Props>;
export default WithDropdown;
