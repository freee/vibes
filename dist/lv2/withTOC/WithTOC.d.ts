import React from 'react';
import { CommonProps } from '../../utilities/commonProps';
declare type WithTOCContent = {
    id: string;
    label: string;
    content: React.ReactNode;
};
declare type Props = {
    /**
     * Content bodies and definitions across each sections.
     * 項目ごとの内容および定義一覧。
     *
     * - `id`: Section ID which users can refer to as an anchor. アンカーとして利用される、各項目ごとの要素ID。
     * - `label`: Section name appears in the ToC. 目次に表示される項目名。
     * - `content`: Body of each sections. 各項目の内容。
     */
    contents: Array<WithTOCContent>;
    /**
     * Container to perform scrolling in.
     * スクロールさせる親コンテナ要素。
     */
    containerID?: string;
    /**
     * Scroll position offset from top in screen pixels (`px`).
     * スクロールのオフセット値を指定。
     */
    offsetTop?: number;
    /**
     * Callback fired on ToC link clicks.
     * 目次のリンク押下時に呼び出されるコールバック。
     *
     * Usage example: `id => history.push({ hash: id })`
     */
    onNavigateTo?: (id: string) => void;
} & CommonProps;
/**
 * `<WithTOC/>` represents a list of content sections with an automatically generated table of contents.
 * 目次付きのコンテンツリストです。
 */
declare const WithTOC: React.FC<Props>;
export default WithTOC;
