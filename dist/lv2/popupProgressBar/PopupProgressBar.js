import * as React from 'react';
import { MdClose, MdDone, MdError } from 'react-icons/md';
import { IconOnlyButton, InlineSpinner, PopupBase, ProgressBar, MaterialIcon, } from '../..';
import vbClassNames from '../../utilities/vbClassNames';
/**
 * 非同期処理の進捗を表示するメッセージ。非同期処理の進捗、完了、エラーに関するメッセージを表示するために使用してください。
 *
 * - 「エラーが起きた」「完了した」など、短いメッセージを伝えるのに使用してください。
 * - あくまで「ユーザーがフィードバックを見落とさないようにする」のを目的として使用してください。
 *   - 「○○は半角で入力してください」のようなエラーの詳細は、このコンポーネントとは別に、画面レイアウト内で表示してください。
 * - `progressValue` または `progressMaxValue` のどちらかが指定されていない場合、ProgressBarではなくアイコンでの表示になります。
 * - onCloseで閉じるボタンを押したときの挙動を指定してください。
 */
var PopupProgressBar = function (_a) {
    var status = _a.status, message = _a.message, progressValue = _a.progressValue, progressMaxValue = _a.progressMaxValue, onClose = _a.onClose;
    var indeterminate = progressValue == null || progressMaxValue == null;
    var baseClass = 'vb-popupProgressBar';
    return (React.createElement(PopupBase, { paddingSize: "zero", fitContent: true },
        React.createElement("div", { className: "".concat(baseClass) },
            React.createElement("div", { className: "".concat(baseClass, "__contents") },
                React.createElement("div", { className: "".concat(baseClass, "__message") },
                    React.createElement("div", { className: vbClassNames("".concat(baseClass, "__message-block"), {
                            modifier: { small: status === 'done' && !indeterminate },
                        }) },
                        React.createElement("div", { className: "".concat(baseClass, "__icon") },
                            indeterminate && status === 'doing' && (React.createElement(InlineSpinner, { isLoading: true, large: true, mr: 0.5 })),
                            (status === 'done' || status === 'error') && (React.createElement(MaterialIcon, { IconComponent: status === 'done' ? MdDone : MdError, success: status === 'done', error: status === 'error', small: status === 'done' && !indeterminate, mr: 0.5, mt: status === 'done' && !indeterminate ? 0.25 : undefined }))),
                        React.createElement("div", { "aria-live": status === 'error' ? 'assertive' : 'polite', "aria-atomic": "true" }, message)),
                    React.createElement("div", null, indeterminate ||
                        status === 'error' ||
                        "".concat(progressValue, "/").concat(progressMaxValue))),
                indeterminate || status === 'error' || (React.createElement(ProgressBar, { mt: 0.5, mb: 0.5, value: progressValue, maxValue: progressMaxValue, width: "full" }))),
            React.createElement("div", { className: "".concat(baseClass, "__close") },
                React.createElement(IconOnlyButton, { ml: 0.5, IconComponent: MdClose, label: "\u9589\u3058\u308B", appearance: "tertiary", onClick: function () { return onClose(); } })))));
};
export default PopupProgressBar;
//# sourceMappingURL=PopupProgressBar.js.map