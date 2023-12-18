var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { FocusHighlightBorderRadius, MinimumSize, Colors2021P02, } from '../../constants';
import styled from 'styled-components';
import { CommonStyleWithDeprecatedMarginProps } from '../../internal/CommonStyle';
export var TypographyStyle = styled(CommonStyleWithDeprecatedMarginProps).attrs(function (_a) {
    var inline = _a.inline, textAlign = _a.textAlign, ellipsis = _a.ellipsis;
    return ({
        inline: inline,
        textAlign: textAlign,
        ellipsis: ellipsis,
    });
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 0;\n  display: ", ";\n  text-align: ", ";\n\n  overflow-wrap: break-word;\n  border-radius: ", ";\n  ", "\n\n  &:focus {\n    outline: none;\n  }\n  &:focus-visible {\n    // \u30DA\u30FC\u30B8\u306E\u5185\u5BB9\u304C\u5909\u5316\u3057\u305F\u3053\u3068\u3092\u30B9\u30AF\u30EA\u30FC\u30F3\u30EA\u30FC\u30C0\u30FC\u306B\u4F1D\u3048\u305F\u308A\u3001\u30AD\u30FC\u30DC\u30FC\u30C9\u64CD\u4F5C\u3092\u3057\u3084\u3059\u304F\u3059\u308B\u305F\u3081\u306B\u3001\u898B\u51FA\u3057\u90E8\u5206\u3078\u306E\u30D5\u30A9\u30FC\u30AB\u30B9\u3092\u884C\u3046\u3053\u3068\u304C\u3042\u308B\u304C\u3001\n    // \u901A\u5E38\u306E\u30D5\u30A9\u30FC\u30AB\u30B9\u30A4\u30F3\u30B8\u30B1\u30FC\u30BF\u30FC\u304C\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u3068\u5B58\u5728\u611F\u304C\u5F37\u304F\u3001\u30E6\u30FC\u30B6\u30FC\u306B\u9055\u548C\u611F\u3092\u4E0E\u3048\u3066\u3057\u307E\u3046\u3002\n    // \u3053\u306E\u30B1\u30FC\u30B9\u3067\u306F\u30D5\u30A9\u30FC\u30AB\u30B9\u30A4\u30F3\u30B8\u30B1\u30FC\u30BF\u30FC\u3092\u6D88\u3057\u3066\u3057\u307E\u3063\u3066\u3082\u5927\u304D\u306A\u554F\u984C\u3068\u306F\u306A\u3089\u306A\u3044\u306F\u305A\u3060\u304C\u3001\u305D\u308C\u3092\u3059\u308B\u3068\u958B\u767A\u8005\u304C\u30D5\u30A9\u30FC\u30AB\u30B9\u306E\u5F53\u305F\u308B\u6319\u52D5\u3092\u78BA\u8A8D\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u306A\u304F\u306A\u308B\u554F\u984C\u304C\u8D77\u304D\u5F97\u308B\u3002\n    // \u305D\u3053\u3067\u3001focus-visible\u306A\u72B6\u6CC1\u306B\u9650\u308A\u3001\u901A\u5E38\u3088\u308A\u3082\u8584\u3044\u8272\u306E\u30D5\u30A9\u30FC\u30AB\u30B9\u30A4\u30F3\u30B8\u30B1\u30FC\u30BF\u30FC\u3092\u8868\u793A\u3059\u308B\u3002\n    // focus-visible\u306A\u5834\u5408\u306E\u307F\u306E\u8868\u793A\u306A\u306E\u3067\u3001\u30DE\u30A6\u30B9\u30DD\u30A4\u30F3\u30BF\u306B\u3088\u308B\u64CD\u4F5C\u4EE5\u5916\u3067\u306F\u30D5\u30A9\u30FC\u30AB\u30B9\u30A4\u30F3\u30B8\u30B1\u30FC\u30BF\u30FC\u304C\u8868\u793A\u3055\u308C\u308B\u3002\n    // \u3053\u3053\u3067\u306F\u30B3\u30F3\u30C8\u30E9\u30B9\u30C8\u6BD4\u304C\u4F4E\u304F\u306A\u308A\u305D\u3046\u306A\u8272\u3092\u610F\u56F3\u7684\u306B\u9078\u3093\u3067\u3044\u308B\u3002\n    box-shadow: 0 0 0 calc(", " * 2) ", ";\n  }\n"], ["\n  padding: 0;\n  display: ", ";\n  text-align: ", ";\n\n  overflow-wrap: break-word;\n  border-radius: ", ";\n  ", "\n\n  &:focus {\n    outline: none;\n  }\n  &:focus-visible {\n    // \u30DA\u30FC\u30B8\u306E\u5185\u5BB9\u304C\u5909\u5316\u3057\u305F\u3053\u3068\u3092\u30B9\u30AF\u30EA\u30FC\u30F3\u30EA\u30FC\u30C0\u30FC\u306B\u4F1D\u3048\u305F\u308A\u3001\u30AD\u30FC\u30DC\u30FC\u30C9\u64CD\u4F5C\u3092\u3057\u3084\u3059\u304F\u3059\u308B\u305F\u3081\u306B\u3001\u898B\u51FA\u3057\u90E8\u5206\u3078\u306E\u30D5\u30A9\u30FC\u30AB\u30B9\u3092\u884C\u3046\u3053\u3068\u304C\u3042\u308B\u304C\u3001\n    // \u901A\u5E38\u306E\u30D5\u30A9\u30FC\u30AB\u30B9\u30A4\u30F3\u30B8\u30B1\u30FC\u30BF\u30FC\u304C\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u3068\u5B58\u5728\u611F\u304C\u5F37\u304F\u3001\u30E6\u30FC\u30B6\u30FC\u306B\u9055\u548C\u611F\u3092\u4E0E\u3048\u3066\u3057\u307E\u3046\u3002\n    // \u3053\u306E\u30B1\u30FC\u30B9\u3067\u306F\u30D5\u30A9\u30FC\u30AB\u30B9\u30A4\u30F3\u30B8\u30B1\u30FC\u30BF\u30FC\u3092\u6D88\u3057\u3066\u3057\u307E\u3063\u3066\u3082\u5927\u304D\u306A\u554F\u984C\u3068\u306F\u306A\u3089\u306A\u3044\u306F\u305A\u3060\u304C\u3001\u305D\u308C\u3092\u3059\u308B\u3068\u958B\u767A\u8005\u304C\u30D5\u30A9\u30FC\u30AB\u30B9\u306E\u5F53\u305F\u308B\u6319\u52D5\u3092\u78BA\u8A8D\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u306A\u304F\u306A\u308B\u554F\u984C\u304C\u8D77\u304D\u5F97\u308B\u3002\n    // \u305D\u3053\u3067\u3001focus-visible\u306A\u72B6\u6CC1\u306B\u9650\u308A\u3001\u901A\u5E38\u3088\u308A\u3082\u8584\u3044\u8272\u306E\u30D5\u30A9\u30FC\u30AB\u30B9\u30A4\u30F3\u30B8\u30B1\u30FC\u30BF\u30FC\u3092\u8868\u793A\u3059\u308B\u3002\n    // focus-visible\u306A\u5834\u5408\u306E\u307F\u306E\u8868\u793A\u306A\u306E\u3067\u3001\u30DE\u30A6\u30B9\u30DD\u30A4\u30F3\u30BF\u306B\u3088\u308B\u64CD\u4F5C\u4EE5\u5916\u3067\u306F\u30D5\u30A9\u30FC\u30AB\u30B9\u30A4\u30F3\u30B8\u30B1\u30FC\u30BF\u30FC\u304C\u8868\u793A\u3055\u308C\u308B\u3002\n    // \u3053\u3053\u3067\u306F\u30B3\u30F3\u30C8\u30E9\u30B9\u30C8\u6BD4\u304C\u4F4E\u304F\u306A\u308A\u305D\u3046\u306A\u8272\u3092\u610F\u56F3\u7684\u306B\u9078\u3093\u3067\u3044\u308B\u3002\n    box-shadow: 0 0 0 calc(", " * 2) ", ";\n  }\n"])), function (_a) {
    var inline = _a.inline;
    return (inline ? 'inline-block' : 'block');
}, function (_a) {
    var textAlign = _a.textAlign;
    return textAlign || 'inherit';
}, FocusHighlightBorderRadius, function (_a) {
    var ellipsis = _a.ellipsis, inline = _a.inline;
    return ellipsis
        ? "\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    max-width: 100%;\n    ".concat(inline ? 'display: inline-block;' : '', "\n  ")
        : '';
}, MinimumSize, Colors2021P02);
export var HeadlineStyle = styled(TypographyStyle).attrs(function (_a) {
    var headlineLevel = _a.headlineLevel;
    return ({
        headlineLevel: headlineLevel,
        as: headlineLevel > 0 ? "h".concat(headlineLevel) : 'span',
    });
})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  &:focus {\n    outline: none;\n  }\n  &:focus-visible {\n    // \u30DA\u30FC\u30B8\u306E\u5185\u5BB9\u304C\u5909\u5316\u3057\u305F\u3053\u3068\u3092\u30B9\u30AF\u30EA\u30FC\u30F3\u30EA\u30FC\u30C0\u30FC\u306B\u4F1D\u3048\u305F\u308A\u3001\u30AD\u30FC\u30DC\u30FC\u30C9\u64CD\u4F5C\u3092\u3057\u3084\u3059\u304F\u3059\u308B\u305F\u3081\u306B\u3001\u898B\u51FA\u3057\u90E8\u5206\u3078\u306E\u30D5\u30A9\u30FC\u30AB\u30B9\u3092\u884C\u3046\u3053\u3068\u304C\u3042\u308B\u304C\u3001\n    // \u901A\u5E38\u306E\u30D5\u30A9\u30FC\u30AB\u30B9\u30A4\u30F3\u30B8\u30B1\u30FC\u30BF\u30FC\u304C\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u3068\u5B58\u5728\u611F\u304C\u5F37\u304F\u3001\u30E6\u30FC\u30B6\u30FC\u306B\u9055\u548C\u611F\u3092\u4E0E\u3048\u3066\u3057\u307E\u3046\u3002\n    // \u3053\u306E\u30B1\u30FC\u30B9\u3067\u306F\u30D5\u30A9\u30FC\u30AB\u30B9\u30A4\u30F3\u30B8\u30B1\u30FC\u30BF\u30FC\u3092\u6D88\u3057\u3066\u3057\u307E\u3063\u3066\u3082\u5927\u304D\u306A\u554F\u984C\u3068\u306F\u306A\u3089\u306A\u3044\u306F\u305A\u3060\u304C\u3001\u305D\u308C\u3092\u3059\u308B\u3068\u958B\u767A\u8005\u304C\u30D5\u30A9\u30FC\u30AB\u30B9\u306E\u5F53\u305F\u308B\u6319\u52D5\u3092\u78BA\u8A8D\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u306A\u304F\u306A\u308B\u554F\u984C\u304C\u8D77\u304D\u5F97\u308B\u3002\n    // \u305D\u3053\u3067\u3001focus-visible\u306A\u72B6\u6CC1\u306B\u9650\u308A\u3001\u901A\u5E38\u3088\u308A\u3082\u8584\u3044\u8272\u306E\u30D5\u30A9\u30FC\u30AB\u30B9\u30A4\u30F3\u30B8\u30B1\u30FC\u30BF\u30FC\u3092\u8868\u793A\u3059\u308B\u3002\n    // focus-visible\u306A\u5834\u5408\u306E\u307F\u306E\u8868\u793A\u306A\u306E\u3067\u3001\u30DE\u30A6\u30B9\u30DD\u30A4\u30F3\u30BF\u306B\u3088\u308B\u64CD\u4F5C\u4EE5\u5916\u3067\u306F\u30D5\u30A9\u30FC\u30AB\u30B9\u30A4\u30F3\u30B8\u30B1\u30FC\u30BF\u30FC\u304C\u8868\u793A\u3055\u308C\u308B\u3002\n    // \u3053\u3053\u3067\u306F\u30B3\u30F3\u30C8\u30E9\u30B9\u30C8\u6BD4\u304C\u4F4E\u304F\u306A\u308A\u305D\u3046\u306A\u8272\u3092\u610F\u56F3\u7684\u306B\u9078\u3093\u3067\u3044\u308B\u3002\n    box-shadow: 0 0 0 calc(", " * 2) ", ";\n  }\n"], ["\n  &:focus {\n    outline: none;\n  }\n  &:focus-visible {\n    // \u30DA\u30FC\u30B8\u306E\u5185\u5BB9\u304C\u5909\u5316\u3057\u305F\u3053\u3068\u3092\u30B9\u30AF\u30EA\u30FC\u30F3\u30EA\u30FC\u30C0\u30FC\u306B\u4F1D\u3048\u305F\u308A\u3001\u30AD\u30FC\u30DC\u30FC\u30C9\u64CD\u4F5C\u3092\u3057\u3084\u3059\u304F\u3059\u308B\u305F\u3081\u306B\u3001\u898B\u51FA\u3057\u90E8\u5206\u3078\u306E\u30D5\u30A9\u30FC\u30AB\u30B9\u3092\u884C\u3046\u3053\u3068\u304C\u3042\u308B\u304C\u3001\n    // \u901A\u5E38\u306E\u30D5\u30A9\u30FC\u30AB\u30B9\u30A4\u30F3\u30B8\u30B1\u30FC\u30BF\u30FC\u304C\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u3068\u5B58\u5728\u611F\u304C\u5F37\u304F\u3001\u30E6\u30FC\u30B6\u30FC\u306B\u9055\u548C\u611F\u3092\u4E0E\u3048\u3066\u3057\u307E\u3046\u3002\n    // \u3053\u306E\u30B1\u30FC\u30B9\u3067\u306F\u30D5\u30A9\u30FC\u30AB\u30B9\u30A4\u30F3\u30B8\u30B1\u30FC\u30BF\u30FC\u3092\u6D88\u3057\u3066\u3057\u307E\u3063\u3066\u3082\u5927\u304D\u306A\u554F\u984C\u3068\u306F\u306A\u3089\u306A\u3044\u306F\u305A\u3060\u304C\u3001\u305D\u308C\u3092\u3059\u308B\u3068\u958B\u767A\u8005\u304C\u30D5\u30A9\u30FC\u30AB\u30B9\u306E\u5F53\u305F\u308B\u6319\u52D5\u3092\u78BA\u8A8D\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u306A\u304F\u306A\u308B\u554F\u984C\u304C\u8D77\u304D\u5F97\u308B\u3002\n    // \u305D\u3053\u3067\u3001focus-visible\u306A\u72B6\u6CC1\u306B\u9650\u308A\u3001\u901A\u5E38\u3088\u308A\u3082\u8584\u3044\u8272\u306E\u30D5\u30A9\u30FC\u30AB\u30B9\u30A4\u30F3\u30B8\u30B1\u30FC\u30BF\u30FC\u3092\u8868\u793A\u3059\u308B\u3002\n    // focus-visible\u306A\u5834\u5408\u306E\u307F\u306E\u8868\u793A\u306A\u306E\u3067\u3001\u30DE\u30A6\u30B9\u30DD\u30A4\u30F3\u30BF\u306B\u3088\u308B\u64CD\u4F5C\u4EE5\u5916\u3067\u306F\u30D5\u30A9\u30FC\u30AB\u30B9\u30A4\u30F3\u30B8\u30B1\u30FC\u30BF\u30FC\u304C\u8868\u793A\u3055\u308C\u308B\u3002\n    // \u3053\u3053\u3067\u306F\u30B3\u30F3\u30C8\u30E9\u30B9\u30C8\u6BD4\u304C\u4F4E\u304F\u306A\u308A\u305D\u3046\u306A\u8272\u3092\u610F\u56F3\u7684\u306B\u9078\u3093\u3067\u3044\u308B\u3002\n    box-shadow: 0 0 0 calc(", " * 2) ", ";\n  }\n"])), MinimumSize, Colors2021P02);
var templateObject_1, templateObject_2;
//# sourceMappingURL=TypographyStyle.js.map