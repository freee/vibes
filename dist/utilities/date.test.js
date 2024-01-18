import { isValidDateInRange, getValidDateNearestTarget, formatDate, formatDayOfWeek, } from './date';
describe('isValidDateInRange', function () {
    describe('when date is empty', function () {
        it('return false', function () {
            return expect(isValidDateInRange('', '', '')).toEqual(false);
        });
    });
});
describe('getValidDateNearestTarget', function () {
    describe('when a target is in the range', function () {
        it('returns the target.', function () {
            return expect(getValidDateNearestTarget(new Date('2022-01-01'), new Date('2021-01-01'), new Date('2023-01-01'))).toEqual(new Date('2022-01-01'));
        });
    });
    describe('without the range', function () {
        it('returns the target.', function () {
            return expect(getValidDateNearestTarget(new Date('2022-01-01'), undefined, undefined)).toEqual(new Date('2022-01-01'));
        });
    });
    describe('when a target is before minDate', function () {
        it('returns the minDate.', function () {
            return expect(getValidDateNearestTarget(new Date('2020-01-01'), new Date('2021-01-01'), new Date('2023-01-01'))).toEqual(new Date('2021-01-01'));
        });
    });
    describe('when a target is after maxDate', function () {
        it('returns the maxDate.', function () {
            return expect(getValidDateNearestTarget(new Date('2024-01-01'), new Date('2021-01-01'), new Date('2023-01-01'))).toEqual(new Date('2023-01-01'));
        });
    });
    describe('with only minDate that is after the target', function () {
        it('returns the mixDate.', function () {
            return expect(getValidDateNearestTarget(new Date('2020-01-01'), new Date('2021-01-01'), undefined)).toEqual(new Date('2021-01-01'));
        });
    });
    describe('when the range is invalid', function () {
        it('returns null.', function () {
            return expect(getValidDateNearestTarget(new Date('2020-01-01'), new Date('2023-01-01'), new Date('2021-01-01'))).toEqual(null);
        });
    });
    describe('when the target is invalid', function () {
        it('returns null.', function () {
            return expect(getValidDateNearestTarget(new Date('2020-01-41'), undefined, undefined)).toEqual(null);
        });
    });
});
describe('formatDate', function () {
    describe('when date is empty', function () {
        it('return empty string', function () { return expect(formatDate('')).toEqual(''); });
    });
    describe('when date is not empty', function () {
        it('return formatted date', function () {
            return expect(formatDate('2021-01-01')).toEqual('2021-01-01');
        });
    });
});
describe('formatDayOfWeek', function () {
    describe('when date is empty', function () {
        it('return empty string', function () { return expect(formatDayOfWeek('')).toEqual(''); });
    });
    describe('when date is not empty', function () {
        it('return formatted date', function () {
            expect(formatDayOfWeek('2021-01-01')).toEqual('金曜日');
            expect(formatDayOfWeek('2021-01-02')).toEqual('土曜日');
            expect(formatDayOfWeek('2021-01-03')).toEqual('日曜日');
            expect(formatDayOfWeek('2021-01-04')).toEqual('月曜日');
            expect(formatDayOfWeek('2021-01-05')).toEqual('火曜日');
            expect(formatDayOfWeek('2021-01-06')).toEqual('水曜日');
            expect(formatDayOfWeek('2021-01-07')).toEqual('木曜日');
        });
    });
});
//# sourceMappingURL=date.test.js.map