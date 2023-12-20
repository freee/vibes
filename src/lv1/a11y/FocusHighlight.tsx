import * as React from 'react';
import commonProps, { CommonProps } from '../../utilities/commonProps';

type Props = {
  children?: React.ReactNode;
  /**
   * `true` の場合、`display: inline-block` となります
   */
  inline?: boolean;
  /**
   * フォーカスハイライト表示の位置。 `inset` にすると内側に表示されます。
   */
  highlightStyle?: 'inset' | 'outset';
  /**
   * フォーカスハイライトの角を丸めるかどうか
   *
   * `round` にした場合、 `$vbFocusHighlightBorderRadius` = 0.25rem = 4px の角丸となります。必ずしもコンテンツの丸みと一致するようになっていないことに注意してください。
   */
  cornerStyle?: 'round' | 'sharp';
  /**
   * `full`の場合、`width: 100%` になります。
   */
  width?: 'fit-content' | 'full';
} & CommonProps;

/**
 * フォーカスインジケーターを非表示にしている要素を `children` に入れ、フォーカスインジケーターを表示させるためのコンポーネントです。
 *
 * ほとんどのvibesのコンポーネントは、フォーカスインジケーターの指定をしていないため、ブラウザが提供するものが使用されます。
 * そのため、ほとんどの場所ではこのコンポンーネントを使用する必要はありません。
 * ブラウザが提供するフォーカスインジケーターの表示では視認性が低いなどの問題がある場合にのみ、使用してください。
 */
export const FocusHighlight: React.FC<Props> = ({
  children,
  inline,
  highlightStyle,
  cornerStyle,
  width = 'fit-content',
  ...props
}: Props) => (
  <span
    {...commonProps(props, 'vb-focusHighlight', {
      inline,
      inset: highlightStyle === 'inset',
      round: cornerStyle === 'round',
      full: width === 'full',
    })}
  >
    {children}
  </span>
);
