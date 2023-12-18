import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { CommonProps } from '../../utilities/commonProps';
import { FitContentProps } from './types';
import { CommonStyleWithDeprecatedMarginProps } from '../../internal/CommonStyle';
import styled from 'styled-components';

type Props = {
  children?: React.ReactNode;
} & FitContentProps &
  MarginClassProps &
  CommonProps;

/**
 * マージンをつけるためのボックスです。
 */

const Style = styled(CommonStyleWithDeprecatedMarginProps).attrs(
  ({ fitContent }: FitContentProps) => ({
    as: 'div',
    fitContent,
  })
)`
  ${({ fitContent }: FitContentProps) => ({
    font: 'inherit',
    maxWidth: fitContent ? 'fit-content' : undefined,
  })}
`;

const MarginBase: React.FC<Props> = (props: Props) => <Style {...props} />;

export default MarginBase;
