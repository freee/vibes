// @flow
import {
  getFocusableElements,
  isFocusableElement,
  // eslint-disable-next-line import/no-unresolved
} from 'vibes/index';

const focusableElement = getFocusableElements(new HTMLElement());
focusableElement.length;
focusableElement.item(0);
focusableElement.entries();
focusableElement.keys();
focusableElement.values();

// $FlowExpectedError
focusableElement.hoge();

isFocusableElement(new HTMLElement());
