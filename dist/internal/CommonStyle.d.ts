import { MarginSize, FunctionalMarginProps } from '../utilities/functionalMarginClasses';
export declare const marginSizeToValue: (marginSize: MarginSize) => string;
export declare const CommonStyle: import("styled-components").StyledComponent<"span", any, FunctionalMarginProps, keyof FunctionalMarginProps>;
export declare const CommonStyleWithDeprecatedMarginProps: import("styled-components").StyledComponent<"span", any, FunctionalMarginProps & {
    ma: MarginSize | undefined;
    mt: MarginSize | undefined;
    mb: MarginSize | undefined;
    mr: MarginSize | undefined;
    ml: MarginSize | undefined;
}, keyof FunctionalMarginProps>;
