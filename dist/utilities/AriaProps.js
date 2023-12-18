/*
  roleごとに使用できるaria属性を定義しておくことで、WAI-ARIAを扱う上で便利にしたいものの、量が多くてしんどそう。
  普段使わないものまでここに定義していくのはしんどいので、よく使うもの/必要になったものを定義していっています。
 */
export function filterButtonAriaProps(props) {
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
export function filterLinkAriaProps(props) {
    return {
        'aria-expanded': props['aria-expanded'],
        'aria-controls': props['aria-controls'],
        'aria-owns': props['aria-owns'],
        'aria-haspopup': props['aria-haspopup'],
        'aria-describedby': props['aria-describedby'],
        'aria-atomic': props['aria-atomic'],
    };
}
export function filterTextBoxAriaProps(props) {
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
export function filterNumberInputAriaProps(props) {
    return {
        'aria-valuemin': props['aria-valuemin'],
        'aria-valuemax': props['aria-valuemax'],
        'aria-valuenow': props['aria-valuenow'],
    };
}
export function filterTableRowAriaProps(props) {
    return {
        'aria-expanded': props['aria-expanded'],
        'aria-setsize': props['aria-setsize'],
        'aria-posinset': props['aria-posinset'],
        'aria-level': props['aria-level'],
    };
}
//# sourceMappingURL=AriaProps.js.map