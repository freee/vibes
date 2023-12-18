import * as React from 'react';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import Balloon from '../../lv1/bases/Balloon';
import ScrollPortal from '../../utilities/ScrollPortal';
import { FocusTrap } from '../../lv1';
import useUniqueId from '../../hooks/useUniqueId';
import { Keys } from '../../utilities/keyboard';
import { getFocusableElements, isFocusableElement } from '../../utilities';
import { useBalloon } from './useBalloon';

type Props = Pick<Parameters<typeof Balloon>[0], 'border'> & {
  /**
   * バルーンの中身を描画します。ホバーやフォーカスによってバルーンが表示されているとき、`isVisible` が `true` になります。 `balloonContent` より優先して使用されます。
   */
  renderBalloonContent?: (isVisible: boolean) => React.ReactNode;
  /**
   * (deprecated) バルーンの中身を描画します。バルーンの表示状態を取得できないため、なるべく `renderBalloonContent` を使用してください。
   * @deprecated `renderBalloonContent` を使用してください
   */
  balloonContent?: React.ReactNode;
  /**
   * バルーンを付ける側（呼び出し側）をrenderします。
   * ボタンや入力フォームなどのインタラクティブなコンポーネントがある場合には、`balloonId` を `aria-describedby` に渡してください
   */
  renderContent?: (balloonId: string) => React.ReactNode;
  /**
   * (deprecated) renderContentが渡されていない場合に使用されます。aria-describedbyが使用できないため、なるべく `renderContent` を使用してください。
   * @deprecated `renderContent` を使用してください
   */
  children?: React.ReactNode;

  /**
   * trueにしておくとバルーンを表示しません。特定の条件でのみバルーンを表示したい場合に使用してください。
   */
  balloonDisabled?: boolean;
} & CommonProps;

const findNextFocusable = (
  el: HTMLElement,
  backward = false
): Element | undefined => {
  let e = backward ? el.previousElementSibling : el.nextElementSibling;
  while (e) {
    if (isFocusableElement(e)) {
      return e;
    }
    const focusables = getFocusableElements(e as HTMLElement);
    const focusableIndex = findFocusableElIndex(focusables);
    if (focusables.length > 0) {
      return focusables[backward ? focusableIndex : 0];
    }
    e = backward ? e.previousElementSibling : e.nextElementSibling;
  }
  const parent = el.parentElement;
  return parent ? findNextFocusable(parent, backward) : undefined;
};

const findFocusableElIndex = (focusables: NodeListOf<Element>): number => {
  let focusableLastIndex = 0;
  focusables.forEach((node, i) => {
    let isVisible = true;
    let parent = node.parentElement;
    while (parent) {
      if (parent.style.display === 'none') {
        isVisible = false;
        break;
      }
      parent = parent.parentElement;
    }
    if (isVisible) {
      focusableLastIndex = i;
    }
  });
  return focusableLastIndex;
};

/**
 * `children` の要素にマウスホバーした際に表示されるバルーンを付与します。
 *
 * - タッチスクリーンによる操作ではバルーンを表示できません。**読めないことで使用できなくなる情報を配置しないでください**。
 * - バルーン内にはキーボード操作で到達できないため、何かの操作のUIを配置する場合は **必ず代替アクセス手段を用意してください**。
 * - バルーンの要素の `id` を `renderContent` の `balloonId` 引数で取得できます。`aria-describedby` で使用してください。
 * - バルーン表示中に `Esc` キーを押下すると、バルーンを非表示にできます。
 */
const WithBalloon: React.FC<Props> = (props: Props) => {
  const {
    children,
    renderContent,
    balloonContent,
    renderBalloonContent,
    balloonDisabled,
    border,
  } = props;
  const baseClass = 'vb-withBalloon';
  const wrapperRef = React.useRef<HTMLSpanElement>(null);
  const uniqueId = useUniqueId(baseClass);

  const {
    balloonIsVisibleByHover,
    clearHoverFlags,
    handleTargetMouseEnter,
    handleTargetMouseLeave,
    handleBalloonMouseEnter,
    handleBalloonMouseLeave,
    position,
    verticalPosition,
    adjustPosition,
    baseRef,
    balloonRef,
  } = useBalloon();
  const [focused, setFocused] = React.useState<boolean>(false);
  const showBalloon = !balloonDisabled && (balloonIsVisibleByHover || focused);
  const balloonId = `${uniqueId}__balloonWrapper`;

  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === Keys.ESC) {
        clearHoverFlags();
        setFocused(false);
      }
    };
    if (showBalloon) {
      window.addEventListener('keydown', handleEsc);
      return () => window.removeEventListener('keydown', handleEsc);
    }
  }, [showBalloon, clearHoverFlags]);

  return (
    <span
      {...commonProps(props, baseClass)}
      ref={baseRef}
      id={uniqueId}
      aria-describedby={balloonId}
    >
      {/* フォーカス可能なものがrenderContentに存在しなかった場合に、無理やりフォーカスする挙動を作るために、FocusTrapを使用している */}
      <FocusTrap
        onFocusInsideTop={() => {
          // Shift+Tabでフォーカスを外に出そうとしたときの挙動
          // 前のほうのフォーカス可能な要素を探してフォーカスする
          const target = baseRef.current
            ? findNextFocusable(baseRef.current, true)
            : undefined;
          if (target) {
            (target as HTMLElement).focus();
          }
          return true;
        }}
        onFocusInsideBottom={() => {
          // Tabでフォーカスを外に出そうとしたときの挙動
          // 後ろのほうのフォーカス可能な要素を探してフォーカスする
          const target = baseRef.current
            ? findNextFocusable(baseRef.current)
            : undefined;
          if (target) {
            (target as HTMLElement).focus();
          }
          return true;
        }}
        onFocusOutsideTop={() => {
          // Tabでフォーカスを内側に入れるときの挙動
          // フォーカス可能なものがあればそれに、無ければwrapperにフォーカスを移す
          if (wrapperRef.current) {
            const focusable = getFocusableElements(wrapperRef.current);
            if (focusable.length > 0) {
              (focusable.item(0) as HTMLElement).focus();
            } else {
              wrapperRef.current.focus();
            }
          }
          return true;
        }}
        onFocusOutsideBottom={() => {
          // Shift+Tabでフォーカスを内側に入れるときの挙動
          // フォーカス可能なものがあればそれに、無ければwrapperにフォーカスを移す
          if (wrapperRef.current) {
            const focusable = getFocusableElements(wrapperRef.current);
            if (focusable.length > 0) {
              (focusable.item(focusable.length - 1) as HTMLElement).focus();
            } else {
              wrapperRef.current.focus();
            }
          }
          return true;
        }}
      >
        <span
          className={`${baseClass}__contentWrapper`}
          tabIndex={-1}
          ref={wrapperRef}
          onMouseEnter={handleTargetMouseEnter}
          onMouseLeave={handleTargetMouseLeave}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        >
          {renderContent ? renderContent(balloonId) : children}
        </span>
      </FocusTrap>
      <ScrollPortal
        isActive={showBalloon}
        positionalBaseElement={baseRef.current || undefined}
        verticalPosition={verticalPosition}
        horizontalPosition={position}
        onOverflow={() => {
          clearHoverFlags();
          setFocused(false);
        }}
        onScroll={adjustPosition}
        data-masking={props['data-masking']}
      >
        <div
          className={`${baseClass}__balloonWrapper${
            showBalloon ? '' : ` ${baseClass}__balloonWrapper--hidden`
          }`}
          onMouseEnter={handleBalloonMouseEnter}
          onMouseLeave={handleBalloonMouseLeave}
          id={balloonId}
          role="tooltip"
          aria-hidden={!showBalloon}
        >
          <Balloon
            border={border}
            position={position}
            verticalPosition={verticalPosition}
            ref={balloonRef}
          >
            {renderBalloonContent
              ? renderBalloonContent(showBalloon)
              : balloonContent}
          </Balloon>
        </div>
      </ScrollPortal>
    </span>
  );
};

export default WithBalloon;
