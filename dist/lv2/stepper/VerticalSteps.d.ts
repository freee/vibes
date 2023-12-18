import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    /**
     * 現在のステップの位置（0始まり）
     */
    currentStepIndex: number;
    steps: {
        /**
         * ステップのタイトル
         */
        title: React.ReactNode;
        /**
         * ステップの内容。現在のステップの内容のみ表示されます。
         */
        content: React.ReactNode;
        /**
         * ステップから次へ進む/目に戻るアクションのボタン
         */
        actions?: React.ReactNode;
        /**
         * 以前のステップでのユーザーの入力内容のサマリー
         */
        contentSummary?: React.ReactNode;
    }[];
    /**
     * ステップのタイトル部分の見出しレベル。`-1` にすると見出し要素ではなくなります。
     */
    stepHeadlineLevel?: 1 | 2 | 3 | 4 | 5 | 6 | -1;
} & CommonProps;
/**
 * ユーザーに手順を提示し、順番に沿って操作させるためのコンポーネントです。
 *
 * - 手順ごとに `title` `content` `contentSummary` `actions` を指定できます。
 *   - `title` は常に表示されます
 *   - `content` はステップの内容で、フォーム等を配置します。現在のステップのみ表示されます
 *   - `actions` はステップを完了する、または前のステップに戻るボタンを配置します。現在のステップにのみ表示されます。
 *   - `contentSummary` はステップでのユーザーの入力・選択内容の概要を表現します。通過したステップにのみ表示されます
 *     - `contentSummary` にはステップで入力・選択した結果のみを含め、インタラクティブなものを含めないでください
 * - 各ステップの `title` は見出しとなります。デフォルトの見出しレベルは2ですが、 `stepHeadlineLevel` により変更ができます
 *   - `-1` にすると、見出しではなくなります。
 */
export declare const VerticalSteps: React.FC<Props>;
export {};
