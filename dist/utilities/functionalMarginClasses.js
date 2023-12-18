export var pickFunctionalMarginProps = function (_a) {
    var ma = _a.ma, mt = _a.mt, mb = _a.mb, ml = _a.ml, mr = _a.mr;
    return { ma: ma, mt: mt, mb: mb, ml: ml, mr: mr };
};
var formatMarginSize = function (ms) {
    return ms === 'auto' ? '-auto' : String(ms * 100);
};
var functionalMarginClasses = function (_a) {
    var ma = _a.ma, mt = _a.mt, mb = _a.mb, ml = _a.ml, mr = _a.mr;
    return [
        ma ? "vb-ma".concat(formatMarginSize(ma)) : '',
        mt ? "vb-mt".concat(formatMarginSize(mt)) : '',
        mb ? "vb-mb".concat(formatMarginSize(mb)) : '',
        mr ? "vb-mr".concat(formatMarginSize(mr)) : '',
        ml ? "vb-ml".concat(formatMarginSize(ml)) : '',
    ]
        .filter(function (e) { return e; })
        .join(' ');
};
export default functionalMarginClasses;
//# sourceMappingURL=functionalMarginClasses.js.map