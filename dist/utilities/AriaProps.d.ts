declare type AriaExpandedT = boolean;
declare type AriaPressedT = boolean | 'mixed';
declare type AriaControlsT = string;
declare type AriaOwnsT = string;
declare type AriaHaspopupT = boolean | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
declare type AriaDescribedbyT = string;
declare type AriaActivedescendantT = string;
declare type AriaAutocompleteT = 'inline' | 'list' | 'both' | 'none';
declare type AriaAtomicT = boolean;
declare type AriaNumberValueT = number;
declare type AriaLevelT = number;
declare type AriaSetSizeT = number;
declare type AriaPosinsetT = number;
export declare type ButtonAriaProps = {
    'aria-expanded'?: AriaExpandedT;
    'aria-pressed'?: AriaPressedT;
    'aria-controls'?: AriaControlsT;
    'aria-owns'?: AriaOwnsT;
    'aria-haspopup'?: AriaHaspopupT;
    'aria-describedby'?: AriaDescribedbyT;
    'aria-atomic'?: AriaAtomicT;
};
export declare type LinkAriaProps = {
    'aria-expanded'?: AriaExpandedT;
    'aria-controls'?: AriaControlsT;
    'aria-owns'?: AriaOwnsT;
    'aria-haspopup'?: AriaHaspopupT;
    'aria-describedby'?: AriaDescribedbyT;
    'aria-atomic'?: AriaAtomicT;
};
export declare type TextBoxAriaProps = {
    'aria-expanded'?: AriaExpandedT;
    'aria-activedescendant'?: AriaActivedescendantT;
    'aria-controls'?: AriaControlsT;
    'aria-owns'?: AriaOwnsT;
    'aria-haspopup'?: AriaHaspopupT;
    'aria-describedby'?: AriaDescribedbyT;
    'aria-autocomplete'?: AriaAutocompleteT;
    'aria-atomic'?: AriaAtomicT;
};
export declare type NumberInputAriaProps = {
    'aria-valuemin'?: AriaNumberValueT;
    'aria-valuemax'?: AriaNumberValueT;
    'aria-valuenow'?: AriaNumberValueT;
};
export declare type TableRowAriaProps = {
    'aria-level'?: AriaLevelT;
    'aria-setsize'?: AriaSetSizeT;
    'aria-posinset'?: AriaPosinsetT;
    'aria-expanded'?: AriaExpandedT;
};
export declare function filterButtonAriaProps(props: ButtonAriaProps): ButtonAriaProps;
export declare function filterLinkAriaProps(props: LinkAriaProps): LinkAriaProps;
export declare function filterTextBoxAriaProps(props: TextBoxAriaProps): TextBoxAriaProps;
export declare function filterNumberInputAriaProps(props: NumberInputAriaProps): NumberInputAriaProps;
export declare function filterTableRowAriaProps(props: TableRowAriaProps): TableRowAriaProps;
export {};
