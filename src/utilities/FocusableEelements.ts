export const getFocusableElements = (el: HTMLElement) =>
  el.querySelectorAll(
    'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), *[tabindex]:not([tabindex="-1"])'
  );

export const isFocusableElement = (el: Element): boolean => {
  if (el.getAttribute('aria-hidden') === 'true') {
    return false;
  }
  switch (el.tagName) {
    case 'A':
      return el.hasAttribute('href');
    case 'BUTTON':
    case 'INPUT':
    case 'TEXTAREA':
    case 'SELECT':
      return !el.hasAttribute('disabled');
    default:
      return (
        el.hasAttribute('tabindex') && el.getAttribute('tabindex') !== '-1'
      );
  }
};
