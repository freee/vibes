import * as React from 'react';
import { MdExpandMore } from 'react-icons/md';
import { FocusHighlight, TextField, VisuallyHidden } from '../../lv1';
import vbClassNames from '../../utilities/vbClassNames';
import { MultiComboBoxOption } from './hooks';
import { MiniTag } from '../tagBox/MiniTag';

export type PropsFromTextField = Pick<
  Parameters<typeof TextField>[0],
  | 'id'
  | 'label'
  | 'labelledby'
  | 'placeholder'
  | 'name'
  | 'required'
  | 'disabled'
  | 'error'
  | 'width'
  | 'onFocus'
  | 'onBlur'
  | 'onInput'
  | 'onKeyDown'
  | 'borderless'
  // 以下未対応
  // | 'small'
  // | 'large'
>;

type WithBorderProps = {
  withBorder: boolean;
  children: React.ReactNode;
} & Pick<PropsFromTextField, 'width'>;

const WithBorder = ({ withBorder, width, children }: WithBorderProps) => {
  return withBorder ? (
    <FocusHighlight
      cornerStyle="round"
      width={width === 'full' ? 'full' : 'fit-content'}
    >
      {children}
    </FocusHighlight>
  ) : (
    <>{children}</>
  );
};

type Props = {
  baseClassName: string;
  originalId?: string;
  uniqueId: string;
  withBorder: boolean;
  borderRef: React.RefObject<HTMLSpanElement>;
  textFieldRef: React.MutableRefObject<HTMLInputElement>;
  isOpen: boolean;
  values?: MultiComboBoxOption[];
  textFieldValue: string;
  selectedIndex: number;
  maxSelectionCount?: number;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onFocus: React.FocusEventHandler<HTMLInputElement>;
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
  onRemoveOption: (option: MultiComboBoxOption) => void;
} & Pick<
  PropsFromTextField,
  | 'name'
  | 'width'
  | 'disabled'
  | 'error'
  | 'required'
  | 'onInput'
  | 'label'
  | 'labelledby'
>;

/**
 * MultiComboBoxで使う、TextFieldと選択内容（MiniTag）コンポーネント
 */
export const MultiComboBoxField = ({
  baseClassName,
  originalId,
  uniqueId,
  withBorder,
  borderRef,
  textFieldRef,
  isOpen,
  values = [],
  textFieldValue,
  selectedIndex,
  onBlur,
  onChange,
  onFocus,
  onKeyDown,
  onRemoveOption,
  name,
  width,
  disabled,
  error,
  required,
  onInput,
  label,
  labelledby,
  maxSelectionCount,
}: Props) => {
  return (
    <WithBorder withBorder={withBorder} width={width}>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
      <span
        className={vbClassNames(`${baseClassName}__border`, {
          modifier: {
            widthXSmall: width === 'xSmall',
            widthSmall: width === 'small',
            widthMedium: width === 'medium' || !width,
            widthLarge: width === 'large',
            widthFull: width === 'full',
            disabled,
            error,
          },
        })}
        onClick={() => textFieldRef.current?.focus()}
        ref={borderRef}
      >
        <span className={`${baseClassName}__flex`}>
          <VisuallyHidden autoRead>
            {values.length > 0
              ? `選択している項目: ${values.length}個${
                  maxSelectionCount
                    ? `(${maxSelectionCount}個まで選択できます)`
                    : ''
                }`
              : '選択している項目はありません'}
          </VisuallyHidden>
          <span className={`${baseClassName}__list`} role="list">
            {values.map((v) => (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
              <span
                className={`${baseClassName}__listItem`}
                role="listitem"
                key={v.id}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  !disabled && textFieldRef.current?.focus();
                }}
              >
                <MiniTag
                  disabledRemoveButton={disabled}
                  removable={true}
                  onRemove={() => onRemoveOption(v)}
                  type={v.type}
                  removeButtonTabIndex={-1}
                  color={v.color}
                >
                  {v.label}
                </MiniTag>
              </span>
            ))}
          </span>
          <span
            className={`${baseClassName}__field${
              maxSelectionCount && values.length >= maxSelectionCount
                ? ` ${baseClassName}__field--maxSelectionCountReached`
                : ''
            }`}
          >
            <TextField
              id={originalId}
              borderless
              role="combobox"
              ref={textFieldRef}
              value={textFieldValue}
              label={label}
              labelledby={labelledby}
              name={name}
              required={required}
              disabled={disabled}
              width="full"
              onChange={(e) => {
                (!maxSelectionCount || values.length < maxSelectionCount) &&
                  onChange(e);
              }}
              onInput={onInput}
              onFocus={onFocus}
              onBlur={onBlur}
              onKeyDown={onKeyDown}
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
            />
            <VisuallyHidden id={`${uniqueId}__description`}>
              {maxSelectionCount && values.length >= maxSelectionCount
                ? `${maxSelectionCount}個の項目を選択済みのため、これ以上追加できません`
                : '上下キーで選択、Enterキーで確定できます'}
            </VisuallyHidden>
          </span>
        </span>
      </span>
    </WithBorder>
  );
};
