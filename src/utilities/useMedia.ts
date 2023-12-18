import { useState, useEffect } from 'react';

/**
 * ウインドウ幅に応じてメディアクエリの状態を変更するカスタムフック
 * ref: https://github.com/streamich/use-media/blob/master/src/useMedia.ts
 * query: window.matchMedia() に渡すメディアクエリ文字列
 * defaultState: 初期値
 */
export const useMedia = (query: string, defaultState?: boolean) => {
  const [currentState, setCurrentState] = useState(defaultState);

  useEffect(() => {
    let mounted = true;
    const mql = window.matchMedia(query);
    const onChange = () => {
      if (!mounted) {
        return;
      }
      setCurrentState(!!mql.matches);
    };
    mql.addEventListener('change', onChange);
    setCurrentState(mql.matches);

    return () => {
      mounted = false;
      mql.removeEventListener('change', onChange);
    };
  }, [query]);

  return currentState;
};
