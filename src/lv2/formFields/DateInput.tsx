import * as React from 'react';
import { MdDateRange } from 'react-icons/md';
import TextField from '../../lv1/forms/TextField';
import {
  MarginClassProps,
  pickMarginClassProps,
} from '../../utilities/marginClasses';
import commonProps, {
  CommonProps,
  pickCommonDataProps,
} from '../../utilities/commonProps';
import Datepicker from '../../lv2/calendar/DatePicker';
import { parse, addDays, isValid, format } from 'date-fns';
import { Keys } from '../../utilities/keyboard';
import {
  isValidDateInRange,
  formatDate,
  getValidDateNearestTarget,
  formatDayOfWeek,
} from '../../utilities/date';
import PopupBase from '../../lv1/bases/PopupBase';
import useUniqueId from '../../hooks/useUniqueId';
import VisuallyHidden from '../../lv1/a11y/VisuallyHidden';
import ScrollPortal from '../../utilities/ScrollPortal';
import { FocusTrap } from '../../lv1';
import { pickFunctionalMarginProps } from '../../utilities/functionalMarginClasses';

const DATE_FORMAT = /^\d{4}[-/\s]?\d{2}[-/\s]?\d{2}$/;

/** @deprecated
 `xSmall` と `small` を使うと日付が隠れてしまうので原則使わないでください
*/
type DeprecatedWidth = 'xSmall' | 'small';
type FieldWidth = 'medium' | 'large' | 'full' | DeprecatedWidth;

type Props = {
  value?: Date | string;
  id?: string;
  label?: string;
  labelledby?: string;
  placeholder?: string;
  name?: string;
  required?: boolean;
  autofocus?: boolean;
  disabled?: boolean;
  error?: boolean;
  small?: boolean;
  minDate?: string;
  maxDate?: string;
  /**
   * `medium` `large` `full` を使用してください。
   * `xSmall` `small` は日付が隠れてしまうため、使用しないでください
   */
  width?: FieldWidth;
  onChange?: (date: string) => void;
  onFocus?: React.FormEventHandler;
  onBlur?: React.FormEventHandler;
  onInput?: React.FormEventHandler;
  onKeyDown?: React.KeyboardEventHandler;
} & MarginClassProps &
  CommonProps;

const DateInputInner = (
  props: Props,
  ref?: React.Ref<HTMLInputElement> | React.MutableRefObject<HTMLInputElement>
): React.ReactElement => {
  const {
    value,
    minDate,
    maxDate,
    id,
    label,
    labelledby,
    placeholder,
    name,
    required,
    autofocus,
    disabled,
    error,
    small,
    width,
    onChange,
    onFocus,
    onBlur,
    onInput,
    onKeyDown,
  } = props;

  const [showingValue, setShowingValue] = React.useState(
    value && isValidDateInRange(value, minDate, maxDate)
      ? formatDate(value)
      : ''
  );

  const [showPicker, setShowPicker] = React.useState(false);

  const [horizontalPosition, setHorizontalPosition] = React.useState<
    'left' | 'right'
  >('left');

  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const datePickerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!showPicker) {
      return;
    }
    const handleClickOutside = (e: MouseEvent) => {
      // Shadow DOM 内部で発火した場合、e.target は ShadowRoot になるので、composedPath() で最初の要素を取得する
      const target =
        !!window.ShadowRoot &&
        e.target instanceof Element &&
        e.target.shadowRoot instanceof ShadowRoot
          ? e.composedPath()[0]
          : e.target;

      // 外側を押した時、DatePicker を閉じる
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(target as Node) &&
        datePickerRef.current &&
        !datePickerRef.current.contains(target as Node)
      ) {
        setShowPicker(false);
      }
    };
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPicker]);

  const onFieldFocus: React.FocusEventHandler = (e) => {
    setShowPicker(true);
    onFocus && onFocus(e);
  };

  const onDateChange = (date: string | Date): void => {
    setShowingValue(formatDate(date));
    if (onChange) {
      if (isValidDateInRange(date, minDate, maxDate)) {
        onChange(formatDate(date));
      } else {
        onChange('');
      }
    }
  };

  const onFieldChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setShowingValue(e.target.value);
    if (e.target.value.length === 0) {
      onDateChange('');
    } else if (e.target.value.match(DATE_FORMAT)) {
      onDateChange(e.target.value);
    }
  };

  const onFieldBlur: React.FocusEventHandler = (e) => {
    if (value && isValidDateInRange(value)) {
      setShowingValue(formatDate(value));
    } else {
      setShowingValue('');
    }
    setShowPicker(false);
    onBlur && onBlur(e);
  };

  const moveDays = (days: number) => {
    // ユーザーの現在の入力値または現在日付
    const parsedDate = showingValue ? parse(showingValue) : new Date();
    // parsedDateにdaysを足して、rangeの範囲内であればそこに移動する
    if (isValidDateInRange(addDays(parsedDate, days), minDate, maxDate)) {
      onDateChange(formatDate(addDays(parsedDate, days)));
    } else {
      // 範囲の外になりそうな場合は、範囲内の最も現在日付に近い日付に移動する
      const tempDate = getValidDateNearestTarget(parsedDate, minDate, maxDate);
      tempDate && onDateChange(tempDate);
    }
  };

  const onFieldKeyDown: React.KeyboardEventHandler = (e) => {
    setShowPicker(true);
    switch (e.key) {
      case Keys.UP:
      case 'h':
        moveDays(-1);
        e.preventDefault();
        break;
      case Keys.DOWN:
      case 'l':
        moveDays(1);
        e.preventDefault();
        break;
      case 'k':
        moveDays(-7);
        e.preventDefault();
        break;
      case 'j':
        moveDays(7);
        e.preventDefault();
        break;
    }
    onKeyDown && onKeyDown(e);
  };

  const fieldRef = React.useRef<HTMLInputElement>();
  const createFieldRef = React.useCallback(
    (node: HTMLInputElement) => {
      fieldRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLInputElement>).current = node;
      }
    },
    [ref]
  );

  const popupRef = React.useRef<HTMLDivElement>(null);

  const adjustPosition = () => {
    if (!(fieldRef.current && popupRef.current)) {
      return;
    }
    const fieldRect = fieldRef.current.getBoundingClientRect();
    const popupRect = popupRef.current.getBoundingClientRect();

    setHorizontalPosition(
      fieldRect.left + popupRect.width > window.innerWidth ? 'right' : 'left'
    );
  };

  React.useLayoutEffect(() => {
    adjustPosition();
  }, [showPicker]);

  React.useEffect(() => {
    // 非Focus時のみ値の更新をする
    if (!showPicker) {
      if (value && isValidDateInRange(value)) {
        setShowingValue(formatDate(value));
      } else {
        setShowingValue('');
      }
    }
  }, [value, showPicker]);

  const uniqueId = useUniqueId('vb-dateInput');
  const parsedShowingValue =
    showingValue && showingValue.match(DATE_FORMAT) && parse(showingValue);
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      id={uniqueId}
      ref={wrapperRef}
      {...commonProps(pickCommonDataProps(props), 'vb-dateInput')}
      onClick={(e) => {
        !disabled && setShowPicker(true); // テキストフィールドがクリックされたっぽい時に、DatePickerを再度表示する
        e.stopPropagation();
      }}
    >
      <TextField
        id={id} // テキストボックスはpropsで渡されたidをもつ（<label>等のため）
        label={label}
        labelledby={labelledby}
        placeholder={placeholder}
        name={name}
        required={required}
        autofocus={autofocus}
        disabled={disabled}
        error={error}
        small={small}
        width={width}
        value={showingValue}
        onChange={onFieldChange}
        onFocus={onFieldFocus}
        onBlur={onFieldBlur}
        onInput={onInput}
        onKeyDown={onFieldKeyDown}
        role="combobox"
        aria-expanded={showPicker}
        aria-autocomplete="list"
        aria-controls={`${uniqueId}__listbox`}
        aria-haspopup="listbox"
        aria-describedby={`${uniqueId}__description`}
        aria-atomic={true}
        ref={createFieldRef}
        autoComplete="off"
        IconComponent={MdDateRange}
        iconLabel={showPicker ? 'カレンダーを非表示' : 'カレンダーを表示'}
        onIconClick={(e) => {
          e.stopPropagation();
          if (showPicker) {
            setShowPicker(false);
          } else {
            setShowPicker(true);
            setTimeout(() => popupRef.current?.focus());
          }
        }}
        iconAriaProps={{
          'aria-haspopup': true,
          'aria-expanded': showPicker,
          'aria-controls': `${uniqueId}__listbox`,
        }}
        {...pickFunctionalMarginProps(props)}
        {...pickMarginClassProps(props)}
      />
      <VisuallyHidden>
        <span id={`${uniqueId}__description`}>
          上下キーで前の日、後の日を選択できます
        </span>
      </VisuallyHidden>
      <ScrollPortal
        positionalBaseElement={fieldRef.current || undefined}
        isActive={showPicker}
        onOverflow={() => {
          setShowPicker(false);
          fieldRef.current?.blur();
        }}
        horizontalPosition={horizontalPosition}
        data-masking={props['data-masking']}
      >
        <FocusTrap
          onFocusOutsideTop={() => true}
          onFocusOutsideBottom={() => true}
          onFocusInsideBottom={() => {
            showPicker && fieldRef.current?.focus();
            return true;
          }}
          onFocusInsideTop={() => {
            showPicker && fieldRef.current?.focus();
            return true;
          }}
        >
          <div // eslint-disable-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
            // blur抑止のため、やむをえずonMouseDownを書いてる
            className={`vb-dateInput__listbox${
              horizontalPosition === 'right'
                ? ' vb-dateInput__listbox--rightAligned'
                : ''
            }`}
            onMouseDown={(e): void => e.preventDefault()}
            onClick={(e) => e.stopPropagation()}
            tabIndex={-1}
            aria-hidden={!showPicker}
            id={`${uniqueId}__listbox`}
            role="region"
            aria-label="カレンダーで日付を選択"
            aria-describedby={`${uniqueId}__popupDescription`}
            ref={popupRef}
            onKeyDown={(e) => {
              switch (e.key) {
                case Keys.ESC:
                case Keys.ENTER:
                  fieldRef.current?.focus();
                  setTimeout(() => {
                    setShowPicker(false);
                  });
                  break;
                case Keys.DOWN:
                case 'j':
                  moveDays(7);
                  e.preventDefault();
                  break;
                case Keys.UP:
                case 'k':
                  moveDays(-7);
                  e.preventDefault();
                  break;
                case Keys.RIGHT:
                case 'l':
                  moveDays(1);
                  e.preventDefault();
                  break;
                case Keys.LEFT:
                case 'h':
                  moveDays(-1);
                  e.preventDefault();
                  break;
              }
            }}
          >
            {showPicker && (
              <PopupBase paddingSize="zero">
                <VisuallyHidden id={`${uniqueId}__popupDescription`}>
                  上下左右キーでカレンダー内の日付を選択できます。左右キーで1日単位で移動、上下キーで7日単位で移動します。
                </VisuallyHidden>
                <VisuallyHidden autoRead>
                  {parsedShowingValue
                    ? isValid(parsedShowingValue)
                      ? `${format(
                          parsedShowingValue,
                          'YYYY年M月D日'
                        )} ${formatDayOfWeek(
                          parsedShowingValue
                        )} が入力されています`
                      : ''
                    : '日付が選択されていません'}
                </VisuallyHidden>
                {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                <div
                  onKeyDown={(e) => {
                    // 前の月/次の月ボタンの押下時にポップアップが閉じないよう、ここでガードする
                    if (e.key === Keys.ENTER) {
                      e.stopPropagation();
                    }
                  }}
                >
                  <Datepicker
                    date={value}
                    minDate={minDate}
                    maxDate={maxDate}
                    ref={datePickerRef}
                    onDateClick={(d): void => {
                      fieldRef.current?.focus();
                      onDateChange(d);
                      setTimeout(() => {
                        setShowPicker(false);
                      });
                    }}
                  />
                </div>
              </PopupBase>
            )}
          </div>
        </FocusTrap>
      </ScrollPortal>
    </div>
  );
};

/**
 * テキストフィールドになっている日付入力フィールドです。フォーカスまたはアイコンのクリックによりカレンダーを表示し、ユーザーはカレンダーから日付を選んだり、テキストとして編集したりすることができます。
 *
 * - `DateInput`は「現在の日付から前後1年以内」などの近い日付を入力することが多い場合に使用してください
 *   - 生年月日など、年単位で離れた日付を入力する場合には、`DateField` を使用してください。
 *     `DateField` はセレクトボックスで年を選べるため、年単位で離れた年月日を入力するのに最適です。
 */
const DateInput = React.forwardRef(DateInputInner);
export default DateInput;
