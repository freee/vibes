import functionalMarginClasses, {
  MarginSize as FunctionalMarginSize,
} from './functionalMarginClasses';

export type MarginClassProps = {
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

type MarginSize = 'xSmall' | 'small' | 'large' | 'xLarge' | 'xxLarge';

function marginSizeToRem(
  marginSize: MarginSize | undefined
): FunctionalMarginSize {
  switch (marginSize) {
    case 'xSmall':
      return 0.25;
    case 'small':
      return 0.5;
    case 'large':
      return 1.5;
    case 'xLarge':
      return 2;
    case 'xxLarge':
      return 3;
  }
  return 1;
}

export const pickMarginClassProps = ({
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  marginSize,
}: MarginClassProps): MarginClassProps => ({
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  marginSize,
});

export const marginClassPropsToFunctionalMarginProps = ({
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  marginSize,
}: MarginClassProps) => {
  const remSize = marginSizeToRem(marginSize);
  return {
    mt: marginTop ? remSize : undefined,
    mb: marginBottom ? remSize : undefined,
    ml: marginLeft ? remSize : undefined,
    mr: marginRight ? remSize : undefined,
  };
};

export default function marginClasses(props: MarginClassProps): Array<string> {
  return functionalMarginClasses(
    marginClassPropsToFunctionalMarginProps(props)
  ).split(' ');
}
