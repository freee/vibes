import * as React from 'react';
import { StatusType } from '../../lv1/icons/StatusIcon';
import WithDropdown from '../withDropdown/WithDropdown';
import { DropdownContent } from '../dropdown/types';
import { MdArrowDropDown } from 'react-icons/md';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import { MarginClassProps } from '../../utilities/marginClasses';

type Props = {
  children?: React.ReactNode;
  /**
   * color type を指定します
   */
  type?: StatusType;
  /**
   * ドロップダウンで選択するステータスを指定します
   */
  dropdownContents: DropdownContent[];
  /**
   * ドロップダウン選択を disabled に設定します
   */
  disabled?: boolean;
} & MarginClassProps &
  CommonProps;

/**
 * StatusIconをクリッカブルにし、ドロップダウンから選択してステータスを切り替えられるようにしたコンポーネントです。
 *
 * 用途や type の使い分けについては StatusIcon の doc を参照してください。
 */
const StatusSelector: React.FC<Props> = (props: Props) => {
  const {
    dropdownContents,
    disabled,
    children,
    type,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    marginSize,
  } = props;

  const statusSelectorBaseClass = 'vb-statusSelector';

  const camelCase = (str: string) => {
    const s = str.charAt(0).toLowerCase() + str.slice(1);
    return s.replace(/[-_](.)/g, (_, group1) => group1.toUpperCase());
  };

  const classModifier = [
    'done',
    'success',
    'progress',
    'required',
    'disabled',
    'emphasis',
    'warning',
    'error',
  ].reduce(
    (acm, mod) => ({ ...acm, [camelCase(`type_${mod}`)]: type === mod }),
    {
      disabled,
    }
  );

  return (
    <WithDropdown
      dropdownContents={dropdownContents}
      disabled={disabled}
      renderButton={(dropdownId, isOpen, buttonRef) => (
        <button
          {...commonProps(props, statusSelectorBaseClass, classModifier, {
            marginBottom,
            marginLeft,
            marginRight,
            marginTop,
            marginSize,
          })}
          aria-disabled={disabled}
          aria-haspopup={true}
          aria-controls={dropdownId}
          aria-expanded={isOpen}
          ref={buttonRef as React.RefObject<HTMLButtonElement>}
        >
          {children}
          <MdArrowDropDown
            className={`${statusSelectorBaseClass}__dropdownIcon`}
          />
        </button>
      )}
    />
  );
};
export default StatusSelector;
