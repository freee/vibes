import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import commonProps, { CommonProps } from '../../utilities/commonProps';

type Props = {
  /**
   * aria-label を設定します
   */
  label?: string;
  /**
   * サイズを小さくします
   */
  small?: boolean;
  /**
   * error color にします
   */
  error?: boolean;
  /**
   * notice color にします
   */
  notice?: boolean;
  /**
   * success color にします
   */
  success?: boolean;
  /**
   * SVG のアイコンに対して pointer-events の指定を与えます
   */
  pointerEvents?: 'auto' | 'none';
  /**
   * icon component を指定します
   */
  IconComponent: React.ElementType;
  /**
   * アイコンの色を指定します。 `success` `error` `notice` を表現するために使用する場合はこちらのpropではなく、`success` `error` `notice` propを使用してください。
   */
  color?:
    | 'inherit'
    | 'white'
    | 'P1'
    | 'P2'
    | 'P3'
    | 'P4'
    | 'P5'
    | 'P6'
    | 'P7'
    | 'P8'
    | 'P9'
    | 'P10'
    | 'S1'
    | 'S2'
    | 'S3'
    | 'S4'
    | 'S5'
    | 'S6'
    | 'S7'
    | 'S8'
    | 'S9'
    | 'S10'
    | 'RE2'
    | 'RE4'
    | 'RE5'
    | 'RE7'
    | 'RE10'
    | 'OR2'
    | 'OR4'
    | 'OR5'
    | 'OR7'
    | 'OR10'
    | 'YE2'
    | 'YE4'
    | 'YE5'
    | 'YE7'
    | 'YE10'
    | 'YG2'
    | 'YG4'
    | 'YG5'
    | 'YG7'
    | 'YG10'
    | 'GR2'
    | 'GR4'
    | 'GR5'
    | 'GR7'
    | 'GR10'
    | 'BG2'
    | 'BG4'
    | 'BG5'
    | 'BG7'
    | 'BG10'
    | 'PU2'
    | 'PU4'
    | 'PU5'
    | 'PU7'
    | 'PU10'
    | 'GY1'
    | 'GY2'
    | 'GY4'
    | 'GY5'
    | 'GY7'
    | 'GY10';
} & MarginClassProps &
  CommonProps;

/**
 * Material Design Iconsを表示するためのコンポーネントです。
 *
 * - [react-icons](https://react-icons.github.io/react-icons/) の Material Design iconsのアイコンを使う想定です
 *   - UIの統一感を損なわないよう、Material Design icons 以外を使用しないでください。
 * - freeeのブランドカラーを使用することができます
 *   - `success` `error` `notice` の状態を表現する場合は、`color` propを使用せず、 `success` `error` `notice` のpropを使用してください。
 * - アイコンを単体で使用する（近くにアイコンの内容を説明するテキストがない）場合には、
 *   - 代替テキストを `label` propに指定してください
 *   - 背景色と 3:1 以上のコントラスト比をもつ色を使用してください
 */
const MaterialIcon: React.FC<Props> = (props: Props) => {
  const {
    label,
    small,
    error,
    notice,
    success,
    color,
    pointerEvents,
    IconComponent,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    marginSize,
  } = props;

  const colorClass = success
    ? 'P7'
    : notice
    ? 'YE7'
    : error
    ? 'RE5'
    : color === 'inherit'
    ? 'Inherit'
    : color === 'white'
    ? 'White'
    : color;

  const classModifier = {
    small,
    error,
    notice,
    success,
    pointerEventsNone: pointerEvents === 'none',
    [`color${colorClass}`]: !!colorClass,
  };

  return (
    <IconComponent
      focusable={false}
      role={label ? 'img' : 'presentation'}
      aria-label={label}
      {...commonProps(props, 'vb-materialIcon', classModifier, {
        marginBottom,
        marginLeft,
        marginRight,
        marginTop,
        marginSize,
      })}
    />
  );
};

export default MaterialIcon;
