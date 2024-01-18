import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import ScrollPortal from '../../utilities/ScrollPortal';
import { Keys } from '../../utilities/keyboard';
import useUniqueId from '../../hooks/useUniqueId';
import { FocusTrap } from '../../lv1';
import Button from '../../lv1/buttons/Button';
import VisuallyHidden from '../../lv1/a11y/VisuallyHidden';

type Props = {
  /**
   * ポップアップ開閉コントロール描画用 render function
   *
   * - `popupId` を開閉コントロールの `aria-controls` に渡してください
   * - `isOpen` を開閉コントロールの `aria-expanded` に渡してください
   * - `controlRef` を開閉コントロールの `ref` に渡してください
   * - `togglePopup` はクリック以外のタイミングでポップアップを開閉したい際に使用してください。
   */
  render: (
    /**
     * ポップアップのid: ボタンのaria-controlsに渡してください
     */
    popupId: string,
    /**
     * ドロップダウンメニューの開閉状況: ボタンのaria-expandedに渡してください
     */
    isOpen: boolean,
    /**
     * 開閉コントロールのrefに渡してください
     */
    controlRef: React.RefObject<HTMLElement>,
    /**
     * 強制的に表示/非表示を切り替えます。要素のクリック以外のタイミングでポップアップを開閉する際に使用します。
     */
    togglePopup: (open: boolean) => void
  ) => React.ReactNode;
  /**
   * ポップアップ描画用 render function
   *
   * - requestClose を呼ぶことでポップアップを閉じさせます
   * - firstSelectedItemRef は、フォーカス可能な要素のうち最初の要素のrefに渡してください。
   * - フォーカス可能な要素より前に説明文等がある場合は、firstSelectedItemRef をどの要素にも渡さないでください
   */
  renderPopup: (
    /**
     * これを呼ぶことでポップアップを閉じます
     */
    requestClose: () => void,
    /**
     * - フォーカス可能な要素のうち最初の要素のrefに渡してください。
     * - フォーカス可能な要素より前に説明文等がある場合は、firstSelectedItemRef をどの要素にも渡さないでください
     */
    firstSelectableItemRef: React.RefObject<HTMLElement>,
    /**
     * renderに渡さるのと同じRefオブジェクトです。ボタンへの参照として使用し、ref属性には渡さないでください。
     */
    controlRefDoNotUseAsRefAttribute: React.RefObject<HTMLElement>
  ) => React.ReactNode;
  disabled?: boolean;
  /**
   * popupを開いた時に発火します。useEffectのトリガーになるためメモ化したものを渡すことを推奨します。
   */
  onOpen?: () => void;
  /**
   * popupを閉じた時に発火します。useEffectのトリガーになるためメモ化したものを渡すことを推奨します。
   */
  onClose?: () => void;
} & CommonProps;

/**
 * ポップアップを実装するためのコンポーネントです。
 *
 * - ボタンからドロップダウンメニューを表示したい場合は、 `DropdownButton` コンポーネントを使用してください
 * - 作ろうとしている機能と同じ機能を持つコンポーネントが存在する場合はそちらを使用してください。このコンポーネントは扱いが面倒です。
 * - `render` の引数は以下のように使用してください
 *   - `popupId` を開閉コントロールの `aria-controls` に渡してください
 *   - `isOpen` を開閉コントロールの `aria-expanded` に渡してください
 *   - `controlRef` を開閉コントロールの `ref` に渡してください
 * - `renderPopup` の引数は以下のように使用してください
 *   - requestClose を呼ぶことでポップアップを閉じさせます
 *   - firstSelectedItemRef は、フォーカス可能な要素のうち最初の要素のrefに渡してください。
 *   - フォーカス可能な要素より前に説明文等がある場合は、firstSelectedItemRef をどの要素にも渡さないでください
 */
const WithPopup: React.FC<Props> = (props: Props) => {
  const { render, disabled, renderPopup, onOpen, onClose } = props;
  const baseClass = 'vb-withPopup';
  const [open, setOpen] = React.useState(false);
  const firstSelectableItemRef = React.useRef<HTMLElement>(null);
  const popupRef = React.useRef<HTMLDivElement>(null);

  const contentWrapperRef = React.useRef<HTMLSpanElement>(null);
  const [horizontalPosition, setHorizontalPosition] = React.useState<
    'left' | 'right'
  >('left');
  const [verticalPosition, setVerticalPosition] = React.useState<
    'top' | 'bottom'
  >('bottom');
  const uid = useUniqueId(baseClass);
  const popupId = `${uid}__popup`;
  const controlRef = React.useRef<HTMLElement>(null);

  const adjustPosition = () => {
    if (!(contentWrapperRef.current && popupRef.current)) {
      return;
    }
    const buttonRect = contentWrapperRef.current.getBoundingClientRect();
    const popupRect = popupRef.current.getBoundingClientRect();

    setHorizontalPosition(
      buttonRect.left + popupRect.width > document.documentElement.clientWidth
        ? 'right'
        : 'left'
    );
    setVerticalPosition(
      buttonRect.bottom + popupRect.height >
        document.documentElement.clientHeight &&
        buttonRect.bottom > popupRect.height
        ? 'top'
        : 'bottom'
    );
  };

  const openCallbackFlagRef = React.useRef(false);
  const closeCallbackFlagRef = React.useRef(false);

  const openMenu = () => {
    setOpen(true);
    openCallbackFlagRef.current = true;
  };
  const closeMenu = React.useCallback(() => {
    setOpen(false);
    closeCallbackFlagRef.current = true;
  }, []);

  const openCallback = React.useCallback(() => {
    if (openCallbackFlagRef.current) {
      onOpen?.();
      openCallbackFlagRef.current = false;
    }
  }, [onOpen]);
  const closeCallback = React.useCallback(() => {
    if (closeCallbackFlagRef.current) {
      onClose?.();
      closeCallbackFlagRef.current = false;
    }
  }, [onClose]);

  React.useEffect(() => {
    if (open) {
      openCallback();
      // 開いた瞬間にwindowにイベントが伝播して閉じてしまうのを防ぐため、setTimeoutしてaddEventListenerを遅らせている
      setTimeout(() => {
        (firstSelectableItemRef.current || popupRef.current)?.focus();
        window.addEventListener('click', closeMenu);
      });
      return () => window.removeEventListener('click', closeMenu);
    } else {
      closeCallback();
    }
  }, [closeMenu, open, openCallback, closeCallback]);

  React.useLayoutEffect(() => {
    adjustPosition();
  }, [open]);

  const requestClose = () => {
    closeMenu();
    if (controlRef.current) {
      controlRef.current.focus();
    }
  };

  const togglePopup = (open: boolean) => {
    if (disabled) {
      return;
    }
    if (open) {
      openMenu();
    } else {
      closeMenu();
    }
    if (controlRef.current) {
      controlRef.current.focus();
    }
  };

  const popupWrapper = () => {
    return (
      <CSSTransition
        in={open}
        classNames={`${baseClass}__animation`}
        timeout={{
          enter: 300,
          exit: 300,
        }}
        unmountOnExit={true}
      >
        <div className={`${baseClass}__popupWrapper`}>
          <FocusTrap
            // ポップアップの始まり・終わりまでTabキーで移動した場合、ボタンあるいはポップアップ自体にフォーカスを戻す
            onFocusInsideTop={() => {
              if (controlRef.current) {
                controlRef.current.focus();
              } else if (popupRef.current) {
                popupRef.current.focus();
              }
              return true;
            }}
            onFocusInsideBottom={() => {
              if (controlRef.current) {
                controlRef.current.focus();
              } else if (popupRef.current) {
                popupRef.current.focus();
              }
              return true;
            }}
          >
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
            <div
              className={`${baseClass}__popup${
                horizontalPosition === 'right'
                  ? ` ${baseClass}__popup--rightAligned`
                  : ''
              }`}
              tabIndex={-1}
              id={popupId}
              onKeyDown={(e) => {
                e.stopPropagation();
                if (e.key === Keys.ESC) {
                  closeMenu();
                  if (controlRef.current) {
                    controlRef.current.focus();
                  }
                }
              }}
              onClick={(e) => e.stopPropagation()}
              ref={popupRef}
            >
              {renderPopup(requestClose, firstSelectableItemRef, controlRef)}
            </div>
          </FocusTrap>
          {/* iOS VoiceOver/Android Talkbackでポップアップを閉じられるように明示的に閉じるUIを置いておく */}
          <VisuallyHidden>
            <Button onClick={closeMenu}>閉じる</Button>
          </VisuallyHidden>
        </div>
      </CSSTransition>
    );
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <span
      {...commonProps(props, baseClass)}
      onClick={(e): void => {
        open && e.stopPropagation();
        if (!disabled) {
          if (open) {
            closeMenu();
          } else {
            openMenu();
          }
        }
      }}
      onKeyDown={(e) => {
        if (!open) {
          return;
        }
        if (
          (e.key === Keys.TAB || e.key === Keys.DOWN) &&
          (popupRef.current || firstSelectableItemRef.current)
        ) {
          e.preventDefault();
          if (firstSelectableItemRef.current) {
            firstSelectableItemRef.current.focus();
          } else if (popupRef.current) {
            popupRef.current.focus();
          }
        }
      }}
    >
      {/* Dropdownの位置調整は、contentWrapperをdisplay:blockにして、これを基準にする */}
      <span className={`${baseClass}__contentWrapper`} ref={contentWrapperRef}>
        {render(popupId, open, controlRef, togglePopup)}
      </span>
      <ScrollPortal
        isActive={open}
        positionalBaseElement={contentWrapperRef.current || undefined}
        horizontalPosition={horizontalPosition}
        verticalPosition={verticalPosition}
        onOverflow={() => closeMenu()}
        popupRef={popupRef}
        data-masking={props['data-masking']}
      >
        {popupWrapper()}
      </ScrollPortal>
    </span>
  );
};
export default WithPopup;
