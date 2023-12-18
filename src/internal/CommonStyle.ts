import styled from 'styled-components';
import { NormalFont, VibesBlackColor } from '../constants';
import {
  MarginSize,
  FunctionalMarginProps,
} from '../utilities/functionalMarginClasses';
import {
  MarginClassProps,
  marginClassPropsToFunctionalMarginProps,
} from '../utilities/marginClasses';

export const marginSizeToValue = (marginSize: MarginSize) =>
  marginSize === 'auto' ? marginSize : `${marginSize}rem`;

export const CommonStyle = styled.span.attrs(
  (props: FunctionalMarginProps) => props
)`
  font: ${NormalFont};
  color: ${VibesBlackColor};
  ${({ ma, mt, mb, ml, mr }) => ({
    margin: ma
      ? marginSizeToValue(ma)
      : mt || mb || ml || mr
      ? `${mt ? marginSizeToValue(mt) : 0} ${mr ? marginSizeToValue(mr) : 0} ${
          mb ? marginSizeToValue(mb) : 0
        } ${ml ? marginSizeToValue(ml) : 0}`
      : 0,
  })}
`;

export const CommonStyleWithDeprecatedMarginProps = styled(CommonStyle).attrs(
  ({
    ma,
    mt,
    mb,
    ml,
    mr,
    ...props
  }: FunctionalMarginProps & MarginClassProps) => {
    const converted = marginClassPropsToFunctionalMarginProps(props);
    return {
      ma,
      mt: mt || converted.mt,
      mb: mb || converted.mb,
      mr: mr || converted.mr,
      ml: ml || converted.ml,
    };
  }
)``;
