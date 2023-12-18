import * as React from 'react';
import IconOnlyButton from '../../lv1/buttons/IconOnlyButton';
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdArrowDropDown,
} from 'react-icons/md';
import { MarginClassProps } from '../../utilities/marginClasses';
import { WithPopup } from '..';
import { Button } from '../../lv1';
import commonProps, { CommonProps } from '../../utilities/commonProps';

type RenderPopupT = Parameters<typeof WithPopup>[0]['renderPopup'];
type Props = {
  prevDisabled?: boolean;
  nextDisabled?: boolean;
  onClickPrev: () => void;
  onClickNext: () => void;
  /**
   * ポップアップを描画するrender functionです。詳細は `WithPopup` の `renderPopup` propを参照してください。
   * Render function for popup. See `renderPopup` prop of `WithPopup for details.
   */
  renderPopup?: RenderPopupT;
  /**
   * タイトル部分 (`children`) をクリックしたときの処理を指定します。 `renderPopup` を使う場合は通常は指定は不要です。
   * 指定すると、タイトル部分はボタンになります。
   * Click-handler for the title (`children`). It is not necessary when using `renderPopup`.
   * If it is defined, title will be rendered as a button.
   */
  onClickTitle?: () => void;
  /**
   * タイトル部分を指定します。 `renderPopup` `onClickTitle` `hasDropdown` のどれかを使う場合、ボタンになります。
   * The title of the page. If `renderPopup` `onClickTitle` or `hasDropdown` is used, it will be rendered as a button.
   */
  children: React.ReactNode;
  /**
   * `renderPopup` を使用してください。`renderPopup` を使う場合は `hasDropdown` の指定は不要です（機能しません）。
   * Use `renderPopup`. If you do, you don't need to set `hasDropdown` (that doesn't make any effect)
   * @deprecated
   */
  hasDropdown?: boolean;
  /**
   * `renderPopup` を使用してください。`renderPopup` を使う場合は `isExpanded` の指定は不要です（機能しません）。
   * Use `renderPopup`. If you do, you don't need to set `isExpanded` (that doesn't make any effect)
   *  @deprecated */
  isExpanded?: boolean;
} & MarginClassProps &
  CommonProps;

/**
 * 月ごとに作られるページなどの切り替えに使用します。
 *
 * - 左右に「前へ」「次へ」ボタンがあります
 * - 中央にタイトル部分があります。クリックすることでポップアップを開くことができます。
 */
const PageSelector: React.FC<Props> = (props: Props) => {
  const {
    prevDisabled,
    nextDisabled,
    onClickNext,
    onClickTitle,
    onClickPrev,
    children,
    renderPopup,
    hasDropdown,
    isExpanded,
    marginTop,
    marginRight,
    marginLeft,
    marginBottom,
    marginSize,
  } = props;
  return (
    <span
      {...commonProps(
        props,
        'vb-pageSelector',
        {},
        {
          marginTop,
          marginRight,
          marginLeft,
          marginBottom,
          marginSize,
        }
      )}
    >
      <IconOnlyButton
        IconComponent={MdKeyboardArrowLeft}
        onClick={onClickPrev}
        disabled={prevDisabled}
        label="前へ"
        mr={0.25}
        small
      />
      {renderPopup ? (
        <WithPopup
          render={(popupId, isOpen, controlRef) => (
            <Button
              aria-haspopup={true}
              aria-expanded={isOpen}
              onClick={onClickTitle}
              aria-controls={popupId}
              ref={
                controlRef as React.RefObject<
                  HTMLButtonElement | HTMLAnchorElement
                >
              }
              iconPosition="right"
              IconComponent={MdArrowDropDown}
              appearance="tertiary"
            >
              {children}
            </Button>
          )}
          renderPopup={renderPopup}
        />
      ) : hasDropdown ? (
        <Button
          aria-haspopup={true}
          aria-expanded={isExpanded}
          onClick={onClickTitle}
          iconPosition="right"
          IconComponent={MdArrowDropDown}
          appearance="tertiary"
        >
          {children}
        </Button>
      ) : onClickTitle ? (
        <Button onClick={onClickTitle} appearance="tertiary">
          {children}
        </Button>
      ) : (
        <span className="vb-pageSelector__currentPage">{children}</span>
      )}
      <IconOnlyButton
        IconComponent={MdKeyboardArrowRight}
        onClick={onClickNext}
        disabled={nextDisabled}
        label="次へ"
        ml={0.25}
        small
      />
    </span>
  );
};
export default PageSelector;
