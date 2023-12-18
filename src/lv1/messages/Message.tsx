import * as React from 'react';
import { MdError, MdWarning, MdCheckCircle, MdInfo } from 'react-icons/md';
import { MarginClassProps } from '../../utilities/marginClasses';
import commonProps, { CommonProps } from '../../utilities/commonProps';
// lv1を参照しちゃうけど許して
// TODO: Messageコンポーネントをlv2に移動
import MaterialIcon from '../icons/MaterialIcon';

export type MessageTypes = {
  /**
   * error アイコンを表示します
   */
  error?: boolean;
  /**
   * notice アイコンを表示します
   */
  notice?: boolean;
  /**
   * success アイコンを表示します
   */
  success?: boolean;
  /**
   * info アイコンを表示します
   */
  info?: boolean;
};

type Props = {
  children?: React.ReactNode;
} & MessageTypes &
  MarginClassProps &
  CommonProps;

export default function Message(props: Props): React.ReactElement {
  const {
    children,
    error,
    notice,
    success,
    info,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    marginSize,
  } = props;
  return (
    <span
      {...commonProps(
        props,
        'vb-message',
        { error, notice, success, info },
        { marginBottom, marginLeft, marginRight, marginSize, marginTop }
      )}
    >
      <span className="vb-message__icon">
        {error ? (
          <MaterialIcon IconComponent={MdError} error mr={0.5} />
        ) : notice ? (
          <MaterialIcon IconComponent={MdWarning} notice mr={0.5} />
        ) : success ? (
          <MaterialIcon IconComponent={MdCheckCircle} success mr={0.5} />
        ) : (
          <MaterialIcon IconComponent={MdInfo} color="S8" mr={0.5} />
        )}
      </span>
      <span className="vb-message__content">{children}</span>
    </span>
  );
}
