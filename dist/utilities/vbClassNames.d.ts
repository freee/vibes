import { MarginClassProps } from './marginClasses';
import { FunctionalMarginProps } from './functionalMarginClasses';
export declare type ModifierClassProps = {
    [key: string]: boolean | null | undefined;
};
/**
 * { propName: 'property-value' }形式のpropsを { propNamePropertyValue: true } 形式にする
 */
export declare const convertClassModifiers: (props: {
    [key: string]: string | undefined;
}) => {
    [key: string]: boolean;
};
declare const vbClassNames: (baseClassName: string, { modifier, margin, props, }: {
    modifier?: ModifierClassProps | undefined;
    margin?: MarginClassProps | undefined;
    props?: FunctionalMarginProps | undefined;
}) => string;
export default vbClassNames;
