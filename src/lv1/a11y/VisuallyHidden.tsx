import * as React from 'react';
import { CommonProps, pickCommonProps } from '../../utilities/commonProps';
import styled from 'styled-components';
import { CommonStyle } from '../../internal/CommonStyle';

type Props = {
  children?: React.ReactNode;
  id?: string;
  autoRead?: boolean;
  assertive?: boolean;
} & CommonProps;

const VisuallyHiddenStyle = styled(CommonStyle).attrs(() => ({ as: 'div' }))`
  width: 1px;
  height: 1px;
  overflow: hidden;
  position: absolute;
  clip: rect(1px 1px 1px 1px);
`;

/**
 * 視覚的には見えないが、スクリーンリーダー等からは「見える」要素を提供します。
 * `autoRead` オプションを付けることで、 `aria-live="polite"` な、内部が書き変わったときに自動的に読み上げられる要素となります。
 */
const VisuallyHidden: React.FC<Props> = (props: Props) => {
  const { children, autoRead, id, assertive } = props;
  const live = autoRead ? (assertive ? 'assertive' : 'polite') : undefined;
  const atomic = live ? true : undefined; //自動で読む場合は必ずtrueにする。そうしないと、firefoxで差分だけの読み上げになってしまう(ほんとうはこっちの挙動が正しいのだけれど、chromeはaria-atomicを無視するので、互換性的に差分読み上げは使わない)

  // aria-liveで自動的にスクリーンリーダーが読むようにしたいが、aria-liveな要素の挿入と同時にコンテンツを入れるとNVDAでは読み上げてくれない
  // そこで最初のレンダリング時のみ 100ms ディレイさせて中に入れてやることで、無理矢理読ませている
  const [isInitialRender, setInitialRender] = React.useState(true);

  React.useEffect(() => {
    if (autoRead && isInitialRender) {
      const timeoutId = setTimeout(() => setInitialRender(false), 100);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [autoRead, isInitialRender]);

  return (
    <VisuallyHiddenStyle
      {...pickCommonProps(props)}
      id={id}
      aria-live={live}
      aria-atomic={atomic}
    >
      {/* 初回レンダー時、autoReadならchildrenを入れない。useEffect内のsetTimeoutで100ms遅らせる。 */}
      {isInitialRender && autoRead ? false : children}
    </VisuallyHiddenStyle>
  );
};

export default VisuallyHidden;
