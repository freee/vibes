import { FunctionalMarginProps } from './functionalMarginClasses';
import { ModifierClassProps } from './vbClassNames';
import { MarginClassProps } from './marginClasses';
export declare type CommonDataProps = {
    'data-guide'?: string;
    'data-test'?: string;
    'data-tracking'?: string;
    'data-masking'?: boolean;
};
export declare type CommonProps = CommonDataProps & FunctionalMarginProps;
export declare const pickCommonProps: (props: CommonProps) => CommonProps;
export declare const pickCommonDataProps: (props: CommonProps) => CommonDataProps;
export default function commonProps(props: CommonProps, baseClassName: string, classModifiers?: ModifierClassProps, deprecatedMarginClassProps?: MarginClassProps): CommonDataProps & {
    className: string;
};
