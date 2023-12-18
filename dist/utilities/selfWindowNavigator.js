var isModifiedEvent = function (event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};
/**
 * A要素でCtrl + Clickを有効にしつつ（＝別タブで開く挙動を残しつつ）、react-routerでハンドリングできるようにする。
 * （実際のハンドリングはコンポーネント呼び出し側が行う。Vibesはあくまでその口を用意するスタンス）
 * 通常のリンク等の onClick とは違う挙動となるため、onClickとは別名のインタフェースとして用意することを推奨します
 * 実装はreact-routerのものを参考にしています https://github.com/ReactTraining/react-router/blob/c0b8ce42d3c6b85e3a53d1c56ae12c88205d00d8/packages/react-router-dom/modules/Link.js#L35-L52
 * */
var selfWindowNavigator = function (navigate) {
    if (navigate) {
        return function (event, url) {
            if (event.defaultPrevented || // 既にdefault以外の挙動になっているものは無視
                event.button !== 0 || // 左ボタンクリック以外は無視
                isModifiedEvent(event) // Ctrlキーなどを押している場合は無視
            ) {
                return;
            }
            event.preventDefault();
            navigate(url);
        };
    }
};
export default selfWindowNavigator;
//# sourceMappingURL=selfWindowNavigator.js.map