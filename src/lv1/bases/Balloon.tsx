import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import commonProps, { CommonProps } from '../../utilities/commonProps';

type Props = {
  children?: React.ReactNode;
  small?: boolean;
  border?: 'default' | 'alert' | 'notice' | 'success';
  position?: 'left' | 'right' | 'center';
  verticalPosition?: 'top' | 'bottom';
} & MarginClassProps &
  CommonProps;

/**
 * バルーンはツールチップやシステムメッセージなどに利用できます
 */
export const BalloonInternal: React.ForwardRefRenderFunction<
  HTMLDivElement,
  Props
> = (props: Props, ref?: React.Ref<HTMLDivElement>) => {
  const {
    children,
    small,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    border,
    position,
    verticalPosition,
    marginSize,
  } = props;
  const classModifiers = {
    small,
    'border-default': border === 'default',
    'border-alert': border === 'alert',
    'border-notice': border === 'notice',
    'border-success': border === 'success',
    left: position === 'left',
    right: position === 'right',
    top: verticalPosition === 'top',
    bottom: verticalPosition === 'bottom',
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      {...commonProps(props, 'vb-balloon', classModifiers, {
        marginBottom,
        marginLeft,
        marginRight,
        marginSize,
        marginTop,
      })}
      // フォーカスを受けられるようにtabIndex=-1にしているが、クリック時にフォーカスしてしまうため、mousedownを抑止する
      onMouseDown={(e: React.MouseEvent<HTMLHeadElement>) => e.preventDefault()}
      tabIndex={-1}
      ref={ref}
    >
      {children}
    </div>
  );
};

const Balloon = React.forwardRef(BalloonInternal);
export default Balloon;
