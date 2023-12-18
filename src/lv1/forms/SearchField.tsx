import * as React from 'react';
import { MdSearch } from 'react-icons/md';
import vbClassNames from '../../utilities/vbClassNames';
import { MarginClassProps } from '../../utilities/marginClasses';
import { FormHandlers } from './types';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import { useResponsive } from '../../utilities/VibesProvider';

type Props = {
  /**
   * label id を指定します
   */
  id?: string;
  /**
   * input aria-label を指定します
   */
  label?: string;
  /**
   * input aria-labelledby を指定します
   */
  labelledby?: string;
  /**
   * input placeholder を指定します
   */
  placeholder?: string;
  /**
   * input name を指定します
   */
  name?: string;
  /**
   * input value を指定します
   */
  value?: string;
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
  /**
   * サイズを大きくします
   */
  large?: boolean;
  /**
   * 幅を指定します
   */
  width?: 'xSmall' | 'small' | 'medium' | 'large' | 'full';
  /**
   * input maxlength を指定します
   */
  maxLength?: number;
  /**
   * ボーダーやフォーカスインジケーターを非表示にします。
   *
   * - 必ず、FocusHighlightコンポーネント等で、フォーカスインジケーターを用意してください
   * - 編集に使用しない場合（閲覧専用モード等）には、disabledを使用してください
   */
  borderless?: boolean;
} & FormHandlers<HTMLInputElement> &
  MarginClassProps &
  CommonProps;

const SearchFieldInner = (
  props: Props,
  ref: React.Ref<HTMLInputElement>
): React.ReactElement => {
  const {
    id,
    label,
    labelledby,
    placeholder,
    name,
    value,
    required,
    autofocus,
    disabled,
    error,
    small,
    large,
    width,
    maxLength,
    borderless = false,
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
  const fieldClass = 'vb-searchField';
  const inputClass = fieldClass + '__input';

  const inputClassName = vbClassNames(inputClass, {
    modifier: {
      error,
      small,
      large,
      widthXSmall: width === 'xSmall',
      widthSmall: width === 'small',
      widthMedium: width === 'medium' || !width,
      widthLarge: width === 'large',
      widthFull: width === 'full',
      borderless: borderless,
      responsive: useResponsive(),
    },
  });

  const iconClassName = small
    ? fieldClass + '__icon--small'
    : fieldClass + '__icon';

  return (
    <div
      {...commonProps(
        props,
        fieldClass,
        { widthFull: width === 'full' },
        { marginBottom, marginLeft, marginRight, marginSize, marginTop }
      )}
    >
      <input
        id={id}
        type="search"
        name={name && name}
        value={value && value}
        className={inputClassName}
        placeholder={placeholder && placeholder}
        disabled={disabled && true}
        required={required && true}
        autoFocus={autofocus && true}
        maxLength={maxLength}
        onChange={onChange}
        onInput={onInput}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        aria-label={label ? label : placeholder ? placeholder : undefined}
        aria-labelledby={labelledby}
        aria-required={required && true}
        ref={ref}
      />
      <MdSearch className={iconClassName} />
    </div>
  );
};
const SearchField = React.forwardRef(SearchFieldInner);
export default SearchField;
