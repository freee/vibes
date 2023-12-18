var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import commonProps from '../../utilities/commonProps';
import { useLang } from '../../utilities/VibesProvider';
/**
 * フォームのフィールドが必須項目であることを表現するマークを提供するコンポーネントです。
 *
 * このコンポーネントは、そのフィールドの入力を行わないとフォームを送信できないことを予期できるようになることを目的としています。
 * 下に示す目安を参考に、それぞれのフィールドについて必須マークが必要かどうかを判断してください。
 *
 * ## 必須マークを使用する目安
 *
 * - ユーザーが「未入力」または「未選択」のまま送信できないフィールドには、必須マークを付ける
 *   - 空欄状態で送信するとエラーとなるテキストフィールド
 *   - デフォルトで0が表示されているが、0のまま送信しようとするとエラーとなる数値フィールド
 *   - 未選択状態で送信するとエラーとなるラジオボタンやセレクトボックス
 *   - 未チェック状態で送信するとエラーとなるチェックボックス
 * - 「未入力」や「未選択」の状態にすることができないフィールドには、必須マークを付けない
 *   - 「未選択」の選択肢が存在しないセレクトボックス
 *   - デフォルトでどれか一つの選択肢が選択状態になっているラジオボタン
 *
 * 必須マークが目立ちすぎている場合など、フォームの突破率やユーザーの感情面へのネガティブな影響がみられる場合には、「必須フィールドであること」の表示方式について個別に工夫をしても問題ありません。
 * ただし、必須マークを表示する目的は必須項目を事前に明示してエラーとなりづらくなることです。表示方式の変更は突破率やエモーショナルな部分だけでなく、フォームのエラー率やその内訳も計測しながら進めてください。
 *
 */
export var RequiredIcon = function (_a) {
    var props = __rest(_a, []);
    return (React.createElement("span", __assign({}, commonProps(props, 'vb-requiredIcon')),
        React.createElement("span", { className: "vb-requiredIcon__content" }, useLang() === 'en' ? 'Required' : '必須')));
};
//# sourceMappingURL=RequiredIcon.js.map