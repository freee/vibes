import * as React from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { TextField } from '../../lv1';
import { isEdge } from '../../utilities/browsers';

type Props = {
  autoComplete?: 'current-password' | 'new-password' | 'off';
} & Omit<
  React.ComponentPropsWithRef<typeof TextField>,
  | 'type'
  | 'autoComplete'
  | 'IconComponent'
  | 'iconLabel'
  | 'onIconClick'
  | 'onIconFocus'
  | 'onIconBlur'
  | 'min'
  | 'max'
  | 'step'
  | 'maxLength'
>;

/**
 * パスワード表示ボタンのついたパスワード入力フィールドを表示します。
 * It provides password input field with revealing password button.
 *
 * - Microsoft Edgeの場合は、ブラウザがパスワード表示ボタンを提供するため、ただ `type="password"` が指定されただけのフィールドをrenderします
 */
export const PasswordField: React.FC<Props> = ({ ...props }) => {
  const [isPasswordVisible, setPasswordVisible] = React.useState(false);
  const timeoutRef = React.useRef<number | null>(null);

  const setBlurTimeout = () => {
    timeoutRef.current = window.setTimeout(() => {
      setPasswordVisible(false);
    }, 300);
  };
  const clearBlurTimeout = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };
  React.useEffect(() => () => clearBlurTimeout());

  return isEdge() ? (
    // Edgeだと ::ms-reveal でパスワード表示ボタンが出てくるので、ただの type="password" なTextFieldを返す
    <TextField type="password" {...props} />
  ) : (
    <TextField
      type={isPasswordVisible ? 'text' : 'password'}
      IconComponent={isPasswordVisible ? MdVisibilityOff : MdVisibility}
      iconLabel={isPasswordVisible ? 'パスワードを隠す' : 'パスワードを表示'}
      onIconClick={() => setPasswordVisible(!isPasswordVisible)}
      {...{
        ...props,
        onBlur: (e) => {
          setBlurTimeout();
          props.onBlur && props.onBlur(e);
        },
        onFocus: (e) => {
          clearBlurTimeout();
          props.onFocus && props.onFocus(e);
        },
        onIconBlur: setBlurTimeout,
        onIconFocus: clearBlurTimeout,
      }}
    />
  );
};
