import * as React from 'react';
import ContentLoader from 'react-content-loader';
import { CommonProps } from '../../utilities';
import commonProps from '../../utilities/commonProps';
import { convertRemToPixel } from '../../utilities/convertRemToPixel';

type Props = {
  /**
   * サイズを指定します
   */
  size?: 'small' | 'medium' | 'large' | 'xlarge';
} & CommonProps;

const getLength = (
  size: 'small' | 'medium' | 'large' | 'xlarge' = 'medium'
) => {
  switch (size) {
    case 'small':
      return 0.75;
    case 'medium':
      return 1;
    case 'large':
      return 1.5;
    case 'xlarge':
      return 3;
  }
};

/**
 * ユーザーアバターなど、円形で表示されるUIパーツ用のスケルトンイメージのコンポーネントです。
 * This component provides a skeleton image of circular UI parts such as user avaters.
 */
export const SkeletonCircle: React.FC<Props> = (props) => {
  const lengthPixel = convertRemToPixel(getLength(props.size));

  return (
    <div
      {...commonProps(props, 'vb-skeltonCircle', {
        small: props.size === 'small',
        large: props.size === 'large',
        xlarge: props.size === 'xlarge',
      })}
    >
      <ContentLoader
        speed={1}
        width={lengthPixel * 2}
        height={lengthPixel * 2}
        viewBox={`0 0 ${lengthPixel * 2} ${lengthPixel * 2}`}
        backgroundColor="rgba(212,212,212,0.3)" // #FFFFFF 上で #F2F2F2
        foregroundColor="rgba(188,188,188,0.3)" // #FFFFFF 上で #ebebeb
      >
        <circle cx={lengthPixel} cy={lengthPixel} r={lengthPixel} />
      </ContentLoader>
    </div>
  );
};

/**
 * @deprecated SkeletonCircle を使ってください。 Use SkeletonCircle instead.
 */
export const SkeltonCircle = SkeletonCircle;
