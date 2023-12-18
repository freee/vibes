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
import AnimateHeight from 'react-animate-height';
import PopupProgressBar from '../popupProgressBar/PopupProgressBar';
var PopupProgressBarWithAnimation = function (state) {
    var _a = React.useState(false), isShow = _a[0], setIsShow = _a[1];
    // フェードインさせるために初期値はfalseにしておく
    React.useEffect(function () {
        setTimeout(function () { return setIsShow(true); }, 100);
    }, []);
    React.useEffect(function () {
        if (state.status === 'done') {
            setTimeout(function () {
                setIsShow(false);
            }, 5000);
        }
    }, [state.status]);
    return (React.createElement(AnimateHeight, { duration: isShow ? 250 : 200, height: isShow ? 'auto' : 0, animateOpacity: true },
        React.createElement("div", { className: "vb-popupProgressBarPortal__element" },
            React.createElement(PopupProgressBar, __assign({}, state, { onClose: function () { return setIsShow(false); } })))));
};
/**
 * 画面左下にフロート表示するメッセージ。非同期処理の進捗、完了、エラーに関するメッセージを表示するために使用してください。
 *
 * - 「エラーが起きた」「完了した」など、短いメッセージを伝えるのに使用してください。
 * - あくまで「ユーザーがフィードバックを見落とさないようにする」のを目的として使用してください。
 *   - 「○○は半角で入力してください」のようなエラーの詳細は、このコンポーネントとは別に、画面レイアウト内で表示してください。
 * - `done` タイプのメッセージは一定時間経過後に非表示となります。 `error` `doing` に関しては自動的には消えません。
 * - 複数表示する際には、上から古い順に並ぶように表示して下さい。
 * - `progressValue` または `progressMaxValue` のどちらかが指定されていない場合、ProgressBarではなくアイコンでの表示になります。
 */
var PopupProgressBarPortal = function (_a) {
    var states = _a.progressStates;
    return (React.createElement("div", { className: "vb-popupProgressBarPortal" }, states.map(function (state, index) { return (React.createElement(PopupProgressBarWithAnimation, __assign({ key: index }, state))); })));
};
export default PopupProgressBarPortal;
//# sourceMappingURL=PopupProgressBarPortal.js.map