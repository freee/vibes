import { Ascii } from './Ascii';
describe('Ascii', function () {
    var zenkaku = '１２３４５６７８９０－＝ｑｗｅｒｔｙｕｉｏｐ［］＼ａｓｄｆｇｈｊｋｌ；＇ｚｘｃｖｂｎｍ，．／！＠＃＄％＾＆＊（）＿＋ＱＷＥＲＴＹＵＩＯＰ｛｝｜ＡＳＤＦＧＨＪＫＬ：＂ＺＸＣＶＢＮＭ＜＞？';
    var hankaku = '1234567890-=qwertyuiop[]\\asdfghjkl;\'zxcvbnm,./!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?';
    describe('zenkakuToHankaku', function () {
        it('converts zenkaku to ASCII code', function () {
            var subject = Ascii.zenkakuToHankaku(zenkaku);
            expect(subject).toEqual(hankaku);
        });
        it('converts not convert hankaku', function () {
            var subject = Ascii.zenkakuToHankaku(hankaku);
            expect(subject).toEqual(hankaku);
        });
    });
    describe('hankakuToZenkaku', function () {
        it('converts hankaku to zenkaku code', function () {
            var subject = Ascii.hankakuToZenkaku(hankaku);
            expect(subject).toEqual(zenkaku);
        });
        it('converts not convert zenkaku', function () {
            var subject = Ascii.hankakuToZenkaku(zenkaku);
            expect(subject).toEqual(zenkaku);
        });
    });
});
//# sourceMappingURL=Ascii.test.js.map