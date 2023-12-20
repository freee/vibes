import * as React from 'react';
import { useMedia } from './useMedia';
import { ThemeContext, ThemeProvider } from 'styled-components';
import { VibesContext } from './VibesContext';
import {
  TabletBoundaryWidth,
  MobileBoundaryWidth,
  NarrowMobileBoundaryWidth,
} from '../constants';

export type MediaType = 'pc' | 'tablet' | 'mobile';

const baseRemSize = 16;
const deviceRemSize =
  typeof document === 'undefined'
    ? baseRemSize
    : parseFloat(getComputedStyle(document.documentElement).fontSize);

/**
 * vibes共通のコンテクストを提供するProviderコンポーネントです。
 *
 * Provider component which determine media type according to screen width.
 *
 * 320 ~ 767px mobile
 * 768 ~ 1024px tablet
 * 1025px ~ pc
 *
 * (when 1rem = 16px)
 */
export const VibesProvider = ({
  children,
  fixedLayout = false,
  portalParent = document.body,
  portalParentRef = undefined,
  lang = 'ja',
}: {
  children: React.ReactNode;
  /**
   * レイアウトを固定するかどうかを設定します
   * styled-componentsでは常にpcレイアウトとして扱われます。
   * VibesContextValueのresponsiveの値は!fixedLayoutで計算されます
   * （fixedLayoutがfalseの場合、一部のコンポーネントの表示が画面幅に応じて変化するようになります。）
   */
  fixedLayout?: boolean;
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
}) => {
  const isTablet = useMedia(
    `not (min-width: ${TabletBoundaryWidth})`,
    window.innerWidth <
      deviceRemSize * Number(TabletBoundaryWidth.replace('rem', ''))
  );
  const isMobile = useMedia(
    `not (min-width: ${MobileBoundaryWidth})`,
    window.innerWidth <
      deviceRemSize * Number(MobileBoundaryWidth.replace('rem', ''))
  );
  // Narrower than iPhone8 (375px)
  const isNarrowMobile = useMedia(
    `not (min-width: ${NarrowMobileBoundaryWidth})`,
    window.innerWidth <
      deviceRemSize * Number(NarrowMobileBoundaryWidth.replace('rem', ''))
  );

  const media = {
    mediaType: (fixedLayout
      ? 'pc'
      : isMobile
      ? 'mobile'
      : isTablet
      ? 'tablet'
      : 'pc') as MediaType,
    isNarrowMobile,
  };

  return (
    <ThemeProvider theme={media}>
      <VibesContext.Provider
        value={{
          responsive: !fixedLayout,
          portalParent,
          portalParentRef,
          lang,
        }}
      >
        {children}
      </VibesContext.Provider>
    </ThemeProvider>
  );
};

export const useVibes = () => React.useContext(ThemeContext);

export const useResponsive = (responsiveProp?: boolean) => {
  const contextValue = React.useContext(VibesContext);
  return responsiveProp === undefined
    ? contextValue.responsive
    : responsiveProp;
};

export const usePortalParentContext = () => {
  const { portalParent, portalParentRef } = React.useContext(VibesContext);
  return portalParent || portalParentRef?.current || document.body;
};

export const useLang = () => {
  const { lang } = React.useContext(VibesContext);
  return lang || 'ja';
};
