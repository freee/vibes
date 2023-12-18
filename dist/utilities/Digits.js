/**
 * 数値の3桁毎に `,` を挿入した文字列を返す。小数点以下は `,` を挿入しない
 * @param str 数値または文字列化された数値
 */
var formalize = function (str) {
    return str
        ? String(str).replace(/^(-?\d+)(\..*)?/, function (_matched, p1, p2) {
            return "".concat(p1.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')).concat(p2 || '');
        })
        : '0';
};
/**
 * 文字列を数値にする
 * @param str 文字列化された数値
 */
var numberize = function (str) {
    return Number(str.replace(/[^0-9\-.]/g, ''));
};
/**
 * 数値からパーセントに変換する
 * @param val 数値または文字列化された数値
 * @param toFixed 桁数(デフォルトは3)
 */
var toPercent = function (val, toFixed) {
    if (toFixed === void 0) { toFixed = 3; }
    return (Number(val) * 100).toFixed(toFixed);
};
export var Digits = { formalize: formalize, numberize: numberize, toPercent: toPercent };
//# sourceMappingURL=Digits.js.map