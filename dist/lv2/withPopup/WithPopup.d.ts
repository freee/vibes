import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    /**
     * ポップアップ開閉コントロール描画用 render function
     *
     * - `popupId` を開閉コントロールの `aria-controls` に渡してください
     * - `isOpen` を開閉コントロールの `aria-expanded` に渡してください
     * - `controlRef` を開閉コントロールの `ref` に渡してください
     * - `togglePopup` はクリック以外のタイミングでポップアップを開閉したい際に使用してください。
     */
    render: (
    /**
     * ポップアップのid: ボタンのaria-controlsに渡してください
     */
    popupId: string, 
    /**
     * ドロップダウンメニューの開閉状況: ボタンのaria-expandedに渡してください
     */
    isOpen: boolean, 
    /**
     * 開閉コントロールのrefに渡してください
     */
    controlRef: React.RefObject<HTMLElement>, 
    /**
     * 強制的に表示/非表示を切り替えます。要素のクリック以外のタイミングでポップアップを開閉する際に使用します。
     */
    togglePopup: (open: boolean) => void) => React.ReactNode;
    /**
     * ポップアップ描画用 render function
     *
     * - requestClose を呼ぶことでポップアップを閉じさせます
     * - firstSelectedItemRef は、フォーカス可能な要素のうち最初の要素のrefに渡してください。
     * - フォーカス可能な要素より前に説明文等がある場合は、firstSelectedItemRef をどの要素にも渡さないでください
     */
    renderPopup: (
    /**
     * これを呼ぶことでポップアップを閉じます
     */
    requestClose: () => void, 
    /**
     * - フォーカス可能な要素のうち最初の要素のrefに渡してください。
     * - フォーカス可能な要素より前に説明文等がある場合は、firstSelectedItemRef をどの要素にも渡さないでください
     */
    firstSelectableItemRef: React.RefObject<HTMLElement>, 
    /**
     * renderに渡さるのと同じRefオブジェクトです。ボタンへの参照として使用し、ref属性には渡さないでください。
     */
    controlRefDoNotUseAsRefAttribute: React.RefObject<HTMLElement>) => React.ReactNode;
    disabled?: boolean;
    /**
     * popupを開いた時に発火します。useEffectのトリガーになるためメモ化したものを渡すことを推奨します。
     */
    onOpen?: () => void;
    /**
     * popupを閉じた時に発火します。useEffectのトリガーになるためメモ化したものを渡すことを推奨します。
     */
    onClose?: () => void;
} & CommonProps;
/**
 * ポップアップを実装するためのコンポーネントです。
 *
 * - ボタンからドロップダウンメニューを表示したい場合は、 `DropdownButton` コンポーネントを使用してください
 * - 作ろうとしている機能と同じ機能を持つコンポーネントが存在する場合はそちらを使用してください。このコンポーネントは扱いが面倒です。
 * - `render` の引数は以下のように使用してください
 *   - `popupId` を開閉コントロールの `aria-controls` に渡してください
 *   - `isOpen` を開閉コントロールの `aria-expanded` に渡してください
 *   - `controlRef` を開閉コントロールの `ref` に渡してください
 * - `renderPopup` の引数は以下のように使用してください
 *   - requestClose を呼ぶことでポップアップを閉じさせます
 *   - firstSelectedItemRef は、フォーカス可能な要素のうち最初の要素のrefに渡してください。
 *   - フォーカス可能な要素より前に説明文等がある場合は、firstSelectedItemRef をどの要素にも渡さないでください
 */
declare const WithPopup: React.FC<Props>;
export default WithPopup;
