export const convertRemToPixel = (rem: number) => {
  const baseFontSize =
    parseInt(
      getComputedStyle(document.documentElement).fontSize.split('px')[0]
    ) || 16;
  return rem * baseFontSize;
};
