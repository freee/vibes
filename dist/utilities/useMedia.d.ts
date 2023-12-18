/**
 * ウインドウ幅に応じてメディアクエリの状態を変更するカスタムフック
 * ref: https://github.com/streamich/use-media/blob/master/src/useMedia.ts
 * query: window.matchMedia() に渡すメディアクエリ文字列
 * defaultState: 初期値
 */
export declare const useMedia: (query: string, defaultState?: boolean | undefined) => boolean | undefined;
