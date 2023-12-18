import * as React from 'react';
import { scrollableParent } from './DOMUtil';
import ReactDOM from 'react-dom';
import { usePortalParentContext } from '../utilities/VibesProvider';

type Props = {
  children: React.ReactNode;
  isActive: boolean;
  onOverflow?: () => void;
  onScroll?: () => void;
  portalTargetElement?: HTMLElement | undefined;
  positionalBaseElement: HTMLElement | undefined;
  verticalPosition?: 'top' | 'bottom';
  horizontalPosition?: 'left' | 'center' | 'right';
  popupRef?: React.RefObject<HTMLDivElement>;
  'data-masking'?: boolean;
};

/**
 * children をスクロールに追従する要素でラップして Portal 化する
 */
const ScrollPortal: React.FC<Props> = ({
  children,
  isActive,
  onOverflow,
  onScroll,
  portalTargetElement,
  positionalBaseElement,
  verticalPosition = 'bottom',
  horizontalPosition = 'left',
  popupRef,
  ...props
}: Props) => {
  const [listBoxLeft, setListBoxLeft] = React.useState<string>('0');
  const [listBoxTop, setListBoxTop] = React.useState<string>('0');
  const portalParent = usePortalParentContext();
  // positionalBaseElementが画面から隠れていればonOverflowを呼ぶ
  const checkScrollPosition = React.useCallback(() => {
    if (!(onOverflow && positionalBaseElement)) {
      return;
    }
    const scrollableElement = scrollableParent(positionalBaseElement);
    if (scrollableElement) {
      // positionalBaseElementの上端座標（scrollableElement相対）
      // スクロール量によって変動
      const topEdge =
        positionalBaseElement.getBoundingClientRect().top -
        scrollableElement.getBoundingClientRect().top;
      // positionalBaseElementの下端座標（scrollableElement相対）
      const bottomEdge =
        topEdge + positionalBaseElement.getBoundingClientRect().height;
      const leftEdge =
        positionalBaseElement.getBoundingClientRect().left -
        scrollableElement.getBoundingClientRect().left;
      const rightEdge =
        leftEdge + positionalBaseElement.getBoundingClientRect().width;
      // スクロールコンテンツの上端/下端/左端/右端に到達
      if (
        bottomEdge < 0 ||
        topEdge > scrollableElement.clientHeight ||
        rightEdge < 0 ||
        leftEdge > scrollableElement.clientWidth
      ) {
        onOverflow();
        return;
      }
    }
  }, [onOverflow, positionalBaseElement]);

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
          : 0) +
        window.pageXOffset
      }px`
    );
    if (!popupRef) {
      setListBoxTop(
        `${
          top +
          (verticalPosition === 'bottom' ? height : 0) +
          window.pageYOffset
        }px`
      );
    } else {
      const popupHeight = popupRef.current?.getBoundingClientRect().height;
      if (verticalPosition === 'bottom') {
        setListBoxTop(`${top + height + window.pageYOffset}px`);
      } else {
        if (popupHeight) {
          setListBoxTop(
            `${bottom - popupHeight - height + window.pageYOffset}px`
          );
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

    // scroll可能なElement がある時はscrollに追従するようにする
    const handleScroll = () => {
      calculatePosition();
      checkScrollPosition();
      onScroll && onScroll();
    };

    if (positionalBaseElement) {
      const target = scrollableParent(positionalBaseElement);

      window.addEventListener('resize', handleScroll);
      if (target) {
        window.addEventListener('scroll', handleScroll);
        target.addEventListener('scroll', handleScroll);
      }
      return () => {
        window.removeEventListener('resize', handleScroll);
        if (target) {
          window.removeEventListener('scroll', handleScroll);
          target.removeEventListener('scroll', handleScroll);
        }
      };
    }
  }, [
    isActive,
    onScroll,
    calculatePosition,
    checkScrollPosition,
    positionalBaseElement,
  ]);

  return ReactDOM.createPortal(
    <div
      className="vb-scrollPortal"
      style={{
        position: 'absolute',
        left: listBoxLeft,
        top: listBoxTop,
      }}
      data-masking={props['data-masking']}
    >
      {children}
    </div>,
    portalTargetElement || portalParent
  );
};

export default ScrollPortal;
