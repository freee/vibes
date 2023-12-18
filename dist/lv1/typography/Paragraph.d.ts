import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { CommonProps } from '../../utilities/commonProps';
import { TypographyStyleProps } from './TypographyStyle';
declare type Props = {
    children?: React.ReactNode;
} & TypographyStyleProps & CommonProps & MarginClassProps;
export default function Paragraph(props: Props): React.ReactElement;
export {};
