import * as React from 'react';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import { MarginClassProps } from '../../utilities/marginClasses';

type Props = MarginClassProps & CommonProps;

const CloudSkeletonIllust: React.FC<Props> = (props: Props) => {
  const { marginTop, marginLeft, marginRight, marginBottom, marginSize } =
    props;

  const illustBaseClass = 'vb-illust';

  return (
    <figure
      {...commonProps(
        props,
        illustBaseClass,
        { cloudSkeleton: true },
        {
          marginBottom,
          marginLeft,
          marginRight,
          marginTop,
          marginSize,
        }
      )}
    >
      <svg
        className={illustBaseClass + '__svg'}
        viewBox="0 0 128 128"
        role="presentation"
        aria-hidden="true"
      >
        <title>アップロード中</title>
        <g>
          <path
            className={illustBaseClass + '__frame'}
            d="M103.2,53.47A26.8,26.8,0,0,1,101.33,107H32a32.25,32.25,0,0,1-3.47-64.29A39.87,39.87,0,0,1,103.2,53.47Zm-2.94.57A36.87,36.87,0,0,0,31.2,44.09l-.74,1.44-1.61.17A29.25,29.25,0,0,0,32,104h69.33A23.8,23.8,0,0,0,103,56.46l-2.29-.16Z"
          />
        </g>
      </svg>
    </figure>
  );
};

export default CloudSkeletonIllust;
