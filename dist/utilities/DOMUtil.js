export var scrollableParent = function (el) {
    if (!el ||
        el === window.document.documentElement ||
        el === window.document.body) {
        return null;
    }
    var styles = window.getComputedStyle(el);
    if (['auto', 'scroll'].indexOf(styles.overflowY) >= 0 ||
        ['auto', 'scroll'].indexOf(styles.overflowX) >= 0) {
        return el;
    }
    else if (styles.position === 'fixed' || styles.position === 'sticky') {
        return window.document.body;
    }
    return scrollableParent(el.parentElement);
};
//# sourceMappingURL=DOMUtil.js.map