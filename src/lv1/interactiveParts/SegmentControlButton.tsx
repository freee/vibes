import * as React from 'react';
import commonProps, { CommonProps } from '../../utilities/commonProps';

type Props = {
  children?: React.ReactNode;
  /**
   * 選択状態にします
   */
  current?: boolean;
  /**
   * サイズを小さくします
   */
  small?: boolean;
  /**
   * サイズを大きくします
   */
  large?: boolean;
  /**
   * 押下時に遷移させるURLを指定します。指定した場合は `<a>` 要素、空文字列もしくはundefinedの場合は `<button>` 要素となります
   */
  href?: string;
  /**
   * target を設定します
   */
  target?: string;
  /**
   * 未指定の場合、`target="_blank"` であれば `noopener noreferrer`となります
   *
   * （空文字列を渡した場合には `""` が指定されます）
   */
  rel?: string;
  /**
   * click ハンドラを設定します
   */
  onClick?: React.MouseEventHandler;
  /**
   * アイコンとして表示するコンポーネントを渡します。react-iconsのコンポーネントが想定されています。
   */
  IconComponent?: React.ElementType;
} & CommonProps;

const SegmentControlButton: React.FC<Props> = (props: Props) => {
  const {
    children,
    current,
    small,
    large,
    href,
    target,
    rel,
    onClick,
    IconComponent,
  } = props;

  const buttonBaseClass = 'vb-segmentControlButton';

  const classModifier = {
    current,
    small,
    large,
    icon: !!IconComponent,
  };

  const content = (
    <>
      {IconComponent && (
        <IconComponent
          className={`${buttonBaseClass}__icon`}
          focusable={false}
        />
      )}
      {children}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={
          rel || rel === ''
            ? rel
            : target === '_blank'
            ? 'noopener noreferrer'
            : undefined
        }
        onClick={onClick}
        {...commonProps(props, buttonBaseClass, classModifier)} // SegmentControlButton 単体では margin は取らない
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={current}
      {...commonProps(props, buttonBaseClass, classModifier)} // SegmentControlButton 単体では margin は取らない
    >
      {content}
    </button>
  );
};

export default SegmentControlButton;
