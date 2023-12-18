import * as React from 'react';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import { MarginClassProps } from '../../utilities/marginClasses';

type Props = MarginClassProps & CommonProps;

const ImageUploadIllust: React.FC<Props> = (props: Props) => {
  const { marginTop, marginLeft, marginRight, marginBottom, marginSize } =
    props;

  const illustBaseClass = 'vb-illust';

  return (
    <figure
      {...commonProps(
        props,
        illustBaseClass,
        { imageUpload: true },
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
        <title>画像をアップロード</title>
        <g>
          <path
            className={illustBaseClass + '__background'}
            d="M0,16v96H128V16Z"
          />
          <path
            className={illustBaseClass + '__frame'}
            d="M0,16v96H128V16Zm125,93H3V19H125ZM33,51a7,7,0,1,1,7,7A7,7,0,0,1,33,51ZM53,82H33L55,57l8.17,9.28L75,48,97,82H53Z"
          />
        </g>
      </svg>
    </figure>
  );
};

export default ImageUploadIllust;
