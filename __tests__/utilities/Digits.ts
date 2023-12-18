import { Digits } from '../../src/utilities/Digits';

describe('Digits', () => {
  describe('formalize', () => {
    it('converts undefined to 0', () =>
      expect(Digits.formalize()).toEqual('0'));
    it('converts number to comma-separated', () =>
      expect(Digits.formalize(12345678)).toEqual('12,345,678'));
    it('converts string to comma-separated', () =>
      expect(Digits.formalize('12345678')).toEqual('12,345,678'));
    it('converts negative value', () =>
      expect(Digits.formalize('-12345678')).toEqual('-12,345,678'));
    it('converts float number', () => {
      expect(Digits.formalize('12345678.90123456')).toEqual(
        '12,345,678.90123456'
      );
      expect(Digits.formalize('-12345678.90123456')).toEqual(
        '-12,345,678.90123456'
      );
    });
  });
  describe('numberize', () => {
    it('converts number-string to number', () =>
      expect(Digits.numberize('1234')).toEqual(1234));
    it('ignores non-number string', () =>
      expect(Digits.numberize('a1b2c3d4')).toEqual(1234));
    it('convers negative value', () =>
      expect(Digits.numberize('-1234')).toEqual(-1234));
  });
  describe('toPercent', () => {
    it('converts number to percentage', () =>
      expect(Digits.toPercent(0.123456)).toEqual('12.346'));
    it('converts string to percentage', () =>
      expect(Digits.toPercent('0.123456')).toEqual('12.346'));
    it('uses toPercent', () =>
      expect(Digits.toPercent('0.123456', 2)).toEqual('12.35'));
  });
});
