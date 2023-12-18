import * as React from 'react';
import { useResponsive } from '../../utilities/VibesProvider';
import commonProps, { CommonProps } from '../../utilities/commonProps';

type Props = {
  /**
   * タイトル部分に表示されるコンテンツです。初めに読み上げられます。
   */
  title: React.ReactNode;
  /**
   * 補助部分に表示されるコンテンツです。title の次に読み上げられます。
   */
  guide: React.ReactNode;
  /**
   * メイン部分に表示されるコンテンツです。最後に読み上げられます。
   */
  content: React.ReactNode;
  /**
   * ブラウザ幅が狭いときに guided content が title content と content の間に縦積みされるようになります。
   */
  responsive?: boolean;
} & CommonProps;

/**
 * メインコンテンツの横に補助コンテンツを表示するためのレイアウト用のコンポーネントです。
 * Interactive Sample のように、メインコンテンツにフォームなどを置き、補助部分にその説明コンテンツなどを置くときなどに使えます。
 *
 * - 読み上げは title, guide, content の順番で行われます。
 */
const GuidedContent: React.FC<Props> = (props: Props) => {
  const { title, guide, content, responsive } = props;
  const baseClass = 'vb-guidedContent';
  const classModifiers = { responsive: useResponsive(responsive) };

  return (
    <div {...commonProps(props, baseClass, classModifiers)}>
      <div className={`${baseClass}__title`}>{title}</div>
      <div className={`${baseClass}__guide`}>{guide}</div>
      <div className={`${baseClass}__content`}>{content}</div>
    </div>
  );
};

export default GuidedContent;
