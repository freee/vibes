import * as React from 'react';
import { TextField } from '../../lv1';
declare type Props = {
    autoComplete?: 'current-password' | 'new-password' | 'off';
} & Omit<React.ComponentPropsWithRef<typeof TextField>, 'type' | 'autoComplete' | 'IconComponent' | 'iconLabel' | 'onIconClick' | 'onIconFocus' | 'onIconBlur' | 'min' | 'max' | 'step' | 'maxLength'>;
/**
 * パスワード表示ボタンのついたパスワード入力フィールドを表示します。
 * It provides password input field with revealing password button.
 *
 * - Microsoft Edgeの場合は、ブラウザがパスワード表示ボタンを提供するため、ただ `type="password"` が指定されただけのフィールドをrenderします
 */
export declare const PasswordField: React.FC<Props>;
export {};
