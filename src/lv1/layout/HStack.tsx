import * as React from 'react';
import { Stack } from './Stack';

type StackProps = React.ComponentProps<typeof Stack>;
type Props = {
  /**
   * 横方向の揃え方を指定します。
   */
  justifyContent?: StackProps['justifyContent'];
  /**
   * 縦方向の揃え方を指定します
   */
  alignItems?: StackProps['alignItems'];
} & Omit<StackProps, 'direction' | 'justifyContent' | 'alignItems'>;

/**
 * 横方向（水平方向）に等間隔でコンポーネントを並べます。
 *
 * - `direction` が固定である以外は `Stack` と同一です
 * - 縦方向（垂直方向）に等間隔でコンポーネントを並べるには、 `VStack` を使用してください
 */
export const HStack: React.FC<Props> = (props) => (
  <Stack direction="horizontal" {...props} />
);
