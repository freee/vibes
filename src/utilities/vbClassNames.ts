import classNames from 'classnames';
import marginClasses, { MarginClassProps } from './marginClasses';
import functionalMarginClasses, {
  FunctionalMarginProps,
} from './functionalMarginClasses';

export type ModifierClassProps = {
  [key: string]: boolean | null | undefined;
};

/**
 * { propName: 'property-value' }形式のpropsを { propNamePropertyValue: true } 形式にする
 */
export const convertClassModifiers = (props: {
  [key: string]: string | undefined;
}): { [key: string]: boolean } =>
  Object.fromEntries(
    Object.entries(props)
      .map(([key, value]) =>
        'string' === typeof value
          ? [
              `${key}${value
                .split(/[-]/)
                .reduce(
                  (prev, curr) =>
                    `${prev}${curr[0].toUpperCase()}${curr.slice(1)}`,
                  ''
                )}`,
              true,
            ]
          : []
      )
      .filter((e) => e.length > 0)
  );

const modifierClasses = (
  baseClassName: string,
  modifierClassProps: ModifierClassProps
): string[] =>
  classNames(modifierClassProps)
    .split(' ')
    .map((modifierName) =>
      modifierName ? `${baseClassName}--${modifierName}` : ''
    );

const vbClassNames = (
  baseClassName: string,
  {
    modifier,
    margin,
    props,
  }: {
    modifier?: ModifierClassProps;
    margin?: MarginClassProps;
    props?: FunctionalMarginProps; // 今後、共通でクラスを付けたいやつがきたらここに & で増やすやつ
  }
): string =>
  [
    baseClassName,
    ...(modifier ? modifierClasses(baseClassName, modifier) : []),
    ...(margin ? marginClasses(margin) : []),
    props ? functionalMarginClasses(props) : '',
  ]
    .filter((e) => e)
    .join(' ');

export default vbClassNames;
