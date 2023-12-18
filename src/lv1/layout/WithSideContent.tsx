import * as React from 'react';
import commonProps, { CommonProps } from '../../utilities/commonProps';

type Props = {
  /**
   * メインコンテンツ（左側）
   */
  children?: React.ReactNode;
  /**
   * サイドコンテンツ（右側）
   */
  sideContent: React.ReactNode;
  /**
   * 左右で高さが違う場合の揃え方
   */
  verticalAlign?: 'top' | 'bottom' | 'middle';
} & CommonProps;

/**
 * 関連機能のボタン等を右側に配置するために使用するコンポーネントです
 *
 * - 左右にボタン等を振り分けて配置するときのほか、右にボタンだけ置きたいというときにも使用できます
 */
const WithSideContent: React.FC<Props> = (props: Props) => {
  const { children, sideContent, verticalAlign } = props;
  const baseClassName = 'vb-withSideContent';
  return (
    <div
      {...commonProps(props, baseClassName, {
        alignTop: verticalAlign === 'top',
        alignBottom: verticalAlign === 'bottom',
        alignMiddle: verticalAlign === 'middle',
      })}
    >
      <div className={`${baseClassName}__content`}>{children}</div>
      <div className={`${baseClassName}__sideContent`}>{sideContent}</div>
    </div>
  );
};
export default WithSideContent;
