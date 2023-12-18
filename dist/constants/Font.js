// type-scale
// design-token （各コンポーネントの実装に直接使わないでください）
export var FontSize0625 = '0.625rem'; // 10dp
export var FontSize0750 = '0.75rem'; // 12dp
export var FontSize0875 = '0.875rem'; // 14dp
export var FontSize1000 = '1rem'; // 16dp
export var FontSize1500 = '1.5rem'; // 24dp
// semantic-token （各componentでfont-sizeを扱うときにはこちらを利用）
export var SmallestIconFontSize = FontSize0625; // 10dp
export var CaptionFontSize = FontSize0750; // 12dp
export var NormalFontSize = FontSize0875; // 14dp
export var Headline3FontSize = FontSize0875; // 14dp
export var Headline2FontSize = FontSize1000; // 16dp
export var Headline1FontSize = FontSize1500; // 24dp
export var MobileHeadline3FontSize = FontSize0875; // 14dp
export var MobileHeadline2FontSize = FontSize0875; // 14dp
export var MobileHeadline1FontSize = FontSize1000; // 16dp
export var FontFamily = "'-apple-system', BlinkMacSystemFont, 'Helvetica Neue',\n  '\u30D2\u30E9\u30AE\u30CE\u89D2\u30B4 ProN', Hiragino Kaku Gothic ProN, Arial, '\u30E1\u30A4\u30EA\u30AA', Meiryo,\n  sans-serif";
export var LineHeight = '1.5';
// 地の文
export var NormalFont = "normal ".concat(NormalFontSize, "/").concat(LineHeight, " ").concat(FontFamily);
// キャプション（地の文よりも小さめ）
export var CaptionFont = "normal ".concat(CaptionFontSize, "/").concat(LineHeight, " ").concat(FontFamily);
// フォームのラベルや表の見出し（キャプションと同じ内容だが目的が違うので分けている）
export var ItemNameFont = "normal ".concat(CaptionFontSize, "/").concat(LineHeight, " ").concat(FontFamily);
// 見出し最大
export var HeadlineFont1 = "bold ".concat(Headline1FontSize, "/").concat(LineHeight, " ").concat(FontFamily);
// 見出し中間
export var HeadlineFont2 = "bold ".concat(Headline2FontSize, "/").concat(LineHeight, " ").concat(FontFamily);
// 見出し最小
export var HeadlineFont3 = "bold ".concat(NormalFontSize, "/").concat(LineHeight, " ").concat(FontFamily);
// 見出し最大 (モバイル)
export var MobileHeadlineFont1 = "bold ".concat(MobileHeadline1FontSize, "/").concat(LineHeight, " ").concat(FontFamily);
// 見出し中間 (モバイル)
export var MobileHeadlineFont2 = "bold ".concat(MobileHeadline2FontSize, "/").concat(LineHeight, " ").concat(FontFamily);
// 見出し最小 (モバイル)
export var MobileHeadlineFont3 = "bold ".concat(MobileHeadline3FontSize, "/").concat(LineHeight, " ").concat(FontFamily);
//# sourceMappingURL=Font.js.map