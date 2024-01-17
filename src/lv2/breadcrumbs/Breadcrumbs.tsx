import * as React from 'react';
import { MdChevronRight } from 'react-icons/md';
import InlineLink from '../../lv1/buttons/InlineLink';
import { MarginClassProps } from '../../utilities/marginClasses';
import { SelfWindowNavigationProp } from '../../utilities/selfWindowNavigator';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import { SkeletonParagraph } from '../skeleton/SkeletonParagraph';

type Props = {
  links: ({
    title: string;
    url?: string;
    onClick?: () => void;
    /**
     * @deprecated `onSelfWindowNavigation` を使用してください
     */
    onClickNavigator?: () => void;
    /**
     * Shows a skeleton instead of the title while loading / 読込中に項目名を Skeleton 表示にします
     */
    loading?: boolean;
  } & SelfWindowNavigationProp)[];
  label?: string;
} & MarginClassProps &
  CommonProps;

const Breadcrumbs: React.FC<Props> = (props: Props) => {
  const {
    links,
    label,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    marginSize,
  } = props;
  return (
    <div
      {...commonProps(
        props,
        'vb-breadcrumbs',
        {},
        { marginTop, marginLeft, marginRight, marginBottom, marginSize }
      )}
    >
      <nav role="navigation" aria-label={label || '現在位置'}>
        <ul className="vb-breadcrumbs__list">
          {links.map((linkCont, index) => {
            const lastItem = index === links.length - 1;
            const title = linkCont.loading ? (
              <SkeletonParagraph size="small" />
            ) : (
              <>{linkCont.title}</>
            );
            return (
              <li
                className="vb-breadcrumbs__item"
                key={index}
                aria-current={lastItem ? 'page' : undefined}
              >
                {linkCont.url || linkCont.onClick ? (
                  <InlineLink
                    href={linkCont.url}
                    onClick={linkCont.onClick}
                    onSelfWindowNavigation={
                      linkCont.onSelfWindowNavigation ||
                      linkCont.onClickNavigator
                    }
                  >
                    {title}
                  </InlineLink>
                ) : (
                  title
                )}
                {!lastItem && (
                  <MdChevronRight
                    className="vb-breadcrumbs__divider"
                    aria-label=">"
                  />
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
