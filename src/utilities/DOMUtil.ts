export const scrollableParent = (
  el: HTMLElement | null
): HTMLElement | null => {
  if (
    !el ||
    el === window.document.documentElement ||
    el === window.document.body
  ) {
    return null;
  }
  const styles = window.getComputedStyle(el);
  if (
    ['auto', 'scroll'].indexOf(styles.overflowY) >= 0 ||
    ['auto', 'scroll'].indexOf(styles.overflowX) >= 0
  ) {
    return el;
  }
  return scrollableParent(el.parentElement);
};
