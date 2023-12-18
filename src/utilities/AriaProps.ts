/*
  roleごとに使用できるaria属性を定義しておくことで、WAI-ARIAを扱う上で便利にしたいものの、量が多くてしんどそう。
  普段使わないものまでここに定義していくのはしんどいので、よく使うもの/必要になったものを定義していっています。
 */

type AriaExpandedT = boolean;
type AriaPressedT = boolean | 'mixed';
type AriaControlsT = string;
type AriaOwnsT = string;
type AriaHaspopupT = boolean | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
type AriaDescribedbyT = string;
type AriaActivedescendantT = string;
type AriaAutocompleteT = 'inline' | 'list' | 'both' | 'none';
type AriaAtomicT = boolean;
type AriaNumberValueT = number;
type AriaLevelT = number;
type AriaSetSizeT = number;
type AriaPosinsetT = number;

export type ButtonAriaProps = {
  'aria-expanded'?: AriaExpandedT;
  'aria-pressed'?: AriaPressedT;
  'aria-controls'?: AriaControlsT;
  'aria-owns'?: AriaOwnsT;
  'aria-haspopup'?: AriaHaspopupT;
  'aria-describedby'?: AriaDescribedbyT;
  'aria-atomic'?: AriaAtomicT;
};

export type LinkAriaProps = {
  'aria-expanded'?: AriaExpandedT;
  'aria-controls'?: AriaControlsT;
  'aria-owns'?: AriaOwnsT;
  'aria-haspopup'?: AriaHaspopupT;
  'aria-describedby'?: AriaDescribedbyT;
  'aria-atomic'?: AriaAtomicT;
};

export type TextBoxAriaProps = {
  'aria-expanded'?: AriaExpandedT;
  'aria-activedescendant'?: AriaActivedescendantT;
  'aria-controls'?: AriaControlsT;
  'aria-owns'?: AriaOwnsT;
  'aria-haspopup'?: AriaHaspopupT;
  'aria-describedby'?: AriaDescribedbyT;
  'aria-autocomplete'?: AriaAutocompleteT;
  'aria-atomic'?: AriaAtomicT;
};

export type NumberInputAriaProps = {
  'aria-valuemin'?: AriaNumberValueT;
  'aria-valuemax'?: AriaNumberValueT;
  'aria-valuenow'?: AriaNumberValueT;
};

export type TableRowAriaProps = {
  'aria-level'?: AriaLevelT;
  'aria-setsize'?: AriaSetSizeT;
  'aria-posinset'?: AriaPosinsetT;
  'aria-expanded'?: AriaExpandedT;
};

export function filterButtonAriaProps(props: ButtonAriaProps): ButtonAriaProps {
  return {
    'aria-expanded': props['aria-expanded'],
    'aria-pressed': props['aria-pressed'],
    'aria-controls': props['aria-controls'],
    'aria-owns': props['aria-owns'],
    'aria-haspopup': props['aria-haspopup'],
    'aria-describedby': props['aria-describedby'],
    'aria-atomic': props['aria-atomic'],
  };
}

export function filterLinkAriaProps(props: LinkAriaProps): LinkAriaProps {
  return {
    'aria-expanded': props['aria-expanded'],
    'aria-controls': props['aria-controls'],
    'aria-owns': props['aria-owns'],
    'aria-haspopup': props['aria-haspopup'],
    'aria-describedby': props['aria-describedby'],
    'aria-atomic': props['aria-atomic'],
  };
}

export function filterTextBoxAriaProps(
  props: TextBoxAriaProps
): TextBoxAriaProps {
  return {
    'aria-expanded': props['aria-expanded'],
    'aria-activedescendant': props['aria-activedescendant'],
    'aria-controls': props['aria-controls'],
    'aria-owns': props['aria-owns'],
    'aria-haspopup': props['aria-haspopup'],
    'aria-describedby': props['aria-describedby'],
    'aria-autocomplete': props['aria-autocomplete'],
    'aria-atomic': props['aria-atomic'],
  };
}

export function filterNumberInputAriaProps(
  props: NumberInputAriaProps
): NumberInputAriaProps {
  return {
    'aria-valuemin': props['aria-valuemin'],
    'aria-valuemax': props['aria-valuemax'],
    'aria-valuenow': props['aria-valuenow'],
  };
}

export function filterTableRowAriaProps(
  props: TableRowAriaProps
): TableRowAriaProps {
  return {
    'aria-expanded': props['aria-expanded'],
    'aria-setsize': props['aria-setsize'],
    'aria-posinset': props['aria-posinset'],
    'aria-level': props['aria-level'],
  };
}
