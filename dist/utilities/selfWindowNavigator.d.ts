export declare type SelfWindowNavigationProp = {
    /**
     * react-router等で、画面遷移時にデフォルトとは違う挙動をさせたいときに使用します。
     * Ctrlキー等を押しながらのクリックや、コンテキストメニューから新しいタブを開いた場合などには発火しません。
     */
    onSelfWindowNavigation?: (url?: string) => void;
};
/**
 * A要素でCtrl + Clickを有効にしつつ（＝別タブで開く挙動を残しつつ）、react-routerでハンドリングできるようにする。
 * （実際のハンドリングはコンポーネント呼び出し側が行う。Vibesはあくまでその口を用意するスタンス）
 * 通常のリンク等の onClick とは違う挙動となるため、onClickとは別名のインタフェースとして用意することを推奨します
 * 実装はreact-routerのものを参考にしています https://github.com/ReactTraining/react-router/blob/c0b8ce42d3c6b85e3a53d1c56ae12c88205d00d8/packages/react-router-dom/modules/Link.js#L35-L52
 * */
declare const selfWindowNavigator: (navigate?: ((url?: string | undefined) => void) | undefined) => ((event: React.MouseEvent | MouseEvent, url?: string | undefined) => void) | undefined;
export default selfWindowNavigator;
