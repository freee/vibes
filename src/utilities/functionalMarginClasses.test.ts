import functionalMarginClasses, {
  pickFunctionalMarginProps,
  MarginSize,
} from './functionalMarginClasses';

const ma: MarginSize = 0.5;
const mt: MarginSize = 1;
const mb: MarginSize = 1.5;
const mr: MarginSize = 2;
const ml: MarginSize = 3;

describe('functionalMarginClasses', () => {
  it('succeed with full props', () => {
    const props = {
      ma,
      mt,
      mb,
      mr,
      ml,
    };
    const subject = functionalMarginClasses(props);

    expect(subject).toBe('vb-ma50 vb-mt100 vb-mb150 vb-mr200 vb-ml300');
  });

  it('succeed with blank props', () => {
    const subject = functionalMarginClasses({});

    expect(subject).toBe('');
  });
});

describe('pickFunctionalMarginProps', () => {
  it('succeed with full props and etc.', () => {
    const props = {
      ma,
      mt,
      mb,
      mr,
      ml,
      dummy: 42,
    };
    const subject = pickFunctionalMarginProps(props);

    expect(subject.ma).toBe(ma);
    expect(subject.mt).toBe(mt);
    expect(subject.mb).toBe(mb);
    expect(subject.ml).toBe(ml);
    expect(subject.mr).toBe(mr);
    expect(subject).not.toHaveProperty('dummy');
  });

  it('succeed with blank props', () => {
    const subject = pickFunctionalMarginProps({});

    expect(subject.ma).toBeUndefined();
    expect(subject.mt).toBeUndefined();
    expect(subject.mb).toBeUndefined();
    expect(subject.ml).toBeUndefined();
    expect(subject.mr).toBeUndefined();
  });
});
