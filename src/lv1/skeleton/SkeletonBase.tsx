import * as React from 'react';
import ContentLoader from 'react-content-loader';
import { convertRemToPixel } from '../../utilities/convertRemToPixel';

type Props = {
  /**
   * 幅をremで指定します
   */
  width: number;
  /**
   * 高さをremで指定します
   */
  height: number;
};

export const SkeletonBase: React.FC<Props> = (props) => {
  const widthPixel = convertRemToPixel(props.width);
  const heightPixel = convertRemToPixel(props.height);

  return (
    <ContentLoader
      speed={1}
      width={widthPixel}
      height={heightPixel}
      viewBox={`0 0 ${widthPixel} ${heightPixel}`}
      backgroundColor="rgba(212,212,212,0.3)" // #FFFFFF 上で #F2F2F2
      foregroundColor="rgba(188,188,188,0.3)" // #FFFFFF 上で #ebebeb
    >
      <rect x="0" y="0" rx="4" ry="4" width={widthPixel} height={heightPixel} />
    </ContentLoader>
  );
};
