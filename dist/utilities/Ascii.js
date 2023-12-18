var hankakuToZenkaku = function (str) {
    // 全角スペースは離れてるので先にやる
    return str.replace(/\u0020/g, '\u3000').replace(
    // 半角「!」(0021) から半角チルダ(007E)
    /[\u0021-\u007E]/g, function (s) { return String.fromCharCode(s.charCodeAt(0) + 0xfee0); });
};
var zenkakuToHankaku = function (str) {
    // 全角スペースは離れてるので先にやる
    return str.replace(/\u3000/g, '\u0020').replace(
    // 全角「！」(FF01)から全角チルダ(FF5E)
    /[\uFF01-\uFF5E]/g, function (s) { return String.fromCharCode(s.charCodeAt(0) - 0xfee0); });
};
export var Ascii = { hankakuToZenkaku: hankakuToZenkaku, zenkakuToHankaku: zenkakuToHankaku };
//# sourceMappingURL=Ascii.js.map