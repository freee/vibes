import { boolean, text } from '@storybook/addon-knobs';
import * as React from 'react';

import { commonKnobs } from '../../../stories';
import MarginBase from '../../lv1/bases/MarginBase';
import CheckBox from '../../lv1/forms/CheckBox';
import TextField from '../../lv1/forms/TextField';
import SectionTitle from '../../lv1/typography/SectionTitle';
import FormControl from './FormControl';

export default {
  component: FormControl,
};

export const FormControlComponent = () => {
  return (
    <FormControl
      id={text('Id', 'formControl1', 'FormControl')}
      label={text('Label', 'ラベル', 'FormControl')}
      fieldId="textField-1"
      required={boolean('Required', true, 'FormControl')}
      help={text('Help', '説明文を書くとヘルプアイコンがでます', 'FormControl')}
      {...commonKnobs()}
    >
      <TextField
        placeholder="テキストフィールド"
        name="text"
        id="textField-1"
      />
    </FormControl>
  );
};

export const LabelWithTypography = () => (
  <FormControl
    label={
      <SectionTitle headlineLevel={-1}>
        以下の中で該当するものを選択してください。
      </SectionTitle>
    }
    required
  >
    <MarginBase mb={0.5} mt={0.5}>
      <CheckBox>チェックボックス1</CheckBox>
    </MarginBase>
    <MarginBase mb={0.5} mt={0.5}>
      <CheckBox>チェックボックス2</CheckBox>
    </MarginBase>
    <MarginBase mb={0.5} mt={0.5}>
      <CheckBox>チェックボックス3</CheckBox>
    </MarginBase>
    <MarginBase mb={0.5} mt={0.5}>
      <CheckBox>チェックボックス4</CheckBox>
    </MarginBase>
    <MarginBase mb={0.5} mt={0.5}>
      <CheckBox>チェックボックス5</CheckBox>
    </MarginBase>
  </FormControl>
);
