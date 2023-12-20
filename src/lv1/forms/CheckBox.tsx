import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import { FormHandlers } from './types';
import vbClassNames from '../../utilities/vbClassNames';

type Props = {
  children?: React.ReactNode;
  /**
   * input name を指定します
   */
  name?: string;
  /**
   * input value を指定します
   */
  value?: string;
  /**
   * input checked を指定します
   */
  checked?: boolean;
  /**
   * input required を指定します
   */
  required?: boolean;
  /**
   * input autofocus を指定します
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
} & FormHandlers<HTMLInputElement> &
  MarginClassProps &
  CommonProps;

const CheckBoxInternal: React.ForwardRefRenderFunction<
  HTMLInputElement,
  Props
> = (props: Props, ref?: React.Ref<HTMLInputElement>) => {
  const {
    children,
    name,
    value,
    checked,
    required,
    autofocus,
    disabled,
    error,
    small,
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

  const className = 'vb-checkbox';
  const classModifier = {
    disabled,
    error,
    small,
  };

  return (
    <label
      {...commonProps(props, className, classModifier, {
        marginTop,
        marginLeft,
        marginRight,
        marginBottom,
        marginSize,
      })}
    >
      <input
        type="checkbox"
        name={name && name}
        value={value && value}
        className={vbClassNames(className + '__control', {
          modifier: classModifier,
        })}
        disabled={disabled && true}
        checked={checked && true}
        required={required && true}
        autoFocus={autofocus && true}
        onChange={onChange}
        onInput={onInput}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        ref={ref}
      />
      <span className={className + '__label'}>{children}</span>
    </label>
  );
};

/**
 * 複数の選択肢から個数に制限なく選択させるときに使用するコンポーネントです。
 *
 * - 「いくつかの選択肢の中からひとつだけを選ぶ」用途には `RadioButton` を使用してください。
 *   - 例外として、ある状態に対して boolean 値のどちらかを選ぶ際に `CheckBox` をひとつだけ置いて選ばせるのはOKです。
 *     - その際には「選択/選択解除したときに何が起こるのか」が明確になるラベルを配置してください
 *     - ON/OFF のふたつの `RadioButton` を置くのもOKです。どちらを使うべきかはスペースの都合や「デフォルト値を設定するべきか」などを考慮して決定してください。
 * - 基本的に、チェックボックスのラベルには句読点は使わないようにしてください。
 *
 * ## accessibility
 * vibesのCheckBoxコンポーネントはブラウザのデフォルト表示の見た目から変更していません。
 * a11yチェックにある「クリックやタッチに反応するサイズが、充分な大きさになっているか」の項目OKにして問題ありません。
 *
 */
const CheckBox = React.forwardRef(CheckBoxInternal);
export default CheckBox;
