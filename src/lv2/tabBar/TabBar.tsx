import * as React from 'react';
import Tab from '../../lv1/interactiveParts/Tab';
import { KeyCodes } from '../../utilities/keyboard';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import ButtonGroup from '../buttonGroup/ButtonGroup';

export type TabElement =
  | string
  | {
      name: React.ReactNode;
      notification?: string;
      'data-guide'?: string;
      'data-test'?: string;
      'data-tracking'?: string;
      'data-masking'?: boolean;
    };
type Props = {
  tabs: Array<TabElement>;
  currentTabIndex: number;
  small?: boolean;
  onClickTab: (i: number) => void;
  renderButtons?: () => React.ReactNode | React.ReactNodeArray;
} & CommonProps;

const TabBar: React.FC<Props> = ({
  currentTabIndex,
  onClickTab,
  small,
  tabs,
  renderButtons,
  ...props
}: Props) => {
  const selfRef = React.useRef<HTMLDivElement>(null);
  const [selectedTabIndex, setSelectedTabIndex] =
    React.useState<number>(currentTabIndex);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    const focusableItems = selfRef.current
      ? selfRef.current.querySelectorAll('.vb-tab')
      : null;

    if (!focusableItems) {
      return;
    }

    switch (e.keyCode) {
      case KeyCodes.LEFT: {
        const newIndex =
          (selectedTabIndex < 0 ? currentTabIndex : selectedTabIndex) - 1;
        const newTab = focusableItems[newIndex];
        if (newTab) {
          setSelectedTabIndex(newIndex);
          (newTab as HTMLButtonElement).focus();
        }
        break;
      }
      case KeyCodes.RIGHT: {
        const newIndex =
          (selectedTabIndex < 0 ? currentTabIndex : selectedTabIndex) + 1;

        const newTab = focusableItems[newIndex];
        if (newTab) {
          setSelectedTabIndex(newIndex);
          (newTab as HTMLButtonElement).focus();
        }
        break;
      }
      case KeyCodes.TAB: {
        setSelectedTabIndex(currentTabIndex);
        break;
      }
    }
  };
  const handleFocus = (e: React.FocusEvent<HTMLDivElement>): void => {
    const focusableItems = selfRef.current
      ? selfRef.current.querySelectorAll('.vb-tab')
      : null;
    if (focusableItems && e.target) {
      const index = Array.prototype.indexOf.call(focusableItems, e.target);
      if (index >= 0) {
        setSelectedTabIndex(index);
      }
    }
  };

  return (
    <div
      onKeyDown={handleKeyDown}
      onFocus={handleFocus}
      role="tablist"
      tabIndex={-1}
      {...commonProps(props, 'vb-tabBar')}
      ref={selfRef}
    >
      <div>
        {tabs.map((tab: TabElement, i: number) => (
          <Tab
            key={i}
            current={currentTabIndex === i}
            small={small && true}
            selected={selectedTabIndex === i}
            onClick={(): void => onClickTab(i)}
            data-guide={typeof tab !== 'string' ? tab['data-guide'] : undefined}
            data-test={typeof tab !== 'string' ? tab['data-test'] : undefined}
            data-tracking={
              typeof tab !== 'string' ? tab['data-tracking'] : undefined
            }
            data-masking={
              typeof tab !== 'string' ? tab['data-masking'] : undefined
            }
            notification={
              typeof tab !== 'string' && tab.notification
                ? tab.notification
                : undefined
            }
          >
            {typeof tab !== 'string' ? tab.name : tab}
          </Tab>
        ))}
      </div>
      {renderButtons && <ButtonGroup ml={1}>{renderButtons()}</ButtonGroup>}
    </div>
  );
};
export default TabBar;
