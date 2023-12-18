import * as React from 'react';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import NoSearchResultsIllust from '../../lv1/images/NoSearchResultsIllust';
import Paragraph from '../../lv1/typography/Paragraph';
import SectionTitle from '../../lv1/typography/SectionTitle';
import { SwallowProps } from '../../lv1/images/SwallowContainer';

type Props = {
  /**
   * 検索対象の名前を指定します。
   */
  objectName?: string;
  /**
   * 任意の画像を使用したい場合に使います。
   */
  image?: {
    /**
     * 画像のURLを指定します。
     */
    src: string;
    /**
     * 画像の横幅を指定します。
     */
    width?: string;
    /**
     * 画像の縦幅を指定します。
     */
    height?: string;
  };
  mainText?: React.ReactNode;
  subText?: React.ReactNode;
} & Pick<SwallowProps, 'size'> &
  CommonProps;

/**
 * このコンポーネントは検索結果に合致するデータがない場合に使う、empty UIです。
 * データ自体が１件もない場合は `NoDataCreated` を使用してください。
 *
 * - 特に特別な考慮が必要のない時に使う想定です。
 * - 画像やメッセージは任意のものにも入れ替えられるようになっていますが、それ以上の事を実装したい場合は独自にempty UI を用意してください。
 * - デフォルトの見せ方で良い場合は、`objectName` を指定するだけで使えます。
 */
const NoSearchResults: React.FC<Props> = (props: Props) => {
  const { objectName, image, mainText, subText, size = 'medium' } = props;
  const baseClassName = 'vb-noSearchResults';
  return (
    <div {...commonProps(props, baseClassName, {}, {})}>
      {image ? (
        <img
          className={`${baseClassName}__image`}
          src={image.src}
          alt=""
          style={{
            width: image.width,
            height: image.height,
          }}
        />
      ) : (
        <NoSearchResultsIllust mt={2} mb={1} size={size} />
      )}
      <SectionTitle headlineLevel={-1} mb={0.25}>
        {mainText ||
          `検索に該当する${objectName || 'データ'}はありませんでした`}
      </SectionTitle>
      <Paragraph>
        {subText || '検索条件を変えて再度絞り込みをお試しください'}
      </Paragraph>
    </div>
  );
};

export default NoSearchResults;
