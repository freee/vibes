import * as React from 'react';
import vbClassNames from '../../utilities/vbClassNames';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import { MarginClassProps } from '../../utilities/marginClasses';
import { FormHandlers, AutocompleteAttribute } from './types';

export type SelectBoxOption = {
  name: string;
  value?: string;
  /**
   * disabled 状態にします
   */
  disabled?: boolean;
};
export type SelectBoxOptionGroup = {
  name: string;
  options: SelectBoxOption[];
  /**
   * disabled 状態にします
   */
  disabled?: boolean;
};

type Props = {
  /**
   * select要素のaria-label を指定します。 `<label>` 要素 (`FormControlLabel` コンポーネントなど)が使用できない場合にのみ使用してください。
   */
  label?: string;
  /**
   * select要素のaria-labelledby を指定します。 `<label>` 要素 (`FormControlLabel` コンポーネントなど)が使用できない場合にのみ使用してください。
   */
  labelledby?: string;
  /**
   * select id を指定します
   */
  id?: string;
  /**
   * 選択要素を指定します。optgroup を使用したい場合は SelectBoxOptionGroup を渡してください。
   *
   * `SelectBoxOption = { name: string; value?: string; disabled?: boolean;}`
   *
   * `SelectBoxOptionGroup = {name: string; options: SelectBoxOption[]; disabled?: boolean;}`
   */
  options?: Array<SelectBoxOption | SelectBoxOptionGroup>;
  /**
   * select value を指定します
   */
  value?: string;
  /**
   * 非制御の場合の初期値を指定します
   */
  defaultValue?: string;
  /**
   * select name を指定します
   */
  name?: string;
  /**
   * select required を指定します
   */
  required?: boolean;
  /**
   * select autofocus を指定します
   */
  autofocus?: boolean;
  /**
   * disabled 状態にします
   */
  disabled?: boolean;
  /**
   * エラー状態にします
   */
  error?: boolean;
  /**
   * サイズを小さくします
   */
  small?: boolean;
  /**
   * サイズを大きくします
   */
  large?: boolean;
  /**
   * 中央寄せにします
   */
  alignCenter?: boolean;
  /**
   * 右寄せにします
   */
  alignRight?: boolean;
  /**
   * select autocomplete を指定します
   */
  autoComplete?: AutocompleteAttribute;
  /**
   * 幅を指定します。
   *
   * - xSmall: 4rem(64px)
   *   - 2文字程度しか入らないことがわかっている入力欄に使います
   * - small: 7rem(112px)
   *   - 都道府県や郵便番号など、数文字しか入らないことがわかっている入力欄に使います
   * - medium(default): 11rem(176px)
   *   - 10文字程度であることがわかっている入力欄に使います
   *   - たとえば会計帳簿の金額入力欄は12,3桁が前提になっているので medium が使われます
   * - large: 24rem(384px)
   *   - 入力量がユーザー次第の場合に使います
   *   - 住所や備考など
   * - full: 親要素に対して100%
   *   - table 要素の中に配置するなど、柔軟に幅を変えたい場合に使います
   */
  width?: 'xSmall' | 'small' | 'medium' | 'large' | 'full';
} & FormHandlers<HTMLSelectElement> &
  MarginClassProps &
  CommonProps;

const SelectBoxInner = (
  props: Props,
  ref?: React.Ref<HTMLSelectElement> | React.MutableRefObject<HTMLSelectElement>
): React.ReactElement => {
  const {
    label,
    labelledby,
    id,
    options,
    name,
    value,
    defaultValue,
    required,
    autofocus,
    disabled,
    error,
    small,
    large,
    alignCenter,
    alignRight,
    width,
    autoComplete,
    onChange,
    onInput,
    onFocus,
    onBlur,
    onKeyDown,
    onKeyUp,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    marginSize,
  } = props;

  const wrapClassName = vbClassNames('vb-select', {
    modifier: {
      widthXSmall: width === 'xSmall',
      widthSmall: width === 'small',
      widthMedium: width === 'medium' || !width,
      widthLarge: width === 'large',
      widthFull: width === 'full',
    },
  });

  const classModifier = {
    error,
    small,
    alignCenter,
    alignRight,
  };

  const className = vbClassNames('vb-select__body', {
    modifier: {
      error,
      small,
      large,
      alignCenter,
      alignRight,
    },
  });

  const makeOptionItems = (
    opts: Array<SelectBoxOption | SelectBoxOptionGroup>
  ): Array<React.ReactElement> =>
    opts.map(
      (
        opt: SelectBoxOption | SelectBoxOptionGroup,
        index: number
      ): React.ReactElement =>
        (opt as SelectBoxOptionGroup).options ? ( // optionsあればSelectBoxOptionGroupなんだぜ
          <optgroup
            key={index}
            label={(opt as SelectBoxOptionGroup).name}
            disabled={!!(opt as SelectBoxOptionGroup).disabled}
          >
            {makeOptionItems((opt as SelectBoxOptionGroup).options)}
          </optgroup>
        ) : (
          <option
            key={index}
            value={(opt as SelectBoxOption).value}
            disabled={!!(opt as SelectBoxOption).disabled}
          >
            {opt.name}
          </option>
        )
    );

  return (
    <div
      {...commonProps(props, wrapClassName, classModifier, {
        marginBottom,
        marginLeft,
        marginRight,
        marginTop,
        marginSize,
      })}
    >
      <select
        name={name && name}
        className={className}
        id={id}
        ref={ref}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled && true}
        required={required && true}
        autoFocus={autofocus && true}
        onChange={onChange}
        onInput={onInput}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        aria-label={label}
        aria-labelledby={labelledby}
        aria-required={required && true}
        autoComplete={autoComplete}
      >
        {makeOptionItems(options || [])}
      </select>
    </div>
  );
};

/**
 * 汎用のselectコンポーネントです。
 * 「複数のうちからひとつを選ぶ」入力欄の場合に使用してください。
 *
 * - 必ず `<label>` 要素によるラベル付けを行ってください
 *   - `FormControl` を使用する場合は、`SelectBox` に `id` を指定し、同じ文字列を `FormControl` の `fieldId` に指定してください
 *   - どうしても `<label>` 要素が使用できない場合に限り、 `label` または `labelledby` を使ってラベル付けをしてください
 * - 大量に選択肢がある場合は `SingleComboBox` の仕様を検討してください。テキストを入力することで選択肢を絞り込むことができます。
 * - 幅を変えたいときは width オプションを変更します。特に柔軟に選択したい場合は、widthオプションを full にすることで親要素に対して100%にすることができます。
 *
 * 似ているコンポーネントに `DropdownButton` が存在します。
 * `DropdownButton` は「押下するとドロップダウンメニューを開く **ボタン**」で、`SelectBox` は「選択肢のなかから一つを選ぶ **フォームの部品** 」です。
 * 両者の違いについては、 `DropdownButton` のドキュメントを参照してください。
 */
const SelectBox = React.forwardRef(SelectBoxInner);
export default SelectBox;
