import commonProps, { pickCommonProps } from './commonProps';
import { MarginSize } from './functionalMarginClasses';

const ma: MarginSize = 0.5;
const mt: MarginSize = 1;
const mb: MarginSize = 1.5;
const mr: MarginSize = 2;
const ml: MarginSize = 3;
const dataGuide = 'data-guide-example';
const dataTest = 'data-test-example';
const dataTracking = 'data-tracking-example';
const dataMasking = true;

const base = 'vb-base';
const deprecatedMarginClassProps = {
  marginBottom: true,
  marginLeft: true,
  marginRight: true,
  marginTop: true,
};

describe('commonProps', () => {
  it('succeed with full props', () => {
    const props = {
      ma,
      mt,
      mb,
      mr,
      ml,
      'data-guide': dataGuide,
      'data-test': dataTest,
      'data-tracking': dataTracking,
      'data-masking': dataMasking,
    };
    const subject = commonProps(
      props,
      base,
      {
        foo: true,
        bar: true,
        baz: true,
      },
      deprecatedMarginClassProps
    );

    expect(subject).toEqual(
      expect.objectContaining({
        className: `${base} ${base}--foo ${base}--bar ${base}--baz vb-mt100 vb-mb100 vb-mr100 vb-ml100 vb-ma50 vb-mt100 vb-mb150 vb-mr200 vb-ml300`,
        'data-guide': dataGuide,
        'data-test': dataTest,
        'data-tracking': dataTracking,
        'data-masking': dataMasking,
      })
    );
  });

  it('succeed with minimum props', () => {
    const subject = commonProps({}, base);

    expect(subject).toEqual(
      expect.objectContaining({
        className: base,
      })
    );
  });
});

describe('pickCommonProps', () => {
  it('succeed with full props and etc.', () => {
    const props = {
      ma,
      mt,
      mb,
      mr,
      ml,
      'data-guide': dataGuide,
      'data-test': dataTest,
      'data-tracking': dataTracking,
      'data-masking': dataMasking,
      dummy: 42,
    };
    const subject = pickCommonProps(props);

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

  it('succeed with blank props', () => {
    const subject = pickCommonProps({});

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
