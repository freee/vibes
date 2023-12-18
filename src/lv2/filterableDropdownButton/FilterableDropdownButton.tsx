import * as React from 'react';
import Button, { ButtonAppearanceType } from '../../lv1/buttons/Button';
import IconOnlyButton from '../../lv1/buttons/IconOnlyButton';
import WithFilterableDropdown from '../withFilterableDropdown/WithFilterableDropdown';
import { MdArrowDropDown, MdMoreHoriz } from 'react-icons/md';
import { pickCommonProps } from '../../utilities/commonProps';

type PropsFromWithFilterableDropdown = Omit<
  Parameters<typeof WithFilterableDropdown>[0],
  'render'
>;

type PropsFromButton = Pick<
  Parameters<typeof Button>[0],
  'iconPosition' | 'IconComponent'
>;
type Props = PropsFromWithFilterableDropdown &
  PropsFromButton & {
    /**
     * ボタンのラベルとなる文字列。必ず指定してください。 `iconOnly` を使用する場合も必ず指定してください。
     */
    buttonLabel: string;
    small?: boolean;
    large?: boolean;
    appearance?: ButtonAppearanceType;
    /**
     * trueにすることで、ラベルを省略し「…」アイコンのみのボタンとなります
     */
    iconOnly?: boolean;
    /**
     * スピナーを表示する
     */
    isLoading?: boolean;
  };

/**
 * 選択肢をフィルター可能なドロップダウンボタンです。
 *
 * - 項目が少なく、フィルターが不要な場合は `DropdownButton` を使用してください。
 * - ボタン部分のカスタマイズがどうしても必要な場合は `WithFilterableDropdown` を使用してください。
 * - 上下キーでフォーカス移動、ESCキーで閉じられます。Tabキーでフォーカスを移動させる場合、メニューの外に出るとボタンへのフォーカスに戻ります
 * - メニューに入れられる項目は「クリック可能な項目（ボタンまたはリンク）」「チェックボックス」です
 *   - `DropdownButton` と違い、「テキスト」「区切り線」は使用できません。
 *   - 項目には複数の `keywords` を設定できます。読みがなやショートカットコードなどを指定すると、フィルターに使用できます
 *   - クリック可能な項目は `url` を渡されるとリンクとなります。遷移先のURLを特定できる場合は必ず `url` を渡してください
 *   - リンクに `target="_blank"` を渡した場合、右側に OpenInNew アイコンが表示されます。
 * - `iconOnly` を `true` とすることで、ラベルを表示せず「…」アイコンのみのボタンとなります。 **この場合も `aria-label` として使用するため、必ず `buttonLabel` に意味のある文字列を指定してください**
 */
const FilterableDropdownButton: React.FC<Props> = (props: Props) => {
  const {
    iconOnly,
    appearance,
    buttonLabel,
    small,
    large,
    disabled,
    dropdownContents,
    onFilterChange,
    onOpen,
    iconPosition,
    IconComponent,
    isLoading,
    fixedItems,
    noResultsMessage,
    noDataMessage,
    renderDropdownBottomContent,
  } = props;

  return (
    <WithFilterableDropdown
      disabled={disabled}
      dropdownContents={dropdownContents}
      onFilterChange={onFilterChange}
      onOpen={onOpen}
      isLoading={isLoading}
      fixedItems={fixedItems}
      noResultsMessage={noResultsMessage}
      noDataMessage={noDataMessage}
      renderDropdownBottomContent={renderDropdownBottomContent}
      {...pickCommonProps(props)}
      render={(dropdownId, isOpen, ref) =>
        iconOnly ? (
          <IconOnlyButton
            IconComponent={IconComponent || MdMoreHoriz}
            appearance={appearance}
            aria-controls={dropdownId}
            aria-expanded={isOpen}
            aria-haspopup={true}
            disabled={disabled}
            label={buttonLabel}
            small={small}
            large={large}
            ref={ref as React.Ref<HTMLButtonElement>}
            type="button"
          />
        ) : (
          <Button
            IconComponent={IconComponent || MdArrowDropDown}
            iconPosition={iconPosition || 'right'}
            disabled={disabled}
            small={small}
            large={large}
            appearance={appearance}
            aria-expanded={isOpen}
            aria-haspopup={true}
            aria-controls={dropdownId}
            ref={ref as React.Ref<HTMLButtonElement>}
            type="button"
          >
            {buttonLabel}
          </Button>
        )
      }
    />
  );
};

export default FilterableDropdownButton;
