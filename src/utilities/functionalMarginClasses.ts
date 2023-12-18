export type MarginSize =
  | 0.25
  | 0.5
  | 1
  | 1.5
  | 2
  | 3
  | -0.25
  | -0.5
  | -1
  | -1.5
  | -2
  | -3
  | 'auto';

export type FunctionalMarginProps = {
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

export const pickFunctionalMarginProps = ({
  ma,
  mt,
  mb,
  ml,
  mr,
}: FunctionalMarginProps): FunctionalMarginProps => {
  return { ma, mt, mb, ml, mr };
};

const formatMarginSize = (ms: MarginSize): string =>
  ms === 'auto' ? '-auto' : String(ms * 100);

const functionalMarginClasses = ({
  ma,
  mt,
  mb,
  ml,
  mr,
}: FunctionalMarginProps): string => {
  return [
    ma ? `vb-ma${formatMarginSize(ma)}` : '',
    mt ? `vb-mt${formatMarginSize(mt)}` : '',
    mb ? `vb-mb${formatMarginSize(mb)}` : '',
    mr ? `vb-mr${formatMarginSize(mr)}` : '',
    ml ? `vb-ml${formatMarginSize(ml)}` : '',
  ]
    .filter((e) => e)
    .join(' ');
};

export default functionalMarginClasses;
