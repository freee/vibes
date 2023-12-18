import * as React from 'react';
export declare const useBalloon: () => {
    balloonIsVisibleByHover: boolean;
    handleTargetMouseEnter: () => void;
    handleTargetMouseLeave: () => void;
    handleBalloonMouseEnter: () => void;
    handleBalloonMouseLeave: () => void;
    clearHoverFlags: () => void;
    position: "center" | "left" | "right";
    verticalPosition: "top" | "bottom";
    adjustPosition: () => void;
    baseRef: React.RefObject<HTMLElement>;
    balloonRef: React.RefObject<HTMLDivElement>;
};
