import { useState, useEffect } from 'react';
/**
 * ウインドウ幅に応じてメディアクエリの状態を変更するカスタムフック
 * ref: https://github.com/streamich/use-media/blob/master/src/useMedia.ts
 * query: window.matchMedia() に渡すメディアクエリ文字列
 * defaultState: 初期値
 */
export var useMedia = function (query, defaultState) {
    var _a = useState(defaultState), currentState = _a[0], setCurrentState = _a[1];
    useEffect(function () {
        var mounted = true;
        var mql = window.matchMedia(query);
        var onChange = function () {
            if (!mounted) {
                return;
            }
            setCurrentState(!!mql.matches);
        };
        mql.addEventListener('change', onChange);
        setCurrentState(mql.matches);
        return function () {
            mounted = false;
            mql.removeEventListener('change', onChange);
        };
    }, [query]);
    return currentState;
};
//# sourceMappingURL=useMedia.js.map