// type-scale
// design-token （各コンポーネントの実装に直接使わないでください）
export const FontSize0625 = '0.625rem'; // 10dp
export const FontSize0750 = '0.75rem'; // 12dp
export const FontSize0875 = '0.875rem'; // 14dp
export const FontSize1000 = '1rem'; // 16dp
export const FontSize1500 = '1.5rem'; // 24dp

// semantic-token （各componentでfont-sizeを扱うときにはこちらを利用）
export const SmallestIconFontSize = FontSize0625; // 10dp
export const CaptionFontSize = FontSize0750; // 12dp
export const NormalFontSize = FontSize0875; // 14dp
export const Headline3FontSize = FontSize0875; // 14dp
export const Headline2FontSize = FontSize1000; // 16dp
export const Headline1FontSize = FontSize1500; // 24dp

export const MobileHeadline3FontSize = FontSize0875; // 14dp
export const MobileHeadline2FontSize = FontSize0875; // 14dp
export const MobileHeadline1FontSize = FontSize1000; // 16dp

export const FontFamily = `'-apple-system', BlinkMacSystemFont, 'Helvetica Neue',
  'ヒラギノ角ゴ ProN', Hiragino Kaku Gothic ProN, Arial, 'メイリオ', Meiryo,
  sans-serif`;

export const LineHeight = '1.5';

// 地の文
export const NormalFont = `normal ${NormalFontSize}/${LineHeight} ${FontFamily}`;

// キャプション（地の文よりも小さめ）
export const CaptionFont = `normal ${CaptionFontSize}/${LineHeight} ${FontFamily}`;

// フォームのラベルや表の見出し（キャプションと同じ内容だが目的が違うので分けている）
export const ItemNameFont = `normal ${CaptionFontSize}/${LineHeight} ${FontFamily}`;

// 見出し最大
export const HeadlineFont1 = `bold ${Headline1FontSize}/${LineHeight} ${FontFamily}`;

// 見出し中間
export const HeadlineFont2 = `bold ${Headline2FontSize}/${LineHeight} ${FontFamily}`;

// 見出し最小
export const HeadlineFont3 = `bold ${NormalFontSize}/${LineHeight} ${FontFamily}`;

// 見出し最大 (モバイル)
export const MobileHeadlineFont1 = `bold ${MobileHeadline1FontSize}/${LineHeight} ${FontFamily}`;

// 見出し中間 (モバイル)
export const MobileHeadlineFont2 = `bold ${MobileHeadline2FontSize}/${LineHeight} ${FontFamily}`;

// 見出し最小 (モバイル)
export const MobileHeadlineFont3 = `bold ${MobileHeadline3FontSize}/${LineHeight} ${FontFamily}`;
