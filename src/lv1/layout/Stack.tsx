import * as React from 'react';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import { convertClassModifiers } from '../../utilities/vbClassNames';

type Props = {
  /**
   * 子要素を並べる順番を指定します。
   * `vertical`で垂直方向、`horizontal`で水平方向、`vertical-reverse` `horizontal-reverse` で逆方向になります。
   * デフォルトは `vertical` です。
   */
  direction?:
    | 'vertical'
    | 'horizontal'
    | 'vertical-reverse'
    | 'horizontal-reverse';
  /**
   * オブジェクトの並ぶ間隔を rem 単位で指定します。
   * `0` `0.25` `0.5` `1` `1.5` `2` `3` が指定できます。
   */
  gap?: 0 | 0.25 | 0.5 | 1 | 1.5 | 2 | 3;
  /**
   * `direction` に指定した軸での子要素の並び方を指定します。
   */
  justifyContent?: 'start' | 'end' | 'center' | 'space-between';
  /**
   * `direction` の交差軸上での子要素の並び方を指定します。
   */
  alignItems?: 'stretch' | 'center' | 'start' | 'end';
  /**
   * 折り返しを指定します
   */
  wrap?: 'nowrap' | 'wrap';
  /**
   * `true` にすると、 `display: inline-flex` となり、インライン表示の要素と並べられます。
   */
  inline?: boolean;
  children?: React.ReactNode;
} & CommonProps;

/**
 * 子要素を等間隔に並べるためのコンポーネントです。
 */
export const Stack: React.FC<Props> = ({
  direction = 'vertical',
  gap = 1,
  justifyContent = 'start',
  alignItems = direction === 'vertical' || direction === 'vertical-reverse'
    ? 'start'
    : 'center',
  wrap = 'wrap',
  inline,
  children,
  ...props
}: Props) => {
  const Tag = inline ? 'span' : 'div';
  return (
    <Tag
      {...commonProps(props, 'vb-stack', {
        inline,
        ...convertClassModifiers({
          direction,
          justifyContent,
          alignItems,
          wrap,
        }),
        [`gap${gap * 100}`]: true,
      })}
    >
      {children}
    </Tag>
  );
};
