import * as React from 'react';
import ReactDOM from 'react-dom';
import { usePortalParentContext } from './VibesProvider';

type Props = {
  children: React.ReactNode;
  isActive: boolean;
  positionalBaseElement: HTMLElement | undefined;
  verticalPosition?: 'top' | 'bottom';
  horizontalPosition?: 'left' | 'center' | 'right';
  popupRef?: React.RefObject<HTMLDivElement>;
  'data-masking'?: boolean;
};

/**
 * children をfixedする要素でラップして Portal 化する
 */
const FixedPortal: React.FC<Props> = ({
  children,
  isActive,
  positionalBaseElement,
  verticalPosition = 'bottom',
  horizontalPosition = 'left',
  popupRef,
  ...props
}: Props) => {
  const [listBoxLeft, setListBoxLeft] = React.useState<string>('0');
  const [listBoxTop, setListBoxTop] = React.useState<string>('0');
  const portalParent = usePortalParentContext();

  // positionalBaseElement の下端または上端につく形で位置を調整する
  const calculatePosition = React.useCallback(() => {
    if (!positionalBaseElement) {
      return;
    }
    const { left, top, bottom, height, width } =
      positionalBaseElement.getBoundingClientRect();

    setListBoxLeft(
      `${
        left +
        (horizontalPosition === 'right'
          ? width
          : horizontalPosition === 'center'
          ? width / 2
          : 0)
      }px`
    );
    if (!popupRef) {
      setListBoxTop(`${top + (verticalPosition === 'bottom' ? height : 0)}px`);
    } else {
      const popupHeight = popupRef.current?.getBoundingClientRect().height;
      if (verticalPosition === 'bottom') {
        setListBoxTop(`${top + height}px`);
      } else {
        if (popupHeight) {
          setListBoxTop(`${bottom - popupHeight - height}px`);
        }
      }
    }
  }, [popupRef, horizontalPosition, positionalBaseElement, verticalPosition]);

  // 要素がactiveになったら表示位置を再計算する
  React.useLayoutEffect(() => {
    if (!isActive) {
      return;
    }
    calculatePosition();
  }, [isActive, calculatePosition]);

  return ReactDOM.createPortal(
    <div
      className="vb-FixedPortal"
      style={{
        position: 'fixed',
        left: listBoxLeft,
        top: listBoxTop,
        zIndex: 9999,
      }}
      data-masking={props['data-masking']}
    >
      {children}
    </div>,
    portalParent
  );
};

export default FixedPortal;
