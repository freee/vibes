import * as React from 'react';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import Paragraph from '../../lv1/typography/Paragraph';
import SectionTitle from '../../lv1/typography/SectionTitle';
import NoDataIllust from '../../lv1/images/NoDataIllust';
import { SwallowProps } from '../../lv1/images/SwallowContainer';

type Props = {
  /**
   * 「作成・登録・追加」など、データを作る際の言葉を指定できます。指定しない場合は「作成」と表記されます。
   */
  actionWord?: string;
  /**
   * データの名前を指定できます。指定しない場合は「データ」と表記されます。
   */
  objectName?: string;
  /**
   * 任意の画像を使用したい場合に使います。
   */
  image?: {
    /**
     * 任意の画像のURLを指定します。
     */
    src: string;
    /**
     * 任意の画像の横幅を指定します。
     */
    width?: string;
    /**
     * 任意の画像の縦幅を指定します。
     */
    height?: string;
  };
  mainText?: React.ReactNode;
  subText?: React.ReactNode;
  /**
   * テキストの下に新規作成ボタンなどのアクションを用意する際に使います
   */
  children?: React.ReactNode;
} & Pick<SwallowProps, 'size'> &
  CommonProps;

/**
 * このコンポーネントは作成されたデータがまだ存在しない場合に使う、empty UIです。
 * 検索条件に合致するものがない場合は `NoSearchResults` の使用を検討してください。
 *
 * - 「まだデータがないこと」「作成されると一覧に表示されること」の２つをデフォルトの表示として伝えています。
 * - テキストはそれぞれ任意のものにも差し替え可能です。
 * - テキストの下に新規作成ボタンなどのアクションを用意することも可能です。
 * - オンボーディングにつなげるなどの理由でより複雑なレイアウトにしたい場合は独自にempty UIを用意してください。
 *   - このコンポーネントはそういった特別な意図がない場合に手軽に empty UI を構築する用途で使用することを想定しています。
 */
const NoDataCreated: React.FC<Props> = (props: Props) => {
  const {
    actionWord,
    objectName,
    image,
    mainText,
    subText,
    children,
    size = 'medium',
  } = props;
  const baseClassName = 'vb-noDataCreated';
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
        <NoDataIllust mb={1} size={size} />
      )}
      <SectionTitle headlineLevel={-1} mb={0.25}>
        {mainText ||
          `${actionWord || '作成'}された${
            objectName || 'データ'
          }はまだありません`}
      </SectionTitle>
      <Paragraph>
        {subText ||
          `新規に${actionWord || '作成'}をすると一覧として表示されます`}
      </Paragraph>
      {children}
    </div>
  );
};

export default NoDataCreated;
