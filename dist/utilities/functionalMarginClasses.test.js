import functionalMarginClasses, { pickFunctionalMarginProps, } from './functionalMarginClasses';
var ma = 0.5;
var mt = 1;
var mb = 1.5;
var mr = 2;
var ml = 3;
describe('functionalMarginClasses', function () {
    it('succeed with full props', function () {
        var props = {
            ma: ma,
            mt: mt,
            mb: mb,
            mr: mr,
            ml: ml,
        };
        var subject = functionalMarginClasses(props);
        expect(subject).toBe('vb-ma50 vb-mt100 vb-mb150 vb-mr200 vb-ml300');
    });
    it('succeed with blank props', function () {
        var subject = functionalMarginClasses({});
        expect(subject).toBe('');
    });
});
describe('pickFunctionalMarginProps', function () {
    it('succeed with full props and etc.', function () {
        var props = {
            ma: ma,
            mt: mt,
            mb: mb,
            mr: mr,
            ml: ml,
            dummy: 42,
        };
        var subject = pickFunctionalMarginProps(props);
        expect(subject.ma).toBe(ma);
        expect(subject.mt).toBe(mt);
        expect(subject.mb).toBe(mb);
        expect(subject.ml).toBe(ml);
        expect(subject.mr).toBe(mr);
        expect(subject).not.toHaveProperty('dummy');
    });
    it('succeed with blank props', function () {
        var subject = pickFunctionalMarginProps({});
        expect(subject.ma).toBeUndefined();
        expect(subject.mt).toBeUndefined();
        expect(subject.mb).toBeUndefined();
        expect(subject.ml).toBeUndefined();
        expect(subject.mr).toBeUndefined();
    });
});
//# sourceMappingURL=functionalMarginClasses.test.js.map