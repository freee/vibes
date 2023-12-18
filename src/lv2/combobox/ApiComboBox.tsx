import * as React from 'react';
import { MdExpandMore } from 'react-icons/md';
import {
  MarginClassProps,
  pickMarginClassProps,
} from '../../utilities/marginClasses';
import commonProps, {
  CommonProps,
  pickCommonDataProps,
} from '../../utilities/commonProps';
import TextField from '../../lv1/forms/TextField';
import PopupBase from '../../lv1/bases/PopupBase';
import MarginBase from '../../lv1/bases/MarginBase';
import useUniqueId from '../../hooks/useUniqueId';
import VisuallyHidden from '../../lv1/a11y/VisuallyHidden';
import Note from '../../lv1/typography/Note';
import ScrollPortal from '../../utilities/ScrollPortal';
import { ItemLabel } from './ItemLabel';
import {
  SingleComboBoxOption,
  InternalComboBoxOption,
  useAdjustListPosition,
  createListBoxClassName,
  FetchParams,
  ApiMetaData,
} from './hooks';
import { useApiComboBoxInternal } from './hooks/apiComboBox';
import { LoadMoreItem } from './LoadMoreItem';
import InlineSpinner from '../../lv1/InlineSpinner';
import { CreateNewItem } from './CreateNewItem';
import { pickFunctionalMarginProps } from '../../utilities/functionalMarginClasses';
import vbClassNames from '../../utilities/vbClassNames';

export { useApiComboBox } from './hooks/apiComboBox';
export type { SingleComboBoxOption } from './hooks';
type PropsFromTextField = Pick<
  Parameters<typeof TextField>[0],
  | 'id'
  | 'label'
  | 'labelledby'
  | 'placeholder'
  | 'name'
  | 'required'
  | 'disabled'
  | 'error'
  | 'small'
  | 'large'
  | 'width'
  | 'onInput'
  | 'onKeyDown'
  | 'borderless'
>;

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
  value?: SingleComboBoxOption;
  options: SingleComboBoxOption[];
  listWidth?: 'xSmall' | 'small' | 'medium' | 'large';
  emptyMessage?: React.ReactNode;
  onChange?: (option?: SingleComboBoxOption) => void;
  onBlur?: (
    e: React.FormEvent,
    fetchParams: FetchParams,
    value?: SingleComboBoxOption
  ) => void;
  onFocus?: (
    e: React.FormEvent,
    fetchParams: FetchParams,
    isFieldChanged: boolean,
    value?: SingleComboBoxOption
  ) => void;
} & PropsFromTextField &
  MarginClassProps &
  CommonProps;

function ApiComboBoxInner(
  props: Props,
  ref?: React.Ref<HTMLInputElement> | React.MutableRefObject<HTMLInputElement>
): React.ReactElement {
  const {
    value,
    options,
    id,
    label,
    labelledby,
    placeholder,
    name,
    required,
    disabled,
    error,
    small,
    large,
    borderless,
    width,
    listWidth,
    emptyMessage,
    isLoading,
    onChange,
    onFocus,
    onBlur,
    onInput,
    onKeyDown,
    fetchItems,
    meta: { currentPage, totalPages },
    createNewItem,
  } = props;

  const uniqueId = useUniqueId('vb-comboBox');
  const {
    fieldValue,
    isLoadingMore,
    isOpen,
    listOptionsRef,
    loadMore,
    onFieldBlur,
    onFieldChange,
    onFieldFocus,
    onFieldKeyDown,
    onSelectOption,
    selectedIndex,
    selectedOptionRef,
  } = useApiComboBoxInternal({
    createNewItem,
    currentPage,
    fetchItems,
    onBlur,
    onChange,
    onFocus,
    onKeyDown,
    options,
    totalPages,
    value,
  });
  const listBoxClassName = createListBoxClassName({ isOpen, listWidth, width });
  const { textFieldRef, listOptionsMaxHeight } = useAdjustListPosition(
    isOpen,
    ref
  );
  const hasNextPages = currentPage < totalPages;
  const listIsEmpty = !isLoading && options.length === 0;
  const isLoadingAll = isLoading && !isLoadingMore;

  return (
    <div {...commonProps(pickCommonDataProps(props), 'vb-comboBox')}>
      <TextField
        ref={textFieldRef}
        value={fieldValue}
        id={id}
        label={label}
        labelledby={labelledby}
        name={name}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        error={error}
        small={small}
        large={large}
        width={width}
        borderless={borderless}
        onBlur={onFieldBlur}
        onFocus={onFieldFocus}
        onChange={onFieldChange}
        onInput={onInput}
        onKeyDown={onFieldKeyDown}
        role="combobox"
        autoComplete="off"
        aria-expanded={isOpen}
        aria-autocomplete="list"
        aria-controls={`${uniqueId}__listbox`}
        aria-haspopup="listbox"
        aria-activedescendant={
          selectedIndex >= 0 && isOpen
            ? `${uniqueId}__listOption__${selectedIndex}`
            : undefined
        }
        aria-describedby={`${uniqueId}__description`}
        aria-atomic={true}
        IconComponent={MdExpandMore}
        loading={isLoadingAll}
        {...pickFunctionalMarginProps(props)}
        {...pickMarginClassProps(props)}
      />
      <VisuallyHidden id={`${uniqueId}__description`}>
        上下キーで選択、Enterキーで確定できます
      </VisuallyHidden>
      <ScrollPortal
        isActive={isOpen}
        onOverflow={() => textFieldRef.current && textFieldRef.current.blur()}
        positionalBaseElement={textFieldRef.current}
        data-masking={props['data-masking']}
      >
        <div
          id={`${uniqueId}__listbox`}
          className={listBoxClassName}
          role="listbox"
          tabIndex={-1}
          onMouseDown={(e: React.MouseEvent): void => e.preventDefault()} // blur抑止のため、やむをえずonMouseDownを書いてる
        >
          <PopupBase paddingSize="small">
            <MarginBase ma={-1}>
              <div
                className="vb-comboBox__listOptions"
                ref={listOptionsRef}
                style={{ maxHeight: listOptionsMaxHeight }}
              >
                {!listIsEmpty ? (
                  options.map((option: InternalComboBoxOption, i: number) => {
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
                        <ItemLabel fieldValue={fieldValue} option={option} />
                        {option.subLabel && (
                          <div className="vb-comboBox__listOptionSubLabel">
                            {option.subLabel}
                          </div>
                        )}
                      </div>
                    );
                  })
                ) : isLoadingAll ? null : (
                  <div className="vb-comboBox__emptyMessage">
                    <Note>{emptyMessage || '該当する候補はありません'}</Note>
                  </div>
                )}

                {isLoadingMore ? (
                  <div className="vb-comboBox__spinner">
                    <InlineSpinner isLoading />
                  </div>
                ) : (
                  !isLoading &&
                  !listIsEmpty &&
                  hasNextPages && (
                    <LoadMoreItem
                      fieldValue={fieldValue}
                      isSelected={selectedIndex === options.length}
                      loadMore={loadMore}
                      selectedOptionRef={selectedOptionRef}
                      uniqueId={uniqueId}
                    />
                  )
                )}
                {createNewItem &&
                  !options.find(({ label }) => label === fieldValue) && (
                    <CreateNewItem
                      createNewItem={createNewItem}
                      fieldValue={fieldValue}
                      isSelected={
                        selectedIndex ===
                        options.length + (hasNextPages ? 1 : 0)
                      }
                      selectedOptionRef={selectedOptionRef}
                      uniqueId={uniqueId}
                    />
                  )}
              </div>
            </MarginBase>
          </PopupBase>
        </div>
      </ScrollPortal>
    </div>
  );
}

/**
 * SingleComboBox に API による検索とページネーションの機能を付与したコンポーネントです。
 *
 * * リソース管理のため、基本的には`useApiComboBox`を併用してください
 * * リスト内の項目が固定されている場合は`SingleComboBox`を使用してください。
 */
const ApiComboBox = React.forwardRef(ApiComboBoxInner);
export default ApiComboBox;
