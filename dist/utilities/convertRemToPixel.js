export var convertRemToPixel = function (rem) {
    var baseFontSize = parseInt(getComputedStyle(document.documentElement).fontSize.split('px')[0]) || 16;
    return rem * baseFontSize;
};
//# sourceMappingURL=convertRemToPixel.js.map