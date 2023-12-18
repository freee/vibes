/**
 * 数値の3桁毎に `,` を挿入した文字列を返す。小数点以下は `,` を挿入しない
 * @param str 数値または文字列化された数値
 */
const formalize = (str?: string | number): string => {
  return str
    ? String(str).replace(
        /^(-?\d+)(\..*)?/,
        (_matched, p1: string, p2?: string): string => {
          return `${p1.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')}${p2 || ''}`;
        }
      )
    : '0';
};

/**
 * 文字列を数値にする
 * @param str 文字列化された数値
 */
const numberize = (str: string): number => {
  return Number(str.replace(/[^0-9\-.]/g, ''));
};

/**
 * 数値からパーセントに変換する
 * @param val 数値または文字列化された数値
 * @param toFixed 桁数(デフォルトは3)
 */
const toPercent = (val: string | number, toFixed = 3): string => {
  return (Number(val) * 100).toFixed(toFixed);
};

export const Digits = { formalize, numberize, toPercent };
