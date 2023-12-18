import * as React from 'react';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import selfWindowNavigator, {
  SelfWindowNavigationProp,
} from '../../utilities/selfWindowNavigator';

type Props = {
  children?: React.ReactNode;
  /**
   * アイコンとして表示するコンポーネントを渡します。react-iconsのコンポーネントが想定されています。
   */
  IconComponent?: React.ElementType;
  /**
   * href を指定します
   */
  href?: string;
  /**
   * 選択状態にします
   */
  current?: boolean;
} & SelfWindowNavigationProp &
  CommonProps;

/**
 * グローバルナビ専用のボタンです。直接使用せず、 `lv2/GlobalNavi` を使用してください。
 */
const GlobalNaviButton: React.FC<Props> = (props: Props) => {
  const { children, IconComponent, href, current, onSelfWindowNavigation } =
    props;

  const buttonClass = 'vb-globalNaviButton';
  const classModifier = { current };

  return !href ? (
    <span
      aria-current={current}
      {...commonProps(props, buttonClass, classModifier)}
    >
      {!!IconComponent && (
        <IconComponent className={buttonClass + '__icon'} focusable={false} />
      )}
      <span className={buttonClass + '__text'}>{children}</span>
    </span>
  ) : (
    <a
      href={href}
      aria-current={current}
      onClick={(e: React.MouseEvent<HTMLAnchorElement>): void => {
        const navigator = selfWindowNavigator(onSelfWindowNavigation);
        navigator && navigator(e, href);
      }}
      {...commonProps(props, buttonClass, classModifier)}
    >
      {!!IconComponent && (
        <IconComponent className={buttonClass + '__icon'} focusable={false} />
      )}
      <span className={buttonClass + '__text'}>{children}</span>
    </a>
  );
};

export default GlobalNaviButton;
