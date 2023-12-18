import * as React from 'react';
// バルーンが表示されるまでの時間（ミリ秒）
// マウスがちょっとアイコンを通過しただけとかを無視できるよう、ある程度待ってから表示されるようにする
var BALLOON_SHOW_DELAY = 200;
// バルーンが消えるまでの時間（ミリ秒）
// アイコンからバルーン内へのマウス移動時に消えてしまいにくいよう、ある程度待ってから消えるようにしている
var BALLOON_HIDE_DELAY = 400;
export var useBalloon = function () {
    var _a = React.useState(false), targetHovered = _a[0], setTargetHovered = _a[1];
    var _b = React.useState(false), balloonHovered = _b[0], setBalloonHovered = _b[1];
    var hoverTimeoutRef = React.useRef(null);
    var messageHoverTimeoutRef = React.useRef(null);
    var baseRef = React.useRef(null);
    var balloonRef = React.useRef(null);
    var _c = React.useState('center'), position = _c[0], setPosition = _c[1];
    var _d = React.useState('top'), verticalPosition = _d[0], setVerticalPosition = _d[1];
    var handleMouseHover = function (entered) {
        if (hoverTimeoutRef.current) {
            window.clearTimeout(hoverTimeoutRef.current);
        }
        hoverTimeoutRef.current = window.setTimeout(function () { return setTargetHovered(entered); }, entered ? BALLOON_SHOW_DELAY : BALLOON_HIDE_DELAY);
    };
    var handleTargetMouseEnter = function () {
        handleMouseHover(true);
    };
    var handleTargetMouseLeave = function () {
        handleMouseHover(false);
    };
    var handleBalloonMouseEnter = function () {
        if (messageHoverTimeoutRef.current) {
            window.clearTimeout(messageHoverTimeoutRef.current);
        }
        hoverTimeoutRef.current = null;
        setBalloonHovered(true);
    };
    var handleBalloonMouseLeave = function () {
        if (messageHoverTimeoutRef.current) {
            window.clearTimeout(messageHoverTimeoutRef.current);
        }
        messageHoverTimeoutRef.current = window.setTimeout(function () { return setBalloonHovered(false); }, BALLOON_HIDE_DELAY);
    };
    var clearHoverFlags = function () {
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
    React.useEffect(function () {
        return function () {
            if (hoverTimeoutRef.current) {
                clearTimeout(hoverTimeoutRef.current);
            }
            if (messageHoverTimeoutRef.current) {
                clearTimeout(messageHoverTimeoutRef.current);
            }
        };
    }, [hoverTimeoutRef, messageHoverTimeoutRef]);
    var adjustPosition = function () {
        if (!baseRef.current || !balloonRef.current) {
            return;
        }
        var rect = baseRef.current.getBoundingClientRect();
        var balloonRect = balloonRef.current.getBoundingClientRect();
        var horizontalCenter = rect.left + rect.width / 2;
        if (horizontalCenter < balloonRect.width / 2) {
            setPosition('left');
        }
        else if (horizontalCenter > window.innerWidth - balloonRect.width / 2) {
            setPosition('right');
        }
        else {
            setPosition('center');
        }
        if (rect.top < balloonRect.height + 16) {
            setVerticalPosition('bottom');
        }
        else {
            setVerticalPosition('top');
        }
    };
    React.useLayoutEffect(function () {
        adjustPosition();
    }, [targetHovered, balloonHovered]);
    return {
        balloonIsVisibleByHover: targetHovered || balloonHovered,
        handleTargetMouseEnter: handleTargetMouseEnter,
        handleTargetMouseLeave: handleTargetMouseLeave,
        handleBalloonMouseEnter: handleBalloonMouseEnter,
        handleBalloonMouseLeave: handleBalloonMouseLeave,
        clearHoverFlags: clearHoverFlags,
        position: position,
        verticalPosition: verticalPosition,
        adjustPosition: adjustPosition,
        baseRef: baseRef,
        balloonRef: balloonRef,
    };
};
//# sourceMappingURL=useBalloon.js.map