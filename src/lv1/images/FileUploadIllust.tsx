import * as React from 'react';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import { MarginClassProps } from '../../utilities/marginClasses';

type Props = MarginClassProps & CommonProps;

const FileUploadIllust: React.FC<Props> = (props: Props) => {
  const { marginTop, marginLeft, marginRight, marginBottom, marginSize } =
    props;

  const illustBaseClass = 'vb-illust';

  return (
    <figure
      {...commonProps(
        props,
        illustBaseClass,
        { fileUpload: true },
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
        <title>ファイルをアップロード</title>
        <g>
          <path
            className={illustBaseClass + '__background'}
            d="M9.5,0h79l14,13.93,16,16V128H9.5Z"
          />
          <path
            className={illustBaseClass + '__frame'}
            d="M43.5,83.12h41V89h-41Zm11.71-5.88H72.79V59.59H84.5L64,39,43.5,59.59H55.21ZM9.5,0h79l14,13.93,16,16V128H9.5Zm3,3V125h103V31.16H87.23V3Z"
          />
        </g>
      </svg>
    </figure>
  );
};

export default FileUploadIllust;
