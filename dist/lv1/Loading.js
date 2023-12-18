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
import lottie from 'lottie-web';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import animDataParts from './Loading/loading-parts.json';
import animDataWhole2021 from './Loading/loading-whole-2021.json';
import commonProps from '../utilities/commonProps';
import { usePortalParentContext } from '../utilities/VibesProvider';
/**
 * ローディング中に表示領域のカバーとアイコンを表示するコンポーネント。
 *
 * * `coverAll` props を指定しないと子要素をカバー、指定すると全画面領域をカバーする。
 * * `coverAll` props を指定しているときに `message` props を指定すると、つばめの下に内容が表示される。
 *   * 「ローディング中です」とかプログレスバーを表示する場合に使用する想定。
 * * Loading を表示中でも、カバーされたコンテンツはキーボード操作等により操作できます。必要に応じて追加の措置を講じてください
 *   * 「フォームが再度送信される」「ロードが終わった後にユーザーが迷子になる」のような理由でユーザーの操作を防ぎたいボタン等については、 `disabled` 属性によって非活性にするなどして操作を防ぐ必要があります。
 *   * 他の画面へのリンクについては、ブラウザの「戻る」ボタンやブラウザのウインドウを閉じる操作を防げないことから、非活性にする必要はないでしょう（本来、リンクには `disabled` 属性は存在しません）。
 *
 * 使用例1:
 *
 * ```jsx
 * <Loading isLoading={isLoading}>
 *   <p>
 *     isLoading が true 時に表示領域をカバーしたいコンテンツを子要素として配置する。
 *   </p>
 * </Loading>
 * ```
 *
 * 使用例2:
 *
 * ```jsx
 * <Loading coverAll isLoading={isLoading}>
 *   <p>
 *     coverAll 指定時は全画面をカバーする。
 *   </p>
 * </Loading>
 * ```
 */
var Loading = function (props) {
    var children = props.children, coverAll = props.coverAll, inline = props.inline, isLoading = props.isLoading, message = props.message;
    var lottieRef = React.useRef(null);
    var portalParent = usePortalParentContext();
    React.useEffect(function () {
        if (lottieRef.current != null) {
            var anim_1 = lottie.loadAnimation({
                animationData: coverAll ? animDataWhole2021 : animDataParts,
                autoplay: true,
                container: lottieRef.current,
                loop: true,
                renderer: 'svg',
            });
            return function () { return anim_1.destroy(); };
        }
    }, [coverAll, isLoading, lottieRef]);
    var _a = React.useState(null), delayedMessage = _a[0], setDelayedMessage = _a[1];
    React.useEffect(function () {
        var timeoutId = setTimeout(function () {
            setDelayedMessage(message);
        }, 100);
        return function () {
            clearTimeout(timeoutId);
        };
    }, [message]);
    return coverAll ? (React.createElement(React.Fragment, null,
        ReactDOM.createPortal(React.createElement(CSSTransition, { classNames: "vb-loading__fade", in: isLoading, timeout: 300, exit: true, unmountOnExit: true, 
            // StrictModeで、"Warning: findDOMNode is deprecated in StrictMode."が出ないように
            // [FYI] https://github.com/reactjs/react-transition-group/issues/668#issuecomment-695162879
            nodeRef: lottieRef },
            React.createElement("div", __assign({}, commonProps(props, 'vb-loading')),
                React.createElement("div", { className: "vb-loading__cover vb-loading__cover--coverAll" },
                    React.createElement("div", { className: "vb-loading__animation vb-loading__animation--coverAll", ref: lottieRef }),
                    !!message && (React.createElement("div", { className: "vb-loading__message", "aria-live": "polite", "aria-atomic": "true" }, delayedMessage))))), portalParent),
        children)) : (React.createElement("div", __assign({}, commonProps(props, 'vb-loading', { block: true, inline: inline })),
        React.createElement(CSSTransition, { classNames: "vb-loading__fade", in: isLoading, timeout: 300, exit: true, unmountOnExit: true, nodeRef: lottieRef },
            React.createElement("div", { className: "vb-loading__cover" },
                React.createElement("div", { className: "vb-loading__animation", ref: lottieRef }))),
        children));
};
export default Loading;
//# sourceMappingURL=Loading.js.map