import { getValidDateNearestTarget } from '../../src/utilities/date';

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
