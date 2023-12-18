import * as React from 'react';
import PagerButton from '../../lv1/buttons/PagerButton';
import PagerBreak from './PagerBreak';
import IconOnlyButton from '../../lv1/buttons/IconOnlyButton';
import VisuallyHidden from '../../lv1/a11y/VisuallyHidden';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import commonProps, { CommonProps } from '../../utilities/commonProps';

type Props = {
  /**
   * 現在何ページ目にいるか
   */
  currentPage: number;
  /**
   * 全部で何ページあるか
   */
  pageCount: number;
  /**
   * 現在のページを含め、何ページ分のボタンを表示するか（デフォルトは5）
   */
  pageRange?: number;

  /**
   * 最初と最後のページを何ページ分表示するか（デフォルトは1）
   */
  sidePageRange?: number;

  /**
   * Deactivates the page buttons / ページ遷移ボタンを無効化します
   */
  disabled?: boolean;

  onPageChange: (page: number) => void;
  small?: boolean;
} & CommonProps;

const DEFAULT_PAGE_RANGE = 5;
const DEFAULT_SIDE_PAGE_RANGE = 1;
const LEFT_BREAK = 'LEFT_BREAK';
const RIGHT_BREAK = 'RIGHT_BREAK';

// pageの重複を排除
function uniquePages(
  pages: Array<number | string | null>
): Array<number | string | null> {
  const result: Array<number | string | null> = [];
  pages.forEach((page) => {
    if (result.indexOf(page) < 0) {
      result.push(page);
    }
  });
  return result;
}

// buttonとbreakの並びを
// [1,2,LEFT_BREAK,5,6,7,8,9,RIGHT_BREAK,19,20] のように配列で取得
function createPages({
  currentPage,
  pageCount,
  pageRange,
  sidePageRange,
}: {
  currentPage: number;
  pageCount: number;
  pageRange: number;
  sidePageRange: number;
}): Array<number | string | null> {
  // 左端から...までのページ
  const leftSidePages = Array.from(
    { length: sidePageRange },
    (_, i) => i + 1
  ).filter((i) => i > 0 && i <= pageCount);

  // ...から...までのページ
  const centerPages = Array.from(
    { length: pageRange },
    (_, i) => i + currentPage - Math.floor(pageRange / 2)
  )
    .map((_, i) => i + currentPage - Math.floor(pageRange / 2))
    .map((i) => {
      // [-1,0,1,2,3] のようなケースは [1,2,3,4,5] に補正
      if (i < 1) {
        return i + pageRange;
      } else if (i > pageCount) {
        return i - pageRange;
      }
      return i;
    })
    .filter((i) => i > 0 && i <= pageCount)
    .sort((a, b) => a - b);

  // ...から右端までのページ
  const rightSidePages = Array.from(
    { length: sidePageRange },
    (_, i) => pageCount - i
  )
    .filter((i) => i > 0 && i <= pageCount)
    .reverse();

  const pages = [
    ...leftSidePages,
    leftSidePages[leftSidePages.length - 1] < centerPages[0] - 1
      ? LEFT_BREAK
      : null,
    ...centerPages,
    rightSidePages[0] > centerPages[centerPages.length - 1] + 1
      ? RIGHT_BREAK
      : null,
    ...rightSidePages,
  ].filter((i) => i);

  return uniquePages(pages);
}

/**
 * ページャー
 */
const Pager: React.FC<Props> = (props: Props) => {
  const {
    currentPage,
    disabled,
    onPageChange,
    pageCount,
    pageRange = DEFAULT_PAGE_RANGE,
    sidePageRange = DEFAULT_SIDE_PAGE_RANGE,
    small,
  } = props;
  return (
    <nav
      {...commonProps(props, 'vb-pager')}
      role="navigation"
      aria-label="ページ送り"
    >
      <div className="vb-pager__list">
        <IconOnlyButton
          label="前のページへ"
          onClick={(): void => {
            onPageChange(currentPage - 1);
          }}
          disabled={disabled || currentPage === 1}
          mr={1}
          small={small}
          IconComponent={MdKeyboardArrowLeft}
        />

        {createPages({ currentPage, pageCount, pageRange, sidePageRange }).map(
          (page) => {
            if (typeof page === 'number') {
              return (
                <PagerButton
                  key={page}
                  current={page === currentPage}
                  disabled={disabled}
                  onClick={(): void => {
                    page !== currentPage && onPageChange(page);
                  }}
                  marginLeft={page === 1}
                  marginRight
                  small={small}
                  label={`ページ ${page}`}
                >
                  <span>{page}</span>
                </PagerButton>
              );
            }

            return <PagerBreak key={`${page}`} />;
          }
        )}
        <IconOnlyButton
          label="次のページへ"
          onClick={(): void => {
            onPageChange(currentPage + 1);
          }}
          disabled={disabled || currentPage === pageCount}
          ml={1}
          small={small}
          IconComponent={MdKeyboardArrowRight}
        />
      </div>
      <VisuallyHidden autoRead>
        {`${pageCount}ページ中、${currentPage}ページ目を表示中`}
      </VisuallyHidden>
    </nav>
  );
};
export default Pager;
