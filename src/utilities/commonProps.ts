import {
  pickFunctionalMarginProps,
  FunctionalMarginProps,
} from './functionalMarginClasses';
import vbClassNames, { ModifierClassProps } from './vbClassNames';
import { MarginClassProps } from './marginClasses';

export type CommonDataProps = {
  'data-guide'?: string;
  'data-test'?: string;
  'data-tracking'?: string;
  'data-masking'?: boolean;
};

export type CommonProps = CommonDataProps & FunctionalMarginProps;

export const pickCommonProps = (props: CommonProps): CommonProps => {
  return {
    ...pickCommonDataProps(props),
    ...pickFunctionalMarginProps(props),
  };
};

export const pickCommonDataProps = (props: CommonProps): CommonDataProps => ({
  'data-guide': props['data-guide'],
  'data-test': props['data-test'],
  'data-tracking': props['data-tracking'],
  'data-masking': props['data-masking'],
});

export default function commonProps(
  props: CommonProps,
  baseClassName: string,
  classModifiers: ModifierClassProps = {},
  deprecatedMarginClassProps: MarginClassProps = {}
): CommonDataProps & { className: string } {
  return {
    'data-guide': props['data-guide'],
    'data-test': props['data-test'],
    'data-tracking': props['data-tracking'],
    'data-masking': props['data-masking'],
    className: vbClassNames(baseClassName, {
      props,
      modifier: classModifiers,
      margin: deprecatedMarginClassProps,
    }),
  };
}
