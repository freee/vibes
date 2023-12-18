import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { CommonProps } from '../../utilities/commonProps';
import { HeadlineStyle, HeadlineStyleProps } from './TypographyStyle';
import styled from 'styled-components';
import {
  HeadlineFont3,
  MobileBoundaryWidth,
  MobileHeadlineFont3,
  VibesBurntColor,
} from '../../constants';
import { useResponsive } from '../../utilities/VibesProvider';

type Props = {
  children?: React.ReactNode;
  id?: string;
  /**
   * 見出しレベルを指定します。これに応じて `h1` から `h6` 要素としてrenderされます。初期値は3です。
   * -1にすると `span` 要素となります。
   */
  headlineLevel?: HeadlineStyleProps['headlineLevel'];
} & Omit<HeadlineStyleProps, 'headlineLevel' | 'ellipsis'> & // headlineLevelは再定義のため、ellipsisは元々非対応だったのでいったんOmitしている
  CommonProps &
  MarginClassProps;

const Style = styled(HeadlineStyle).attrs(
  ({ responsive }: { responsive?: boolean }) => ({ responsive })
)`
  color: ${VibesBurntColor};
  font: ${HeadlineFont3};

  ${({ responsive }) =>
    responsive
      ? `
        @media (max-width: ${MobileBoundaryWidth}) {
          font: ${MobileHeadlineFont3};
        }`
      : ''}
`;

const RenderSubSectionTitle: React.ForwardRefRenderFunction<
  HTMLHeadingElement,
  Props
> = (
  { headlineLevel = 3, ...props }: Props,
  ref?: React.Ref<HTMLHeadingElement>
) => {
  return (
    <Style
      responsive={useResponsive()}
      headlineLevel={headlineLevel}
      tabIndex={-1}
      {...props}
      ref={ref}
    />
  );
};

const SubSectionTitle = React.forwardRef<HTMLHeadingElement, Props>(
  RenderSubSectionTitle
);

export default SubSectionTitle;
