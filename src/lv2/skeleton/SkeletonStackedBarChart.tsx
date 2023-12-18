import * as React from 'react';
import ContentLoader from 'react-content-loader';
import { CommonProps } from '../../utilities';
import commonProps from '../../utilities/commonProps';

type Props = CommonProps;

export const SkeletonStackedBarChart: React.FC<Props> = (props) => {
  const width = '100%';
  const height = '0.875rem';

  return (
    <div {...commonProps(props, 'vb-skeletonStackedBarChart')}>
      <ContentLoader
        speed={1}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        backgroundColor="rgba(212,212,212,0.3)" // #FFFFFF 上で #F2F2F2
        foregroundColor="rgba(188,188,188,0.3)" // #FFFFFF 上で #ebebeb
      >
        <rect x="0" y="0" rx="4" ry="4" width={width} height={height} />
      </ContentLoader>
    </div>
  );
};
