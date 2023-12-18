import * as React from 'react';
import { PopupBase, Loading, Note } from '../../lv1';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import ScrollPortal from '../../utilities/ScrollPortal';
import useUniqueId from '../../hooks/useUniqueId';

import {
  createListBoxClassName,
  MultiComboBoxOption,
  useAdjustListPosition,
  useMultiComboBox,
} from './hooks';
import { ItemLabel } from './ItemLabel';
import { MultiComboBoxField, PropsFromTextField } from './MultiComboBoxField';
import vbClassNames from '../../utilities/vbClassNames';
export type { MultiComboBoxOption } from './hooks';

// FIXME: これvibesの外に公開されているのおかしいのでexportやめたい。(型定義は MultiComboBoxFieldのファイルに移動してあるので、あとでこの行を消す)
export type { PropsFromTextField } from './MultiComboBoxField';

type Props = {
  values?: MultiComboBoxOption[];
  options: MultiComboBoxOption[];
  /**
   * 選択できる項目の最大数を指定します。無指定または `0` を指定した場合、いくつでも選択できるようになります
   */
  maxSelectionCount?: number;
  listWidth?: 'xSmall' | 'small' | 'medium' | 'large';
  emptyMessage?: string;
  isLoading?: boolean;
  onChange?: (values: MultiComboBoxOption[]) => void;
} & PropsFromTextField &
  CommonProps;

const baseClassName = 'vb-multiComboBox';

const MultiComboBoxInternal = (
  {
    values = [],
    options,
    isLoading,
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
    maxSelectionCount,
    ...props
  }: Props,
  ref: React.Ref<HTMLInputElement>
) => {
  const {
    fieldValue: textFieldValue,
    setFieldValue: setTextFieldValue,
    isOpen,
    setOpen,
    selectedIndex,
    setSelectedIndex,
    borderRef,
    selectedOptionRef,
    listOptionsRef,
    filteredOptions,
    onSelectOption,
    onRemoveOption,
    handleKeyDown,
  } = useMultiComboBox({
    values,
    options,
    onChange,
    onKeyDown,
    maxSelectionCount,
    alreadyFilteredByFieldValue: false,
  });

  const uniqueId = useUniqueId(id || baseClassName);
  const { textFieldRef, listOptionsMaxHeight } = useAdjustListPosition(
    isOpen,
    ref
  );
  const listBoxClassName = createListBoxClassName({ isOpen, listWidth, width });

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
        isOpen={isOpen}
        values={values}
        textFieldValue={textFieldValue}
        selectedIndex={selectedIndex}
        maxSelectionCount={maxSelectionCount}
        onBlur={(e) => {
          setOpen(false);
          setTextFieldValue('');
          if (onBlur) {
            onBlur(e);
          }
        }}
        onChange={(e) => {
          setTextFieldValue(e.target.value);
          setSelectedIndex(0);
        }}
        onFocus={(e) => {
          (!maxSelectionCount || values.length < maxSelectionCount) &&
            setOpen(true);
          if (onFocus) {
            onFocus(e);
          }
        }}
        onKeyDown={(e) => {
          handleKeyDown(e);
        }}
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
            <Loading isLoading={!!isLoading}>
              {filteredOptions.length > 0 ? (
                <div
                  className="vb-comboBox__listOptions"
                  ref={listOptionsRef}
                  style={{ maxHeight: listOptionsMaxHeight }}
                >
                  {filteredOptions.map((option, i) => {
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
                          fieldValue={textFieldValue}
                          option={option}
                        />
                        {option.type && (
                          <div className="vb-comboBox__listOptionSubLabel">
                            {option.type}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="vb-comboBox__emptyMessage">
                  <Note>{emptyMessage || '該当する候補はありません'}</Note>
                </div>
              )}
            </Loading>
          </PopupBase>
        </div>
      </ScrollPortal>
    </span>
  );
};

/**
 * 複数の項目を選択したり、種別をまたいで選択したりできるコンボボックスです
 *
 * - 選択できる項目が単一で、種別をまたがない場合には `SingleComboBox` または `ApiComboBox` の使用も検討してください
 *   - 「他の場所で MultiComboBox を使用している種別である」など、単一種別・単一項目を選択であってもMultiComboBoxの使用が妥当だと判断できる場合は MultiComboBox を使用しても問題ありません
 * - 選択した候補には `RE` `OR` `YE` `YG` `GR` `BG` `PU` `GY` の色を指定できます。種別ごとに一貫した色を使用してください。
 * - API経由での項目の取得が必要となる場合は `ApiMultiComboBox` の使用も検討してください
 */
export const MultiComboBox = React.forwardRef(MultiComboBoxInternal);
