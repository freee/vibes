import commonProps, { pickCommonProps } from './commonProps';
var ma = 0.5;
var mt = 1;
var mb = 1.5;
var mr = 2;
var ml = 3;
var dataGuide = 'data-guide-example';
var dataTest = 'data-test-example';
var dataTracking = 'data-tracking-example';
var dataMasking = true;
var base = 'vb-base';
var deprecatedMarginClassProps = {
    marginBottom: true,
    marginLeft: true,
    marginRight: true,
    marginTop: true,
};
describe('commonProps', function () {
    it('succeed with full props', function () {
        var props = {
            ma: ma,
            mt: mt,
            mb: mb,
            mr: mr,
            ml: ml,
            'data-guide': dataGuide,
            'data-test': dataTest,
            'data-tracking': dataTracking,
            'data-masking': dataMasking,
        };
        var subject = commonProps(props, base, {
            foo: true,
            bar: true,
            baz: true,
        }, deprecatedMarginClassProps);
        expect(subject).toEqual(expect.objectContaining({
            className: "".concat(base, " ").concat(base, "--foo ").concat(base, "--bar ").concat(base, "--baz vb-mt100 vb-mb100 vb-mr100 vb-ml100 vb-ma50 vb-mt100 vb-mb150 vb-mr200 vb-ml300"),
            'data-guide': dataGuide,
            'data-test': dataTest,
            'data-tracking': dataTracking,
            'data-masking': dataMasking,
        }));
    });
    it('succeed with minimum props', function () {
        var subject = commonProps({}, base);
        expect(subject).toEqual(expect.objectContaining({
            className: base,
        }));
    });
});
describe('pickCommonProps', function () {
    it('succeed with full props and etc.', function () {
        var props = {
            ma: ma,
            mt: mt,
            mb: mb,
            mr: mr,
            ml: ml,
            'data-guide': dataGuide,
            'data-test': dataTest,
            'data-tracking': dataTracking,
            'data-masking': dataMasking,
            dummy: 42,
        };
        var subject = pickCommonProps(props);
        expect(subject.ma).toBe(ma);
        expect(subject.mt).toBe(mt);
        expect(subject.mb).toBe(mb);
        expect(subject.ml).toBe(ml);
        expect(subject.mr).toBe(mr);
        expect(subject['data-guide']).toBe(dataGuide);
        expect(subject['data-test']).toBe(dataTest);
        expect(subject['data-tracking']).toBe(dataTracking);
        expect(subject['data-masking']).toBe(dataMasking);
        expect(subject).not.toHaveProperty('dummy');
    });
    it('succeed with blank props', function () {
        var subject = pickCommonProps({});
        expect(subject.ma).toBeUndefined();
        expect(subject.mt).toBeUndefined();
        expect(subject.mb).toBeUndefined();
        expect(subject.ml).toBeUndefined();
        expect(subject.mr).toBeUndefined();
        expect(subject['data-guide']).toBeUndefined();
        expect(subject['data-test']).toBeUndefined();
        expect(subject['data-tracking']).toBeUndefined();
        expect(subject['data-masking']).toBeUndefined();
    });
});
//# sourceMappingURL=commonProps.test.js.map