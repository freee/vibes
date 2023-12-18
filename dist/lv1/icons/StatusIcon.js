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
import * as React from 'react';
import commonProps from '../../utilities/commonProps';
/**
 * オブジェクトのステータスを表示するためのコンポーネントです。
 *
 * ## 用途
 * - ユーザーの操作やシステムによる処理の進捗などによって変わっていくステータス表示に使用することを想定しています。
 *  - そのオブジェクトの属性（例：取引における収入か支出）を示す場合は別の方法を検討してください。
 *  - たとえば、あるフォームが入力必須であることを示す場合は `RequiredIcon` を使用してください。
 * - ボタンとして使うことは想定していません。
 *  - 「ステータスを変更するためのボタン」が必要な場合は、`StatusSelector` コンポーネントを使用してください。
 *
 * ## type の使い分け
 * - filled 系か outlined 系かの使い分け
 *   - ユーザーが何かしらの操作をしなければならないステータスの場合は、他のステータスと比べてユーザーの注意を引けるよう filled 系を使用してください。
 *     - 例：ワークフローが自分の承認待ちである場合、何かしらの修正を必要としている場合
 *   - そうではない場合は基本的に outlined 系を使用してください。
 * - 色の使い分け
 *   - type 名が意味をもった名称になっていますが、それにとらわれなくてOKです（type名変更したほうがいいかもしれない）。
 *   - そのオブジェクトのステータスとして異常であるためユーザーの注意を喚起しておきたい場合は、赤系の色（`error`, `required`）を使ってください。
 *   - ユーザーがそのオブジェクトのステータスに注意を払う必要がなくなった場合は、グレー系の色（`done`, `disabled`）を使ってください。
 *
 */
var StatusIcon = function (props) {
    var children = props.children, type = props.type, marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize;
    var statusIconBaseClass = 'vb-statusIcon';
    var classModifier = [
        'done',
        'success',
        'progress',
        'required',
        'disabled',
        'emphasis',
        'warning',
        'error',
    ].reduce(function (acm, mod) {
        var _a;
        return (__assign(__assign({}, acm), (_a = {}, _a[mod] = type === mod, _a)));
    }, {});
    return (React.createElement("span", __assign({}, commonProps(props, statusIconBaseClass, classModifier, {
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginTop: marginTop,
        marginSize: marginSize,
    })), children));
};
export default StatusIcon;
//# sourceMappingURL=StatusIcon.js.map