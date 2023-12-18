import * as React from 'react';
import { MdError, MdWarning, MdCheckCircle, MdHelp } from 'react-icons/md';
import Balloon from '../../lv1/bases/Balloon';
import { Keys } from '../../utilities/keyboard';
import VisuallyHidden from '../../lv1/a11y/VisuallyHidden';
import ScrollPortal from '../../utilities/ScrollPortal';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import { MarginClassProps } from '../../utilities/marginClasses';
import { useBalloon } from '../withBalloon/useBalloon';
import MessageDialog from '../dialogs/MessageDialog';
import { MobileBoundaryWidth } from '../../constants';

type Props = {
  children?: React.ReactNode;
  /**
   * アイコンの代替テキストとして、「(label)を表示」「(label)を非表示」のように使用されます。必ず指定してください。
   */
  label: string;
  error?: boolean;
  notice?: boolean;
  success?: boolean;
  small?: boolean;
};

type ComponentProps = Props & MarginClassProps & CommonProps;

/**
 * アイコンからバルーンとしてメッセージを表示するコンポーネントです。
 *
 * アイコンと色は `label` `error` `notice` `success` から選べます（カスタマイズはできません）
 *
 * MobileBoundaryWidth以下の画面幅では、アイコンをクリックするとダイアログでメッセージを表示します。
 */
const MessageIcon: React.FC<ComponentProps> = (props: ComponentProps) => {
  const {
    error,
    notice,
    success,
    children,
    label,
    small,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginSize,
  } = props;

  const {
    balloonIsVisibleByHover,
    clearHoverFlags,
    handleTargetMouseEnter,
    handleTargetMouseLeave,
    handleBalloonMouseEnter,
    handleBalloonMouseLeave,
    position,
    verticalPosition,
    adjustPosition,
    baseRef,
    balloonRef,
  } = useBalloon();

  const [clicked, setClicked] = React.useState<boolean>(false);
  const balloonWrapperRef = React.useRef<HTMLDivElement>(null);
  const [isOpenDialog, setIsOpenDialog] = React.useState<boolean>(false);
  const isNarrowerThanMobileBoundery = () =>
    window.matchMedia(`(max-width: ${MobileBoundaryWidth})`).matches;

  React.useEffect(() => {
    if (clicked) {
      const closeMenu = () => {
        setClicked(false);
      };
      // 開いた瞬間にwindowにイベントが伝播して閉じてしまうのを防ぐため、setTimeoutしてaddEventListenerを遅らせている
      window.setTimeout(() => window.addEventListener('click', closeMenu));
      return () => window.removeEventListener('click', closeMenu);
    }
  }, [clicked, setClicked]);

  React.useLayoutEffect(() => {
    if (clicked) {
      adjustPosition();
    }
  }, [adjustPosition, clicked]);

  const showBalloon = clicked || balloonIsVisibleByHover;
  const showMessage = isNarrowerThanMobileBoundery()
    ? isOpenDialog
    : showBalloon;
  return (
    <span
      {...commonProps(
        props,
        'vb-messageIcon',
        { small },
        { marginBottom, marginLeft, marginRight, marginSize, marginTop }
      )}
    >
      &nbsp;
      <span
        className="vb-messageIcon__control"
        tabIndex={0}
        role="button"
        aria-label={`${label || 'メッセージ'}を${
          showMessage ? '隠す' : '表示'
        }`}
        onClick={() => {
          if (isNarrowerThanMobileBoundery()) {
            setIsOpenDialog(!isOpenDialog);
          } else {
            /* バルーンが見えてる時にクリックした場合はすぐにバルーンが消えるようhoveredフラグを折る */
            setClicked(!clicked);
            clearHoverFlags();
          }
        }}
        onKeyDown={(e: React.KeyboardEvent): void => {
          /* バルーンが見えてる時にクリックした場合はすぐにバルーンが消えるようhoveredフラグを折る */
          if (e.key === Keys.ENTER || e.key === Keys.SPACE) {
            e.preventDefault();
            setClicked(!clicked);
            clearHoverFlags();
          } else if (clicked && e.key === Keys.ESC) {
            setClicked(false);
            clearHoverFlags();
          } else if (clicked && e.key === Keys.TAB && balloonRef.current) {
            e.preventDefault();
            balloonRef.current.focus();
          }
        }}
        onMouseLeave={() => {
          isNarrowerThanMobileBoundery() ? undefined : handleTargetMouseLeave();
        }}
        onMouseEnter={() => {
          isNarrowerThanMobileBoundery() ? undefined : handleTargetMouseEnter();
        }}
        ref={baseRef}
      >
        {error ? (
          <MdError className="vb-messageIcon__icon vb-messageIcon__icon--error" />
        ) : notice ? (
          <MdWarning className="vb-messageIcon__icon vb-messageIcon__icon--notice" />
        ) : success ? (
          <MdCheckCircle className="vb-messageIcon__icon vb-messageIcon__icon--success" />
        ) : (
          <MdHelp className="vb-messageIcon__icon vb-messageIcon__icon--info" />
        )}
      </span>
      {isNarrowerThanMobileBoundery() ? (
        <MessageDialog
          isOpen={isOpenDialog}
          title={label}
          closeButtonLabel={'閉じる'}
          onRequestClose={() => setIsOpenDialog(false)}
          closeButtonAppearance={'secondary'}
          responsive
        >
          {children}
        </MessageDialog>
      ) : (
        <>
          {showBalloon && (
            <VisuallyHidden>
              <span className="vb-messageIcon__hiddenMessage">{children}</span>
            </VisuallyHidden>
          )}
          <ScrollPortal
            positionalBaseElement={baseRef.current || undefined}
            isActive={showBalloon}
            onOverflow={() => {
              setClicked(false);
              clearHoverFlags();
            }}
            onScroll={adjustPosition}
            verticalPosition={verticalPosition}
            data-masking={props['data-masking']}
          >
            <div
              className={`vb-messageIconMessageWrapper ${
                showBalloon ? '' : 'vb-messageIconMessageWrapper--hidden'
              }`}
            >
              <VisuallyHidden>
                <button
                  tabIndex={0}
                  onFocus={() => baseRef.current?.focus()}
                  onClick={() => baseRef.current?.focus()}
                >
                  {label || 'メッセージ'}を隠すボタンにジャンプ
                </button>
              </VisuallyHidden>
              {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
              <div
                className="vb-messageIconMessage"
                onMouseEnter={handleBalloonMouseEnter}
                onMouseLeave={handleBalloonMouseLeave}
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => {
                  if (e.key === Keys.ESC) {
                    setClicked(false);
                    clearHoverFlags();
                    baseRef.current?.focus();
                  }
                }}
                tabIndex={-1}
                ref={balloonWrapperRef}
                role="tooltip"
              >
                <Balloon
                  small
                  border={
                    error
                      ? 'alert'
                      : notice
                      ? 'notice'
                      : success
                      ? 'success'
                      : 'default'
                  }
                  position={position}
                  verticalPosition={verticalPosition}
                  ref={balloonRef}
                >
                  {children}
                </Balloon>
              </div>
              <VisuallyHidden>
                <button
                  tabIndex={0}
                  onFocus={() => baseRef.current?.focus()}
                  onClick={() => baseRef.current?.focus()}
                >
                  {label || 'メッセージ'}を隠すボタンにジャンプ
                </button>
              </VisuallyHidden>
            </div>
          </ScrollPortal>
        </>
      )}
    </span>
  );
};

export default MessageIcon;
