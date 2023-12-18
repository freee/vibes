import * as React from 'react';
import commonProps, { CommonProps } from '../../../utilities/commonProps';
import vbClassNames from '../../../utilities/vbClassNames';
import ButtonGroup from '../../buttonGroup/ButtonGroup';

type Props = {
  /**
   * 左寄せに置かれます。
   */
  children: React.ReactNodeArray | React.ReactNode;
  /**
   * 右寄せにボタン等を任意で置けます。
   */
  sideContent?: React.ReactNodeArray | React.ReactNode;
  responsive?: boolean;
  /**
   * 上位2ボタンのレスポンシブ時の並び方を指定できます。
   */
  mobileButtonLayout?: 'row' | 'column';
} & CommonProps;

/**
 * Dialogのfooterに「任意のコンポーネントを置く & レスポンシブ対応する」ためのパーツです。
 *
 * 「左寄せでボタン等を並べられる」かつ「任意で右寄せに何か置ける」を想定しています。
 *
 *  レスポンシブ時は、全てのパーツが中央寄せで、縦済みになります。
 */

const DialogFooter: React.FC<Props> = (props: Props) => {
  const { children, sideContent, responsive, mobileButtonLayout } = props;
  const baseClassName = 'vb-DialogFooter';

  return (
    <div {...commonProps(props, baseClassName, { responsive })}>
      <ButtonGroup
        align="left"
        responsive={responsive}
        mobileButtonLayout={mobileButtonLayout}
      >
        {children}
      </ButtonGroup>
      {sideContent && (
        <div
          className={vbClassNames(`${baseClassName}__sideContent`, {
            modifier: { responsive },
          })}
        >
          <ButtonGroup responsive={responsive}>{sideContent}</ButtonGroup>
        </div>
      )}
    </div>
  );
};

export default DialogFooter;
