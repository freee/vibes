import { MarginSize as FunctionalMarginSize } from './functionalMarginClasses';
export declare type MarginClassProps = {
    /**
     * 上方向にマージンを付けるか否か（ `mt` propsが使用できる場合はそちらを使用してください）
     */
    marginTop?: boolean;
    /**
     * 左方向にマージンを付けるか否か（ `ml` propsが使用できる場合はそちらを使用してください）
     */
    marginLeft?: boolean;
    /**
     * 右方向にマージンを付けるか否か（ `mr` propsが使用できる場合はそちらを使用してください）
     */
    marginRight?: boolean;
    /**
     * 下方向にマージンを付けるか否か（ `mb` propsが使用できる場合はそちらを使用してください）
     */
    marginBottom?: boolean;
    /**
     * `marginTop`, `marginLeft`, `marginRight`, `marginBottom` によるマージンの大きさ。無指定であれば 1rem。
     * `xSmall` = 0.25rem, `small` = 0.5rem, `large` = 1.5rem, `xLarge` = 2rem, `xxlarge` = 3rem
     */
    marginSize?: 'xSmall' | 'small' | 'large' | 'xLarge' | 'xxLarge';
};
export declare const pickMarginClassProps: ({ marginTop, marginLeft, marginRight, marginBottom, marginSize, }: MarginClassProps) => MarginClassProps;
export declare const marginClassPropsToFunctionalMarginProps: ({ marginTop, marginLeft, marginRight, marginBottom, marginSize, }: MarginClassProps) => {
    mt: FunctionalMarginSize | undefined;
    mb: FunctionalMarginSize | undefined;
    ml: FunctionalMarginSize | undefined;
    mr: FunctionalMarginSize | undefined;
};
export default function marginClasses(props: MarginClassProps): Array<string>;
