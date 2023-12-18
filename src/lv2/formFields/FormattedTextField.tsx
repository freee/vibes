import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import TextField from '../../lv1/forms/TextField';

type Formatter = {
  /**
   * Preprocess returns an essential unformatted values by removing delimiters and pre/suffixes. /
   * 下処理用の関数です。桁区切りや接頭・接尾辞を除去した純粋な値を返します。
   */
  preprocess?: (inputValue: string) => string;
  /**
   * Format returns a formatted values by adding delimiters and pre/suffixes. /
   * 整形用の関数です。桁区切りや接頭・接尾辞を加えた整形済みの値を返します。
   */
  format: (preprocessedValue: string) => string;
};

type Preset =
  | 'postalCode'
  | 'corporateNumber'
  | 'invoiceRegistrationCompanyNumber';

type Props = (
  | {
      /**
       * Specify a preset formatter. /
       * プリセットのフォーマッターを指定します。
       */
      preset: Preset;
      formatter?: undefined;
    }
  | {
      /**
       * Specify a custom formatter. /
       * 任意のフォーマッターを指定します。
       */
      formatter: Formatter;
      preset?: undefined;
    }
) & {
  /**
   * A callback which receives a preprocessed value without formatting, including no delimiters nor pre/suffixes. /
   * 書式反映前の下処理段階の値が渡されるコールバックです。桁区切り文字や接頭辞・接尾辞などを含まない値を取得できます。
   */
  onChangePreprocessedValue?: (preprocessedValue: string) => any;
  /**
   * A callback which receives a formatted value. /
   * 整形済みの値が渡されるコールバックです。
   */
  onChangeFormattedValue?: (formattedValue: string) => any;
} & Omit<
    React.ComponentPropsWithRef<typeof TextField>,
    'hideSpinner' | 'maxLength' | 'max' | 'min' | 'step' | 'type'
  >;

const presetFormatters: Record<Preset, Formatter> = {
  postalCode: {
    preprocess: (v) => v.normalize('NFKC').replace(/[-\s]/g, ''),
    format: (v) => v.replace(/^(.{3})(.+)/, '$1-$2'),
  },
  corporateNumber: {
    preprocess: (v) => v.normalize('NFKC').replace(/[-\s]/g, ''),
    format: (v) =>
      v.replace(/^(.{1})(.{4})?(.{4})?(.+)/, (_, p1, p2, p3, p4) =>
        [p1, p2, p3, p4].filter((p) => p != null).join(' ')
      ),
  },
  invoiceRegistrationCompanyNumber: {
    preprocess: (v) => v.normalize('NFKC').replace(/^[tT]|[-\s]/g, ''),
    format: (v) => `T${presetFormatters.corporateNumber.format(v)}`,
  },
};

/**
 * 入力された文字を自動的に整形する入力欄です。
 *
 * ## 書式の指定
 *
 *  `preset` で書式を指定できます。
 *
 * | preset | 書式 | 用途 |
 * |:--|:--|:--|
 * | `postalCode` | `###-####` | 郵便番号 |
 * | `corporateNumber` | `# #### #### ####` | 法人番号 |
 * | `invoiceRegistrationCompanyNumber` | `T# #### #### ####` | 適格請求書発行事業者登録番号 |
 *
 *  また `formatter` を指定することで任意の書式に整形することも可能です。
 *
 * ## 値の参照
 *
 * 値を参照する際は `onChangePreprocessedValue` または `onChangeFormattedValue` をご利用ください。
 *
 * `onChange` は処理前の値が参照されるため、表示内容と異なる値が参照されることがあります。
 *
 * なおいずれの値も、桁あふれや不正な文字の除去等は行われません。
 *
 */
export default function FormattedTextField({ ...props }: Props): ReactElement {
  const { onChange, onChangePreprocessedValue, onChangeFormattedValue } = props;
  const [value, setValue] = useState<string>(props.value ?? '');
  const [preprocessedValue, setPreprocessedValue] = useState<string>('');
  const [formattedValue, setFormattedValue] = useState<string>('');

  const onChangeInternal = useCallback(
    (e) => {
      setValue(e.target.value ?? '');
      onChange?.(e);
    },
    [onChange]
  );

  const { format, preprocess } =
    props.formatter ?? presetFormatters[props.preset];

  useEffect(() => {
    setPreprocessedValue(preprocess ? preprocess(value) : value);
  }, [value, preprocess]);

  useEffect(() => {
    setFormattedValue(format(preprocessedValue));
  }, [preprocessedValue, format]);

  useEffect(() => {
    onChangePreprocessedValue?.(preprocessedValue);
  }, [onChangePreprocessedValue, preprocessedValue]);

  useEffect(() => {
    onChangeFormattedValue?.(formattedValue);
  }, [onChangeFormattedValue, formattedValue]);

  return (
    <TextField
      {...{
        ...props,
        onChange: onChangeInternal,
        value: formattedValue,
      }}
    />
  );
}
