import * as React from 'react';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import { MarginClassProps } from '../../utilities/marginClasses';

type Props = MarginClassProps & CommonProps;

const CsvUploadIllust: React.FC<Props> = (props: Props) => {
  const { marginTop, marginLeft, marginRight, marginBottom, marginSize } =
    props;

  const illustBaseClass = 'vb-illust';

  return (
    <figure
      {...commonProps(
        props,
        illustBaseClass,
        { csvUpload: true },
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
        <title>CSVをアップロード</title>
        <g>
          <path
            className={illustBaseClass + '__background'}
            d="M28.21,51h73V82h-73Zm-18-51h79l14,13.93,16,16V128h-109Z"
          />
          <path
            className={illustBaseClass + '__frame'}
            d="M28.21,51h73V82h-73Zm-18-51h79l14,13.93,16,16V128h-109Zm3,3V125h103V31.16H87.94V3Z"
          />
          <path
            className={illustBaseClass + '__border'}
            d="M28.21,107.89h73v8h-73Zm0-18h73v8h-73Zm0-55h73v8h-73Zm0-17h53v8h-53Z"
          />
          <path
            className={illustBaseClass + '__background'}
            d="M39.08,66c0-5.91,3.36-9.47,8.67-9.47,4.4,0,7.75,2.79,8,6.89H52.06a4.24,4.24,0,0,0-4.31-3.72C44.85,59.73,43,62.16,43,66s1.84,6.32,4.77,6.32a4.15,4.15,0,0,0,4.32-3.51h3.73c-.43,4.09-3.57,6.68-8.06,6.68C42.41,75.51,39.08,71.94,39.08,66Zm22.1,4c.18,1.51,1.75,2.5,3.78,2.5s3.44-1,3.44-2.33c0-1.19-.87-1.85-3.08-2.34l-2.39-.53c-3.38-.72-5-2.43-5-5.11,0-3.38,2.92-5.61,7-5.61,4.26,0,6.94,2.19,7,5.51h-3.6c-.12-1.55-1.48-2.49-3.4-2.49s-3.16.9-3.16,2.26c0,1.13.89,1.76,3,2.25l2.22.47c3.67.78,5.27,2.36,5.27,5.15,0,3.55-2.89,5.8-7.43,5.8S57.6,73.42,57.48,70Zm18.39,5.21L73.42,56.87h4.29L81.9,71.25H82l4.18-14.38h4.18L84.19,75.19Z"
          />
        </g>
      </svg>
    </figure>
  );
};

export default CsvUploadIllust;
