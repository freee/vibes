import * as React from 'react';
import { MdAdd } from 'react-icons/md';
import vbClassName from '../../utilities/vbClassNames';
import type { InternalComboBoxOption, FixedItems } from './hooks';
import type { TrailingItem } from './hooks/singleComboBox';

export const ItemLabel = ({
  fixedItemOption,
  fieldValue,
  option,
  trailingItem,
}: {
  fixedItemOption?: {
    fixedItems: FixedItems;
    isSelected: boolean;
  };
  fieldValue: string;
  option: InternalComboBoxOption;
  trailingItem?: TrailingItem;
}) => {
  if (option.isTrailingItem && trailingItem) {
    return <>{trailingItem.render(fieldValue)}</>;
  }

  if (fixedItemOption) {
    const { fixedItems, isSelected } = fixedItemOption;
    if (option.fixedItemType === 'more') {
      return (
        <div
          className={vbClassName('vb-comboBox__fixedItem', {
            modifier: { more: true, selected: isSelected },
          })}
        >
          {fixedItems[0].label ? fixedItems[0].label(fieldValue) : 'もっと見る'}
        </div>
      );
    } else if (option.fixedItemType === 'add' && fixedItems[1]) {
      return (
        <div
          className={vbClassName('vb-comboBox__fixedItem', {
            modifier: { add: true, selected: isSelected },
          })}
        >
          <MdAdd
            className={vbClassName('vb-comboBox__fixedItemIcon', {
              modifier: { more: true },
            })}
            focusable={false}
          />
          {fixedItems[1].label
            ? fixedItems[1].label(fieldValue)
            : `${fieldValue}（新規登録）`}
        </div>
      );
    }
  }

  return <div className="vb-comboBox__listOptionLabel">{option.label}</div>;
};
