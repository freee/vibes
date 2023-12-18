import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { ButtonAriaProps, LinkAriaProps } from '../../utilities/AriaProps';
import { ButtonAppearanceType } from './Button';
import { SelfWindowNavigationProp } from '../../utilities/selfWindowNavigator';
declare const IconOnlyButton: React.ForwardRefExoticComponent<{
    /**
     * アイコンとして表示するコンポーネントを渡します。react-iconsのコンポーネントが想定されています。
     */
    IconComponent: React.ElementType;
    /**
     * ボタンの代替テキストとして使用されます（`aria-label` になります）。
     * ボタンが何を表現しているのか、必ず指定してください。
     */
    label: string;
    /**
     * 導線の優先度から、ボタンの種類を指定するのに使います。
     * primaryは背景ベタ塗り+白字、secondaryは白背景+グレーの枠線+リンク色字、tertiaryは枠線なし+リンク色字となります。
     */
    appearance?: ButtonAppearanceType | undefined;
    /**
     * ボタンを押したものの動作が危険性を伴うかどうか。 `true` にすると赤系の色になります。
     * appearance無指定時には `appearance: 'primary', danger: true` の見た目になります。
     */
    danger?: boolean | undefined;
    /**
     * (廃止予定) appearanceを使用してください。appearance指定時は無視されます。
     */
    primary?: boolean | undefined;
    /**
     * disabled に設定します
     */
    disabled?: boolean | undefined;
    /**
     * サイズを小さくします
     */
    small?: boolean | undefined;
    /**
     * サイズを大きくします
     */
    large?: boolean | undefined;
    /**
    /**
     * input type を指定します
     */
    type?: "button" | "reset" | "submit" | undefined;
    /**
     * 押下時に遷移させるURLを指定します。指定した場合は `<a>` 要素、空文字列もしくはundefinedの場合は `<button>` 要素となります
     */
    href?: string | undefined;
    /**
     * target を設定します
     */
    target?: string | undefined;
    /**
     * 未指定の場合、`target="_blank"` であれば `noopener noreferrer`となります
     *
     * （空文字列を渡した場合には `""` が指定されます）
     */
    rel?: string | undefined;
    /**
     * download を設定します。hrefと異なる名前でファイルを保存したい場合は文字列を指定してください。
     */
    download?: string | boolean | undefined;
    /**
     * click ハンドラを設定します
     */
    onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement> | undefined;
    /**
     * keydown ハンドラを設定します
     */
    onKeyDown?: React.KeyboardEventHandler<HTMLAnchorElement | HTMLButtonElement> | undefined;
    /**
     * focus ハンドラを設定します
     */
    onFocus?: React.FocusEventHandler<HTMLAnchorElement | HTMLButtonElement> | undefined;
    /**
     * blur ハンドラを設定します
     */
    onBlur?: React.FocusEventHandler<HTMLAnchorElement | HTMLButtonElement> | undefined;
} & MarginClassProps & SelfWindowNavigationProp & ButtonAriaProps & LinkAriaProps & import("../../utilities/commonProps").CommonDataProps & import("../../utilities/functionalMarginClasses").FunctionalMarginProps & React.RefAttributes<HTMLButtonElement>>;
export default IconOnlyButton;
