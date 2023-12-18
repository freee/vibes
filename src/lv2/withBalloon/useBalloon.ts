import * as React from 'react';

// バルーンが表示されるまでの時間（ミリ秒）
// マウスがちょっとアイコンを通過しただけとかを無視できるよう、ある程度待ってから表示されるようにする
const BALLOON_SHOW_DELAY = 200;
// バルーンが消えるまでの時間（ミリ秒）
// アイコンからバルーン内へのマウス移動時に消えてしまいにくいよう、ある程度待ってから消えるようにしている
const BALLOON_HIDE_DELAY = 400;

export const useBalloon = () => {
  const [targetHovered, setTargetHovered] = React.useState<boolean>(false);
  const [balloonHovered, setBalloonHovered] = React.useState<boolean>(false);
  const hoverTimeoutRef = React.useRef<number | null>(null);
  const messageHoverTimeoutRef = React.useRef<number | null>(null);
  const baseRef = React.useRef<HTMLElement>(null);
  const balloonRef = React.useRef<HTMLDivElement>(null);

  const [position, setPosition] = React.useState<'left' | 'right' | 'center'>(
    'center'
  );
  const [verticalPosition, setVerticalPosition] = React.useState<
    'top' | 'bottom'
  >('top');

  const handleMouseHover = (entered: boolean) => {
    if (hoverTimeoutRef.current) {
      window.clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = window.setTimeout(
      () => setTargetHovered(entered),
      entered ? BALLOON_SHOW_DELAY : BALLOON_HIDE_DELAY
    );
  };

  const handleTargetMouseEnter = (): void => {
    handleMouseHover(true);
  };
  const handleTargetMouseLeave = (): void => {
    handleMouseHover(false);
  };
  const handleBalloonMouseEnter = (): void => {
    if (messageHoverTimeoutRef.current) {
      window.clearTimeout(messageHoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = null;
    setBalloonHovered(true);
  };
  const handleBalloonMouseLeave = (): void => {
    if (messageHoverTimeoutRef.current) {
      window.clearTimeout(messageHoverTimeoutRef.current);
    }

    messageHoverTimeoutRef.current = window.setTimeout(
      () => setBalloonHovered(false),
      BALLOON_HIDE_DELAY
    );
  };

  const clearHoverFlags = () => {
    if (hoverTimeoutRef.current) {
      window.clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    if (messageHoverTimeoutRef.current) {
      window.clearTimeout(messageHoverTimeoutRef.current);
      messageHoverTimeoutRef.current = null;
    }
    setTargetHovered(false);
    setBalloonHovered(false);
  };

  // アンマウント時にタイムアウトを破棄する
  React.useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      if (messageHoverTimeoutRef.current) {
        clearTimeout(messageHoverTimeoutRef.current);
      }
    };
  }, [hoverTimeoutRef, messageHoverTimeoutRef]);

  const adjustPosition = () => {
    if (!baseRef.current || !balloonRef.current) {
      return;
    }
    const rect = baseRef.current.getBoundingClientRect();
    const balloonRect = balloonRef.current.getBoundingClientRect();

    const horizontalCenter = rect.left + rect.width / 2;

    if (horizontalCenter < balloonRect.width / 2) {
      setPosition('left');
    } else if (horizontalCenter > window.innerWidth - balloonRect.width / 2) {
      setPosition('right');
    } else {
      setPosition('center');
    }

    if (rect.top < balloonRect.height + 16) {
      setVerticalPosition('bottom');
    } else {
      setVerticalPosition('top');
    }
  };

  React.useLayoutEffect(() => {
    adjustPosition();
  }, [targetHovered, balloonHovered]);

  return {
    balloonIsVisibleByHover: targetHovered || balloonHovered,
    handleTargetMouseEnter,
    handleTargetMouseLeave,
    handleBalloonMouseEnter,
    handleBalloonMouseLeave,
    clearHoverFlags,
    position,
    verticalPosition,
    adjustPosition,
    baseRef,
    balloonRef,
  };
};
