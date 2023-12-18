import * as React from 'react';
export declare type MediaType = 'pc' | 'tablet' | 'mobile';
/**
 * Vibes共通のコンテクストを提供するProviderコンポーネントです。
 *
 * Provider component which determine media type according to screen width.
 *
 * 320 ~ 767px mobile
 * 768 ~ 1024px tablet
 * 1025px ~ pc
 *
 * (when 1rem = 16px)
 */
export declare const VibesProvider: ({ children, fixedLayout, portalParent, portalParentRef, lang, }: {
    children: React.ReactNode;
    /**
     * レイアウトを固定するかどうかを設定します
     * styled-componentsでは常にpcレイアウトとして扱われます。
     * VibesContextValueのresponsiveの値は!fixedLayoutで計算されます
     * （fixedLayoutがfalseの場合、一部のコンポーネントの表示が画面幅に応じて変化するようになります。）
     */
    fixedLayout?: boolean | undefined;
    /**
     * ポップアップやダイアログ等のポータルを作成する際の親要素を指定します。
     * 指定しない場合、document.bodyが親要素となります。
     */
    portalParent?: HTMLElement | undefined;
    /**
     * portalParentをrefで指定する場合に使用します。
     */
    portalParentRef?: React.RefObject<HTMLElement> | undefined;
    /**
     * 言語を指定します。
     * 対応コンポーネントに埋め込まれたテキストが指定した言語で表示されます。
     * デフォルトは 'ja' です。
     */
    lang?: "ja" | "en" | undefined;
}) => JSX.Element;
export declare const useVibes: () => any;
export declare const useResponsive: (responsiveProp?: boolean | undefined) => boolean;
export declare const usePortalParentContext: () => HTMLElement;
export declare const useLang: () => "ja" | "en";
