import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { SelfWindowNavigationProp } from '../../utilities/selfWindowNavigator';
import { ButtonAppearanceType } from './Button';
declare const JumpButton: React.ForwardRefExoticComponent<{
    /**
     * ボタンのラベルとなる文字列を指定します
     */
    children?: React.ReactNode;
    /**
     * href を設定します
     */
    url?: string | undefined;
    /**
     * 導線の優先度から、ボタンの種類を指定するのに使います。
     * primaryは背景ベタ塗り+白字、secondaryは白背景+グレーの枠線+リンク色字、tertiaryは枠線なし+リンク色字となります。
     */
    appearance?: ButtonAppearanceType | undefined;
    /**
     * ボタンを押したものの動作が危険性を伴うかどうか。 `true` にすると赤系の色になります。
     */
    danger?: boolean | undefined;
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
     * rel を指定します
     */
    rel?: string | undefined;
    /**
     * `<a>` 要素の `target` 属性に渡されます。 `"_blank"` とした場合、アイコンが OpenInNew になります
     */
    target?: string | undefined;
    /**
     * input type を指定します
     */
    type?: "button" | "reset" | "submit" | undefined;
    /**
     * click ハンドラを指定します
     */
    onClick?: React.MouseEventHandler<Element> | undefined;
} & MarginClassProps & SelfWindowNavigationProp & import("../../utilities/commonProps").CommonDataProps & import("../../utilities/functionalMarginClasses").FunctionalMarginProps & React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>>;
export default JumpButton;
