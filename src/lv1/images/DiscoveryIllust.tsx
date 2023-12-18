import lottie from 'lottie-web';
import * as React from 'react';

import animDiscoveryIllust from './discovery-illust.json';
import commonProps, { CommonProps } from '../../utilities/commonProps';

type Props = {
  /**
   * アニメーションの開始を遅らせたいときに使います。単位はミリ秒です。
   */
  animationDelay?: number;
} & CommonProps;

const DiscoveryIllust: React.FC<Props> = ({
  animationDelay = 0,
  ...otherProps
}) => {
  const lottieRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (lottieRef.current == null) return;

    const anim = lottie.loadAnimation({
      animationData: animDiscoveryIllust,
      autoplay: false,
      container: lottieRef.current,
      loop: true,
      renderer: 'svg',
    });

    const timer = setTimeout(() => {
      anim.play();
    }, animationDelay);

    return () => {
      clearTimeout(timer);
      anim.destroy();
    };
  }, [lottieRef, animationDelay]);

  return (
    <div
      {...commonProps(otherProps, 'vb-discoveryIllust', {})}
      ref={lottieRef}
    />
  );
};

export default DiscoveryIllust;
