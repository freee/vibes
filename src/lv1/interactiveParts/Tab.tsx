import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import commonProps, { CommonProps } from '../../utilities/commonProps';

type Props = {
  children?: React.ReactNode;
  /**
   * 選択状態にします
   */
  current?: boolean;
  /**
   * サイズを小さくします
   */
  small?: boolean;
  selected?: boolean;
  /**
   * click ハンドラを設定します
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * blur ハンドラを設定します
   */
  onBlur?: (event: React.FormEvent<HTMLButtonElement>) => void;
  /**
   * 通知の有無および読み上げられるメッセージを設定します
   */
  notification?: string;
} & MarginClassProps &
  CommonProps;

/**
 * タブひとつひとつを表現するコンポーネントです。単体で使用せず、`lv2/TabBar` を使用してください
 */
const Tab: React.FC<Props> = (props: Props) => {
  const {
    children,
    current,
    small,
    selected,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    marginSize,
    onClick,
    onBlur,
    notification,
  } = props;

  const buttonBaseClass = 'vb-tab';
  const classModifier = {
    current,
    small,
    selected,
  };

  return (
    <div className="vb-tab__block">
      <button
        role="tab"
        tabIndex={current ? undefined : -1}
        aria-selected={!!current}
        onClick={onClick}
        onBlur={onBlur}
        type="button"
        {...commonProps(props, buttonBaseClass, classModifier, {
          marginBottom,
          marginLeft,
          marginRight,
          marginSize,
          marginTop,
        })}
      >
        {children}
      </button>

      {notification && (
        <span
          className={'vb-tab__notificationDot'}
          aria-label={notification}
          role="img"
        />
      )}
    </div>
  );
};

export default Tab;
