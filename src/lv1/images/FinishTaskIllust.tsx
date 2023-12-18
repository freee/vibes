import lottie from 'lottie-web';
import * as React from 'react';

import animFinishTaskIllust from './finish-task-illust.json';
import commonProps, { CommonProps } from '../../utilities/commonProps';

type Props = CommonProps;

const FinishTaskIllust: React.FC<Props> = (props: Props) => {
  const lottieRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (lottieRef.current != null) {
      const anim = lottie.loadAnimation({
        animationData: animFinishTaskIllust,
        autoplay: true,
        container: lottieRef.current,
        loop: false,
        renderer: 'svg',
      });
      return (): void => anim.destroy();
    }
  }, [lottieRef]);

  return (
    <div {...commonProps(props, 'vb-finishTaskIllust', {})} ref={lottieRef} />
  );
};

export default FinishTaskIllust;
