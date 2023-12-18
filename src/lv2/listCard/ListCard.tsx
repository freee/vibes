import * as React from 'react';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import selfWindowNavigator, {
  SelfWindowNavigationProp,
} from '../../utilities/selfWindowNavigator';
import Note from '../../lv1/typography/Note';
import { MdChevronRight, MdOpenInNew } from 'react-icons/md';

type Props = {
  title: React.ReactNode;
  url?: string;
  onClick?: React.MouseEventHandler;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  thumbnail?: React.ReactNode;
  thumbnailSize?: 'default' | 'large';
  target?: string;
  rel?: string;
  disabled?: boolean;
  current?: boolean;
  IconComponent?: React.ElementType;
} & SelfWindowNavigationProp &
  CommonProps;

/**
 * コレクションのひとつひとつのオブジェクトの表現に使用する、クリッカブルな要素です。
 *
 * - このコンポーネントは全体がクリッカブルです。全体をクリッカブルにしない場合は `CardBase` を使用してください
 * - モバイル向け画面では積極的に使用してください
 * - オブジェクトの属性を並べたリストを作るには `ListTable` (`BasicTable`) を使用してください。
 * - `title` は必須です
 * - `actions` として、オブジェクトの操作へのショートカットのボタン等を並べることができます
 * - `thumbnail` として、画像などを表示することができます
 * - `thumbnailSize` として画像サイズの指定を行うことができます default = 80px / large = 192px
 * - `title` `children` にはクリック可能な要素を渡さないでください
 * - `disabled` をtrueにしたときは、actionsのボタン等もdisabledにしてください
 * - `IconComponent` アイコンとして表示するコンポーネントを渡します。react-iconsのコンポーネントが想定されています。
 */
const ListCard: React.FC<Props> = (props: Props) => {
  const {
    children,
    url,
    onClick,
    onSelfWindowNavigation,
    title,
    actions,
    target,
    rel,
    disabled,
    current,
    thumbnail,
    IconComponent = url && target === '_blank' ? MdOpenInNew : MdChevronRight,
    thumbnailSize = 'default',
  } = props;
  const className = 'vb-listCard';
  const content = (
    <div className={`${className}__content`}>
      {thumbnail && (
        <div
          className={`${className}__thumbnail${
            !!thumbnailSize && thumbnailSize === 'large'
              ? ` ${className}__thumbnail--large`
              : ''
          }`}
        >
          {thumbnail}
        </div>
      )}
      <div className={`${className}__main`}>
        <div className={`${className}__title`}>{title}</div>
        {children && (
          <Note marginTop marginSize="small">
            {children}
          </Note>
        )}
      </div>
    </div>
  );
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const _listCardProps = commonProps(props, className);
  const listCardProps = {
    ..._listCardProps,
    ...{
      className: `${_listCardProps.className}${
        disabled ? ` ${className}--disabled` : ''
      }${current ? ` ${className}--current` : ''}`,
    },
  };
  return (
    <div {...listCardProps}>
      {url ? (
        <a
          className={`${className}__link${
            disabled ? ` ${className}__link--disabled` : ''
          }${current ? ` ${className}__link--current` : ''}`}
          href={url}
          target={target}
          rel={
            rel ? rel : target === '_blank' ? 'noopener noreferrer' : undefined
          }
          aria-disabled={disabled && true}
          onClick={(e: React.MouseEvent): void => {
            disabled ? e.preventDefault() : onClick && onClick(e);
            if (url) {
              const navigator = selfWindowNavigator(onSelfWindowNavigation);
              navigator && navigator(e, url);
            }
          }}
        >
          {content}
          <IconComponent className={`${className}__icon`} />
        </a>
      ) : (
        <button
          className={`${className}__button${
            disabled ? ` ${className}__button--disabled` : ''
          }${current ? ` ${className}__button--current` : ''}`}
          disabled={disabled && true}
          onClick={onClick}
        >
          {content}
          <IconComponent className={`${className}__icon`} />
        </button>
      )}
      {actions && <div className={`${className}__actions`}>{actions}</div>}
    </div>
  );
};
export default ListCard;
