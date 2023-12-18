import * as React from 'react';
import styled from 'styled-components';
import {
  Colors2021GY07,
  Colors2021P05,
  Colors2021P07,
  Colors2021RE05,
  Colors2021S09,
  Colors2021YE10,
} from '../../constants';
import { CommonProps } from '../../utilities/commonProps';
import { TypographyStyle, TypographyStyleProps } from './TypographyStyle';

type FontColor =
  | 'black'
  | 'burnt'
  | 'link'
  | 'alert'
  | 'notice'
  | 'white'
  | 'GY7'
  | 'S9'
  | 'P7'
  | 'P5'
  | 'RE5'
  | 'YE10';
type FontSize = 0.75 | 0.875 | 1 | 1.5;
type FontWeight = 'normal' | 'bold';

type TextProps = {
  /**
   * テキストのサイズをrem単位で指定します。
   *
   * 1rem = 16px換算で、0.75rem = 12px, 0.875rem = 14px, 1.5rem = 24px となります
   *
   */
  size?: FontSize;
  /** テキストの太さを指定します */
  weight?: FontWeight;
  /** テキストの色を指定します */
  color?: FontColor;
  /**
   * テキストのoverflowWrapを指定します。
   *
   * この指定により、テキストが親要素（の幅）をあふれないように、分割できない文字列の途中で「改行を入れるかどうか」の設定ができます
   */
  overflowWrap?: 'break-word' | 'normal' | 'anywhere';
} & Pick<TypographyStyleProps, 'ellipsis'>;

type Props = {
  children?: React.ReactNode;
} & TextProps &
  CommonProps;

const Style = styled(TypographyStyle).attrs(
  ({
    color = 'black',
    size = 0.875,
    weight = 'normal',
    ellipsis = false,
    overflowWrap = 'normal',
  }: TextProps & TypographyStyleProps) => ({
    color,
    size,
    weight,
    ellipsis,
    inline: true,
    overflowWrap,
  })
)`
  display: ${({ ellipsis }) => (ellipsis ? 'inline-block' : 'inline')};
  font-size: ${({ size }) => size}rem;
  font-weight: ${({ weight }) => weight};
  overflow-wrap: ${({ overflowWrap }) => overflowWrap};
  color: ${({ color }) =>
    color === 'burnt' || color === 'S9'
      ? Colors2021S09
      : color === 'link' || color === 'P7'
      ? Colors2021P07
      : color === 'P5'
      ? Colors2021P05
      : color === 'alert' || color === 'RE5'
      ? Colors2021RE05
      : color === 'notice' || color === 'YE10'
      ? Colors2021YE10
      : color === 'white'
      ? '#FFFFFF'
      : Colors2021GY07};
`;
/**
 * 様々なフォントサイズ・フォントウェイト・色のインラインテキストを作ることができるコンポーネントです
 */
export const Text: React.FC<Props> = (props) => <Style {...props} />;
