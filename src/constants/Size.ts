export const MinimumSize = '1px';

export const XSmallSize = '0.25rem'; // 4dp
export const SmallSize = '0.5rem'; // 8dp
export const BasicSize = '1rem'; // 16dp
export const LargeSize = '1.5rem'; // 24dp
export const XLargeSize = '2rem'; // 32dp
export const XXLargeSize = '3rem'; // 48dp

export const ContainerSize = '70rem'; // 70dp

export const FormControlHeight = '2.25rem'; //36dp
export const FormControlSmallHeight = '1.5rem'; // 24dp
export const FormControlLargeHeight = '3rem'; // 48dp

// モバイルを想定した横幅の閾値(320 ~ 768px)
export const TabletBoundaryWidth = '64rem';
export const MobileBoundaryWidth = '48rem';
// iPhone 8との境界
export const NarrowMobileBoundaryWidth = `${375 / 16}rem`;

// border-radius-size
// design-token （各コンポーネントの実装に直接使わないでください）
export const BorderRadius0250 = '0.25rem'; // 4dp
export const BorderRadius0500 = '0.5rem'; // 8dp
export const BorderRadius0750 = '0.75rem'; // 12dp
export const BorderRadius1000 = '1rem'; // 16dp
export const BorderRadius1500 = '1.5rem'; // 24dp
export const BorderRadius9900 = '99rem'; // 円形にするための大きい数字

// semantic-token （各コンポーネントの実装に原則直接使わないでください）
export const XSmallBorderRadius = BorderRadius0250; // 4dp
export const SmallBorderRadius = BorderRadius0500; // 8dp
export const MediumBorderRadius = BorderRadius0750; // 12dp
export const LargeBorderRadius = BorderRadius1000; // 16dp
export const XLargeBorderRadius = BorderRadius1500; // 24dp
export const FullBorderRadius = BorderRadius9900; // この変数のみ単体で利用可能

// alias-token（各componentでborder-radiusを扱うときにはこちらを利用）
export const BaseBorderRadius = SmallBorderRadius; // Base系コンポーネント
export const CardBorderRadius = MediumBorderRadius; // Card系コンポーネント
export const FloatingBorderRadius = LargeBorderRadius; // Floating系コンポーネント
export const PopupBorderRadius = LargeBorderRadius; // Popup系コンポーネント
export const DialogBorderRadius = XLargeBorderRadius; // Dialog系コンポーネント
export const FontBorderRadius = SmallBorderRadius; // テキストを含むコンポーネント
export const MiniPaddingBorderRadius = XSmallBorderRadius; // テキストを含むコンポーネントの中でもPaddingが小さいコンポーネント
export const FocusHighlightBorderRadius = XSmallBorderRadius; // フォーカスハイライト系コンポーネント
