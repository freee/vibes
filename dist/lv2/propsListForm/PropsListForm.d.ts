import * as React from 'react';
import TextField from '../../lv1/forms/TextField';
import DigitsInput from '../formFields/DigitsInput';
import DateInput from '../formFields/DateInput';
import TextArea from '../../lv1/forms/TextArea';
import NumeralCodeInput from '../formFields/NumeralCodeInput';
import { ReadOnlyField } from '../../lv1';
declare type Values = {
    [key: string]: string | number | boolean | object | null;
};
declare type FixedLengthBlock<T> = [PropsListFormFieldDefinition<T>] | [PropsListFormFieldDefinition<T>, PropsListFormFieldDefinition<T>];
declare type VariableLengthBlock<T> = {
    numberOfColumns: number;
    definitions: Array<PropsListFormFieldDefinition<T>>;
};
declare type Errors<T extends Values> = Partial<Record<keyof T, string[]>>;
declare type Props<T extends Values> = {
    /**
     * フィールドの定義です。
     */
    blocks: Array<FixedLengthBlock<T> | VariableLengthBlock<T>>;
    /**
     * labelの幅(rem)を指定します。
     * @default { label: 8 }
     */
    width?: {
        label?: number;
    };
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
export declare type PropsListFormFieldDefinition<T> = {
    label: string;
    key: keyof T;
    help?: ((options: {
        readOnly: boolean;
    }) => React.ReactNode) | React.ReactNode;
    readOnlyValue?: ((options: {
        value: T[keyof T];
    }) => React.ReactNode) | React.ReactNode;
    field?: PropsListFormFieldType<T[keyof T]>;
    annotation?: ((options: {
        readOnly: boolean;
    }) => React.ReactNode) | React.ReactNode;
    required?: boolean;
};
declare type OmitProps<T> = Omit<T, 'value'>;
declare type TextFieldProps = OmitProps<React.ComponentProps<typeof TextField>>;
declare type TextAreaProps = OmitProps<React.ComponentProps<typeof TextArea>>;
declare type NumberFieldProps = OmitProps<React.ComponentProps<typeof DigitsInput>>;
declare type DateFieldProps = OmitProps<React.ComponentProps<typeof DateInput>>;
declare type NumeralCodeInputProps = OmitProps<React.ComponentProps<typeof NumeralCodeInput>>;
declare type ReadOnlyFieldProps = OmitProps<React.ComponentProps<typeof ReadOnlyField>>;
export declare type PropsListFormFieldType<V> = ({
    factor: 'text';
} & TextFieldProps) | ({
    factor: 'text-area';
} & TextAreaProps) | ({
    factor: 'number';
} & NumberFieldProps) | ({
    factor: 'date';
} & DateFieldProps) | ({
    factor: 'numeral-code';
} & NumeralCodeInputProps) | ({
    factor: 'read-only-text';
} & ReadOnlyFieldProps) | ((options: {
    id: string;
    value: V;
}) => React.ReactNode);
/**
 * フォームの定義をすることでフォームの一覧表示をすることができるコンポーネントです。<br>
 * DescriptionListとデザイン面で大きく異なるのは2カラム以上で表示することができ、一画面で多くの項目を表示できる点です。
 */
declare const PropsListForm: <T extends Values>(props: Props<T>) => JSX.Element;
export default PropsListForm;
