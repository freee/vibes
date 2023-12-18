import * as React from 'react';
import vbClassNames from '../../utilities/vbClassNames';
import { MarginClassProps } from '../../utilities/marginClasses';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import { StatusType } from '../../lv1/icons/StatusIcon';
import PopupBase from '../../lv1/bases/PopupBase';
import NegativeMarginBase from '../../lv1/bases/NegativeMarginBase';
import TextButton from '../../lv1/buttons/TextButton';
import ListButtons from '../listButtons/ListButtons';
import Note from '../../lv1/typography/Note';
import { MdArrowDropDown } from 'react-icons/md';
import { KeyCodes } from '../../utilities/keyboard';

type ButtonProps = {
  label: React.ReactNode;
  selected?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  statusIconText?: string;
  statusIconType?: StatusType;
  bgTransparent?: boolean;
  onClick?: React.MouseEventHandler;
};

type Props = {
  selectedLabel: string;
  selectorLabel: string;
  withActionButton?: boolean;
  actionLabel?: string;
  action?: () => any; // ゆるして
  ActionIconComponent?: React.ElementType;
  buttons: Array<ButtonProps>;
  disabled?: boolean;
} & MarginClassProps &
  CommonProps;

type State = {
  isOpen: boolean;
};

/**
 * コンポーネントの位置付けについて議論の余地がある状態なので、新規に使用しないでください。
 *
 * どうしても使用したい場合は必ず相談してください
 */
export default class ListButtonSelector extends React.Component<Props, State> {
  ref: React.RefObject<HTMLDivElement>;
  selectableItemRefs: Array<HTMLAnchorElement | HTMLButtonElement> = [];

  constructor(props: Props) {
    super(props);
    this.ref = React.createRef();
    this.state = { isOpen: false };
  }

  componentDidMount(): void {
    // setTimeOutを0で置くことで、キューの最後に持ってくる
    setTimeout(() => {
      window.addEventListener('click', this.handleClose);
    }, 0);
  }

  componentWillUnmount(): void {
    window.removeEventListener('click', this.handleClose);
  }

  toggleOpen = (): void => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  // これはwindowに対するlistenerなので、eventの型は組込みのMouseEventとなる
  handleClose = (e: MouseEvent): void => {
    if (
      this.ref.current &&
      e.target instanceof HTMLElement &&
      !this.ref.current.contains(e.target)
    ) {
      this.setState({ isOpen: false });
    }
  };

  handleKeyDownSelectableItem(e: React.KeyboardEvent, itemIndex: number): void {
    const prevItem = this.selectableItemRefs[itemIndex - 1];
    const nextItem = this.selectableItemRefs[itemIndex + 1];
    switch (e.keyCode) {
      case KeyCodes.UP:
        e.preventDefault();
        prevItem && prevItem.focus();
        break;
      case KeyCodes.DOWN:
        e.preventDefault();
        nextItem && nextItem.focus();
        break;
    }
  }

  render(): React.ReactNode {
    const {
      selectedLabel,
      selectorLabel,
      actionLabel,
      action,
      ActionIconComponent,
      buttons,
      disabled,
      marginTop,
      marginLeft,
      marginRight,
      marginBottom,
      marginSize,
    } = this.props;

    const buttonClassName = vbClassNames('vb-listButtonSelector__button', {
      modifier: { disabled, isOpen: this.state.isOpen },
    });

    this.selectableItemRefs = [];
    const withAction = actionLabel && ActionIconComponent && action;

    return (
      <div
        ref={this.ref}
        {...commonProps(
          this.props,
          'vb-listButtonSelector',
          {},
          {
            marginTop,
            marginLeft,
            marginRight,
            marginBottom,
            marginSize,
          }
        )}
      >
        <button
          aria-expanded={this.state.isOpen ? 'true' : 'false'}
          onClick={(): void => {
            !disabled && this.toggleOpen();
          }}
          className={buttonClassName}
          disabled={disabled && true}
          type="button"
        >
          {selectedLabel}
          <MdArrowDropDown
            className="vb-listButtonSelector__icon"
            focusable={false}
          />
        </button>
        {this.state.isOpen && (
          <div className="vb-listButtonSelector__popupWrapper">
            <PopupBase small={true}>
              <React.Fragment>
                <Note marginBottom={true} marginSize="small">
                  {selectorLabel}
                </Note>
                <NegativeMarginBase
                  marginSize="small"
                  left
                  right
                  bottom={!withAction}
                >
                  <ListButtons
                    buttons={buttons}
                    selectableItemRef={(el): void => {
                      el && this.selectableItemRefs.push(el);
                    }}
                    onKeyDown={this.handleKeyDownSelectableItem.bind(this)}
                  />
                </NegativeMarginBase>
                {withAction ? (
                  <TextButton
                    onClick={(): void => {
                      action && action();
                    }}
                    IconComponent={
                      ActionIconComponent ? ActionIconComponent : undefined
                    }
                    marginTop={true}
                    small={true}
                    noBorder={true}
                  >
                    {actionLabel}
                  </TextButton>
                ) : null}
              </React.Fragment>
            </PopupBase>
          </div>
        )}
      </div>
    );
  }
}
