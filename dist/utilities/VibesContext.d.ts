import * as React from 'react';
declare type VibesContextValue = {
    /**
     * trueにすると、一部のコンポーネントの表示が画面幅に応じて変化するようになります。
     */
    responsive: boolean;
    /**
     * ポップアップやダイアログ等のポータルを作成する際の親要素を指定します。
     * 指定しない場合、document.bodyが親要素となります。
     */
    portalParent?: HTMLElement;
    /**
     * portalParentをrefで指定する場合に使用します。
     */
    portalParentRef?: React.RefObject<HTMLElement>;
    /**
     * 言語を指定します。
     * 対応コンポーネントに埋め込まれたテキストが指定した言語で表示されます。
     * デフォルトは 'ja' です。
     */
    lang?: 'ja' | 'en';
};
/**
 * VibesContextを単体で利用することもできますが、できる限りVibesProviderを通して利用してください。
 */
export declare const VibesContext: React.Context<VibesContextValue>;
export {};
