import * as React from 'react';
import { PopupBase, Note, InlineSpinner } from '../../lv1';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import ScrollPortal from '../../utilities/ScrollPortal';
import useUniqueId from '../../hooks/useUniqueId';
import { LoadMoreItem } from './LoadMoreItem';
import { CreateNewItem } from './CreateNewItem';
import { ItemLabel } from './ItemLabel';
import { PropsFromTextField } from './MultiComboBox';
import { MultiComboBoxField } from './MultiComboBoxField';
import {
  ApiMetaData,
  createListBoxClassName,
  FetchParams,
  MultiComboBoxOption,
  useAdjustListPosition,
} from './hooks';
import { useApiMultiComboBoxInternal } from './hooks/apiMultiComboBox';
import vbClassNames from '../../utilities/vbClassNames';

export { useApiMultiComboBox } from './hooks/apiMultiComboBox';
export type { ApiMetaData } from './hooks';
export type { MultiComboBoxOption } from './hooks';

const baseClassName = 'vb-multiComboBox';

type Props = {
  /**
   * コンボボックスに表示するためのデータを取得するメソッドです。
   * 検索やページネーションのタイミングで呼び出されます。
   */
  fetchItems: (params: FetchParams) => Promise<any>;
  /**
   * APIのローディング状態です。trueの間はコンボボックス上にスピナーが表示されます。
   */
  isLoading: boolean;
  /**
   * ページネーションのためのメタ情報です。
   */
  meta: ApiMetaData;
  /**
   * 新規登録時のハンドラです。新規登録を表示するか否かの判定も兼ねています。
   */
  createNewItem?: (fieldValue: string) => void;
  values?: MultiComboBoxOption[];
  options: MultiComboBoxOption[];
  maxSelectionCount?: number;
  listWidth?: 'xSmall' | 'small' | 'medium' | 'large';
  emptyMessage?: string;
  onChange?: (values: MultiComboBoxOption[]) => void;
  onBlur?: (
    e: React.FormEvent,
    fetchParams: FetchParams,
    values?: MultiComboBoxOption[]
  ) => void;
  onFocus?: () => void;
} & Omit<PropsFromTextField, 'onFocus' | 'onBlur'> &
  CommonProps;

/**
 * `MultiComboBox` に API による検索とページネーションの機能を付与したコンポーネントです。使い方・使い分けについては `MultiComboBox` も参照してください
 *
 * * リソース管理のため、基本的には`useApiMultiComboBox`を併用してください
 * * リスト内の項目が固定されている場合は`MultiComboBox`を使用してください。
 */
export default function ApiMultiComboBox(props: Props): React.ReactElement {
  const {
    fetchItems,
    isLoading,
    meta: { currentPage, totalPages },
    createNewItem,
    values = [],
    options,
    maxSelectionCount,
    emptyMessage,
    listWidth,
    id,
    label,
    labelledby,
    name,
    required,
    disabled,
    width,
    error,
    borderless,
    onBlur,
    onFocus,
    onInput,
    onKeyDown,
    onChange,
  } = props;

  const uniqueId = useUniqueId(id || baseClassName);
  const {
    filteredOptions,
    isLoadingMore,
    loadMore,
    fieldValue: textFieldValue,
    isOpen,
    setOpen,
    selectedIndex,
    listOptionsRef,
    selectedOptionRef,
    borderRef,
    onFieldBlur,
    onFieldChange,
    onFieldFocus,
    onFieldKeyDown,
    onSelectOption,
    onRemoveOption,
    onClickNewItem,
  } = useApiMultiComboBoxInternal({
    createNewItem,
    currentPage,
    fetchItems,
    onBlur,
    onChange,
    onFocus,
    onKeyDown,
    options,
    totalPages,
    values,
    maxSelectionCount,
  });

  const listBoxClassName = createListBoxClassName({ isOpen, listWidth, width });
  const { textFieldRef, listOptionsMaxHeight } = useAdjustListPosition(isOpen);
  const hasNextPages = currentPage < totalPages;
  const listIsEmpty = !isLoading && filteredOptions.length === 0;
  const isLoadingAll = isLoading && !isLoadingMore;

  React.useEffect(() => {
    if (maxSelectionCount) {
      if (
        document.activeElement?.isSameNode(textFieldRef.current) &&
        values.length < maxSelectionCount
      ) {
        setOpen(true);
      }
      if (values.length >= maxSelectionCount) {
        setOpen(false);
      }
    }
  }, [values, maxSelectionCount, textFieldRef, setOpen]);

  return (
    <span
      {...commonProps(props, baseClassName, {
        widthXSmall: width === 'xSmall',
        widthSmall: width === 'small',
        widthMedium: width === 'medium' || !width,
        widthLarge: width === 'large',
        widthFull: width === 'full',
      })}
    >
      <MultiComboBoxField
        baseClassName={baseClassName}
        originalId={id}
        uniqueId={uniqueId}
        withBorder={!borderless}
        borderRef={borderRef}
        textFieldRef={textFieldRef}
        selectedIndex={selectedIndex}
        isOpen={isOpen}
        values={values}
        maxSelectionCount={maxSelectionCount}
        textFieldValue={textFieldValue}
        onBlur={onFieldBlur}
        onChange={onFieldChange}
        onFocus={onFieldFocus}
        onKeyDown={onFieldKeyDown}
        onRemoveOption={onRemoveOption}
        name={name}
        width={width}
        disabled={disabled}
        error={error}
        required={required}
        onInput={onInput}
        label={label}
        labelledby={labelledby}
      />
      <ScrollPortal
        isActive={isOpen}
        onOverflow={() => textFieldRef.current && textFieldRef.current.blur()}
        positionalBaseElement={borderRef.current || undefined}
        data-masking={props['data-masking']}
      >
        <div // eslint-disable-line jsx-a11y/no-static-element-interactions
          id={`${uniqueId}__listbox`}
          className={listBoxClassName}
          role="listbox"
          tabIndex={-1}
          onMouseDown={(e: React.MouseEvent): void => e.preventDefault()} // blur抑止のため、やむをえずonMouseDownを書いてる
        >
          <PopupBase paddingSize="zero">
            <div
              className="vb-comboBox__listOptions"
              ref={listOptionsRef}
              style={{ maxHeight: listOptionsMaxHeight }}
            >
              {isLoadingAll ? null : listIsEmpty ? (
                <div className="vb-comboBox__emptyMessage">
                  <Note>{emptyMessage || '該当する候補はありません'}</Note>
                </div>
              ) : (
                filteredOptions.map((option, i) => {
                  const isSelected = i === selectedIndex;
                  return (
                    /* eslint-disable-next-line jsx-a11y/click-events-have-key-events */
                    <div
                      id={`${uniqueId}__listOption__${i}`}
                      key={i}
                      className={vbClassNames('vb-comboBox__listOption', {
                        modifier: {
                          selected: isSelected,
                          disabled: option.disabled,
                        },
                      })}
                      role="option"
                      aria-selected={!(option.disabled || !isSelected)}
                      aria-disabled={option.disabled}
                      tabIndex={-1}
                      onClick={(): void => onSelectOption(option)}
                      ref={isSelected ? selectedOptionRef : undefined}
                    >
                      <ItemLabel fieldValue={textFieldValue} option={option} />
                      {option.type && (
                        <div className="vb-comboBox__listOptionSubLabel">
                          {option.type}
                        </div>
                      )}
                    </div>
                  );
                })
              )}
              {isLoading ? (
                <div className="vb-comboBox__spinner">
                  <InlineSpinner isLoading />
                </div>
              ) : (
                hasNextPages && (
                  <LoadMoreItem
                    fieldValue={textFieldValue}
                    isSelected={selectedIndex === filteredOptions.length}
                    loadMore={loadMore}
                    selectedOptionRef={selectedOptionRef}
                    uniqueId={uniqueId}
                  />
                )
              )}
              {createNewItem &&
                ![...values, ...filteredOptions].find(
                  ({ label }) => label === textFieldValue
                ) && (
                  <CreateNewItem
                    createNewItem={onClickNewItem}
                    fieldValue={textFieldValue}
                    isSelected={
                      selectedIndex ===
                      filteredOptions.length + (hasNextPages ? 1 : 0)
                    }
                    selectedOptionRef={selectedOptionRef}
                    uniqueId={uniqueId}
                  />
                )}
            </div>
          </PopupBase>
        </div>
      </ScrollPortal>
    </span>
  );
}
