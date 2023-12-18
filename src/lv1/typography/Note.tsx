import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { CommonProps } from '../../utilities/commonProps';
import { TypographyStyle, TypographyStyleProps } from './TypographyStyle';
import styled from 'styled-components';
import { CaptionFont, VibesBurntColor } from '../../constants';

type Props = {
  children?: React.ReactNode;
} & TypographyStyleProps &
  CommonProps &
  MarginClassProps;

const Style = styled(TypographyStyle)`
  color: ${VibesBurntColor};
  font: ${CaptionFont};
`;

export default function Note(props: Props): React.ReactElement {
  return <Style as={props.inline ? 'span' : 'p'} {...props} />;
}
