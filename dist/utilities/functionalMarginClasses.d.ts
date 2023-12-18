export declare type MarginSize = 0.25 | 0.5 | 1 | 1.5 | 2 | 3 | -0.25 | -0.5 | -1 | -1.5 | -2 | -3 | 'auto';
export declare type FunctionalMarginProps = {
    /**
     * 全方向のマージン (rem)
     */
    ma?: MarginSize;
    /**
     * 上方向のマージン (rem)
     */
    mt?: MarginSize;
    /**
     * 下方向のマージン (rem)
     */
    mb?: MarginSize;
    /**
     * 左方向のマージン (rem)
     */
    ml?: MarginSize;
    /**
     * 右方向のマージン (rem)
     */
    mr?: MarginSize;
};
export declare const pickFunctionalMarginProps: ({ ma, mt, mb, ml, mr, }: FunctionalMarginProps) => FunctionalMarginProps;
declare const functionalMarginClasses: ({ ma, mt, mb, ml, mr, }: FunctionalMarginProps) => string;
export default functionalMarginClasses;
