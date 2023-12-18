import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { CommonProps } from '../../utilities/commonProps';
import { TypographyStyle, TypographyStyleProps } from './TypographyStyle';

type Props = {
  children?: React.ReactNode;
} & TypographyStyleProps &
  CommonProps &
  MarginClassProps;

export default function Paragraph(props: Props): React.ReactElement {
  return <TypographyStyle as={props.inline ? 'span' : 'p'} {...props} />;
}
