import * as React from 'react';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import { MarginClassProps } from '../../utilities/marginClasses';
import selfWindowNavigator, {
  SelfWindowNavigationProp,
} from '../../utilities/selfWindowNavigator';
import { useResponsive } from '../../utilities/VibesProvider';

import { BaseComponentProps } from './types';

type Props = {
  children?: React.ReactNode;
  clickable?: boolean;
  disabled?: boolean;
  url?: string;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler;
  /**
   * `true` にすると、`overflow: hidden;`が指定されます。`CardBase`内で`Portal`を利用していない`DropDown`があった場合、`overflow: hidden;`によって見切れてしまう問題が発生しているので、それを避けるために暫定的にオンオフできるようにしています。デフォルトは`true`です。
   */
  overflowHidden?: boolean;
} & BaseComponentProps &
  SelfWindowNavigationProp &
  CommonProps &
  MarginClassProps;

/**
 * グルーピングされた要素を表示するときに使用するパーツです。
 *
 * 同等のグルーピングが複数並ぶ場合、例えばコレクションにおけるひとつのオブジェクトであったり、設定における複数カテゴリを同じ画面で並べる場合に用います。
 *
 * 周囲に24dpのpaddingが入ります。
 *
 * - `DialogBase` や `PopupBase` との混同に注意してください。
 *   - ポップアップコンテンツ（ドロップダウンメニューやコンボボックス等）に使用するべきなのは `PopupBase` です
 *   - モーダルダイアログに使用するべきなのは `DialogBase` です
 *   - `CardBase` は、これらとはシャドウのスタイルが違います。
 * - カード自体をクリック可能にする場合（ボタンやリンクとして使用する場合）は、`clickable` を `true` にしてください
 *   - react-router 等を使用している場合は、遷移時の処理を `onSelfWindowNavigation` に指定してください
 */
const CardBase: React.FC<Props> = (props: Props) => {
  const {
    children,
    small,
    paddingSize,
    inline,
    clickable,
    disabled,
    url,
    target,
    rel,
    onClick,
    overflowHidden = true,
    onSelfWindowNavigation,
    marginBottom,
    marginLeft,
    marginRight,
    marginSize,
    marginTop,
  } = props;

  const className = 'vb-cardBase';

  return (
    <div
      {...commonProps(
        props,
        className,
        {
          paddingSmall: small || paddingSize === 'small',
          paddingZero: paddingSize === 'zero',
          paddingLarge: paddingSize === 'large',
          // レスポンシブなpaddingの変更は、inlineでなく、paddingSizeが無指定の場合のみ行う
          paddingResponsive:
            useResponsive() && !inline && !small && !paddingSize,
          inline,
          disabled,
          clickable,
          overflowHidden,
        },
        { marginBottom, marginLeft, marginTop, marginSize, marginRight }
      )}
    >
      {clickable ? (
        url ? (
          <a
            className={`${className}__link${
              disabled ? ` ${className}__link--disabled` : ''
            }`}
            href={url}
            target={target}
            rel={
              rel
                ? rel
                : target === '_blank'
                ? 'noopener noreferrer'
                : undefined
            }
            aria-disabled={disabled}
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              if (disabled) {
                e.preventDefault();
                return;
              }
              if (onClick) {
                onClick(e);
              }
              const navigator = selfWindowNavigator(onSelfWindowNavigation);
              if (navigator) {
                navigator(e, url);
              }
            }}
          >
            <div className={`${className}__content`}>{children}</div>
          </a>
        ) : (
          <button
            className={`${className}__button${
              disabled ? ` ${className}__button--disabled` : ''
            }`}
            onClick={onClick}
            disabled={disabled}
          >
            <div className={`${className}__content`}>{children}</div>
          </button>
        )
      ) : (
        children
      )}
    </div>
  );
};

export default CardBase;
