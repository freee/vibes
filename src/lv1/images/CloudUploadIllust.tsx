import * as React from 'react';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import { MarginClassProps } from '../../utilities/marginClasses';

type Props = MarginClassProps & CommonProps;

const CloudUploadIllust: React.FC<Props> = (props: Props) => {
  const { marginTop, marginLeft, marginRight, marginBottom, marginSize } =
    props;

  const illustBaseClass = 'vb-illust';

  return (
    <figure
      {...commonProps(
        props,
        illustBaseClass,
        { cloudUpload: true },
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
        <title>アップロード</title>
        <g>
          <path
            className={illustBaseClass + '__frame'}
            d="M74.67,65.7V87.2H53.33V65.7h-16L64,38.83,90.67,65.7ZM103.2,49.79A39.87,39.87,0,0,0,28.53,39,32.25,32.25,0,0,0,32,103.33h69.33a26.81,26.81,0,0,0,1.87-53.54Z"
          />
        </g>
      </svg>
    </figure>
  );
};

export default CloudUploadIllust;
