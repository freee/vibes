import * as React from 'react';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import { TextFieldWidth } from './TextField';

type Props = {
  /**
   * id を指定します
   */
  id?: string;
  /**
   * aria-label を指定します
   */
  label?: string;
  /**
   * aria-labelledby を指定します
   */
  labelledby?: string;
  /**
   * input name を指定します
   */
  name?: string;
  /**
   * input value を指定します
   */
  value?: string;
  /**
   * 表示用のテキストを指定します
   */
  valueText?: string;
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
   * 幅を指定します
   */
  width?: TextFieldWidth;
} & CommonProps;

/**
 * ユーザーの入力内容が readonly で表示するためのコンポーネントです。
 *
 * - 高さが TextField などと揃うようにつくられているため、それらと並べて使用してもOKです。
 * - 幅の指定も TextField などと同様に行えます。
 */
const ReadOnlyField: React.FC<Props> = (props: Props) => {
  const {
    id,
    label,
    labelledby,
    name,
    value,
    valueText,
    small,
    large,
    alignRight,
    alignCenter,
    width,
  } = props;
  const classModifier = {
    small,
    large,
    alignCenter,
    alignRight,
    widthXSmall: width === 'xSmall',
    widthSmall: width === 'small',
    widthMedium: width === 'medium' || !width,
    widthLarge: width === 'large',
    widthFull: width === 'full',
  };

  /**
   * ユーザーの入力内容が表示される想定のコンポーネントのため、
   * data-masking が明示的に false でない限りは true にして freee-rrweb で録画されないようにする。
   * props 自体は readonly のため、コピーした配列で data-masking が undefined のときに true で上書きしている。
   */
  const checkedProps = {
    ...props,
    'data-masking':
      props['data-masking'] !== undefined ? props['data-masking'] : true,
  };

  return (
    <span
      {...commonProps(checkedProps, 'vb-readOnlyField', classModifier)}
      id={id}
      aria-label={label}
      aria-labelledby={labelledby}
    >
      <span className="vb-readOnlyField__inner">{valueText || value}</span>
      <input type="hidden" name={name} value={value} />
    </span>
  );
};

export default ReadOnlyField;
