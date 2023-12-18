import lottie from 'lottie-web';
import * as React from 'react';
import { CSSTransition } from 'react-transition-group';

import spinner from './Loading/loading-parts.json';
import commonProps, { CommonProps } from '../utilities/commonProps';
import vbClassNames from '../utilities/vbClassNames';

type Props = {
  /**
   * 表示/非表示を切り替えます
   */
  isLoading: boolean;
  /**
   * 大きさを切り替えます
   */
  large?: boolean;
} & CommonProps;

const InlineSpinner: React.FC<Props> = (props: Props) => {
  const { isLoading, large } = props;
  const lottieRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (lottieRef.current != null) {
      const anim = lottie.loadAnimation({
        animationData: spinner,
        autoplay: true,
        container: lottieRef.current,
        loop: true,
        renderer: 'svg',
      });
      return (): void => anim.destroy();
    }
  }, [isLoading, lottieRef]);

  const baseClass = 'vb-spinner';

  return (
    <span {...commonProps(props, baseClass, { large })}>
      <span
        className={vbClassNames(`${baseClass}__base`, { modifier: { large } })}
      >
        <CSSTransition
          classNames={vbClassNames(`${baseClass}__fade`, {
            modifier: { large },
          })}
          in={isLoading}
          timeout={300}
          exit
          unmountOnExit
          // StrictModeで、"Warning: findDOMNode is deprecated in StrictMode."が出ないように
          // [FYI] https://github.com/reactjs/react-transition-group/issues/668#issuecomment-695162879
          nodeRef={lottieRef}
        >
          <div
            className={vbClassNames(`${baseClass}__animation`, {
              modifier: { large },
            })}
            ref={lottieRef}
          />
        </CSSTransition>
      </span>
    </span>
  );
};

export default InlineSpinner;
