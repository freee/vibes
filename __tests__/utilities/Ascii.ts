import { Ascii } from '../../src/utilities/Ascii';

describe('Ascii', () => {
  const zenkaku =
    '１２３４５６７８９０－＝ｑｗｅｒｔｙｕｉｏｐ［］＼ａｓｄｆｇｈｊｋｌ；＇ｚｘｃｖｂｎｍ，．／！＠＃＄％＾＆＊（）＿＋ＱＷＥＲＴＹＵＩＯＰ｛｝｜ＡＳＤＦＧＨＪＫＬ：＂ＺＸＣＶＢＮＭ＜＞？';
  const hankaku =
    '1234567890-=qwertyuiop[]\\asdfghjkl;\'zxcvbnm,./!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?';
  describe('zenkakuToHankaku', () => {
    it('converts zenkaku to ASCII code', () => {
      const subject = Ascii.zenkakuToHankaku(zenkaku);
      expect(subject).toEqual(hankaku);
    });
    it('converts not convert hankaku', () => {
      const subject = Ascii.zenkakuToHankaku(hankaku);
      expect(subject).toEqual(hankaku);
    });
  });
  describe('hankakuToZenkaku', () => {
    it('converts hankaku to zenkaku code', () => {
      const subject = Ascii.hankakuToZenkaku(hankaku);
      expect(subject).toEqual(zenkaku);
    });
    it('converts not convert zenkaku', () => {
      const subject = Ascii.hankakuToZenkaku(zenkaku);
      expect(subject).toEqual(zenkaku);
    });
  });
});
