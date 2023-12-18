import * as React from 'react';

import { MdInfo } from 'react-icons/md';
import { boolean, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import MaterialIcon from './MaterialIcon';
import MarginBase from '../bases/MarginBase';
import { Text } from '../typography/Text';

export default {
  component: MaterialIcon,
};

export const MaterialIconComponent = () => (
  <MaterialIcon
    label={text(
      'Label',
      'このテキストはスクリンリーダー用(aria-label)です',
      'MaterialIcon'
    )}
    small={boolean('Small', false, 'MaterialIcon')}
    error={boolean('Error', false, 'MaterialIcon')}
    notice={boolean('Notice', false, 'MaterialIcon')}
    success={boolean('Success', false, 'MaterialIcon')}
    IconComponent={MdInfo}
    {...commonKnobs()}
  />
);

export const Default = () => (
  <>
    <MaterialIcon marginRight IconComponent={MdInfo} />
    <MaterialIcon success marginRight IconComponent={MdInfo} />
    <MaterialIcon notice marginRight IconComponent={MdInfo} />
    <MaterialIcon error marginRight IconComponent={MdInfo} />
  </>
);

export const Colors = () => (
  <>
    <MarginBase mb={1}>
      <MaterialIcon color="P1" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="P2" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="P3" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="P4" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="P5" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="P6" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="P7" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="P8" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="P9" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="P10" mr={1} IconComponent={MdInfo} />
    </MarginBase>
    <MarginBase mb={1}>
      <MaterialIcon color="S1" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="S2" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="S3" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="S4" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="S5" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="S6" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="S7" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="S8" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="S9" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="S10" mr={1} IconComponent={MdInfo} />
    </MarginBase>
    <MarginBase mb={1}>
      <MaterialIcon color="white" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="GY1" mr={1} IconComponent={MdInfo} />
    </MarginBase>
    <MarginBase mb={1}>
      <MaterialIcon color="RE2" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="OR2" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="YE2" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="YG2" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="GR2" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="BG2" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="PU2" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="GY2" mr={1} IconComponent={MdInfo} />
    </MarginBase>
    <MarginBase mb={1}>
      <MaterialIcon color="RE4" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="OR4" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="YE4" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="YG4" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="GR4" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="BG4" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="PU4" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="GY4" mr={1} IconComponent={MdInfo} />
    </MarginBase>
    <MarginBase mb={1}>
      <MaterialIcon color="RE5" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="OR5" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="YE5" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="YG5" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="GR5" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="BG5" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="PU5" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="GY5" mr={1} IconComponent={MdInfo} />
    </MarginBase>
    <MarginBase mb={0.5}>
      <MaterialIcon color="RE7" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="OR7" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="YE7" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="YG7" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="GR7" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="BG7" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="PU7" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="GY7" mr={1} IconComponent={MdInfo} />
    </MarginBase>
    <MarginBase mb={0.5}>
      <MaterialIcon color="RE10" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="OR10" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="YE10" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="YG10" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="GR10" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="BG10" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="PU10" mr={1} IconComponent={MdInfo} />
      <MaterialIcon color="GY10" mr={1} IconComponent={MdInfo} />
    </MarginBase>
    <MarginBase>
      <Text color="P5">
        <MaterialIcon color="inherit" IconComponent={MdInfo} />
      </Text>
    </MarginBase>
  </>
);

export const Small = () => (
  <>
    <MaterialIcon small marginRight IconComponent={MdInfo} />
    <MaterialIcon small success marginRight IconComponent={MdInfo} />
    <MaterialIcon small notice marginRight IconComponent={MdInfo} />
    <MaterialIcon small error marginRight IconComponent={MdInfo} />
  </>
);

export const PointerEvent = () => (
  <>
    <MaterialIcon IconComponent={MdInfo} />
    <MaterialIcon pointerEvents="none" IconComponent={MdInfo} />
  </>
);
