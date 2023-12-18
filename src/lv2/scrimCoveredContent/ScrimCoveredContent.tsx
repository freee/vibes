import * as React from 'react';
import { CommonProps, pickCommonProps } from '../../utilities/commonProps';
import Paragraph from '../../lv1/typography/Paragraph';
import styled from 'styled-components';
import { OverlayZIndex } from '../../constants';
import { CommonStyle } from '../../internal/CommonStyle';

type Props = {
  children: React.ReactNode;
  inline?: boolean;
  message?: React.ReactNode;
} & CommonProps;

const Style = styled(CommonStyle).attrs(({ inline }: { inline?: boolean }) => ({
  inline,
  as: 'div',
}))`
  position: relative;
  ${({ inline }) => ({ display: inline ? 'inline-block' : 'block' })}

  .vb-scrimCoveredContent__cover {
    z-index: ${OverlayZIndex};
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(0.1rem);
  }
`;

/**
 * 非活性なコンテンツにメッセージ付きのスクリムを被せるコンポーネント
 */
const ScrimCoveredContent: React.FC<Props> = ({
  children,
  inline,
  message,
  ...props
}: Props) => (
  <Style inline={inline} {...pickCommonProps(props)}>
    <div className="vb-scrimCoveredContent__cover">
      {message && <Paragraph>{message}</Paragraph>}
    </div>
    {children}
  </Style>
);

export default ScrimCoveredContent;
