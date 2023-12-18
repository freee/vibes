import lottie from 'lottie-web';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import animDataParts from './Loading/loading-parts.json';
import animDataWhole2021 from './Loading/loading-whole-2021.json';
import commonProps, { CommonProps } from '../utilities/commonProps';
import { usePortalParentContext } from '../utilities/VibesProvider';

type Props = (
  | {
      coverAll: true;
      children?: React.ReactNode;
    }
  | {
      coverAll?: false;
      children: NonNullable<React.ReactNode>;
    }
) & {
  isLoading: boolean;
  message?: React.ReactNode;
  inline?: boolean;
} & CommonProps;

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
const Loading: React.FC<Props> = (props: Props) => {
  const { children, coverAll, inline, isLoading, message } = props;
  const lottieRef = React.useRef<HTMLDivElement>(null);
  const portalParent = usePortalParentContext();
  React.useEffect(() => {
    if (lottieRef.current != null) {
      const anim = lottie.loadAnimation({
        animationData: coverAll ? animDataWhole2021 : animDataParts,
        autoplay: true,
        container: lottieRef.current,
        loop: true,
        renderer: 'svg',
      });
      return (): void => anim.destroy();
    }
  }, [coverAll, isLoading, lottieRef]);

  const [delayedMessage, setDelayedMessage] =
    React.useState<React.ReactNode>(null);
  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDelayedMessage(message);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [message]);

  return coverAll ? (
    <>
      {ReactDOM.createPortal(
        <CSSTransition
          classNames="vb-loading__fade"
          in={isLoading}
          timeout={300}
          exit
          unmountOnExit
          // StrictModeで、"Warning: findDOMNode is deprecated in StrictMode."が出ないように
          // [FYI] https://github.com/reactjs/react-transition-group/issues/668#issuecomment-695162879
          nodeRef={lottieRef}
        >
          <div {...commonProps(props, 'vb-loading')}>
            <div className="vb-loading__cover vb-loading__cover--coverAll">
              <div
                className="vb-loading__animation vb-loading__animation--coverAll"
                ref={lottieRef}
              />
              {!!message && (
                <div
                  className="vb-loading__message"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  {delayedMessage}
                </div>
              )}
            </div>
          </div>
        </CSSTransition>,
        portalParent
      )}
      {children}
    </>
  ) : (
    <div {...commonProps(props, 'vb-loading', { block: true, inline })}>
      <CSSTransition
        classNames="vb-loading__fade"
        in={isLoading}
        timeout={300}
        exit
        unmountOnExit
        nodeRef={lottieRef}
      >
        <div className="vb-loading__cover">
          <div className="vb-loading__animation" ref={lottieRef} />
        </div>
      </CSSTransition>
      {children}
    </div>
  );
};

export default Loading;
