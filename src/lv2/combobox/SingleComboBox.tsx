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
import NegativeMarginBase from '../../lv1/bases/NegativeMarginBase';
import useUniqueId from '../../hooks/useUniqueId';
import VisuallyHidden from '../../lv1/a11y/VisuallyHidden';
import Note from '../../lv1/typography/Note';
import ScrollPortal from '../../utilities/ScrollPortal';
import Loading from '../../lv1/Loading';
import { ItemLabel } from './ItemLabel';
import {
  SingleComboBoxOption,
  InternalComboBoxOption,
  FixedItems,
  useAdjustListPosition,
  createListBoxClassName,
} from './hooks';
import { useSingleComboBox, TrailingItem } from './hooks/singleComboBox';
import { pickFunctionalMarginProps } from '../../utilities/functionalMarginClasses';
import vbClassNames from '../../utilities/vbClassNames';
export type { ComboBoxOption, SingleComboBoxOption } from './hooks';

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
  | 'onFocus'
  | 'onBlur'
  | 'onInput'
  | 'onKeyDown'
  | 'borderless'
>;

type Props = {
  value?: SingleComboBoxOption;
  options: SingleComboBoxOption[];
  listWidth?: 'xSmall' | 'small' | 'medium' | 'large';
  emptyMessage?: React.ReactNode;
  isLoading?: boolean;
  onChange?: (option?: SingleComboBoxOption) => void;

  /**
   * @deprecated fixedItems を使用してください
   */
  trailingItem?: TrailingItem;
  /**
   * リストの最後尾に追加するアイテム 一つ目はもっと見る、二つ目新規登録を想定しています
   */
  fixedItems?: FixedItems;
  describedBy?: string;
} & PropsFromTextField &
  MarginClassProps &
  CommonProps;

function SingleComboBoxInner(
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
    width,
    listWidth,
    emptyMessage,
    isLoading,
    onChange,
    onFocus,
    onBlur,
    onInput,
    onKeyDown,
    trailingItem,
    fixedItems,
    borderless,
    describedBy,
  } = props;

  const {
    filteredOptions,
    isOpen,
    fieldValue,
    onFieldBlur,
    onFieldFocus,
    onFieldChange,
    onFieldKeyDown,
    selectedIndex,
    listOptionsRef,
    onSelectOption,
    selectedOptionRef,
  } = useSingleComboBox({
    value,
    options,
    onChange,
    onFocus,
    onBlur,
    onKeyDown,
    trailingItem,
    fixedItems,
  });
  const uniqueId = useUniqueId('vb-comboBox');
  const listBoxClassName = createListBoxClassName({ isOpen, listWidth, width });
  const { textFieldRef, listOptionsMaxHeight } = useAdjustListPosition(
    isOpen,
    ref
  );

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
        onBlur={onFieldBlur}
        onFocus={onFieldFocus}
        onChange={onFieldChange}
        onInput={onInput}
        onKeyDown={onFieldKeyDown}
        borderless={borderless}
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
        aria-describedby={`${describedBy || ''} ${uniqueId}__description`}
        aria-atomic={true}
        IconComponent={MdExpandMore}
        {...pickMarginClassProps(props)}
        {...pickFunctionalMarginProps(props)}
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
        <div // eslint-disable-line jsx-a11y/no-static-element-interactions
          id={`${uniqueId}__listbox`}
          className={listBoxClassName}
          role="listbox"
          tabIndex={-1}
          onMouseDown={(e: React.MouseEvent): void => e.preventDefault()} // blur抑止のため、やむをえずonMouseDownを書いてる
        >
          <PopupBase paddingSize="small">
            <NegativeMarginBase marginSize="small" top left bottom right>
              <Loading isLoading={!!isLoading}>
                {filteredOptions.length > 0 ? (
                  <div
                    className="vb-comboBox__listOptions"
                    ref={listOptionsRef}
                    style={{ maxHeight: listOptionsMaxHeight }}
                  >
                    {filteredOptions[0].fixedItemType === 'add' && (
                      <div className="vb-comboBox__emptyMessage">
                        <Note>
                          {emptyMessage || '該当する候補はありません'}
                        </Note>
                      </div>
                    )}
                    {filteredOptions.map(
                      (option: InternalComboBoxOption, i: number) => {
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
                            <ItemLabel
                              fixedItemOption={
                                fixedItems && { fixedItems, isSelected }
                              }
                              fieldValue={fieldValue}
                              option={option}
                              trailingItem={trailingItem}
                            />
                            {option.subLabel && (
                              <div className="vb-comboBox__listOptionSubLabel">
                                {option.subLabel}
                              </div>
                            )}
                          </div>
                        );
                      }
                    )}
                  </div>
                ) : (
                  <div className="vb-comboBox__emptyMessage">
                    <Note>{emptyMessage || '該当する候補はありません'}</Note>
                  </div>
                )}
              </Loading>
            </NegativeMarginBase>
          </PopupBase>
        </div>
      </ScrollPortal>
    </div>
  );
}

const SingleComboBox = React.forwardRef(SingleComboBoxInner);
export default SingleComboBox;
