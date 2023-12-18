import * as React from 'react';
import { MdAdd } from 'react-icons/md';
import vbClassName from '../../utilities/vbClassNames';

type Props = {
  createLabel?: (fieldValue: string) => React.ReactNode;
  createNewItem: (fieldValue: string) => void;
  fieldValue: string;
  isSelected: boolean;
  selectedOptionRef: React.RefObject<HTMLDivElement>;
  uniqueId: string;
};

export const CreateNewItem = ({
  createLabel,
  createNewItem,
  fieldValue,
  isSelected,
  selectedOptionRef,
  uniqueId,
}: Props) => (
  /* eslint-disable-next-line jsx-a11y/click-events-have-key-events */
  <div
    id={`${uniqueId}__listOption__createNew`}
    className={`vb-comboBox__listOption ${
      isSelected ? 'vb-comboBox__listOption--selected' : ''
    }`}
    role="option"
    aria-selected={isSelected}
    tabIndex={-1}
    onClick={() => createNewItem(fieldValue)}
    ref={isSelected ? selectedOptionRef : undefined}
  >
    <div
      className={vbClassName(
        `vb-comboBox__fixedItem ${
          isSelected ? 'vb-comboBox__fixedItem--selected' : ''
        }`,
        {
          modifier: { add: true },
        }
      )}
    >
      <MdAdd
        className={vbClassName('vb-comboBox__fixedItemIcon', {
          modifier: { more: true },
        })}
        focusable={false}
      />
      {createLabel
        ? createLabel(fieldValue)
        : fieldValue
        ? `${fieldValue}（新規登録）`
        : '新規登録'}
    </div>
  </div>
);
