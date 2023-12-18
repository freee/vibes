import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
import Balloon from '../../lv1/bases/Balloon';
declare type Props = Pick<Parameters<typeof Balloon>[0], 'border'> & {
    /**
     * バルーンの中身を描画します。ホバーやフォーカスによってバルーンが表示されているとき、`isVisible` が `true` になります。 `balloonContent` より優先して使用されます。
     */
    renderBalloonContent?: (isVisible: boolean) => React.ReactNode;
    /**
     * (deprecated) バルーンの中身を描画します。バルーンの表示状態を取得できないため、なるべく `renderBalloonContent` を使用してください。
     * @deprecated `renderBalloonContent` を使用してください
     */
    balloonContent?: React.ReactNode;
    /**
     * バルーンを付ける側（呼び出し側）をrenderします。
     * ボタンや入力フォームなどのインタラクティブなコンポーネントがある場合には、`balloonId` を `aria-describedby` に渡してください
     */
    renderContent?: (balloonId: string) => React.ReactNode;
    /**
     * (deprecated) renderContentが渡されていない場合に使用されます。aria-describedbyが使用できないため、なるべく `renderContent` を使用してください。
     * @deprecated `renderContent` を使用してください
     */
    children?: React.ReactNode;
    /**
     * trueにしておくとバルーンを表示しません。特定の条件でのみバルーンを表示したい場合に使用してください。
     */
    balloonDisabled?: boolean;
} & CommonProps;
/**
 * `children` の要素にマウスホバーした際に表示されるバルーンを付与します。
 *
 * - タッチスクリーンによる操作ではバルーンを表示できません。**読めないことで使用できなくなる情報を配置しないでください**。
 * - バルーン内にはキーボード操作で到達できないため、何かの操作のUIを配置する場合は **必ず代替アクセス手段を用意してください**。
 * - バルーンの要素の `id` を `renderContent` の `balloonId` 引数で取得できます。`aria-describedby` で使用してください。
 * - バルーン表示中に `Esc` キーを押下すると、バルーンを非表示にできます。
 */
declare const WithBalloon: React.FC<Props>;
export default WithBalloon;
