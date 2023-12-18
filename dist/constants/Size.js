export var MinimumSize = '1px';
export var XSmallSize = '0.25rem'; // 4dp
export var SmallSize = '0.5rem'; // 8dp
export var BasicSize = '1rem'; // 16dp
export var LargeSize = '1.5rem'; // 24dp
export var XLargeSize = '2rem'; // 32dp
export var XXLargeSize = '3rem'; // 48dp
export var ContainerSize = '70rem'; // 70dp
export var FormControlHeight = '2.25rem'; //36dp
export var FormControlSmallHeight = '1.5rem'; // 24dp
export var FormControlLargeHeight = '3rem'; // 48dp
// モバイルを想定した横幅の閾値(320 ~ 768px)
export var TabletBoundaryWidth = '64rem';
export var MobileBoundaryWidth = '48rem';
// iPhone 8との境界
export var NarrowMobileBoundaryWidth = "".concat(375 / 16, "rem");
// border-radius-size
// design-token （各コンポーネントの実装に直接使わないでください）
export var BorderRadius0250 = '0.25rem'; // 4dp
export var BorderRadius0500 = '0.5rem'; // 8dp
export var BorderRadius0750 = '0.75rem'; // 12dp
export var BorderRadius1000 = '1rem'; // 16dp
export var BorderRadius1500 = '1.5rem'; // 24dp
export var BorderRadius9900 = '99rem'; // 円形にするための大きい数字
// semantic-token （各コンポーネントの実装に原則直接使わないでください）
export var XSmallBorderRadius = BorderRadius0250; // 4dp
export var SmallBorderRadius = BorderRadius0500; // 8dp
export var MediumBorderRadius = BorderRadius0750; // 12dp
export var LargeBorderRadius = BorderRadius1000; // 16dp
export var XLargeBorderRadius = BorderRadius1500; // 24dp
export var FullBorderRadius = BorderRadius9900; // この変数のみ単体で利用可能
// alias-token（各componentでborder-radiusを扱うときにはこちらを利用）
export var BaseBorderRadius = SmallBorderRadius; // Base系コンポーネント
export var CardBorderRadius = MediumBorderRadius; // Card系コンポーネント
export var FloatingBorderRadius = LargeBorderRadius; // Floating系コンポーネント
export var PopupBorderRadius = LargeBorderRadius; // Popup系コンポーネント
export var DialogBorderRadius = XLargeBorderRadius; // Dialog系コンポーネント
export var FontBorderRadius = SmallBorderRadius; // テキストを含むコンポーネント
export var MiniPaddingBorderRadius = XSmallBorderRadius; // テキストを含むコンポーネントの中でもPaddingが小さいコンポーネント
export var FocusHighlightBorderRadius = XSmallBorderRadius; // フォーカスハイライト系コンポーネント
//# sourceMappingURL=Size.js.map