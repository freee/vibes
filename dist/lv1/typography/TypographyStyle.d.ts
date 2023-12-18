export declare type TypographyStyleProps = {
    /**
     * inline 用のスタイルを適用します
     */
    inline?: boolean;
    /**
     * 水平方向の配置を指定します
     */
    textAlign?: 'left' | 'center' | 'right';
    /**
     * テキストが親要素から溢れた時に省略記号(...)を表示して、親要素内に収めます
     */
    ellipsis?: boolean;
};
export declare const TypographyStyle: import("styled-components").StyledComponent<"span", any, import("../../utilities/functionalMarginClasses").FunctionalMarginProps & {
    ma: import("../../utilities/functionalMarginClasses").MarginSize | undefined;
    mt: import("../../utilities/functionalMarginClasses").MarginSize | undefined;
    mb: import("../../utilities/functionalMarginClasses").MarginSize | undefined;
    mr: import("../../utilities/functionalMarginClasses").MarginSize | undefined;
    ml: import("../../utilities/functionalMarginClasses").MarginSize | undefined;
} & {
    inline: boolean | undefined;
    textAlign: "center" | "left" | "right" | undefined;
    ellipsis: boolean | undefined;
}, "inline" | "textAlign" | "ellipsis" | keyof import("../../utilities/functionalMarginClasses").FunctionalMarginProps>;
export declare type HeadlineStyleProps = TypographyStyleProps & {
    headlineLevel: 1 | 2 | 3 | 4 | 5 | 6 | -1;
};
export declare const HeadlineStyle: import("styled-components").StyledComponent<"span", any, import("../../utilities/functionalMarginClasses").FunctionalMarginProps & {
    ma: import("../../utilities/functionalMarginClasses").MarginSize | undefined;
    mt: import("../../utilities/functionalMarginClasses").MarginSize | undefined;
    mb: import("../../utilities/functionalMarginClasses").MarginSize | undefined;
    mr: import("../../utilities/functionalMarginClasses").MarginSize | undefined;
    ml: import("../../utilities/functionalMarginClasses").MarginSize | undefined;
} & {
    inline: boolean | undefined;
    textAlign: "center" | "left" | "right" | undefined;
    ellipsis: boolean | undefined;
} & {
    headlineLevel: 2 | 1 | -1 | 3 | 4 | 5 | 6;
    as: string;
}, "inline" | "textAlign" | "ellipsis" | "as" | keyof import("../../utilities/functionalMarginClasses").FunctionalMarginProps | "headlineLevel">;
