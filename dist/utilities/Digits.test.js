import { Digits } from './Digits';
describe('Digits', function () {
    describe('formalize', function () {
        it('converts undefined to 0', function () {
            return expect(Digits.formalize()).toEqual('0');
        });
        it('converts number to comma-separated', function () {
            return expect(Digits.formalize(12345678)).toEqual('12,345,678');
        });
        it('converts string to comma-separated', function () {
            return expect(Digits.formalize('12345678')).toEqual('12,345,678');
        });
        it('converts negative value', function () {
            return expect(Digits.formalize('-12345678')).toEqual('-12,345,678');
        });
        it('converts float number', function () {
            expect(Digits.formalize('12345678.90123456')).toEqual('12,345,678.90123456');
            expect(Digits.formalize('-12345678.90123456')).toEqual('-12,345,678.90123456');
        });
    });
    describe('numberize', function () {
        it('converts number-string to number', function () {
            return expect(Digits.numberize('1234')).toEqual(1234);
        });
        it('ignores non-number string', function () {
            return expect(Digits.numberize('a1b2c3d4')).toEqual(1234);
        });
        it('convers negative value', function () {
            return expect(Digits.numberize('-1234')).toEqual(-1234);
        });
    });
    describe('toPercent', function () {
        it('converts number to percentage', function () {
            return expect(Digits.toPercent(0.123456)).toEqual('12.346');
        });
        it('converts string to percentage', function () {
            return expect(Digits.toPercent('0.123456')).toEqual('12.346');
        });
        it('uses toPercent', function () {
            return expect(Digits.toPercent('0.123456', 2)).toEqual('12.35');
        });
    });
});
//# sourceMappingURL=Digits.test.js.map