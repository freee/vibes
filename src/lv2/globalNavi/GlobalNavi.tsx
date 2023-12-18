import * as React from 'react';
import SearchField from '../../lv1/forms/SearchField';
import { MdHome } from 'react-icons/md';
import GlobalNaviButton from '../../lv1/buttons/GlobalNaviButton';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import { SelfWindowNavigationProp } from '../../utilities/selfWindowNavigator';

export type LinkContent = {
  title: string;
  url: string;
  IconComponent?: React.ElementType;
  current?: boolean;
  'data-guide'?: string;
  'data-test'?: string;
  'data-tracking'?: string;
  'data-masking'?: boolean;
} & SelfWindowNavigationProp;
type Props = {
  /**
   * min-width から Container の左右 margin 分の値を取り除きます。
   */
  disableGutters?: boolean;
  /**
   * nav要素の aria-label を指定します。
   */
  label?: string;
  links?: LinkContent[];
  searchUrl?: string;
  /**
   * 検索フォームを非表示にします。
   */
  hideHelpForm?: boolean;
  /**
   * 検索時に追加でクエリパラメータを付与します。
   */
  searchQueryParams?: { [key: string]: string };
  /**
   * グロナビの右側に表示する要素を指定します。（この値を指定すると強制的に検索フォームは非表示になります。）
   */
  sectionNode?: React.ReactNode;
} & CommonProps;

const baseClass = 'vb-globalNavi';
const listClass = baseClass + 'List';
const defaultLinks: LinkContent[] = [
  {
    title: 'ホーム',
    url: '/',
    IconComponent: MdHome,
    current: true,
  },
];

function createLinks(links?: LinkContent[]): React.ReactNode[] {
  const linkData = links ? links : defaultLinks;
  return linkData.map(
    (linkCont: LinkContent, index: number): React.ReactNode => (
      <li className={listClass + '__item'} key={index}>
        <GlobalNaviButton
          IconComponent={linkCont.IconComponent}
          current={linkCont.current}
          href={linkCont.url}
          onSelfWindowNavigation={linkCont.onSelfWindowNavigation}
          data-guide={linkCont['data-guide']}
          data-test={linkCont['data-test']}
          data-tracking={linkCont['data-tracking']}
          data-masking={linkCont['data-masking']}
        >
          {linkCont.title}
        </GlobalNaviButton>
      </li>
    )
  );
}

const AdditionalQueryParams = ({
  queryParams,
}: {
  queryParams: Props['searchQueryParams'] | undefined;
}) => {
  if (!queryParams) {
    return null;
  }

  return (
    <>
      {Object.keys(queryParams).map((key) =>
        queryParams[key] ? (
          <input key={key} type="hidden" name={key} value={queryParams[key]} />
        ) : null
      )}
    </>
  );
};

export default function GlobalNavi(props: Props) {
  const {
    disableGutters = false,
    label,
    links,
    searchUrl,
    hideHelpForm,
    searchQueryParams,
    sectionNode,
  } = props;
  const actionUrl = searchUrl
    ? searchUrl
    : 'https://support.freee.co.jp/hc/ja/search';
  return (
    <nav
      aria-label={label}
      role="navigation"
      {...commonProps(props, baseClass, { disableGutters })}
    >
      <ul className={baseClass + 'List'}>{createLinks(links)}</ul>

      {sectionNode && <div>{sectionNode}</div>}

      {!sectionNode && !hideHelpForm && (
        <form
          action={actionUrl}
          method="get"
          target="_blank"
          acceptCharset="UTF-8"
          autoComplete="off"
        >
          <input name="utf8" type="hidden" value="✓" />
          <AdditionalQueryParams queryParams={searchQueryParams} />
          <SearchField
            label="ヘルプを検索"
            placeholder="ヘルプを検索"
            name="query"
            small
          />
        </form>
      )}
    </nav>
  );
}
