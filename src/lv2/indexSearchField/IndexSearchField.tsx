import * as React from 'react';
import { MdSearch } from 'react-icons/md';
import vbClassNames from '../../utilities/vbClassNames';
import { MarginClassProps } from '../../utilities/marginClasses';
import { FormHandlers } from '../../lv1/forms/types';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import PopupBase from '../../lv1/bases/PopupBase';
import { Text } from '../../lv1/typography/Text';

type Props = {
  /**
   * label id を指定します
   */
  id?: string;
  /**
   * input aria-label を指定します
   */
  label?: string;
  /**
   * input aria-labelledby を指定します
   */
  labelledby?: string;
  /**
   * input placeholder を指定します
   */
  placeholder?: string;
  /**
   * input name を指定します
   */
  name?: string;
  /**
   * input value を指定します
   */
  value?: string;
  /**
   * input required を指定します
   */
  required?: boolean;
  /**
   * input autofocus を指定します
   */
  autofocus?: boolean;
  /**
   * disabled 状態にします
   */
  disabled?: boolean;
  /**
   * 幅を指定します
   */
  width?: 'xSmall' | 'small' | 'medium' | 'large' | 'full';
  /**
   * input maxlength を指定します
   */
  maxLength?: number;
  /**
   * 検索文字列を更新し、確定したときに発火します
   * 検索文字列の確定は、入力欄のフォーカスを外したときと、入力中にEnterキーを押下したとき、対象表示ポップアップを選択したときです
   */
  onUpdate?: (searchWord?: string | undefined) => void;
  /**
   * 検索対象の項目名一覧を文字列配列で渡す
   * 例: ['取引先名', '備考', 'email', '従業員名']
   */
  searchTarget?: string[];
  /**
   * 入力欄を常に開いた状態にします
   * モバイルサイズなど限定的な状況で常に開きたい場合に使用してください
   */
  forceOpen?: boolean;
} & FormHandlers<HTMLInputElement> &
  MarginClassProps &
  CommonProps;

const IndexSearchFieldInner = (
  props: Props,
  ref: React.Ref<HTMLInputElement>
): React.ReactElement => {
  const {
    id,
    label,
    labelledby,
    placeholder,
    name,
    value,
    required,
    autofocus,
    disabled,
    width,
    maxLength,
    onUpdate,
    searchTarget,
    forceOpen,
    onChange,
    onInput,
    onFocus,
    onBlur,
    onKeyDown,
    onKeyUp,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    marginSize,
  } = props;

  const [searchWord, setSearchWord] = React.useState<string>(value || '');
  // 検索入力欄が開いている（縮小表示されずに文字入力できる）
  const [isSearchAreaOpen, setIsSearchAreaOpen] = React.useState(
    searchWord !== ''
  );
  // SearchField か ポップアップにフォーカスが当たっている
  const [isSearchAreaFocused, setIsSearchAreaFocused] = React.useState(false);
  // 日本語入力中かどうか
  const [isComposing, setIsComposing] = React.useState(false);

  const popupRef = React.useRef<HTMLDivElement>(null);

  // valueの変更をstateに反映
  // 検索文字がある場合に入力欄を開く（フォーカスは当てない）
  React.useEffect(() => {
    setSearchWord(value || '');
    setIsSearchAreaOpen((value || '') !== '');
  }, [value]);

  // 検索文字列が空の状態で検索フィールド外にフォーカスを移動した場合、検索を終了し閉じる
  const cancelSearch = React.useCallback(() => {
    setSearchWord('');
    onUpdate?.(undefined);
    setIsSearchAreaOpen(false);
    setIsSearchAreaFocused(false);
  }, [onUpdate, setSearchWord]);

  // 検索文字列を更新する
  const updateSearchWord = React.useCallback(() => {
    // 日本語入力中はスルー
    if (isComposing) return;
    // 文字列に変化がない場合は検索しない
    if (searchWord === value) return;

    onUpdate?.(searchWord);
  }, [searchWord, isComposing, onUpdate, value]);

  const fieldClass = 'vb-indexSearchField';
  const inputClass = fieldClass + '__input';
  const iconClass = fieldClass + '__icon';
  const dropdownClass = fieldClass + '__dropdown';
  const dropdownItemClass = fieldClass + '__dropdownItem';

  const inputClassName = vbClassNames(inputClass, {
    modifier: {
      widthXSmall: width === 'xSmall',
      widthSmall: width === 'small',
      widthMedium: width === 'medium' || !width,
      widthLarge: width === 'large',
      widthFull: width === 'full',
      disabled,
      searchAreaClosed: !isSearchAreaOpen && !forceOpen,
    },
  });

  const iconClassName = vbClassNames(iconClass, {
    modifier: {
      searchAreaClosed: !isSearchAreaOpen && !forceOpen,
    },
  });

  const dropdownClaassName = vbClassNames(dropdownClass, {
    modifier: {
      searchAreaOpen: (isSearchAreaOpen || forceOpen) && isSearchAreaFocused,
    },
  });

  return (
    <div
      {...commonProps(
        props,
        fieldClass,
        { widthFull: width === 'full' },
        { marginBottom, marginLeft, marginRight, marginSize, marginTop }
      )}
    >
      <input
        id={id}
        type="search"
        name={name && name}
        value={value && value}
        className={inputClassName}
        placeholder={placeholder && placeholder}
        disabled={disabled && true}
        required={required && true}
        autoFocus={autofocus && true}
        maxLength={maxLength}
        onChange={(e) => {
          setSearchWord(e.target.value);
          onChange?.(e);
        }}
        onInput={onInput}
        onFocus={(e) => {
          setIsSearchAreaFocused(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          if (e.relatedTarget === popupRef.current) return;
          if (searchWord === '') {
            cancelSearch();
            return;
          }
          updateSearchWord();
          setIsSearchAreaFocused(false);
          onBlur?.(e);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            if (!isSearchAreaOpen && !forceOpen) {
              setIsSearchAreaOpen(true);
            }
            updateSearchWord();
          }
          if (e.key === ' ') {
            if (!isSearchAreaOpen && !forceOpen) {
              setIsSearchAreaOpen(true);
              e.preventDefault();
            }
          }
          onKeyDown?.(e);
        }}
        onKeyUp={onKeyUp}
        aria-label={
          label ? label : `${searchTarget?.join('、') || '対象'}の文字検索`
        }
        aria-labelledby={labelledby}
        aria-required={required && true}
        ref={ref}
        onClick={() => {
          if (!isSearchAreaOpen && !forceOpen) {
            setIsSearchAreaOpen(true);
            setIsSearchAreaFocused(true);
          }
        }}
        // 日本語入力中にEnterキーを押下したときに、入力確定(検索開始)をしないようにする
        onCompositionStart={() => setIsComposing(true)}
        onCompositionEnd={() => setIsComposing(false)}
      />
      <MdSearch className={iconClassName} />
      {/*
       * 入力欄を開いている間、tabキーでフォーカスを移動できる
       */}
      <div className={dropdownClaassName}>
        <PopupBase paddingSize="zero">
          <div
            role="button"
            className={dropdownItemClass}
            ref={popupRef}
            onClick={() => {
              updateSearchWord();
              setIsSearchAreaFocused(false);
            }}
            tabIndex={
              (isSearchAreaOpen || forceOpen) && isSearchAreaFocused ? 0 : -1
            }
            onKeyDown={(e) => {
              if (e.code === 'Enter') {
                updateSearchWord();
                setIsSearchAreaFocused(false);
              }
            }}
            onBlur={(e) => {
              if (e.relatedTarget === ref) return;
              if (searchWord === '') {
                cancelSearch();
                return;
              }
              updateSearchWord();
              setIsSearchAreaFocused(false);
            }}
          >
            <Text size={0.875}>
              {searchWord === '' ? '' : `「${searchWord}」を含む`}
              {searchTarget?.join('、') || '対象'}を検索
            </Text>
          </div>
        </PopupBase>
      </div>
    </div>
  );
};
const IndexSearchField = React.forwardRef(IndexSearchFieldInner);
export default IndexSearchField;
