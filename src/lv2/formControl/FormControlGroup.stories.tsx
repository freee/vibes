import * as React from 'react';

import FormControl from './FormControl';
import FormControlGroup from './FormControlGroup';
import TextField from '../../lv1/forms/TextField';
import RadioButton from '../../lv1/forms/RadioButton';
import CheckBox from '../../lv1/forms/CheckBox';
import SelectBox from '../../lv1/forms/SelectBox';
import TextArea from '../../lv1/forms/TextArea';
import { commonKnobs } from '../../../stories';

export default {
  component: FormControlGroup,
};
export const FormControlGroupComponent = () => (
  <FormControlGroup {...commonKnobs()}>
    <FormControl
      label="ラベル"
      fieldId="textField-1"
      required
      help="ヘルプメッセージ"
      marginRight
      marginBottom
    >
      <TextField
        placeholder="テキストフィールド"
        name="text"
        id="textField-1"
      />
    </FormControl>
    <FormControl label="ラベル" fieldId="selectBox-1" marginRight marginBottom>
      <SelectBox
        id="selectBox-1"
        name="selectbox"
        options={[
          { name: '2016', value: '2016' },
          { name: '2017', value: '2017' },
          { name: '2018', value: '2018' },
          { name: '2019', value: '2019' },
          { name: '2020', value: '2020' },
        ]}
        marginRight
      />
    </FormControl>
  </FormControlGroup>
);

export const Examples = () => (
  <>
    <FormControlGroup>
      <FormControl
        label="ラベル"
        fieldId="textField-1"
        required
        help="ヘルプメッセージ"
        marginRight
        marginBottom
      >
        <TextField
          placeholder="テキストフィールド"
          name="text"
          id="textField-1"
        />
      </FormControl>

      <FormControl
        label="ラベル"
        fieldId="textField-2"
        marginRight
        marginBottom
      >
        <TextField
          placeholder="テキストフィールド"
          id="textField-2"
          name="text"
          small
        />
      </FormControl>
      <FormControl label="ラベル" marginRight marginBottom>
        <RadioButton name="radio" value="ラジオボタン" marginRight>
          ラジオボタン
        </RadioButton>
        <RadioButton name="radio" value="checked" checked>
          checked
        </RadioButton>
      </FormControl>

      <FormControl label="ラベル" marginRight marginBottom>
        <CheckBox name="checkbox" value="チェックボックス">
          チェックボックス
        </CheckBox>
      </FormControl>
      <FormControl label="ラベル" required marginRight marginBottom>
        <SelectBox
          name="year"
          options={[
            { name: '2016', value: '2016' },
            { name: '2017', value: '2017' },
            { name: '2018', value: '2018' },
            { name: '2019', value: '2019' },
            { name: '2020', value: '2020' },
          ]}
          marginRight
        />
        <SelectBox
          name="month"
          options={[
            { name: '1', value: '1' },
            { name: '2', value: '2' },
            { name: '3', value: '3' },
          ]}
          marginRight
        />
        <SelectBox
          name="date"
          options={[
            { name: '1', value: '1' },
            { name: '2', value: '2' },
            { name: '3', value: '3' },
          ]}
        />
      </FormControl>
      <FormControl label="ラベル" marginRight marginBottom fieldId="textArea-1">
        <TextArea
          name="textarea"
          placeholder="テキストエリア"
          id="textArea-1"
        />
      </FormControl>
    </FormControlGroup>
    <FormControlGroup>
      <FormControl label="住所">
        <div>
          <TextField
            label="市区町村・町名・番地"
            placeholder="市区町村・町名・番地"
            width="large"
            marginBottom
          />
        </div>
        <div>
          <TextField
            label="建物名・号室"
            placeholder="建物名・号室"
            width="large"
            marginBottom
          />
        </div>
      </FormControl>
    </FormControlGroup>
    <FormControlGroup>
      <FormControl label="長いフォーム">
        <TextField label="長いフォーム" width="full" />
      </FormControl>
    </FormControlGroup>
  </>
);
