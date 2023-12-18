import * as React from 'react';
import { RequiredIcon } from '../../lv1/icons/RequiredIcon';
import { MarginClassProps } from '../../utilities/marginClasses';
import commonProps, { CommonProps } from '../../utilities/commonProps';

type Props = {
  children?: React.ReactNode;
  /**
   * label id を指定します
   */
  id?: string;
  /**
   * label htmlfor を指定します
   */
  htmlFor?: string;
  /**
   * 必須ラベルを表示します
   */
  required?: boolean;
} & MarginClassProps &
  CommonProps;

const FormControlLabel: React.FC<Props> = (props: Props) => {
  const {
    children,
    id,
    htmlFor,
    required,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    marginSize,
  } = props;

  const inner = (
    <React.Fragment>
      <span className="vb-formControlLabel__text">{children}</span>
      {required ? <RequiredIcon ml={0.5} /> : null}
    </React.Fragment>
  );
  return htmlFor ? (
    <label
      id={id}
      htmlFor={htmlFor}
      {...commonProps(
        props,
        'vb-formControlLabel',
        {},
        {
          marginBottom,
          marginLeft,
          marginRight,
          marginTop,
          marginSize,
        }
      )}
    >
      {inner}
    </label>
  ) : (
    <span
      id={id}
      {...commonProps(
        props,
        'vb-formControlLabel',
        {},
        {
          marginBottom,
          marginLeft,
          marginRight,
          marginTop,
          marginSize,
        }
      )}
    >
      {inner}
    </span>
  );
};
export default FormControlLabel;
