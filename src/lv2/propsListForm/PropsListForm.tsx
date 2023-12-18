import * as React from 'react';
import TextField from '../../lv1/forms/TextField';
import DigitsInput from '../formFields/DigitsInput';
import DateInput from '../formFields/DateInput';
import TextArea from '../../lv1/forms/TextArea';
import FormControlLabel from '../../lv1/forms/FormControlLabel';
import NumeralCodeInput from '../formFields/NumeralCodeInput';
import MessageIcon from '../../lv2/messageIcon/MessageIcon';
import { MarginBase, ReadOnlyField } from '../../lv1';
import Note from '../../lv1/typography/Note';
import { RequiredIcon } from '../../lv1/icons/RequiredIcon';
import WithDescriptionContent from '../../lv1/layout/WithDescriptionContent';
import useUniqueId from '../../hooks/useUniqueId';

type Values = {
  [key: string]: string | number | boolean | object | null;
};

type FixedLengthBlock<T> =
  | [PropsListFormFieldDefinition<T>]
  | [PropsListFormFieldDefinition<T>, PropsListFormFieldDefinition<T>];

type VariableLengthBlock<T> = {
  numberOfColumns: number;
  definitions: Array<PropsListFormFieldDefinition<T>>;
};

type Errors<T extends Values> = Partial<Record<keyof T, string[]>>;

type Props<T extends Values> = {
  /**
   * フィールドの定義です。
   */
  blocks: Array<FixedLengthBlock<T> | VariableLengthBlock<T>>;
  /**
   * labelの幅(rem)を指定します。
   * @default { label: 8 }
   */
  width?: { label?: number };
  /**
   * readOnlyがtrueの場合、入力フィールドを表示しません。
   * @default false
   */
  readOnly: boolean;
  /**
   * 共通のonChangeイベントハンドラーです。
   * fieldのonChangeイベントハンドラーが指定されていた場合は実行されません。
   * `(values) => { console.log(values) }`
   */
  onChange?: (values: T) => void;
  /**
   * 共通のonBlurイベントハンドラーです。<br>
   * fieldのonBlurイベントハンドラーが指定されていた場合は実行されません。<br>
   * `(values) => { console.log(values) }`
   */
  onBlur?: (values: T) => void;
  /**
   * フィールドの値です。<br>
   * keyにはdefinitionのkeyを指定します。
   */
  values: T;
  /**
   * エラーの内容です。<br>
   * keyにはdefinitionのkeyを指定します。
   */
  errors?: Errors<T>;
};

export type PropsListFormFieldDefinition<T> = {
  label: string;
  key: keyof T;
  help?:
    | ((options: { readOnly: boolean }) => React.ReactNode)
    | React.ReactNode;
  readOnlyValue?:
    | ((options: { value: T[keyof T] }) => React.ReactNode)
    | React.ReactNode;
  field?: PropsListFormFieldType<T[keyof T]>;
  annotation?:
    | ((options: { readOnly: boolean }) => React.ReactNode)
    | React.ReactNode;
  required?: boolean;
};

type OmitProps<T> = Omit<T, 'value'>;
type TextFieldProps = OmitProps<React.ComponentProps<typeof TextField>>;
type TextAreaProps = OmitProps<React.ComponentProps<typeof TextArea>>;
type NumberFieldProps = OmitProps<React.ComponentProps<typeof DigitsInput>>;
type DateFieldProps = OmitProps<React.ComponentProps<typeof DateInput>>;
type NumeralCodeInputProps = OmitProps<
  React.ComponentProps<typeof NumeralCodeInput>
>;
type ReadOnlyFieldProps = OmitProps<React.ComponentProps<typeof ReadOnlyField>>;

export type PropsListFormFieldType<V> =
  | ({ factor: 'text' } & TextFieldProps)
  | ({ factor: 'text-area' } & TextAreaProps)
  | ({ factor: 'number' } & NumberFieldProps)
  | ({ factor: 'date' } & DateFieldProps)
  | ({ factor: 'numeral-code' } & NumeralCodeInputProps)
  | ({ factor: 'read-only-text' } & ReadOnlyFieldProps)
  | ((options: { id: string; value: V }) => React.ReactNode);

/**
 * フォームの定義をすることでフォームの一覧表示をすることができるコンポーネントです。<br>
 * DescriptionListとデザイン面で大きく異なるのは2カラム以上で表示することができ、一画面で多くの項目を表示できる点です。
 */
const PropsListForm = <T extends Values>(props: Props<T>) => {
  const { blocks, ...rest } = props;

  return (
    <dl className="vb-propListForm__list--wrap">
      {blocks.map((block, i) => (
        <DLBlock block={block} {...rest} key={i} />
      ))}
    </dl>
  );
};

const Item = <T extends Values>({
  definition,
  itemWidth,
  itemMarginRight,
  ...rest
}: {
  definition: PropsListFormFieldDefinition<T>;
  itemWidth: string;
  itemMarginRight: number;
  values: T;
  errors?: Errors<T>;
  readOnly: boolean;
} & FieldProps) => {
  const { values, errors, readOnly, width } = rest;
  const value = values[definition.key];
  const id = useUniqueId('vb-propListForm__form');
  const readOnlyValue =
    typeof definition.readOnlyValue === 'function' ? (
      definition.readOnlyValue({ value })
    ) : typeof definition.readOnlyValue === 'string' ? (
      <ReadOnlyField valueText={definition.readOnlyValue} />
    ) : (
      definition.readOnlyValue
    );
  const field =
    readOnly && readOnlyValue ? (
      readOnlyValue
    ) : readOnly ? (
      <ReadOnlyField valueText={value != null ? String(value) : undefined} />
    ) : (
      createField(definition, rest, id)
    );
  const fieldErrors = (errors?.[definition.key] || []) as string[];
  const annotation =
    typeof definition.annotation === 'function'
      ? definition.annotation({ readOnly })
      : definition.annotation;
  const help =
    typeof definition.help === 'function'
      ? definition.help({ readOnly })
      : definition.help;

  return (
    <div
      className="vb-propListForm__item"
      style={{
        width: itemWidth,
        marginRight: `${itemMarginRight}rem`,
      }}
    >
      <dt
        className="vb-propListForm__term"
        style={{
          maxWidth: `${width?.label || 8}rem`,
          minWidth: `${width?.label || 8}rem`,
        }}
      >
        <MarginBase mb={0.25} mt={0.25}>
          <span className="vb-propListForm__termInner">
            <FormControlLabel htmlFor={id}>
              <span className="vb-propListForm__termLabel">
                {definition.label}
                {(definition.required || help) && (
                  <span className="vb-propListForm__termIcons">
                    {!readOnly && definition.required && (
                      <RequiredIcon ml={0.5} />
                    )}
                    {help && (
                      <MessageIcon label="ヘルプ" ml={0.25} small>
                        {help}
                      </MessageIcon>
                    )}
                  </span>
                )}
              </span>
            </FormControlLabel>
          </span>
        </MarginBase>
      </dt>
      <dd className="vb-propListForm__description">
        <MarginBase mb={0.25} mt={0.25}>
          <div className="vb-propListForm__descriptionInner">
            <WithDescriptionContent
              renderContent={() => (
                <div className="vb-propListForm__field">
                  {field}
                  {fieldErrors.length > 0 && (
                    <ErrorMessageIcon errors={fieldErrors || []} />
                  )}
                </div>
              )}
              renderDescriptionContent={() =>
                annotation && <Note>{annotation}</Note>
              }
            />
          </div>
        </MarginBase>
      </dd>
    </div>
  );
};

const DLBlock = <T extends Values>({
  block,
  ...rest
}: {
  block: FixedLengthBlock<T> | VariableLengthBlock<T>;
  values: T;
  errors?: Errors<T>;
  readOnly: boolean;
} & FieldProps) => {
  if (Array.isArray(block)) {
    return (
      <>
        {block.map((definition, i) => (
          <Item
            key={i}
            definition={definition}
            itemWidth={`calc((100% - ${1.5 * (block.length - 1)}rem)/${
              block.length
            })`}
            itemMarginRight={i + 1 === block.length ? 0 : 1.5}
            {...rest}
          />
        ))}
      </>
    );
  } else {
    const { definitions, numberOfColumns } = block;

    return (
      <>
        {definitions.map((definition, i) => (
          <Item
            key={i}
            definition={definition}
            itemWidth={`calc((100% - ${
              1.5 * (numberOfColumns - 1)
            }rem)/${numberOfColumns})`}
            itemMarginRight={(i + 1) % numberOfColumns === 0 ? 0 : 1.5}
            {...rest}
          />
        ))}
      </>
    );
  }
};

type FieldProps = {
  /* 列の幅を rem で指定 */
  width?: { label?: number };
};

const ErrorMessageIcon = ({
  errors,
}: {
  errors: string[];
}): React.ReactElement | null => {
  return (
    <MessageIcon error label="エラー" ml={0.5}>
      {errors.map((error, i) => {
        return (
          <li key={i} style={{ listStyle: 'none' }}>
            {error}
          </li>
        );
      })}
    </MessageIcon>
  );
};

const createField = <T extends Values>(
  { label, key, field = { factor: 'text' } }: PropsListFormFieldDefinition<T>,
  props: Omit<Props<T>, 'blocks'>,
  id: string
) => {
  const { values, errors } = props;
  const options = {
    id: id,
    error: errors && ((errors[key] || []) as string[]).length > 0,
    commonOnChange: (value: string | number | null) => {
      const newValues = { ...values, [key]: value };
      props.onChange && props.onChange(newValues);
    },
    commonOnBlur: (value: string | number | null) => {
      const newValues = { ...values, [key]: value };
      props.onBlur && props.onBlur(newValues);
    },
    label: label,
  };

  // フィールドの型指定がシンプルな型名だけの処理
  if (typeof field === 'object') {
    switch (field.factor) {
      case 'text':
        return createTextField(key, values, { ...field, ...options });
      case 'text-area':
        return createTextArea(key, values, { ...field, ...options });
      case 'number':
        return createNumberField(key, values, { ...field, ...options });
      case 'date':
        return createDateField(key, values, { ...field, ...options });
      case 'read-only-text':
        return <ReadOnlyField valueText={String(values[key])} {...field} />;
      case 'numeral-code':
        return createNumeralCodeField(key, values, { ...field, ...options });
    }
  } else if (typeof field === 'function') {
    return field({ id: id, value: values[key] });
  }
};

const createTextField = <T extends Values>(
  key: keyof T,
  values: T,
  options?: TextFieldProps & {
    factor: 'text';
    commonOnChange: (value: string) => void;
  }
) => (
  <TextField
    {...options}
    value={(values[key] || '') + ''}
    onChange={
      options?.onChange
        ? options?.onChange
        : (e) => options?.commonOnChange(e.target.value)
    }
  />
);

const createTextArea = <T extends Values>(
  key: keyof T,
  values: T,
  options?: TextAreaProps & {
    commonOnChange: (value: string) => void;
  }
) => (
  <TextArea
    {...options}
    width={options?.width || 'small'}
    value={(values[key] || '') + ''}
    autoResize={true}
    onChange={
      options?.onChange
        ? options?.onChange
        : (e) =>
            options?.commonOnChange && options?.commonOnChange(e.target.value)
    }
  />
);

const createNumberField = <T extends Values>(
  key: keyof T,
  values: T,
  options?: NumberFieldProps & {
    commonOnChange?: (value: number | null) => void;
  }
) => (
  <DigitsInput
    {...options}
    value={+values[key]}
    onChange={options?.onChange ? options?.onChange : options?.commonOnChange}
  />
);

const createDateField = <T extends Values>(
  key: keyof T,
  values: T,
  options?: DateFieldProps & {
    commonOnChange: (value: string) => void;
    commonOnBlur: (value: string) => void;
  }
) => (
  <DateInput
    {...options}
    value={(values[key] || '') + ''}
    onChange={
      options?.onChange ? options?.onChange : (e) => options?.commonOnChange(e)
    }
    onBlur={
      options?.onBlur
        ? options?.onBlur
        : (e) => options?.commonOnBlur((e.target as HTMLInputElement).value)
    }
  />
);

const createNumeralCodeField = <T extends Values>(
  key: keyof T,
  values: T,
  options?: NumeralCodeInputProps & {
    commonOnChange?: (value: number | null) => void;
  }
) => (
  <NumeralCodeInput
    {...options}
    value={(values[key] || '') + ''}
    onChange={
      options?.onChange
        ? options?.onChange
        : (v) => {
            if (!options?.commonOnChange) return;
            if (v !== '') return options?.commonOnChange(Number(v));
            options?.commonOnChange(null);
          }
    }
  />
);

export default PropsListForm;
