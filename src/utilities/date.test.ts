import {
  isValidDateInRange,
  getValidDateNearestTarget,
  formatDate,
  formatDayOfWeek,
} from './date';

describe('isValidDateInRange', () => {
  describe('when date is empty', () => {
    it('return false', () =>
      expect(isValidDateInRange('', '', '')).toEqual(false));
  });
});

describe('getValidDateNearestTarget', () => {
  describe('when a target is in the range', () => {
    it('returns the target.', () =>
      expect(
        getValidDateNearestTarget(
          new Date('2022-01-01'),
          new Date('2021-01-01'),
          new Date('2023-01-01')
        )
      ).toEqual(new Date('2022-01-01')));
  });

  describe('without the range', () => {
    it('returns the target.', () =>
      expect(
        getValidDateNearestTarget(new Date('2022-01-01'), undefined, undefined)
      ).toEqual(new Date('2022-01-01')));
  });

  describe('when a target is before minDate', () => {
    it('returns the minDate.', () =>
      expect(
        getValidDateNearestTarget(
          new Date('2020-01-01'),
          new Date('2021-01-01'),
          new Date('2023-01-01')
        )
      ).toEqual(new Date('2021-01-01')));
  });

  describe('when a target is after maxDate', () => {
    it('returns the maxDate.', () =>
      expect(
        getValidDateNearestTarget(
          new Date('2024-01-01'),
          new Date('2021-01-01'),
          new Date('2023-01-01')
        )
      ).toEqual(new Date('2023-01-01')));
  });

  describe('with only minDate that is after the target', () => {
    it('returns the mixDate.', () =>
      expect(
        getValidDateNearestTarget(
          new Date('2020-01-01'),
          new Date('2021-01-01'),
          undefined
        )
      ).toEqual(new Date('2021-01-01')));
  });

  describe('when the range is invalid', () => {
    it('returns null.', () =>
      expect(
        getValidDateNearestTarget(
          new Date('2020-01-01'),
          new Date('2023-01-01'),
          new Date('2021-01-01')
        )
      ).toEqual(null));
  });

  describe('when the target is invalid', () => {
    it('returns null.', () =>
      expect(
        getValidDateNearestTarget(new Date('2020-01-41'), undefined, undefined)
      ).toEqual(null));
  });
});

describe('formatDate', () => {
  describe('when date is empty', () => {
    it('return empty string', () => expect(formatDate('')).toEqual(''));
  });

  describe('when date is not empty', () => {
    it('return formatted date', () =>
      expect(formatDate('2021-01-01')).toEqual('2021-01-01'));
  });
});

describe('formatDayOfWeek', () => {
  describe('when date is empty', () => {
    it('return empty string', () => expect(formatDayOfWeek('')).toEqual(''));
  });

  describe('when date is not empty', () => {
    it('return formatted date', () => {
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
