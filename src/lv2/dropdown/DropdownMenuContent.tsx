import * as React from 'react';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import Item from './Item';
import { Keys } from '../../utilities/keyboard';
import { DropdownContent } from './types';

type Props = {
  contents: Array<DropdownContent>;
  firstSelectableItemRef?: React.Ref<
    HTMLButtonElement | HTMLAnchorElement | HTMLInputElement
  >;
  menuMaxHeightOffset?: number;
  onRequestClose?: () => void;
  onFocusOut?: (direction: 'upward' | 'downward') => void;
} & CommonProps;

const getFocusableItemsOfList = (listEl: HTMLElement) =>
  listEl.querySelectorAll(
    '.vb-dropdownItem--selectable:not(.vb-dropdownItem--disabled) button, .vb-dropdownItem--selectable:not(.vb-dropdownItem--disabled) a, .vb-dropdownItem--checkbox input:not([disabled])'
  );
const getIndexOfTargetElement = (
  targetEl: Element,
  items: NodeListOf<Element>
) => Array.prototype.indexOf.call(items, targetEl);

const handleKeyDownSelectableItem = (
  e: React.KeyboardEvent<
    HTMLButtonElement | HTMLAnchorElement | HTMLInputElement
  >,
  selfRef: React.Ref<HTMLUListElement>,
  onFocusOut?: (direction: 'upward' | 'downward') => void
): void => {
  const current =
    selfRef instanceof HTMLUListElement
      ? selfRef
      : typeof selfRef === 'object'
      ? selfRef?.current
      : null;
  switch (e.key) {
    case Keys.UP:
      e.preventDefault();
      if (current) {
        const items = getFocusableItemsOfList(current);
        const currentIndex = getIndexOfTargetElement(
          e.target as Element,
          items
        );
        if (currentIndex > 0) {
          const prev = items[currentIndex - 1];
          if (
            prev instanceof HTMLButtonElement ||
            prev instanceof HTMLAnchorElement ||
            prev instanceof HTMLInputElement
          ) {
            prev.focus();
          }
        } else if (currentIndex === 0) {
          onFocusOut && onFocusOut('upward');
        }
      }
      break;
    case Keys.DOWN:
      e.preventDefault();
      if (current) {
        const items = getFocusableItemsOfList(current);
        const currentIndex = getIndexOfTargetElement(
          e.target as Element,
          items
        );
        if (currentIndex >= 0 && currentIndex < items.length - 1) {
          const next = items[currentIndex + 1];
          if (
            next instanceof HTMLButtonElement ||
            next instanceof HTMLAnchorElement ||
            next instanceof HTMLInputElement
          ) {
            next.focus();
          }
        } else if (currentIndex === items.length - 1) {
          onFocusOut && onFocusOut('downward');
        }
      }
      break;
  }
};

/**
 * ドロップダウンメニューの内部コンポーネントです。
 *
 * - 単体で使用される想定のないコンポーネントです。PopupBaseに包んで使用してください。
 * - ボタンをクリックした際に表示されるような場合はDropdownButton、そのボタン部分をカスタマイズしたい場合はWithDropdownを使用してください。
 */
const DropdownMenuContentInternal: React.ForwardRefRenderFunction<
  HTMLDivElement,
  Props
> = (props: Props, ref: React.Ref<HTMLDivElement>) => {
  const selfRef = React.useRef<HTMLUListElement>(null);
  const {
    firstSelectableItemRef,
    menuMaxHeightOffset = 0,
    onRequestClose,
    onFocusOut,
    contents,
  } = props;

  const forwardFocus: React.FocusEventHandler<HTMLElement> = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    const firstElm = getFocusableItemsOfList(e.currentTarget)[0];
    if (
      firstElm instanceof HTMLAnchorElement ||
      firstElm instanceof HTMLButtonElement ||
      firstElm instanceof HTMLInputElement
    ) {
      firstElm.focus();
    }
  };

  const [menuMaxHeight, setMenuMaxHeight] = React.useState<
    number | undefined
  >();
  React.useEffect(() => {
    if (selfRef?.current) {
      const rect = selfRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      setMenuMaxHeight(windowHeight - rect.top - menuMaxHeightOffset);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selfRef?.current?.getBoundingClientRect().top]);

  let selectableItemIdxCounter = 0;
  return (
    <div
      {...commonProps(props, 'vb-dropdownMenuContent')}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={-1}
      // ここにフォーカスが来たら最初の選択可能アイテムにフォーカスを移動する
      onFocus={forwardFocus}
      ref={ref}
    >
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <ul
        className="vb-dropdownMenuContent__list"
        role="menu"
        ref={selfRef}
        style={{
          ...(menuMaxHeight
            ? { maxHeight: `min(60vh, calc(${menuMaxHeight}px - 1rem)) ` }
            : {}),
          minHeight: '2.5rem',
        }}
        // ここにtabIndexをつけているのは、親要素のtabIndex=-1へのフォーカス移動を阻止するため
        tabIndex={-1}
      >
        {contents.map((content, i) => {
          const isAvailable =
            (content.type === 'selectable' || content.type === 'checkbox') &&
            !content.disabled;
          // selectableなcontentの中で何番目か
          const selectableItemIdx = isAvailable
            ? selectableItemIdxCounter++
            : 0;
          const itemRef =
            isAvailable && selectableItemIdx === 0
              ? firstSelectableItemRef
              : undefined;
          return (
            <Item
              key={i}
              content={content}
              onKeyDown={(e) =>
                handleKeyDownSelectableItem(e, selfRef, onFocusOut)
              }
              selectableItemRef={itemRef}
              onRequestClose={onRequestClose}
            />
          );
        })}
      </ul>
    </div>
  );
};
const DropdownMenuContent = React.forwardRef(DropdownMenuContentInternal);
export default DropdownMenuContent;
