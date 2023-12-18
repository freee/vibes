import * as React from 'react';
import { pickCommonProps, CommonProps } from '../../utilities/commonProps';
import SearchField from '../../lv1/forms/SearchField';
import WithPopup from '../withPopup/WithPopup';
import PopupBase from '../../lv1/bases/PopupBase';
import DropdownMenuContent from '../dropdown/DropdownMenuContent';
import {
  DropdownContentCheckbox,
  DropdownContentSelectable,
} from '../dropdown/types';
import Note from '../../lv1/typography/Note';
import { Keys } from '../../utilities/keyboard';
import Loading from '../../lv1/Loading';
import MarginBase from '../../lv1/bases/MarginBase';

type WithFilterableDropdownContentProps = {
  controlRef: React.RefObject<HTMLElement>;
  dropdownContents: FilterableDropdownContent[];
  filterValue: string;
  firstSelectableItemRef: React.RefObject<HTMLElement>;
  handleFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
  menuContentRef: React.RefObject<HTMLDivElement>;
  noDataMessage?: React.ReactNode;
  noResultsMessage?: React.ReactNode;
  renderDropdownBottomContent?: (requestClose: () => void) => React.ReactNode;
  requestClose: () => void;
  visibleContents: FilterableDropdownContent[];
};

const WithFilterableDropdownContent: React.FC<
  WithFilterableDropdownContentProps
> = (props: WithFilterableDropdownContentProps) => {
  const {
    controlRef,
    dropdownContents,
    filterValue,
    firstSelectableItemRef,
    handleFilterChange,
    isLoading,
    menuContentRef,
    noDataMessage,
    noResultsMessage,
    renderDropdownBottomContent,
    requestClose,
    visibleContents,
  } = props;

  const [menuMaxHeightOffset, setMenuMaxHeightOffset] = React.useState<
    number | undefined
  >();

  const bottomContentRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (bottomContentRef?.current) {
      setMenuMaxHeightOffset(
        bottomContentRef?.current?.getBoundingClientRect().height
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bottomContentRef?.current?.getBoundingClientRect().height]);

  return (
    <div className="vb-withFilterableDropdown__popup">
      <SearchField
        mb={1}
        label="検索"
        width="full"
        value={filterValue}
        onKeyDown={(e) => {
          if (
            // 変換中のイベントを無視する。isComposingがないブラウザでは（IEのこと）、全て無視する
            !('isComposing' in e.nativeEvent) ||
            e.nativeEvent.isComposing
          ) {
            return;
          }
          if (e.key === Keys.DOWN) {
            //下キーならメニューにフォーカス（すると1個めの項目にフォーカスする）
            menuContentRef.current?.focus();
            e.preventDefault();
          } else if (e.key === Keys.UP) {
            //上キーなら開閉ボタンにフォーカス
            controlRef.current?.focus();
            e.preventDefault();
          }
        }}
        onChange={handleFilterChange}
        ref={firstSelectableItemRef as React.RefObject<HTMLInputElement>}
      />
      {visibleContents.length > 0 ? (
        <MarginBase mr={-1} ml={-1}>
          <Loading isLoading={!!isLoading}>
            <DropdownMenuContent
              contents={visibleContents}
              menuMaxHeightOffset={
                renderDropdownBottomContent ? menuMaxHeightOffset : 0
              }
              onRequestClose={requestClose}
              onFocusOut={(direction) => {
                if (direction === 'upward') {
                  firstSelectableItemRef.current?.focus();
                } else {
                  if (renderDropdownBottomContent) {
                    // bottomContentRef.current?.focus();
                    controlRef.current?.focus();
                  } else {
                    controlRef.current?.focus();
                  }
                }
              }}
              ref={menuContentRef}
            />
          </Loading>
        </MarginBase>
      ) : !isLoading &&
        filterValue.length > 0 &&
        dropdownContents.length > 0 ? (
        <div className="vb-withFilterableDropdown__note">
          <Note textAlign="center">
            {noResultsMessage ?? '該当する候補がありません'}
          </Note>
        </div>
      ) : (
        <div className="vb-withFilterableDropdown__note">
          <Note textAlign="center">
            {noDataMessage ?? 'データが登録されていません'}
          </Note>
        </div>
      )}
      {renderDropdownBottomContent && (
        <div
          className="vb-withFilterableDropdown__footer"
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
          tabIndex={0}
          ref={bottomContentRef as React.RefObject<HTMLInputElement>}
        >
          {renderDropdownBottomContent(requestClose)}
        </div>
      )}
    </div>
  );
};

type FixedItem = {
  disableOnRequestClose?: boolean;
  isVisible: (filterValue: string) => boolean;
  label: React.ReactNode | ((filterValue: string) => React.ReactNode);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSelect: (filterValue: string) => any;
};

export type FilterableDropdownContent = (
  | DropdownContentCheckbox
  | DropdownContentSelectable
) & {
  /**
   * 項目の読みがなやショートカットコードを指定してください（複数指定可能）
   */
  keywords?: string[];
};
type Props = Pick<Parameters<typeof WithPopup>[0], 'render' | 'disabled'> & {
  /**
   * メニューの項目です。`keywords` として、複数の読みがなやショートカットコードを指定できます。
   */
  dropdownContents: FilterableDropdownContent[];
  /**
   * `SearchField` の変化時に発火します
   */
  onFilterChange?: React.ChangeEventHandler<HTMLInputElement>;
  /**
   * Dropdownの展開時に発火します
   */
  onOpen?: () => void;
  /**
   * スピナーを表示します。
   */
  isLoading?: boolean;
  /**
   * リストの最後尾に追加するアイテム 一つ目はもっと見る、二つ目新規登録を想定しています
   */
  fixedItems?: FixedItem[];
  noResultsMessage?: React.ReactNode;
  noDataMessage?: React.ReactNode;
  renderDropdownBottomContent?: (requestClose: () => void) => React.ReactNode;
} & CommonProps;

/**
 * ボタン部分のカスタマイズがどうしても必要な場合を除いて `FilterableDropdownButton` を使用してください。
 */
const WithFilterableDropdown: React.FC<Props> = (props: Props) => {
  const {
    disabled,
    dropdownContents,
    fixedItems = [],
    isLoading,
    onFilterChange,
    onOpen,
    render,
    noResultsMessage,
    noDataMessage,
    renderDropdownBottomContent,
  } = props;
  const [filterValue, setFilterValue] = React.useState('');
  const menuContentRef = React.useRef<HTMLDivElement>(null);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
    onFilterChange && onFilterChange(e);
  };

  const filteredContents =
    filterValue.length > 0
      ? dropdownContents.filter(
          (c) =>
            (c.type === 'checkbox' && c.checked) ||
            (typeof c.text === 'string' && c.text.indexOf(filterValue) >= 0) ||
            (c.keywords &&
              c.keywords.some((k) =>
                filterValue
                  .toLowerCase()
                  .split(/\s+/)
                  .every((word) => k.toLowerCase().indexOf(word) >= 0)
              ))
        )
      : dropdownContents;

  const visibleContents = [
    ...filteredContents,
    ...fixedItems
      .filter((fixedItem) => fixedItem.isVisible(filterValue))
      .map(
        ({ label, onSelect, disableOnRequestClose }) =>
          ({
            type: 'selectable',
            text: typeof label === 'function' ? label(filterValue) : label,
            onClick: () => onSelect(filterValue),
            disableOnRequestClose,
          } as DropdownContentSelectable)
      ),
  ];

  const memorizedOnClose = React.useCallback(
    () => setFilterValue(''),
    [setFilterValue]
  );

  return (
    <WithPopup
      onClose={memorizedOnClose}
      render={render}
      disabled={disabled}
      onOpen={onOpen}
      renderPopup={(requestClose, firstSelectableItemRef, controlRef) => (
        <PopupBase paddingSize="zero">
          <WithFilterableDropdownContent
            handleFilterChange={handleFilterChange}
            visibleContents={visibleContents}
            isLoading={!!isLoading}
            firstSelectableItemRef={firstSelectableItemRef}
            menuContentRef={menuContentRef}
            controlRef={controlRef}
            filterValue={filterValue}
            dropdownContents={dropdownContents}
            noResultsMessage={noResultsMessage}
            noDataMessage={noDataMessage}
            requestClose={requestClose}
            renderDropdownBottomContent={renderDropdownBottomContent}
          />
        </PopupBase>
      )}
      {...pickCommonProps(props)}
    />
  );
};

export default WithFilterableDropdown;
