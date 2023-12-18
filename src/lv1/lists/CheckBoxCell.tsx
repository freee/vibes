import * as React from 'react';
import commonProps, { CommonProps } from '../../utilities/commonProps';

type Props = {
  header: boolean;
  name?: string;
  value?: string;
  checked?: boolean;
  'aria-label'?: string;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
} & CommonProps;

const CheckBoxCell: React.FC<Props> = (props: Props) => {
  const { header, name, value, checked, onChange, disabled } = props;
  const baseClassName = 'vb-checkBoxCell';

  /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
  /* eslint-disable jsx-a11y/click-events-have-key-events */
  const input = (
    <label
      className={`${baseClassName}__label${disabled ? '--disabled' : ''}`}
      onClick={(e) => e.stopPropagation()}
    >
      <input
        type="checkbox"
        aria-label={props['aria-label'] || 'この行を選択'}
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
    </label>
  );
  const cellProps = commonProps(props, baseClassName, { header });
  return header ? (
    <th {...cellProps}>{input}</th>
  ) : (
    <td {...cellProps}>{input}</td>
  );
};
export default CheckBoxCell;
