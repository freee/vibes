import * as React from 'react';
import AppStoreBadge from '../../lv1/images/AppStoreBadge';
import GooglePlayBadge from '../../lv1/images/GooglePlayBadge';
import commonProps, { CommonProps } from '../../utilities/commonProps';

type Link = {
  title: string;
  url: string;
};
type Props = {
  links?: Link[];
  AppStoreUrl?: string;
  GooglePlayUrl?: string;
  disableAppStoreBadge?: boolean;
  disableGooglePlayBadge?: boolean;
  copyright?: string;
  width?: 'normal' | 'narrow' | 'wide';
  /**
   * フッタの右側に表示する要素を指定します。（この値を指定すると強制的にバッジは非表示になります。）
   */
  sectionNode?: React.ReactNode;
} & CommonProps;

export const defaultLinks = [
  {
    title: '利用規約',
    url: 'https://www.freee.co.jp/terms/',
  },
  {
    title: 'プライバシーポリシー',
    url: 'https://www.freee.co.jp/privacy_policy/',
  },
  {
    title: '会社情報',
    url: 'https://corp.freee.co.jp/',
  },
];

function createLinks(links?: Link[]): React.ReactNode {
  const linkDatas = links ? links : defaultLinks;
  const linkItems = linkDatas.map((linkCont, index) => (
    <li key={index} className="vb-footerLinks__item">
      <a href={linkCont.url} target="_blank" rel="noreferrer noopener">
        {linkCont.title}
      </a>
    </li>
  ));

  return linkItems;
}

const Footer: React.FC<Props> = (props: Props) => {
  const {
    links,
    AppStoreUrl,
    GooglePlayUrl,
    disableAppStoreBadge,
    disableGooglePlayBadge,
    copyright,
    width,
    sectionNode,
  } = props;

  const defaultAppStoreUrl =
    'https://itunes.apple.com/jp/app/freee/id811207074?l=ja&ls=1&mt=8';
  const defaultGooglePlayUrl =
    'https://play.google.com/store/apps/details?id=jp.co.freee.freee';
  const defaultCopyright =
    '© Copyright 2012-' + new Date().getFullYear() + ' freee K.K.';

  return (
    <footer
      {...commonProps(props, 'vb-footer', {
        widthNarrow: width === 'narrow',
        widthWide: width === 'wide',
      })}
      role="contentinfo"
    >
      <div className="vb-footerLinksArea">
        <ul className="vb-footerLinks">{createLinks(links)}</ul>
        <address className="vb-footerCopyright">
          {copyright ? copyright : defaultCopyright}
        </address>
      </div>

      {sectionNode ? (
        <div className="vb-footerSection">{sectionNode}</div>
      ) : (
        <ul className="vb-footerBadges">
          {!disableAppStoreBadge && (
            <li className="vb-footerBadges__item">
              <a
                href={AppStoreUrl ? AppStoreUrl : defaultAppStoreUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                <AppStoreBadge />
              </a>
            </li>
          )}

          {!disableGooglePlayBadge && (
            <li className="vb-footerBadges__item">
              <a
                href={GooglePlayUrl ? GooglePlayUrl : defaultGooglePlayUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                <GooglePlayBadge />
              </a>
            </li>
          )}
        </ul>
      )}
    </footer>
  );
};
export default Footer;
