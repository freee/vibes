import * as React from 'react';
import PropsListForm from './PropsListForm';
import { commonKnobs } from '../../../stories';
import { number, boolean } from '@storybook/addon-knobs';
import { CheckBox, RadioButton, SelectBox } from '../../lv1';
import { MiniTag } from '../tagBox/MiniTag';

export default {
  component: PropsListForm,
  parameters: {},
};

export const PropsListFormComponent = () => {
  const [values, setValues] = React.useState({
    name: '',
    displayName: '',
    number: 'A0001',
    age: 0,
    entryDate: '2020-01-01',
    custom1: '',
    custom2: 'false',
    custom3: '',
    phoneNumber: '',
    note: '',
  });
  type Values = typeof values;
  const blocks = [
    [
      {
        label: '姓名',
        key: 'name',
        required: true,
        help: ({ readOnly }) => (readOnly ? null : '書類等で使用されます。'),
        annotation: ({ readOnly }) =>
          readOnly ? null : '姓と名の間は空白を入れないでください。',
        field: {
          factor: 'text',
          onChange: (e) => {
            setValues({
              ...values,
              name: e.target.value,
              displayName: e.target.value,
            });
          },
        },
      },
      {
        label: '表示名 （ニックネーム）',
        key: 'displayName',
        help: ({ readOnly }) =>
          readOnly ? null : '書類等には使用されません。',
        required: true,
        field: {
          factor: 'text',
        },
      },
    ],
    [
      {
        label: '従業員番号',
        key: 'number',
        annotation: ({ readOnly }) =>
          readOnly ? null : 'この項目は管理者のみ編集できます。',
        field: { factor: 'read-only-text' },
      },
    ],
    [
      {
        label: '年齢',
        key: 'age',
        field: { factor: 'number', width: 'small' },
      },
    ],
    [
      {
        label: '入社日',
        key: 'entryDate',
        field: { factor: 'date' },
      },
    ],
    [
      {
        label: '電話番号',
        key: 'phoneNumber',
        field: { factor: 'numeral-code' },
      },
    ],
    {
      numberOfColumns: 2,
      definitions: [
        {
          label: '障害 ',
          key: 'custom1',
          field: ({ id }) => (
            <SelectBox
              id={id}
              options={[
                { name: '対象外', value: '0' },
                { name: '障害者', value: '1' },
                { name: '特別障害者', value: '2' },
              ]}
              onChange={(e) => {
                setValues({
                  ...values,
                  custom1: e.target.value,
                });
              }}
            />
          ),
        },
        {
          label: '配偶者',
          key: 'custom2',
          field: () => (
            <>
              <RadioButton
                value="true"
                checked={values.custom2 === 'true'}
                onChange={(e) => {
                  setValues({
                    ...values,
                    custom2: e.target.value,
                  });
                }}
                mr={1}
              >
                有
              </RadioButton>
              <RadioButton
                value="false"
                checked={values.custom2 === 'false'}
                onChange={(e) => {
                  setValues({
                    ...values,
                    custom2: e.target.value,
                  });
                }}
              >
                無
              </RadioButton>
            </>
          ),
        },
        {
          label: '勤労学生',
          key: 'custom3',
          field: () => <CheckBox>該当する</CheckBox>,
        },
      ],
    },
    [
      {
        label: '備考欄',
        key: 'note',
        field: { factor: 'text-area' },
      },
    ],
  ] as React.ComponentProps<typeof PropsListForm>['blocks'];

  return (
    <PropsListForm
      blocks={blocks}
      width={{ label: number('width.label', 10) }}
      readOnly={boolean('readOnly', false)}
      onChange={(values) => {
        setValues(values as Values);
      }}
      values={values}
      errors={{
        name: ['姓名は必須です。'],
        displayName: [],
        number: [],
        age: [],
        entryDate: [],
        custom1: [],
        custom2: [],
        custom3: [],
        phoneNumber: [],
        note: ['備考欄は200文字以内で入力してください。'],
      }}
      {...commonKnobs()}
    />
  );
};

/**
 * フィールドを固定のカラムで表示したい場合は二次元配列で定義します。<br>
 * 以下のように定義することで、縦一列のフォームが表示されます。<br>
 *
 * ```tsx
 * blocks={[
 *   [
 *     {
 *       label: 'item1',
 *       key: 'item1',
 *       field: { factor: 'text' },
 *     },
 *   ],
 *   [
 *     {
 *       label: 'item2',
 *       key: 'item2',
 *       field: { factor: 'text' },
 *     },
 *   ],
 *   [
 *     {
 *       label: 'item3',
 *       key: 'item3',
 *       field: { factor: 'text' },
 *     },
 *   ],
 * ]}
 * ```
 */
export const OneColumnFixedLengthBlock = () => {
  const values = {
    item1: 'value1',
    item2: 'value2',
    item3: 'value3',
  };
  type Values = typeof values;
  const blocks = [
    [
      {
        label: 'item1',
        key: 'item1',
        field: { factor: 'text' },
      },
    ],
    [
      {
        label: 'item2',
        key: 'item2',
        field: { factor: 'text' },
      },
    ],
    [
      {
        label: 'item3',
        key: 'item3',
        field: { factor: 'text' },
      },
    ],
  ] as React.ComponentProps<typeof PropsListForm>['blocks'];

  return (
    <PropsListForm blocks={blocks} readOnly={false} values={values as Values} />
  );
};

/**
 * 縦2列で表示したい場合は以下のように定義します。
 *
 * ```tsx
 * blocks={[
 *   [
 *     {
 *       label: 'item1',
 *       key: 'item1',
 *       field: { factor: 'text' },
 *     },
 *     {
 *       label: 'item2',
 *       key: 'item2',
 *       field: { factor: 'text' },
 *     },
 *   ],
 *   [
 *     {
 *       label: 'item3',
 *       key: 'item3',
 *       field: { factor: 'text' },
 *     },
 *     {
 *       label: 'item4',
 *       key: 'item4',
 *       field: { factor: 'text' },
 *     },
 *   ],
 * ]}
 * ```
 */
export const TwoColumnFixedLengthBlock = () => {
  const values = {
    item1: 'value1',
    item2: 'value2',
    item3: 'value3',
    item4: 'value4',
  };
  type Values = typeof values;
  const blocks = [
    [
      {
        label: 'item1',
        key: 'item1',
        field: { factor: 'text' },
      },
      {
        label: 'item2',
        key: 'item2',
        field: { factor: 'text' },
      },
    ],
    [
      {
        label: 'item3',
        key: 'item3',
        field: { factor: 'text' },
      },
      {
        label: 'item4',
        key: 'item4',
        field: { factor: 'text' },
      },
    ],
  ] as React.ComponentProps<typeof PropsListForm>['blocks'];

  return (
    <PropsListForm blocks={blocks} readOnly={false} values={values as Values} />
  );
};

/**
 * 指定したカラム数で折り返したい場合は、numberOfColumnsとdefinitionsを使用して定義します。<br>
 * numberOfColumnsは折り返すカラム数を表し、definitionsはフィールドの定義を配列で指定します。<br>
 * この方法は、項目を条件に応じて出し分けたい場合に有効です。<br>
 *
 * ```tsx
 * blocks={[{
 *   numberOfColumns: 2,
 *   definitions: [
 *     {
 *       label: 'item1',
 *       key: 'item1',
 *       field: { factor: 'text' },
 *     },
 *     {
 *       label: 'item2',
 *       key: 'item2',
 *       field: { factor: 'text' },
 *     },
 *     {
 *       label: 'item3',
 *       key: 'item3',
 *       field: { factor: 'text' },
 *     },
 *   ],
 * }]}
 * ```
 */
export const VariableLengthBlock = () => {
  const values = {
    item1: 'value1',
    item2: 'value2',
    item3: 'value3',
  };
  const blocks = [
    {
      numberOfColumns: 2,
      definitions: [
        {
          label: 'item1',
          key: 'item1',
          field: { factor: 'text' },
        },
        {
          label: 'item2',
          key: 'item2',
          field: { factor: 'text' },
        },
        {
          label: 'item3',
          key: 'item3',
          field: { factor: 'text' },
        },
      ],
    },
  ] as React.ComponentProps<typeof PropsListForm>['blocks'];
  type Values = typeof values;

  return (
    <PropsListForm blocks={blocks} readOnly={false} values={values as Values} />
  );
};

/**
 * 項目の定義は以下が指定できます。<br>
 *
 * - `label`: 項目名を表すラベルです。
 * - `key`: ユニークな識別子です。
 * - `required`: 必須項目であることを示します。trueの場合、必須ラベルが表示されます。
 * - `help`: ヘルプメッセージです。文字列または関数を指定できます。関数の場合、readOnlyが引数として渡されます。
 * - `annotation`:  項目の説明です。文字列または関数を指定できます。関数の場合、readOnlyが引数として渡されます。
 * - `field`: フィールドの定義です。[フィールドの種別](#field-factors)をfactorで指定します。[カスタムフィールド](#custom-field)を指定する場合は関数を指定します。
 * - `readOnlyValue`:  読み取り専用の値です。readOnlyがtrueの場合に表示されます。指定されていない場合はvalueの値がそのまま表示されます。文字列または関数を指定できます。関数の場合、valueが引数として渡されます。[readOnlyの例](#read-only)を参照してください。
 *
 * ```tsx
 * blocks={[
 *   [
 *     {
 *       label: '姓名',
 *       key: 'name',
 *       required: true,
 *       help: ({ readOnly }) => (readOnly ? null : '書類等で使用されます。'),
 *       annotation: ({ readOnly }) =>
 *         readOnly ? null : '姓と名の間は空白を入れないでください。',
 *       field: { factor: 'text' },
 *     },
 *   ],
 * ]}
 * ```
 */
export const Item = () => {
  const values = {
    name: '',
  };
  type Values = typeof values;
  const blocks = [
    [
      {
        label: '姓名',
        key: 'name',
        required: true,
        help: ({ readOnly }) => (readOnly ? null : '書類等で使用されます。'),
        annotation: ({ readOnly }) =>
          readOnly ? null : '姓と名の間は空白を入れないでください。',
        field: { factor: 'text' },
      },
    ],
  ] as React.ComponentProps<typeof PropsListForm>['blocks'];

  return (
    <PropsListForm
      blocks={blocks}
      width={{ label: number('width.label', 8) }}
      readOnly={false}
      values={values as Values}
      {...commonKnobs()}
    />
  );
};

/**
 * フィールドごとのfactorは以下のいずれかを指定できます。<br>
 * また、onChangeが指定されている場合は共通のonChangeが無視され、onBlurが指定されている場合は共通のonBlurが無視されます。<br>
 *
 * - `text`: TextFieldのpropsを指定できます。<br>
 * - `text-area`: TextAreaのpropsを指定できます。<br>
 * - `number`: DigitsInputのpropsを指定できます。<br>
 * - `date`: DateInputのpropsを指定できます。<br>
 * - `numeral-code`: NumeralCodeInputのpropsを指定できます。<br>
 * - `read-only-text`: ReadOnlyFieldのpropsを指定できます。<br>
 *
 * TextFieldのpropsをoptionとして指定したtextフィールドの例
 *
 * ```tsx
 * field: {
 *   factor: 'text',
 *   placeholder: 'placeholder',
 *   maxLength: 10,
 *   onChange: (e) => {
 *     console.log(e.target.value);
 * },
 * ```
 *
 * カスタムフィールドを指定したい場合は[カスタムフィールド](#custom-field)を参照してください。
 *
 */
export const FieldFactors = () => {
  const [values, setValues] = React.useState({
    text: '',
    text_area: '',
    number: 0,
    date: '',
    numeral_code: '',
    read_only_text: '',
    custom_field: '',
  });
  type Values = typeof values;
  const blocks = [
    [
      {
        label: 'text',
        key: 'text',
        field: {
          factor: 'text',
        },
      },
    ],
    [
      {
        label: 'text-area',
        key: 'text_area',
        field: {
          factor: 'text-area',
        },
      },
    ],
    [
      {
        label: 'number',
        key: 'number',
        field: {
          factor: 'number',
        },
      },
    ],
    [
      {
        label: 'date',
        key: 'date',
        field: {
          factor: 'date',
        },
      },
    ],
    [
      {
        label: 'numeral-code',
        key: 'numeral_code',
        field: {
          factor: 'numeral-code',
        },
      },
    ],
    [
      {
        label: 'read-only-text',
        key: 'read_only_text',
        field: {
          factor: 'read-only-text',
        },
      },
    ],
  ] as React.ComponentProps<typeof PropsListForm>['blocks'];

  return (
    <PropsListForm
      blocks={blocks}
      width={{ label: number('width.label', 10) }}
      readOnly={boolean('readOnly', false)}
      onChange={(values) => {
        setValues(values as Values);
      }}
      values={values}
      {...commonKnobs()}
    />
  );
};

/**
 * カスタムフィールドを指定したい場合はfieldにReactNodeを返す関数を渡してください。<br>
 * idとvalueが引数として渡されます。<br>
 * PropsListFormの共通のonChange、onBlurは無視されます。<br>
 *
 * ```tsx
 * field: ({ id, value }) => <SelectBox id={id} value={String(value)} />
 * ```
 */
export const CustomField = () => {
  const [values, setValues] = React.useState({
    custom_field: '',
  });
  type Values = typeof values;
  const blocks = [
    [
      {
        label: 'custom field',
        key: 'custom_field',
        field: ({ id, value }) => <SelectBox id={id} value={String(value)} />,
      },
    ],
  ] as React.ComponentProps<typeof PropsListForm>['blocks'];

  return (
    <PropsListForm
      blocks={blocks}
      width={{ label: number('width.label', 10) }}
      readOnly={boolean('readOnly', false)}
      onChange={(values) => {
        setValues(values as Values);
      }}
      values={values}
      {...commonKnobs()}
    />
  );
};

/**
 * readOnlyにtrueを指定すると全てのフィールドが読み取り専用になります。<br>
 * fieldごとのreadOnlyValueは省略することができます。<br>
 * readOnlyValueはstring、ReactNodeを指定できます。<br>
 * readOnlyValueが指定されていない場合は、valueがそのまま表示されます。<br>
 * 以下のstoryのコードを参考にしてください。
 */
export const ReadOnly = () => {
  const values = {
    name: 'freee会計',
    is_sales: true,
    tags: [1, 2],
    modified_employee: null,
  };
  type Values = typeof values;
  const blocks = [
    [
      {
        label: '商品名',
        key: 'name',
        field: { factor: 'text' },
        help: ({ readOnly }) => (readOnly ? null : 'フィールド1のヘルプ'),
        annotation: ({ readOnly }) => (readOnly ? null : 'フィールド1の注釈'),
      },
    ],
    [
      {
        label: '販売で利用',
        key: 'is_sales',
        readOnlyValue: '利用する',
        field: { factor: 'text' },
      },
    ],
    [
      {
        label: '会計品目タグ',
        key: 'tags',
        readOnlyValue: () => (
          <>
            <MiniTag mr={0.5}>タグ1</MiniTag>
            <MiniTag mr={0.5}>タグ2</MiniTag>
          </>
        ),
        field: { factor: 'text' },
      },
    ],
    [
      {
        label: '最終更新者',
        key: 'modified_employee',
        field: { factor: 'text' },
      },
    ],
  ] as React.ComponentProps<typeof PropsListForm>['blocks'];

  return (
    <PropsListForm
      blocks={blocks}
      width={{ label: number('width.label', 8) }}
      readOnly={true}
      values={values as Values}
      errors={{ modified_employee: ['従業員の取得に失敗しました'] }}
      {...commonKnobs()}
    />
  );
};
